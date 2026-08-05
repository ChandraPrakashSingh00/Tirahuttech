import axiosClient from "./axiosClient";

export async function trackPage(eventName = "page_view") {
  try {
    await axiosClient.post("/track", {
      eventType: "page_view",
      eventName,
      url: window.location.pathname,
      meta: {
        referrer: document.referrer,
        title: document.title,
        userAgent: navigator.userAgent,
      },
    });
  } catch (err) {
    console.warn("tracking failed");
  }
}

export async function trackEvent(eventName, meta = {}) {
  try {
    await axiosClient.post("/track", {
      eventType: "event",
      eventName,
      url: window.location.pathname,
      meta,
    });
  } catch (err) {
    // Non-critical — swallow silently so it never breaks the UI.
  }
}
