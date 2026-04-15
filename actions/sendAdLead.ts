"use server";

import React from "react";
import { Resend } from "resend";
import AdLeadEmail from "../email/ad-lead-email";
import {
  extractMarketingAttribution,
  getStringValue,
} from "../lib/marketing";
import { getErrorMessage, validateString } from "../lib/utils";
import { sendMetaLeadEvent } from "../lib/meta";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdLead = async (formData: FormData) => {
  const name = getStringValue(formData.get("name"));
  const businessType = getStringValue(formData.get("businessType"));
  const budgetBand = getStringValue(formData.get("budgetBand"));
  const timeline = getStringValue(formData.get("timeline"));
  const phoneNumber = getStringValue(formData.get("phoneNumber"));
  const eventId = getStringValue(formData.get("event_id"));
  const attribution = extractMarketingAttribution(formData);

  if (!validateString(name, 500)) {
    return { error: "Invalid name" };
  }

  if (!validateString(businessType, 500)) {
    return { error: "Invalid business type" };
  }

  if (!validateString(budgetBand, 500)) {
    return { error: "Invalid budget band" };
  }

  if (!validateString(timeline, 500)) {
    return { error: "Invalid timeline" };
  }

  if (!validateString(phoneNumber, 500)) {
    return { error: "Invalid phone number" };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Website Quote Lead <onboarding@resend.dev>",
      to: "bylogicleads@gmail.com",
      subject: `New website quote lead from ${businessType}`,
      react: React.createElement(AdLeadEmail, {
        name,
        businessType,
        budgetBand,
        timeline,
        phoneNumber,
        attribution,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  try {
    await sendMetaLeadEvent({
      eventId,
      sourceUrl: attribution.source_url,
      userData: {
        firstName: name,
        phone: phoneNumber,
        fbclid: attribution.fbclid,
      },
      customData: {
        content_name: "Business Website Landing Page",
        lead_source: "website_ads_form",
        business_type: businessType,
        budget_band: budgetBand,
        timeline,
        page_context: attribution.page_context,
      },
    });
  } catch (error) {
    console.error("Meta website quote lead tracking failed:", error);
  }

  return {
    data,
  };
};
