import axios from "axios";

const API = import.meta.env.VITE_API_URL;

export async function trackPage(eventName = "page_view") {
    try {
        await axios.post(`${API}/track`, {
            eventType: "page_view",
            eventName,
            url: window.location.pathname,
            meta: {
                referrer: document.referrer,
                title: document.title,
                userAgent: navigator.userAgent
            }
        });
    } catch (err) {
        console.log("tracking failed");
    }
}

export async function trackEvent(eventName, meta = {}) {
    try {
        await axios.post(`${API}/track`, {
            eventType: "event",
            eventName,
            url: window.location.pathname,
            meta
        });
    } catch (err) {}
}
