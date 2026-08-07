import {
  DEFAULT_BUDGET_BAND,
  DEFAULT_TIMELINE,
  WHATSAPP_NUMBER_RAW,
} from "./site";

export const LOGICLEADS_WHATSAPP_NUMBER = WHATSAPP_NUMBER_RAW;

export const MARKETING_FIELD_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
  "gclid",
  "referrer",
  "landing_page",
  "source_url",
  "page_context",
] as const;

export type MarketingFieldKey = (typeof MARKETING_FIELD_KEYS)[number];
export type MarketingAttribution = Partial<Record<MarketingFieldKey, string>>;

type WebsiteQuoteMessageOptions = {
  businessType?: string;
  budgetBand?: string;
  timeline?: string;
  needs?: string;
  goal?: string;
  entryPoint?: string;
  attribution?: MarketingAttribution;
};

export function getStringValue(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export function extractMarketingAttribution(
  formData: FormData
): MarketingAttribution {
  return MARKETING_FIELD_KEYS.reduce<MarketingAttribution>((acc, key) => {
    const value = getStringValue(formData.get(key));

    if (value) {
      acc[key] = value;
    }

    return acc;
  }, {});
}

export function compactAttribution(attribution: MarketingAttribution) {
  return Object.entries(attribution).reduce<MarketingAttribution>(
    (acc, [key, value]) => {
      if (value) {
        acc[key as MarketingFieldKey] = value;
      }

      return acc;
    },
    {}
  );
}

export function formatAttributionSummary(attribution: MarketingAttribution) {
  const parts = [
    attribution.utm_source && `source=${attribution.utm_source}`,
    attribution.utm_medium && `medium=${attribution.utm_medium}`,
    attribution.utm_campaign && `campaign=${attribution.utm_campaign}`,
    attribution.utm_content && `content=${attribution.utm_content}`,
    attribution.utm_term && `term=${attribution.utm_term}`,
    attribution.page_context && `page=${attribution.page_context}`,
  ].filter(Boolean);

  return parts.join(" | ");
}

export function buildWebsiteQuoteMessage({
  businessType,
  budgetBand,
  timeline,
  needs = "New website",
  goal = "A high-converting website that helps my business win more leads",
  entryPoint = "Website quote request",
  attribution = {},
}: WebsiteQuoteMessageOptions) {
  const lines = [
    "Hi Logic Leads, I want a quote for a conversion-focused business website.",
    "",
    `Entry point: ${entryPoint}`,
    `Business type: ${businessType || "I will share in chat"}`,
    `Need: ${needs}`,
    `Goal: ${goal}`,
    `Budget band: ${budgetBand || DEFAULT_BUDGET_BAND}`,
    `Timeline: ${timeline || DEFAULT_TIMELINE}`,
  ];

  const attributionSummary = formatAttributionSummary(attribution);

  if (attributionSummary) {
    lines.push("", `Tracking: ${attributionSummary}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(
  message: string,
  phoneNumber = LOGICLEADS_WHATSAPP_NUMBER
) {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}
