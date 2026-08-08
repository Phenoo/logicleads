"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { sendAdLead } from "../../actions/sendAdLead";
import AttributionFields from "../marketing/attribution-fields";
import WhatsAppCta from "../marketing/whatsapp-cta";
import { trackLead, trackLeadFormStart } from "../../lib/meta-browser";
import { WHATSAPP_NUMBER_DISPLAY } from "../../lib/site";

type SubmittedLead = {
  name: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
  businessDescription: string;
  goal: string;
  timeline: string;
  budgetBand: string;
};

type QualifiedQuoteFormProps = {
  initialProjectType?: string;
};

function createEventId() {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).substring(2) + Date.now().toString(36);
}

export default function QualifiedQuoteForm({
  initialProjectType = "",
}: QualifiedQuoteFormProps) {
  const [eventId, setEventId] = useState(createEventId);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState(
    initialProjectType || "New website"
  );
  const [submittedLead, setSubmittedLead] = useState<SubmittedLead | null>(
    null
  );
  const hasTrackedFormStart = useRef(false);

  const handleFormInteract = () => {
    if (!hasTrackedFormStart.current) {
      hasTrackedFormStart.current = true;
      trackLeadFormStart({
        form_name: "qualified_quote_form",
        page: "/get-a-quote",
      });
    }
  };

  if (submittedLead) {
    return (
      <div className="rounded-[2rem] border border-white/10 bg-[#10121d] p-8 text-white shadow-2xl shadow-purple-900/10">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d1ff57]/30 bg-[#d1ff57]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#d1ff57]">
          <span className="h-2 w-2 rounded-full bg-[#d1ff57] animate-pulse" />
          Enquiry Received
        </div>
        <h3 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl text-white">
          Thanks — we’ve received your project details.
        </h3>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Our team will review your request and get back to you shortly.
        </p>

        <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d1ff57]">
            Want a faster response?
          </p>
          <p className="mt-2 text-sm text-white/70 md:text-base">
            Skip the waiting list and chat directly with our team on WhatsApp right now.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppCta
              entryPoint="Qualified Quote Form Success"
              businessType={submittedLead.projectType}
              budgetBand={submittedLead.budgetBand}
              timeline={submittedLead.timeline}
              needs={submittedLead.projectType}
              goal={submittedLead.goal || "Website or App project enquiry"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d1ff57] px-8 py-4 text-base font-semibold text-black transition hover:bg-white hover:scale-[1.02]"
            >
              Continue on WhatsApp
            </WhatsAppCta>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-4 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
              onClick={() => {
                setSubmittedLead(null);
                setEventId(createEventId());
                hasTrackedFormStart.current = false;
              }}
            >
              Submit another enquiry
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-5 text-sm md:grid-cols-3">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40">Full Name</p>
            <p className="mt-1 font-medium text-white/90">{submittedLead.name}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40">Project Type</p>
            <p className="mt-1 font-medium text-white/90">{submittedLead.projectType}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-white/40">Budget Range</p>
            <p className="mt-1 font-medium text-white/90">{submittedLead.budgetBand}</p>
          </div>
        </div>

        <p className="mt-6 text-xs text-white/40">
          We respect your privacy. View our{" "}
          <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-white">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      id="quote-form"
      onFocus={handleFormInteract}
      onChange={handleFormInteract}
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

        const nextLead: SubmittedLead = {
          name: String(formData.get("name") || ""),
          businessName: String(formData.get("businessName") || ""),
          email: String(formData.get("email") || ""),
          phoneNumber: String(formData.get("phoneNumber") || ""),
          projectType: String(formData.get("projectType") || selectedProjectType),
          businessDescription: String(formData.get("businessDescription") || ""),
          goal: String(formData.get("goal") || ""),
          timeline: String(formData.get("timeline") || ""),
          budgetBand: String(formData.get("budgetBand") || ""),
        };

        trackLead(currentEventId, {
          content_name: "Meta Ads Qualified Landing Page",
          lead_source: "qualified_ads_form",
          project_type: nextLead.projectType,
          business_name: nextLead.businessName,
          budget_band: nextLead.budgetBand,
          timeline: nextLead.timeline,
        });

        setSubmittedLead(nextLead);
        setIsSubmitting(false);
        setEventId(createEventId());
      }}
      className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-2xl shadow-black/10 md:p-10"
    >
      <AttributionFields />

      <div className="mb-8">
        <span className="inline-flex items-center rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Free Project Review
        </span>
        <h3 className="mt-3 text-2xl font-bold text-[#10121d] md:text-3xl lg:text-4xl">
          Tell us about your project
        </h3>
        <p className="mt-2 text-sm text-black/70 md:text-base">
          Fill out this short form to receive a clear next step, scope recommendation, and estimated quote for your business.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            Full Name <span className="text-red-500">*</span>
          </span>
          <input
            type="text"
            name="name"
            required
            maxLength={500}
            placeholder="John Smith"
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-base text-black outline-none transition focus:border-primary focus:bg-white"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            Email Address <span className="text-red-500">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            maxLength={500}
            placeholder="john@yourbusiness.co.uk"
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-base text-black outline-none transition focus:border-primary focus:bg-white"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            Phone / WhatsApp Number <span className="text-red-500">*</span>
          </span>
          <input
            type="tel"
            name="phoneNumber"
            required
            maxLength={500}
            placeholder={WHATSAPP_NUMBER_DISPLAY}
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-base text-black outline-none transition focus:border-primary focus:bg-white"
          />
        </label>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            Project Type <span className="text-red-500">*</span>
          </span>
          <select
            name="projectType"
            required
            value={selectedProjectType}
            onChange={(e) => setSelectedProjectType(e.target.value)}
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-base text-black outline-none transition focus:border-primary focus:bg-white"
          >
            <option value="New website">New website</option>
            <option value="Website redesign">Website redesign</option>
            <option value="E-commerce website">E-commerce website</option>
            <option value="Booking/payment website">Booking/payment website</option>
            <option value="Web application">Web application</option>
            <option value="Mobile app">Mobile app</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            Estimated Budget <span className="text-red-500">*</span>
          </span>
          <select
            name="budgetBand"
            required
            defaultValue="£1,000–£3,000"
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3.5 text-base text-black outline-none transition focus:border-primary focus:bg-white"
          >
            <option value="£500–£1,000">£500–£1,000</option>
            <option value="£1,000–£3,000">£1,000–£3,000</option>
            <option value="£3,000–£7,500">£3,000–£7,500</option>
            <option value="£7,500+">£7,500+</option>
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <div className="mt-5">
        <label className="flex flex-col gap-2">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black/70">
            What does your business do?
          </span>
          <textarea
            name="businessDescription"
            rows={3}
            maxLength={1000}
            placeholder="Briefly describe your products, services or business goal..."
            className="rounded-xl border border-black/10 bg-[#f7f8fb] px-4 py-3 text-base text-black outline-none transition focus:border-primary focus:bg-white resize-none"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-black/60">
        By submitting this request, you agree to receive follow-up information regarding your enquiry. See our{" "}
        <Link href="/privacy-policy" className="underline underline-offset-4 hover:text-black">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-[#7b2ea9] disabled:cursor-not-allowed disabled:opacity-70 shadow-lg shadow-purple-500/20"
      >
        {isSubmitting ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Submitting Request...
          </>
        ) : (
          "Request My Project Review"
        )}
      </button>
    </form>
  );
}

