"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ContactFormEmail from "../email/contact-form-email";
import {
  extractMarketingAttribution,
  getStringValue,
} from "../lib/marketing";
import { sendMetaLeadEvent } from "../lib/meta";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = getStringValue(formData.get("senderEmail"));
  const message = getStringValue(formData.get("message"));
  const firstName = getStringValue(formData.get("firstName"));
  const phoneNumber = getStringValue(formData.get("phoneNumber"));
  const subject = getStringValue(formData.get("subject"));
  const eventId = getStringValue(formData.get("event_id"));
  const attribution = extractMarketingAttribution(formData);

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(firstName, 500)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(phoneNumber, 500)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(subject, 500)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "bylogicleads@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
        firstName: firstName,
        subject: subject,
        phoneNumber: phoneNumber,
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
        email: senderEmail,
        firstName,
        phone: phoneNumber,
        fbclid: attribution.fbclid,
      },
      customData: {
        content_name: "Contact Form",
        lead_source: "contact_form",
        subject,
        page_context: attribution.page_context,
      },
    });
  } catch (error) {
    console.error("Meta contact lead tracking failed:", error);
  }

  return {
    data,
  };
};
