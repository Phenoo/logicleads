"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ProjectFormEmail from "../email/project-form-email";
import {
  extractMarketingAttribution,
  getStringValue,
} from "../lib/marketing";
import { sendMetaLeadEvent } from "../lib/meta";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendProjectEmail = async (formData: FormData) => {
  const name = getStringValue(formData.get("name"));
  const projectDescription = getStringValue(formData.get("projectDescription"));
  const budget = getStringValue(formData.get("budget"));
  const email = getStringValue(formData.get("email"));
  const phoneNumber = getStringValue(formData.get("phoneNumber"));
  const timeline = getStringValue(formData.get("timeline"));
  const eventId = getStringValue(formData.get("event_id"));
  const attribution = extractMarketingAttribution(formData);

  // simple server-side validation
  if (!validateString(name, 500)) {
    return {
      error: "Invalid name",
    };
  }
  if (!validateString(projectDescription, 5000)) {
    return {
      error: "Invalid project description",
    };
  }
  if (!validateString(budget, 500)) {
    return {
      error: "Invalid budget",
    };
  }
  if (!validateString(email, 500)) {
    return {
      error: "Invalid email",
    };
  }
  if (!validateString(phoneNumber, 500)) {
    return {
      error: "Invalid phone number",
    };
  }
  if (!validateString(timeline, 500)) {
    return {
      error: "Invalid timeline",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Project Form <onboarding@resend.dev>",
      to: "bylogicleads@gmail.com",
      subject: "New Project Submission",
      reply_to: email,
      react: React.createElement(ProjectFormEmail, {
        name: name,
        projectDescription: projectDescription,
        budget: budget,
        email: email,
        phoneNumber: phoneNumber,
        timeline: timeline,
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
        email,
        firstName: name,
        phone: phoneNumber,
        fbclid: attribution.fbclid,
      },
      customData: {
        content_name: "Project Form",
        lead_source: "project_form",
        budget_band: budget,
        page_context: attribution.page_context,
      },
    });
  } catch (error) {
    console.error("Meta project lead tracking failed:", error);
  }

  return {
    data,
  };
};
