/**
 * Google Analytics (GA4) Integration Utility for Shri Ram Graphics
 */

export const GA_TRACKING_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-7WTP9G6WGL';

/**
 * Initialize Google Analytics 4
 */
export const initGA = () => {
  if (typeof window === 'undefined') return;

  // If gtag is already on the page from index.html, send initial pageview
  if (window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname + window.location.hash,
      send_page_view: true,
    });
    return;
  }

  // Inject gtag.js if not already present
  if (!document.getElementById('ga-gtag-script')) {
    const script = document.createElement('script');
    script.id = 'ga-gtag-script';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID, {
      page_path: window.location.pathname + window.location.hash,
      send_page_view: true,
    });
  }
};

/**
 * Track custom user events in Google Analytics
 */
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

/**
 * Convenience tracking methods for high-value actions
 */
export const trackWhatsAppClick = (source = 'direct') => {
  trackEvent('click_whatsapp', 'Lead Generation', `WhatsApp CTA: ${source}`);
};

export const trackPhoneCall = () => {
  trackEvent('click_phone', 'Lead Generation', 'Direct Phone Call');
};

export const trackInquirySubmit = (serviceName, boxType) => {
  trackEvent('submit_inquiry', 'Leads', `${serviceName} - ${boxType}`);
};

export const trackThemeSwitch = (themeName) => {
  trackEvent('switch_theme', 'Engagement', `Theme: ${themeName}`);
};
