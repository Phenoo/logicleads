"use client";

import React from "react";
import Social from "../social";
import { sendEmail } from "../../actions/sendEmail";
import toast from "react-hot-toast";
import Link from "next/link";
import AttributionFields from "../marketing/attribution-fields";
import WhatsAppCta from "../marketing/whatsapp-cta";
import { trackLead } from "../../lib/meta-browser";

const Contact = () => {
  const [eventId, setEventId] = React.useState(() => crypto.randomUUID());
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submittedContact, setSubmittedContact] = React.useState<{
    firstName: string;
    subject: string;
  } | null>(null);

  if (submittedContact) {
    return (
      <div className="contact min-h-screen bg-white p-4 py-20 text-black">
        <div className="mx-auto max-w-5xl p-4">
          <div className="rounded-[2rem] bg-[#10121d] p-8 text-white shadow-2xl shadow-black/15">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d1ff57]">
              Message Sent
            </p>
            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
              We received your message.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/78">
              Thanks{submittedContact.firstName
                ? `, ${submittedContact.firstName}`
                : ""}{" "}
              . If this is time-sensitive, you can continue on WhatsApp with
              the same conversation context. Otherwise, we will reply through
              your submitted contact details.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <WhatsAppCta
                entryPoint="Contact form success state"
                needs="Contact form follow-up"
                goal={submittedContact.subject}
                className="inline-flex items-center justify-center rounded-full bg-[#d1ff57] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
              >
                Continue on WhatsApp
              </WhatsAppCta>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white transition hover:border-white hover:bg-white/5"
                onClick={() => {
                  setSubmittedContact(null);
                  setEventId(crypto.randomUUID());
                }}
              >
                Send another message
              </button>
            </div>

            <p className="mt-6 text-sm text-white/60">
              You can review our{" "}
              <Link
                href="/privacy-policy"
                className="underline underline-offset-4"
              >
                Privacy Policy
              </Link>{" "}
              at any time.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen p-4 text-black py-20 contact">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex gap-4 items-center  text-black">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Contact Us</h4>
        </div>
        <br />
        <div>
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize  ">
            Join Us in Creating
          </h4>
          <h4 className="text-primary text-3xl md:text-4xl lg:text-5xl font-medium capitalize  ">
            Something Great
          </h4>
        </div>
        <br />

        <form
          action={async (formData) => {
            setIsSubmitting(true);
            const currentEventId = eventId;
            formData.set("event_id", currentEventId);
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              setIsSubmitting(false);
              setEventId(crypto.randomUUID());
              return;
            }

            trackLead(currentEventId, {
              content_name: "Contact Form",
              lead_source: "contact_form",
              subject: String(formData.get("subject") || ""),
            });

            setSubmittedContact({
              firstName: String(formData.get("firstName") || ""),
              subject: String(formData.get("subject") || ""),
            });
            setIsSubmitting(false);
            setEventId(crypto.randomUUID());
          }}
        >
          <AttributionFields />
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className=" md:col-span-8 flex flex-col gap-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <input
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    className="  "
                    required
                    maxLength={500}
                  />
                </div>
                <div>
                  <input type="text" placeholder="Last Name *" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <div>
                  <input
                    placeholder="Email *"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                  />
                </div>
                <div>
                  <input
                    placeholder="Phone Number *"
                    name="phoneNumber"
                    type="tel"
                    required
                    maxLength={500}
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject *"
                  name="subject"
                  required
                  maxLength={5000}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  name="message"
                  required
                  maxLength={5000}
                />
              </div>
              <div>
                <button
                  className="buttonwhite bg-primary mt-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <p className="mt-4 text-sm text-black/60">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-primary hover:underline"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className=" md:col-span-4 bg-primary rounded-xl p-4 flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-medium">Address</h4>
                <p>4512 Victory Estate, Enugu State.</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-medium">Contact</h4>
                <p>Phone: +2347035172208</p>
                <p>Email: bylogicleads@gmail.com</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-xl md:text-2xl font-medium">Open Time</h4>
                <p>We operate 24/7.</p>
              </div>
              <div className="flex flex-col gap-1">
                <h4 className="text-xl md:text-2xl font-medium">
                  Stay Connected
                </h4>
                <Social />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
