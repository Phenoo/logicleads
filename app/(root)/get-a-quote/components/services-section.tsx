"use client";

import { ArrowRight, Globe, RefreshCw, ShoppingCart, Calendar, Code, Smartphone } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  desc: string;
  useCase: string;
  icon: typeof Globe;
};

const SERVICES: ServiceItem[] = [
  {
    id: "Business website",
    title: "Business Websites",
    desc: "Custom lead-generation websites built to elevate brand credibility, communicate services clearly, and drive qualified enquiries.",
    useCase: "Ideal for UK service providers, consultants, local businesses, and corporate firms.",
    icon: Globe,
  },
  {
    id: "Website redesign",
    title: "Website Redesign",
    desc: "Transform an outdated or low-converting website into a high-performance, mobile-optimized lead engine.",
    useCase: "Ideal for established businesses looking to modernise their online image and boost conversions.",
    icon: RefreshCw,
  },
  {
    id: "E-commerce website",
    title: "E-commerce Websites",
    desc: "Fast, secure online stores designed to showcase products, streamline checkout, and drive online sales.",
    useCase: "Ideal for retail brands, product businesses, and online storefronts.",
    icon: ShoppingCart,
  },
  {
    id: "Booking/payment website",
    title: "Booking & Payment Websites",
    desc: "Integrated scheduling systems that allow clients to book appointments, select packages, and pay deposits 24/7.",
    useCase: "Ideal for clinics, salons, fitness studios, rentals, and appointment-based services.",
    icon: Calendar,
  },
  {
    id: "Web application",
    title: "Web Applications",
    desc: "Custom web software, client portals, dynamic dashboards, and SaaS platforms built for speed and security.",
    useCase: "Ideal for businesses needing automated workflows, client management, or custom software.",
    icon: Code,
  },
  {
    id: "Mobile app",
    title: "Mobile Apps",
    desc: "Native-quality iOS and Android mobile applications designed with intuitive user experience and real-time backend logic.",
    useCase: "Ideal for startups, platforms, and businesses wanting a direct mobile channel for customers.",
    icon: Smartphone,
  },
];

export default function ServicesSection() {
  const handleSelectService = (serviceId: string) => {
    const formElement = document.getElementById("quote-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      const selectElement = formElement.querySelector<HTMLSelectElement>(
        'select[name="projectType"]'
      );
      if (selectElement) {
        selectElement.value = serviceId;
        selectElement.dispatchEvent(new Event("change", { bubbles: true }));
      }
    }
  };

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d1ff57]">
          What We Build
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Tailored Solutions For Your Business
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">
          Select the service category that matches your immediate goal to start your free project review.
        </p>
      </div>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-primary hover:bg-white/[0.06] hover:shadow-2xl hover:shadow-purple-900/20 group"
            >
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20 text-[#d1ff57] transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm text-white/75 leading-relaxed">{item.desc}</p>
                <div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-white/60">
                  <span className="font-semibold text-[#d1ff57]">Ideal Use: </span>
                  {item.useCase}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSelectService(item.id)}
                className="mt-8 inline-flex items-center justify-between rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all group-hover:border-[#d1ff57] group-hover:bg-[#d1ff57] group-hover:text-black"
              >
                <span>Start Project Enquiry</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
