"use client";

import { ReactNode, useEffect, useState } from "react";
import {
  buildWebsiteQuoteMessage,
  buildWhatsAppUrl,
  MarketingAttribution,
} from "../../lib/marketing";
import { getCurrentMarketingAttribution } from "../../lib/marketing-client";
import { trackWhatsAppClick } from "../../lib/meta-browser";

type WhatsAppCtaProps = {
  children: ReactNode;
  className?: string;
  businessType?: string;
  budgetBand?: string;
  timeline?: string;
  needs?: string;
  goal?: string;
  entryPoint?: string;
  target?: "_blank" | "_self";
};

export default function WhatsAppCta({
  children,
  className,
  businessType,
  budgetBand,
  timeline,
  needs,
  goal,
  entryPoint,
  target = "_blank",
}: WhatsAppCtaProps) {
  const [href, setHref] = useState(() =>
    buildWhatsAppUrl(
      buildWebsiteQuoteMessage({
        businessType,
        budgetBand,
        timeline,
        needs,
        goal,
        entryPoint,
      })
    )
  );

  useEffect(() => {
    const attribution = getCurrentMarketingAttribution();
    const message = buildWebsiteQuoteMessage({
      businessType,
      budgetBand,
      timeline,
      needs,
      goal,
      entryPoint,
      attribution,
    });

    setHref(buildWhatsAppUrl(message));
  }, [businessType, budgetBand, timeline, needs, goal, entryPoint]);

  const handleClick = () => {
    const attribution = getCurrentMarketingAttribution() as MarketingAttribution;

    trackWhatsAppClick({
      entry_point: entryPoint,
      business_type: businessType,
      budget_band: budgetBand,
      timeline,
      utm_source: attribution.utm_source,
      utm_medium: attribution.utm_medium,
      utm_campaign: attribution.utm_campaign,
      page_context: attribution.page_context,
    });
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noreferrer" : undefined}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
