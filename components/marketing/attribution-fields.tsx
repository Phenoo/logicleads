"use client";

import { MARKETING_FIELD_KEYS } from "../../lib/marketing";
import { useMarketingAttribution } from "../../lib/marketing-client";

export default function AttributionFields() {
  const attribution = useMarketingAttribution();

  return (
    <>
      {MARKETING_FIELD_KEYS.map((key) => (
        <input key={key} type="hidden" name={key} value={attribution[key] || ""} />
      ))}
    </>
  );
}
