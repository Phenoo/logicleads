import type { Metadata } from "next";

import "../globals.css";
import "../styles/globals.scss";
import "../styles/button.css";
import Footer from "../../components/common/footer";
import Navigation from "../../components/navigation/navigation";
import SmoothScrolling from "../../utils/smooth-scrolling";
import TextSLider1 from "../../components/textslide";
import { BalancerProvider } from "../providers/provider";
import MarketingAttributionTracker from "../../components/marketing/marketing-attribution-tracker";
import MetaPixel from "../../components/marketing/meta-pixel";
import SiteSchema from "../../components/marketing/site-schema";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "../../lib/site";

export const metadata: Metadata = {
  title: {
    template: "%s | Logic Leads",
    default: "Logic Leads | UK Web Design & Digital Growth Agency",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Logic Leads",
    "UK web design agency",
    "digital agency UK",
    "Web Development",
    "Digital Marketing",
    "UX/UI Design",
    "Mobile App Development",
    "Website Design",
    "Lead generation websites",
    "Responsive Web Design",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
  applicationName: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  },
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}

        <BalancerProvider>
          <SiteSchema />
          <MarketingAttributionTracker />
          <MetaPixel />
          <SmoothScrolling>
            <Navigation />
            <main className="pt-24">{children}</main>
            <TextSLider1 />
            <Footer />
          </SmoothScrolling>
        </BalancerProvider>
      </body>
    </html>
  );
}
