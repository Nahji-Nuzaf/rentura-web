// src/lib/ga.ts
declare global {
    interface Window {
        gtag?: (...args: any[]) => void;
    }
}

export const GA_ID = "G-FKQ3T1KY5V"; // <-- replace with your Measurement ID

export function gaEvent(name: string, params: Record<string, any> = {}) {
    window.gtag?.("event", name, params);
}

export function gaPageView(path: string) {
    window.gtag?.("config", GA_ID, { page_path: path });
}
