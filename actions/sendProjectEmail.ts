"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../lib/utils";
import ProjectFormEmail from "../email/project-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendProjectEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const projectDescription = formData.get("projectDescription");
  const budget = formData.get("budget");
  const email = formData.get("email");
  const phoneNumber = formData.get("phoneNumber");
  const timeline = formData.get("timeline");

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
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

