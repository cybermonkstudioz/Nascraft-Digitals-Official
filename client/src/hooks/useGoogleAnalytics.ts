import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

export function useGoogleAnalytics() {
  const [location] = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-E7M2XNW41B";

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load gtag script if not already added
    if (!window.gtag) {
      const scriptSrc = document.createElement("script");
      scriptSrc.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      scriptSrc.async = true;
      document.head.appendChild(scriptSrc);

      const scriptInline = document.createElement("script");
      scriptInline.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${measurementId}', { 'send_page_view': false });
      `;
      document.head.appendChild(scriptInline);

      window.gtag = function () {
        window.dataLayer?.push(arguments);
      };
    }
  }, [measurementId]);

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;

    // Send page_view hit on route change (after page title has been updated by useSEO)
    setTimeout(() => {
      if (window.gtag) {
        window.gtag("event", "page_view", {
          page_title: document.title,
          page_location: window.location.href,
          page_path: location,
        });
      }
    }, 50);
  }, [location]);
}
