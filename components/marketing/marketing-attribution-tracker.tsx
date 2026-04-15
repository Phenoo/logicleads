"use client";

import { useEffect } from "react";
import { captureMarketingAttribution } from "../../lib/marketing-client";

export default function MarketingAttributionTracker() {
  useEffect(() => {
    captureMarketingAttribution();
  }, []);

  return null;
}
