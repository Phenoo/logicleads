import { cn } from "../../lib/utils";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { TbHexagonLetterLFilled } from "react-icons/tb";
import WhatsAppCta from "../marketing/whatsapp-cta";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-7xl mx-auto p-4 py-16 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="font-medium text-3xl md:text-4xl lg:text-5xl flex items-center gap-3">
            Let&apos;s{" "}
            <div className="font-medium text-3xl md:text-4xl lg:text-5xl text-primary">
              Connect
            </div>{" "}
            there
          </div>
          <div>
            <Link href={"/business-websites"} className="w-fit">
              <button className="button hover:animate-pulse transition-all bg-primary">
                Get Website Quote
              </button>
            </Link>
          </div>
        </div>
        <div className="my-8 bg-white h-[1px] opacity-50 w-full" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="flex gap-2 text-lg items-center">
              <TbHexagonLetterLFilled className="h-8 w-8 text-primary" /> Leads
            </div>
            <p>
              At Logicleads, we are more than just a service provider; we are
              your partner in digital success. Let&apos;s work together to
              create something extraordinary.
            </p>
            <div className="mt-4 flex gap-4 items-center">
              <span className="p-4 border border-white cursor-pointer rounded-md  hover:bg-primary hover:border-none text-white transition-all">
                <a href="mailto:bylogicleads@gmail.com">
                  <Mail color="white" className="text-white w-4 h-4" />
                </a>
              </span>
              <span className="p-4 border border-white cursor-pointer rounded-md hover:bg-primary hover:border-none  text-white bg- transition-all">
                <a
                  href="https://www.facebook.com/profile.php?id=100068749546786&mibextid=LQQJ4d"
                  target="_blank"
                >
                  <FaFacebook color="white" className="text-white" />
                </a>
              </span>
              <span className="p-4 border border-white cursor-pointer rounded-md  hover:bg-primary hover:border-none text-white bg- transition-all">
                <a href="https://www.instagram.com/logicleads?igsh=NzhnOGlleWhwNjQ3&utm_source=qr">
                  <FaInstagram color="white" className="text-white" />
                </a>
              </span>

              <span className="p-4 border border-white cursor-pointer rounded-md hover:bg-primary hover:border-none  text-white transition-all">
                <a href="https://www.linkedin.com/company/logicleads/">
                  <FaLinkedin color="white" className="text-white" />
                </a>
              </span>
              <span className="p-4 border border-white cursor-pointer rounded-md hover:bg-primary hover:border-none text-white transition-all">
                <WhatsAppCta
                  entryPoint="Footer social CTA"
                  budgetBand="₦500k - ₦1.5m"
                  timeline="14-21 days"
                  needs="Business website quote"
                  goal="A conversion-focused business website"
                  className="inline-flex"
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                </WhatsAppCta>
              </span>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-primary font-medium text-lg md:text-xl">
              Navigation
            </h4>
            <ul className="flex flex-col gap-4 ">
              <li>
                <Link className={cn()} href={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className={cn()} href={"/services"}>
                  Services
                </Link>
              </li>
              <li>
                <Link className={cn()} href={"/portfolio"}>
                  Portofolio
                </Link>
              </li>
              <li>
                <Link className={cn()} href={"/contact"}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-primary font-medium text-lg md:text-xl">
              Contact
            </h4>
            <ul className="flex flex-col gap-4 ">
              <li>
                <a href="tel:+2347035172208">07035172208</a>
              </li>
              <li>
                <a href="mailto:bylogicleads@gmail.com">
                  bylogicleads@gmail.com
                </a>
              </li>
            </ul>
          </div>{" "}
          <div className="md:col-span-3"></div>
        </div>
        <div className="my-8 bg-white h-[1px] opacity-50 w-full" />
        <div className="flex justify-between w-full flex-col md:flex-row gap-4 items-center  cursor-wait ">
          <div>
            <p className="inline-flex gap-1">
              Copyright &copy; {new Date().getFullYear()}{" "}
              <span className="text-primary">Logic Leads.</span>
              All Rights Reserved.
            </p>
          </div>
          <div>
            <p className="flex gap-3">
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <span>|</span>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
