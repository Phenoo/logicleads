"use client";

import WhatsAppCta from "./whatsapp-cta";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <WhatsAppCta
        entryPoint="Floating WhatsApp Button"
        needs="Website or Mobile App Project"
        goal="Enquire about project via WhatsApp"
        className="group relative flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-2xl shadow-green-900/40 border border-white/20 transition-all duration-300 hover:bg-[#20ba5a] hover:scale-105 active:scale-95"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <FaWhatsapp className="h-7 w-7 text-white" />
        </span>
       
        {/* Pulse Indicator */}
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-[#d1ff57]"></span>
        </span>
      </WhatsAppCta>
    </div>
  );
}
