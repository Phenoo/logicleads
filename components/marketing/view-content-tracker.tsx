"use client";

import { useEffect } from "react";
import { trackViewContent } from "../../lib/meta-browser";

type ViewContentTrackerProps = {
  contentName: string;
  contentCategory: string;
};

export default function ViewContentTracker({
  contentName,
  contentCategory,
}: ViewContentTrackerProps) {
  useEffect(() => {
    trackViewContent({
      content_name: contentName,
      content_category: contentCategory,
    });
  }, [contentName, contentCategory]);

  return null;
}
