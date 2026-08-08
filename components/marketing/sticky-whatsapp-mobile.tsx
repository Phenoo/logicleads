"use client";

import WhatsAppCta from "./whatsapp-cta";
import { FaWhatsapp } from "react-icons/fa";

export default function StickyWhatsAppMobile() {
  return (
    <div className="fixed bottom-4 inset-x-4 z-40 md:hidden">
      <WhatsAppCta
        entryPoint="Mobile Sticky Bar"
        needs="Website or Mobile App Project"
        goal="Enquire about website or app development"
        className="flex items-center justify-between w-full gap-3 rounded-full bg-[#25D366] px-5 py-3.5 text-white shadow-xl shadow-black/30 border border-white/20 active:scale-[0.98] transition-transform"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <FaWhatsapp className="h-5 w-5 text-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium uppercase tracking-wider text-white/90">
              Instant Enquiry
            </span>
            <span className="text-sm font-bold text-white">
              Message Us on WhatsApp
            </span>
          </div>
        </div>
        <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white">
          Fast response
        </span>
      </WhatsAppCta>
    </div>
  );
}
