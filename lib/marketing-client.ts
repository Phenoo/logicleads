"use client";

import { useEffect, useState } from "react";
import {
  MARKETING_FIELD_KEYS,
  MarketingAttribution,
  compactAttribution,
} from "./marketing";

const STORAGE_KEY = "logicleads-marketing-attribution";

function readStoredValue() {
  if (typeof window === "undefined") {
    return {};
  }

  const rawValue = window.sessionStorage.getItem(STORAGE_KEY);

  if (!rawValue) {
    return {};
  }

  try {
    return JSON.parse(rawValue) as MarketingAttribution;
  } catch {
    return {};
  }
}

function writeStoredValue(value: MarketingAttribution) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export function captureMarketingAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const stored = readStoredValue();
  const params = new URLSearchParams(window.location.search);
  const nextValue: MarketingAttribution = {
    ...stored,
    source_url: window.location.href,
    page_context: window.location.pathname,
  };

  MARKETING_FIELD_KEYS.forEach((key) => {
    if (key === "landing_page" || key === "referrer") {
      return;
    }

    const value = params.get(key);

    if (value) {
      nextValue[key] = value;
    }
  });

  if (!stored.landing_page) {
    nextValue.landing_page = window.location.href;
  }

  if (!stored.referrer && document.referrer) {
    nextValue.referrer = document.referrer;
  }

  const compacted = compactAttribution(nextValue);
  writeStoredValue(compacted);

  return compacted;
}

export function getCurrentMarketingAttribution() {
  if (typeof window === "undefined") {
    return {};
  }

  const stored = captureMarketingAttribution();

  return compactAttribution({
    ...stored,
    source_url: window.location.href,
    page_context: window.location.pathname,
  });
}

export function useMarketingAttribution() {
  const [attribution, setAttribution] = useState<MarketingAttribution>({});

  useEffect(() => {
    setAttribution(getCurrentMarketingAttribution());
  }, []);

  return attribution;
}
