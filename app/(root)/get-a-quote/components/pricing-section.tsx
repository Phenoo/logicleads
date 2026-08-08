"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Check } from "lucide-react";
import { trackPricingView } from "../../../../lib/meta-browser";

export default function PricingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasTrackedView = useRef(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasTrackedView.current) {
          hasTrackedView.current = true;
          trackPricingView({
            section: "Pricing Positioning",
            starting_price: "GBP 500",
          });
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleScrollToForm = () => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={sectionRef}>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d1ff57]">
          Transparent Pricing Positioning
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Professional business websites from £500
        </h2>
        <p className="mt-4 text-base text-white/75 sm:text-lg">
          Final pricing depends on scope, functionality and content requirements.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {/* Tier 1: Business Website */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-primary/50">
          <div>
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#d1ff57]">
              Starter / Lead Gen
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">Business Websites</h3>
            <p className="mt-2 text-3xl font-black text-[#d1ff57]">From £500</p>
            <p className="mt-3 text-xs text-white/60">
              Ideal for small businesses needing a clean, professional online presence to generate enquiries.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Mobile-responsive layout
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Lead capture form & WhatsApp CTA
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Fast load performance
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Basic SEO setup & analytics
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleScrollToForm}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Get a Project Estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Tier 2: E-commerce & Booking Systems */}
        <div className="relative flex flex-col justify-between rounded-3xl border-2 border-[#d1ff57] bg-white/[0.05] p-8 shadow-2xl shadow-purple-900/30">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#d1ff57] px-4 py-1 text-xs font-bold uppercase tracking-wider text-black">
            Most Popular
          </div>
          <div>
            <span className="rounded-full bg-primary/20 px-3.5 py-1 text-xs font-semibold text-white">
              E-commerce & Booking
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">E-commerce & Bookings</h3>
            <p className="mt-2 text-3xl font-black text-[#d1ff57]">£1,000 – £3,000</p>
            <p className="mt-3 text-xs text-white/60">
              Custom online stores, appointment scheduling, and automated payment gateway integrations.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Full product catalog / booking system
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Stripe / PayPal payment integration
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Customer order & booking notifications
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Tailored design & content structure
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleScrollToForm}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#d1ff57] py-3.5 text-sm font-bold text-black transition hover:bg-white"
          >
            Get a Project Estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Tier 3: Custom Apps */}
        <div className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all hover:border-primary/50">
          <div>
            <span className="rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#d1ff57]">
              Custom Engineering
            </span>
            <h3 className="mt-4 text-2xl font-bold text-white">Web Apps & Mobile Apps</h3>
            <p className="mt-2 text-3xl font-black text-[#d1ff57]">£3,000+</p>
            <p className="mt-3 text-xs text-white/60">
              Custom software, client dashboards, API integrations, and native-quality mobile applications.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-white/80">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Custom backend architecture & database
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> User authentication & permission levels
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> iOS & Android cross-platform builds
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#d1ff57]" /> Ongoing support & scale strategy
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={handleScrollToForm}
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Get a Project Estimate
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
