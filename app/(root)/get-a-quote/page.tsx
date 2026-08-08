import type { Metadata } from "next";
import ViewContentTracker from "../../../components/marketing/view-content-tracker";
import QualifiedQuoteForm from "../../../components/ads/qualified-quote-form";
import StickyWhatsAppMobile from "../../../components/marketing/sticky-whatsapp-mobile";
import { SITE_URL } from "../../../lib/site";

export const metadata: Metadata = {
  title: "Website & App Development Quote | Logicleads",
  description:
    "Need a professional website, e-commerce store, web app or mobile app? Tell Logicleads about your project and get a clear next step.",
  alternates: {
    canonical: `${SITE_URL}/get-a-quote`,
  },
};

export default function GetAQuotePage() {
  return (
    <div className="min-h-screen bg-[#0b0d17] py-12 px-4 sm:px-6 lg:px-8 selection:bg-[#d1ff57] selection:text-black">
      <ViewContentTracker
        contentName="Meta Ads Landing Page - Get a Quote"
        contentCategory="meta_ads_landing"
      />

      <div className="mx-auto max-w-4xl pt-4 pb-16">
        <QualifiedQuoteForm />
      </div>

      <StickyWhatsAppMobile />
    </div>
  );
}
