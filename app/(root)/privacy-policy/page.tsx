import type { Metadata } from "next";
import Link from "next/link";
import { SUPPORT_EMAIL, WHATSAPP_NUMBER_DISPLAY } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Logic Leads collects, uses, and protects personal information submitted through this website.",
};

const policySections = [
  {
    title: "Information We Collect",
    body:
      "We collect the information you voluntarily submit through our contact, project, and quote forms. This may include your name, email, phone or WhatsApp number, business details, project scope, budget, timeline, and campaign attribution data such as UTMs or referrer information.",
  },
  {
    title: "How We Use Your Information",
    body:
      "We use your information to respond to enquiries, qualify leads, prepare proposals, deliver requested services, improve our marketing performance, and measure which campaigns bring qualified business opportunities.",
  },
  {
    title: "Marketing and Tracking",
    body:
      "This website may use analytics and advertising tools, including Meta Pixel and server-side conversion tracking, to understand page views, content engagement, WhatsApp clicks, and form submissions. These tools help us optimise campaigns and follow up on legitimate business enquiries.",
  },
  {
    title: "How We Store and Share Data",
    body:
      "Lead submissions are sent to our internal business email and may be processed by trusted service providers used for website hosting, email delivery, analytics, advertising attribution, and CRM-style follow-up. We do not sell your personal data.",
  },
  {
    title: "Your Rights",
    body:
      `You can ask us to update or delete the personal information you submitted by contacting ${SUPPORT_EMAIL}. We will handle reasonable privacy requests in line with applicable law.`,
  },
  {
    title: "Contact",
    body: `If you have questions about this policy or your data, contact Logic Leads at ${SUPPORT_EMAIL} or ${WHATSAPP_NUMBER_DISPLAY}.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white text-black">
      <section className="mx-auto max-w-4xl px-4 py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
          Legal
        </p>
        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-black/72">
          This policy explains how Logic Leads collects and uses information
          submitted through this website. By using our forms or contacting us
          through the website, you agree to this policy.
        </p>

        <div className="mt-12 space-y-8">
          {policySections.map((section) => (
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
          Need the commercial terms too? Read our{" "}
          <Link
            href="/terms-and-conditions"
            className="underline underline-offset-4"
          >
            Terms and Conditions
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
