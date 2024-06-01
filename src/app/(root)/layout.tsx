import AOS from "aos";
import { useEffect, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "../globals.css";
import "@/app/styles/globals.scss";
import "@/app/styles/button.css";
import Navbar from "@/components/common/nav-bar";
import Footer from "@/components/common/footer";
import Navigation from "@/components/navigation/navigation";
import SmoothScrolling from "@/utils/smooth-scrolling";
import Preloader from "@/components/preloader";
import TextSLider1 from "@/components/textslide";
import { BalancerProvider } from "../providers/provider";

export const metadata: Metadata = {
  title: {
    template: "%s | Logic Leads",
    default: "Logic Leads - Digital Agency", // a default is required when creating a template
  },
  description:
    "Your premier digital agency for Mobile App Development, Web Development, UI/UX Design, Graphic Design, Digital Marketing, and Copywriting.",
  keywords: [
    "Logic Leads",
    "logic",
    "logic leads",
    "leads",
    "llogics",
    "Logicleads",
    " Digital Agency",
    "Web Development",
    "Digital Marketing",
    "SEO Services",
    "Social Media Management",
    "E-Commerce Solutions",
    "Graphic Design",
    "Online Marketing",
    " Website Design",
    "Internet Marketing",
    "Branding Services",
    "Content Marketing",
    "Pay-Per-Click Advertising",
    "Search Engine Optimization",
    "Email Marketing",
    "Web Design Company",
    "Digital Strategy",
    "Marketing Consulting",
    "UX/UI Design",
    "Mobile App Development",
    "Custom Web Solutions",
    "Creative Agency",
    "Digital Transformation",
    "Conversion Rate Optimization",
    "Online Advertising",
    "Web Analytics",
    "Digital Advertising",
    "Local SEO",
    "Influencer Marketing",
    "Responsive Web Design",
  ],
  metadataBase: new URL("https://www.logicleads.tech/"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "de-DE": "/de-DE",
    },
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // useEffect(() => {
  //   AOS.init();
  // }, []);
  return (
    <html lang="en">
      <body>
        {/* <Preloader /> */}

        <BalancerProvider>
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
