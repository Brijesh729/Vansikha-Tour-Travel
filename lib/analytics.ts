/**
 * Thin abstraction over gtag so event tracking calls don't reference
 * window.gtag directly throughout the codebase. Safe to call even if
 * gtag hasn't loaded yet (e.g. ad blockers, slow network) - it just no-ops.
 */

type GtagEvent =
  | "tour_view"
  | "contact_form_start"
  | "contact_form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "tour_cta_click"
  | "blog_view"
  | "search";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(event: GtagEvent, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
