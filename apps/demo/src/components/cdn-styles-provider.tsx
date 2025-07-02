"use client";

import { useEffect } from "react";

export function CdnStylesProvider() {
  useEffect(() => {
    const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE || "https://cdn.sdworx.com/ignite/styling";
    const cdnVersion = process.env.NEXT_PUBLIC_CDN_VERSION || "v0/0.0.1";
    const systemCssUrl = `${cdnBase}/${cdnVersion}/webapp/system.css`;

    // Check if system CSS is already loaded
    const existingLink = document.querySelector(`link[href="${systemCssUrl}"]`);
    if (!existingLink) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = systemCssUrl;
      link.onload = () => console.log("SD Worx Ignite system styles loaded");
      link.onerror = () => console.warn("Failed to load SD Worx Ignite system styles");
      document.head.appendChild(link);
    }
  }, []);

  return (
    <>
      {/* Preconnect to CDN for performance */}
      <link rel="preconnect" href={process.env.NEXT_PUBLIC_CDN_BASE} />
      <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_CDN_BASE} />
    </>
  );
}