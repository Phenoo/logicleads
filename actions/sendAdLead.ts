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

import ClientConfirmationEmail from "../email/client-confirmation-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendAdLead = async (formData: FormData) => {
  const name = getStringValue(formData.get("name"));
  const businessName = getStringValue(formData.get("businessName"));
  const email = getStringValue(formData.get("email"));
  const phoneNumber = getStringValue(formData.get("phoneNumber"));
  const projectType =
    getStringValue(formData.get("projectType")) ||
    getStringValue(formData.get("businessType"));
  const businessDescription = getStringValue(
    formData.get("businessDescription")
  );
  const goal = getStringValue(formData.get("goal"));
  const timeline = getStringValue(formData.get("timeline"));
  const budgetBand = getStringValue(formData.get("budgetBand"));
  const eventId = getStringValue(formData.get("event_id"));
  const attribution = extractMarketingAttribution(formData);

  if (!validateString(name, 500)) {
    return { error: "Please enter your full name" };
  }

  if (!validateString(phoneNumber, 500)) {
    return { error: "Please enter a valid phone or WhatsApp number" };
  }

  let data;

  try {
    // 1. Send notification to agency team
    data = await resend.emails.send({
      from: "Logic Leads <support@logicleads.info>",
      to: "bylogicleads@gmail.com",
      subject: `New Project Enquiry: ${projectType || "General"} (${businessName || name})`,
      react: React.createElement(AdLeadEmail, {
        name,
        businessName,
        email,
        phoneNumber,
        projectType,
        businessType: projectType,
        businessDescription,
        goal,
        budgetBand: budgetBand || "Not sure yet",
        timeline: timeline || "Flexible",
        attribution,
      }),
    });

    // 2. Send confirmation email directly to the client's email address
    if (validateString(email, 500)) {
      try {
        await resend.emails.send({
          from: "Logic Leads <support@logicleads.info>",
          to: email,
          subject: "We received your project enquiry - Logic Leads",
          react: React.createElement(ClientConfirmationEmail, {
            name,
            projectType,
            budgetBand,
          }),
        });
      } catch (clientEmailErr) {
        console.error("Failed to send client confirmation email:", clientEmailErr);
      }
    }
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
        email: email || undefined,
        phone: phoneNumber,
        fbclid: attribution.fbclid,
      },
      customData: {
        content_name: "Meta Ads Quote Landing Page",
        lead_source: "qualified_ads_form",
        project_type: projectType,
        business_name: businessName,
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
