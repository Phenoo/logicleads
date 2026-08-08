"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "Our professional business websites start from £500 for clean brochure and lead generation sites. More complex projects involving custom e-commerce stores, booking portals, or custom web apps are scoped individually based on functionality.",
  },
  {
    question: "How long does a website take?",
    answer:
      "Most standard business websites are completed within 2 to 4 weeks once scope and content are confirmed. Larger web platforms or mobile apps typically take between 6 to 12 weeks depending on technical complexity.",
  },
  {
    question: "Can you redesign my current website?",
    answer:
      "Yes. We specialize in transforming outdated, slow, or poorly-converting websites into fast, modern, and mobile-responsive lead generators without losing existing search rankings.",
  },
  {
    question: "Do you build e-commerce stores?",
    answer:
      "Yes. We build high-converting e-commerce websites equipped with inventory management, product catalogs, automated shipping rules, and secure card payment processing via Stripe or PayPal.",
  },
  {
    question: "Can you add online booking and payments?",
    answer:
      "Absolutely. We integrate automated 24/7 calendar booking systems that allow your clients to schedule appointments, choose service packages, and pay deposits directly online.",
  },
  {
    question: "Do you build mobile apps?",
    answer:
      "Yes. We design and develop cross-platform iOS and Android mobile applications featuring intuitive UI design, push notifications, user authentication, and robust cloud backend logic.",
  },
  {
    question: "Can you help define the features I need?",
    answer:
      "Yes! If you are unsure what features or technical setup your business needs, fill out our enquiry form or message us on WhatsApp. We will help you scope out the most practical and cost-effective approach.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "Once you submit your project enquiry, our team reviews your business description and goals. We then reach out via email or WhatsApp within 24 hours with a scope recommendation and initial estimate.",
  },
];

export default function FaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d1ff57]">
          Common Questions
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">
          Got questions before starting? Find quick answers below or drop us a message.
        </p>
      </div>

      <div className="mt-12 space-y-4">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={idx}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "border-[#d1ff57]/40 bg-white/[0.05]"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-bold text-white pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#d1ff57] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-6 pb-6 pt-1 text-base text-white/75 leading-relaxed border-t border-white/5">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
