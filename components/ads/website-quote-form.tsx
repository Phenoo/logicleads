"use client";

import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { sendAdLead } from "../../actions/sendAdLead";
import AttributionFields from "../marketing/attribution-fields";
import WhatsAppCta from "../marketing/whatsapp-cta";
import { trackLead } from "../../lib/meta-browser";
import {
  DEFAULT_BUDGET_BAND_DISPLAY,
  DEFAULT_TIMELINE,
  WHATSAPP_NUMBER_DISPLAY,
} from "../../lib/site";

type SubmittedLead = {
  name: string;
  businessType: string;
  budgetBand: string;
  timeline: string;
  phoneNumber: string;
};

function createEventId() {
  return crypto.randomUUID();
}

export default function WebsiteQuoteForm() {
  const [eventId, setEventId] = useState(createEventId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<SubmittedLead | null>(
    null
  );

  if (submittedLead) {
    return (
      <div className="rounded-[2rem] border border-black/10 bg-[#10121d] p-8 text-white shadow-2xl shadow-black/20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#d1ff57]">
          Request Received
        </p>
        <h3 className="text-3xl font-semibold md:text-4xl">
          Your website quote request is in.
        </h3>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          The fastest next step is WhatsApp. We already have your details, so
          continuing there helps us qualify the project and quote you faster.
        </p>

        <div className="mt-8 grid gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-6 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Business Type
            </p>
            <p className="mt-2 text-lg font-medium">{submittedLead.businessType}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Budget Band
            </p>
            <p className="mt-2 text-lg font-medium">{submittedLead.budgetBand}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Timeline
            </p>
            <p className="mt-2 text-lg font-medium">{submittedLead.timeline}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/50">
              Phone / WhatsApp
            </p>
            <p className="mt-2 text-lg font-medium">{submittedLead.phoneNumber}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <WhatsAppCta
            entryPoint="Website quote success state"
            businessType={submittedLead.businessType}
            budgetBand={submittedLead.budgetBand}
            timeline={submittedLead.timeline}
            needs="Website quote from landing page form"
            goal="A high-converting website that helps my business win more leads"
            className="inline-flex items-center justify-center rounded-full bg-[#d1ff57] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
          >
            Continue on WhatsApp
          </WhatsAppCta>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
            onClick={() => {
              setSubmittedLead(null);
              setEventId(createEventId());
            }}
          >
            Submit another request
          </button>
        </div>

        <p className="mt-6 text-sm text-white/55">
          By continuing, you agree to our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      action={async (formData) => {
        setIsSubmitting(true);

        const currentEventId = eventId;
        formData.set("event_id", currentEventId);

        const result = await sendAdLead(formData);

        if (result.error) {
          toast.error(result.error);
          setIsSubmitting(false);
          setEventId(createEventId());
          return;
        }

        const nextLead = {
          name: String(formData.get("name") || ""),
          businessType: String(formData.get("businessType") || ""),
          budgetBand: String(formData.get("budgetBand") || ""),
          timeline: String(formData.get("timeline") || ""),
          phoneNumber: String(formData.get("phoneNumber") || ""),
        };

        trackLead(currentEventId, {
          content_name: "Business Website Landing Page",
          lead_source: "website_ads_form",
          business_type: nextLead.businessType,
          budget_band: nextLead.budgetBand,
          timeline: nextLead.timeline,
        });

        setSubmittedLead(nextLead);
        setIsSubmitting(false);
        setEventId(createEventId());
      }}
      className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-2xl shadow-black/10"
    >
      <AttributionFields />

      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
          Fallback Quote Form
        </p>
        <h3 className="mt-3 text-3xl font-semibold text-[#10121d] md:text-4xl">
          Prefer a form first? Send the basics.
        </h3>
        <p className="mt-4 text-base text-black/70 md:text-lg">
          We will still move serious enquiries to WhatsApp quickly so we can
          qualify faster and quote correctly.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            required
            maxLength={500}
            placeholder="Enter your full name"
            className="rounded-2xl border border-black/10 bg-[#f7f8fb] px-5 py-4 text-base text-black outline-none transition focus:border-primary"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            Business Type
          </span>
          <select
            name="businessType"
            required
            defaultValue=""
            className="rounded-2xl border border-black/10 bg-[#f7f8fb] px-5 py-4 text-base text-black outline-none transition focus:border-primary"
          >
            <option value="" disabled>
              Select your business type
            </option>
            <option value="Professional services">Professional services</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Real estate">Real estate</option>
            <option value="Tech / SaaS">Tech / SaaS</option>
            <option value="Hospitality">Hospitality</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            Budget Band
          </span>
          <select
            name="budgetBand"
            required
            defaultValue=""
            className="rounded-2xl border border-black/10 bg-[#f7f8fb] px-5 py-4 text-base text-black outline-none transition focus:border-primary"
          >
            <option value="" disabled>
              Select your budget
            </option>
            <option value="Under £2,000">Under £2,000</option>
            <option value={DEFAULT_BUDGET_BAND_DISPLAY}>
              {DEFAULT_BUDGET_BAND_DISPLAY}
            </option>
            <option value="£5,000+">£5,000+</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
            Timeline
          </span>
          <select
            name="timeline"
            required
            defaultValue=""
            className="rounded-2xl border border-black/10 bg-[#f7f8fb] px-5 py-4 text-base text-black outline-none transition focus:border-primary"
          >
            <option value="" disabled>
              Select your preferred timeline
            </option>
            <option value="ASAP">ASAP</option>
            <option value={DEFAULT_TIMELINE}>{DEFAULT_TIMELINE}</option>
            <option value="1-2 months">1-2 months</option>
            <option value="Flexible">Flexible</option>
          </select>
        </label>
      </div>

      <label className="mt-5 flex flex-col gap-2">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-black/60">
          Phone / WhatsApp
        </span>
        <input
          type="tel"
          name="phoneNumber"
          required
          maxLength={500}
          placeholder={WHATSAPP_NUMBER_DISPLAY}
          className="rounded-2xl border border-black/10 bg-[#f7f8fb] px-5 py-4 text-base text-black outline-none transition focus:border-primary"
        />
      </label>

      <p className="mt-6 text-sm text-black/65">
        By submitting, you agree to be contacted about your project and accept
        our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-4">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-[#7b2ea9] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Submitting..." : "Request Website Quote"}
      </button>
    </form>
  );
}
