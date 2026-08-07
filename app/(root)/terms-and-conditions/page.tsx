import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL, WHATSAPP_NUMBER_DISPLAY } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Read the baseline commercial and website-use terms for working with Logic Leads.",
};

const termsSections = [
  {
    title: "Website Use",
    body:
      "This website is provided for information, marketing, and business enquiry purposes. You agree not to misuse the website, interfere with its operation, or submit false or unlawful information through any form.",
  },
  {
    title: "Quotes and Proposals",
    body:
      "Any pricing, timelines, or package references on this website are indicative and subject to confirmation after project discovery and scope review. A formal quote or proposal overrides generic website copy where applicable.",
  },
  {
    title: "Project Start",
    body:
      "A project is considered confirmed only after written agreement on scope and payment terms. Delivery timelines depend on timely access, approvals, content readiness, and the agreed project brief.",
  },
  {
    title: "Intellectual Property",
    body:
      "Unless otherwise agreed in writing, all pre-contract concepts, proposals, and internal working materials remain the property of Logic Leads. Final deliverables and ownership terms are defined in the project agreement.",
  },
  {
    title: "Limitation of Liability",
    body:
      "We work to provide accurate information and reliable service, but we do not guarantee uninterrupted website availability or business outcomes from general marketing statements on this site. Liability is limited to the extent permitted by applicable law and any signed client agreement.",
  },
  {
    title: "Contact",
    body: `Questions about these terms can be sent to ${SUPPORT_EMAIL} or discussed through our official WhatsApp channel at ${WHATSAPP_NUMBER_DISPLAY}.`,
  },
];

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Terms and Conditions
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-black/72">
          These terms govern how visitors use the website and how initial
          website pricing or service information should be interpreted before a
          formal client agreement is signed.
        </p>

        <div className="mt-12 space-y-8">
          {termsSections.map((section) => (
            <section
              key={section.title}
              className="rounded-[1.75rem] border border-black/8 bg-[#f8f6fc] p-8"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <p className="mt-4 text-lg leading-relaxed text-black/72">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-12 text-sm text-black/60">
          For data-handling details, review our{" "}
          <Link
            href="/privacy-policy"
            className="underline underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
