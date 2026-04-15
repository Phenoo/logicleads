"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type MetaEventOptions = {
  eventID?: string;
};

export function trackMetaEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
  options?: MetaEventOptions
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("track", eventName, parameters ?? {}, options);
}

export function trackMetaCustomEvent(
  eventName: string,
  parameters?: Record<string, unknown>,
  options?: MetaEventOptions
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") {
    return;
  }

  window.fbq("trackCustom", eventName, parameters ?? {}, options);
}

export function trackLead(
  eventId: string,
  parameters?: Record<string, unknown>
) {
  trackMetaEvent("Lead", parameters, { eventID: eventId });
}

export function trackViewContent(parameters?: Record<string, unknown>) {
  trackMetaEvent("ViewContent", parameters);
}

export function trackWhatsAppClick(parameters?: Record<string, unknown>) {
  trackMetaCustomEvent("WhatsAppClick", parameters);
}
