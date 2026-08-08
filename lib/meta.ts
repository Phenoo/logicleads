"use server";

import { createHash } from "crypto";
import { cookies, headers } from "next/headers";

type MetaUserData = {
  email?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  fbclid?: string;
};

type MetaLeadEventInput = {
  eventId?: string;
  sourceUrl?: string;
  userData?: MetaUserData;
  customData?: Record<string, unknown>;
};

function hashValue(value?: string) {
  if (!value) {
    return undefined;
  }

  return createHash("sha256").update(value).digest("hex");
}

function normalizeEmail(email?: string) {
  return email?.trim().toLowerCase();
}

function normalizePhone(phone?: string) {
  if (!phone) {
    return undefined;
  }

  const digitsOnly = phone.replace(/\D/g, "");

  if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    return `44${digitsOnly.slice(1)}`;
  }
  if (digitsOnly.length === 10 && digitsOnly.startsWith("0")) {
    return `44${digitsOnly.slice(1)}`;
  }

  return digitsOnly || undefined;
}

function buildFbc(fbclid?: string) {
  if (!fbclid) {
    return undefined;
  }

  return `fb.1.${Date.now()}.${fbclid}`;
}

export async function sendMetaLeadEvent({
  eventId,
  sourceUrl,
  userData,
  customData,
}: MetaLeadEventInput) {
  const pixelId =
    process.env.META_PIXEL_ID ||
    process.env.NEXT_PUBLIC_META_PIXEL_ID ||
    "879729961597585";
  const accessToken = process.env.META_ACCESS_TOKEN;

  if (
    !pixelId ||
    !accessToken ||
    accessToken.includes("your_meta_conversions_api_access_token") ||
    accessToken.startsWith("your_")
  ) {
    return { skipped: true };
  }

  const requestHeaders = headers();
  const cookieStore = cookies();
  const clientIpAddress =
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
  const clientUserAgent = requestHeaders.get("user-agent") || undefined;

  const fbpCookie = cookieStore.get("_fbp")?.value || undefined;
  const fbcCookie =
    cookieStore.get("_fbc")?.value || buildFbc(userData?.fbclid);

  const normalizedEmail = normalizeEmail(userData?.email);
  const normalizedPhone = normalizePhone(userData?.phone);
  const [firstName, ...lastNameParts] = (userData?.firstName || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const lastName = userData?.lastName || lastNameParts.join(" ");

  const payload = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_id: eventId,
        event_source_url: sourceUrl || "https://www.logicleads.info/get-a-quote",
        user_data: {
          client_ip_address: clientIpAddress,
          client_user_agent: clientUserAgent,
          em: normalizedEmail ? [hashValue(normalizedEmail)] : undefined,
          ph: normalizedPhone ? [hashValue(normalizedPhone)] : undefined,
          fn: firstName ? [hashValue(firstName.toLowerCase())] : undefined,
          ln: lastName ? [hashValue(lastName.toLowerCase())] : undefined,
          country: [hashValue("gb")],
          external_id: normalizedEmail ? [hashValue(normalizedEmail)] : undefined,
          fbp: fbpCookie,
          fbc: fbcCookie,
        },
        custom_data: customData,
      },
    ],
    test_event_code: process.env.META_TEST_EVENT_CODE || undefined,
  };

  const response = await fetch(
    `https://graph.facebook.com/v20.0/${pixelId}/events?access_token=${accessToken}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Meta CAPI request failed: ${errorText}`);
  }

  return response.json();
}
