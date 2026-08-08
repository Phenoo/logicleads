"use client";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type MetaEventOptions = {
  eventID?: string;
};

export function trackGA4Event(
  eventName: string,
  parameters?: Record<string, unknown>
) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }
  window.gtag("event", eventName, parameters ?? {});
}

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
  trackGA4Event("generate_lead", parameters);
}

export function trackViewContent(parameters?: Record<string, unknown>) {
  trackMetaEvent("ViewContent", parameters);
  trackGA4Event("view_content", parameters);
}

export function trackContact(parameters?: Record<string, unknown>) {
  trackMetaEvent("Contact", parameters);
  trackGA4Event("contact", parameters);
}

export function trackSchedule(parameters?: Record<string, unknown>) {
  trackMetaEvent("Schedule", parameters);
  trackGA4Event("schedule", parameters);
}

export function trackWhatsAppClick(parameters?: Record<string, unknown>) {
  trackMetaEvent("Contact", parameters);
  trackMetaCustomEvent("WhatsAppClick", parameters);
  trackGA4Event("whatsapp_click", parameters);
}

export function trackDiscoveryCallClick(parameters?: Record<string, unknown>) {
  trackMetaEvent("Schedule", parameters);
  trackMetaCustomEvent("DiscoveryCallClick", parameters);
  trackGA4Event("discovery_call_click", parameters);
}

export function trackLeadFormStart(parameters?: Record<string, unknown>) {
  trackMetaCustomEvent("LeadFormStart", parameters);
  trackGA4Event("lead_form_start", parameters);
}

export function trackPortfolioClick(parameters?: Record<string, unknown>) {
  trackMetaCustomEvent("PortfolioClick", parameters);
  trackGA4Event("portfolio_click", parameters);
}

export function trackPricingView(parameters?: Record<string, unknown>) {
  trackMetaCustomEvent("PricingView", parameters);
  trackGA4Event("pricing_view", parameters);
}

