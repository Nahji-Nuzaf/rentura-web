// functions/api/chat.ts
// Rentura Smart FAQ Bot (no API, no cost)

type FAQ = {
    id: string;
    keywords: string[]; // words/phrases to match
    answer: string;
};

const OFF_TOPIC_REPLY =
    "I can only help with Rentura-related questions. For support, contact support@rentura.com.";

const UNKNOWN_RENTURA_REPLY =
    "I’m not 100% sure about that yet. I can help with Rentura features, pricing, onboarding, tenants/landlords, payments, maintenance, and reports. For anything else, contact support@rentura.com.";

const FAQS: FAQ[] = [
    // ✅ Greetings (keep only ONE greeting FAQ)
    {
        id: "greeting",
        keywords: [
            "hi",
            "hello",
            "hey",
            "hey there",
            "hii",
            "hola",
            "good morning",
            "good afternoon",
            "good evening",
        ],
        answer:
            "Hi! 👋 I can help you learn about Rentura — features, pricing, onboarding, and more. What would you like to know?",
    },

    {
        id: "what-is-rentura",
        keywords: ["what is rentura", "about rentura", "rentura platform", "what do you do"],
        answer:
            "Rentura is a modern property management platform that helps landlords and property managers track rent, manage maintenance, message tenants, and automate reporting—all from one dashboard.",
    },
    {
        id: "features-landlords",
        keywords: ["landlord", "for landlords", "manage properties", "dashboard", "occupancy", "arrears"],
        answer:
            "For landlords, Rentura provides a unified dashboard for rent tracking, occupancy insights, maintenance tracking, smart messaging, and financial automations like reconciliation and reports.",
    },
    {
        id: "features-tenants",
        keywords: ["tenant", "for tenants", "pay rent", "split rent", "roommate", "credit score"],
        answer:
            "For tenants, Rentura supports one-tap rent payments, maintenance requests, viewing lease/payment history, splitting rent with roommates, and building credit through on-time rent payments.",
    },
    {
        id: "pricing",
        keywords: ["pricing", "price", "cost", "plans", "subscription", "how much"],
        answer:
            "Pricing: Rentura is free for tenants. Landlords have subscription plans (Basic & Premium). If you want a tailored quote based on number of units/features, email support@rentura.com.",
    },
    {
        id: "payments",
        keywords: ["payment", "collect rent", "auto-collect", "late", "reminder", "bank", "sync"],
        answer:
            "Rentura supports rent collection workflows including payment tracking and automated follow-ups. Auto-Collect (bank sync + automated rent chasing) helps reduce missed payments and manual work.",
    },
    {
        id: "maintenance",
        keywords: ["maintenance", "repair", "vendor", "request", "issue", "fix", "work order"],
        answer:
            "Maintenance Tracking lets tenants submit requests and landlords track repairs from request to resolution. It can also help assign vendors and maintain a history per unit.",
    },
    {
        id: "smart-messaging",
        keywords: ["messaging", "chat", "message", "conversation", "context-aware", "history"],
        answer:
            "Smart Messaging keeps lease and maintenance context in the thread so landlords and tenants can communicate without losing important history.",
    },
    {
        id: "reports",
        keywords: ["report", "tax", "financial", "reconcile", "statement", "export"],
        answer:
            "Rentura includes financial automations such as payment reconciliation and generating tax-ready reports to make bookkeeping faster and cleaner.",
    },
    {
        id: "ai-screening",
        keywords: ["screening", "fraud", "identity", "income", "eviction", "background check"],
        answer:
            "AI Screening is designed to detect fraud risks using checks like identity, income verification, and eviction history signals (where applicable).",
    },
    {
        id: "rentura-intelligence",
        keywords: ["intelligence", "coming", "q4 2026", "predictive", "legal copilot", "risk score"],
        answer:
            "Rentura Intelligence (Coming Q4 2026) will focus on predictive analytics, a legal copilot, and smart tenant risk scoring for better decision-making.",
    },
    {
        id: "contact-support",
        keywords: ["support", "contact", "email", "help", "customer service"],
        answer:
            "You can reach Rentura support at support@rentura.com. If you tell me what you’re trying to do, I can guide you through the relevant feature too.",
    },
    {
        id: "lease",
        keywords: ["lease", "lease agreement", "contract", "tenancy agreement"],
        answer:
            "Rentura keeps lease information connected to tenants and conversations so it’s easy to reference when managing rent and maintenance.",
    },
];

// ---------- Matching helpers ----------
function normalize(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\p{L}\p{N}\s]/gu, " ") // remove punctuation (unicode-safe)
        .replace(/\s+/g, " ")
        .trim();
}

function scoreFAQ(query: string, faq: FAQ): number {
    let score = 0;

    for (const kw of faq.keywords) {
        const nkw = normalize(kw);
        if (!nkw) continue;

        if (query.includes(nkw)) {
            score += 8;
            continue;
        }

        const parts = nkw.split(" ");
        for (const p of parts) {
            if (p.length < 3) continue;
            if (query.includes(p)) score += 1;
        }
    }

    return score;
}

// ✅ Treat greetings as allowed even if not “Rentura-related”
function isGreeting(query: string): boolean {
    const greetings = [
        "hi",
        "hello",
        "hey",
        "hey there",
        "hii",
        "hola",
        "good morning",
        "good afternoon",
        "good evening",
    ];
    return greetings.some((g) => query === g || query.startsWith(g + " "));
}

function isRenturaRelated(query: string): boolean {
    // quick gate so totally unrelated questions don’t even try matching
    const renturaSignals = [
        "rentura",
        "tenant",
        "landlord",
        "rent",
        "lease",
        "maintenance",
        "pricing",
        "subscription",
        "dashboard",
        "payment",
        "screening",
        "report",
        "occupancy",
        // Add more if needed: "onboarding", "vendor", "repairs", etc.
    ];
    return renturaSignals.some((k) => query.includes(k));
}

// ---------- API handler ----------
export const onRequestPost = async (context: any) => {
    try {
        const body = await context.request.json().catch(() => ({}));
        const messageRaw = String(body?.message ?? "");
        const message = normalize(messageRaw);

        if (!message) {
            return new Response(JSON.stringify({ reply: UNKNOWN_RENTURA_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // ✅ Let greetings through (and answer via greeting FAQ)
        // This avoids replying with OFF_TOPIC for “Hi”.
        if (isGreeting(message)) {
            const greetingFAQ = FAQS.find((f) => f.id === "greeting");
            return new Response(JSON.stringify({ reply: greetingFAQ?.answer ?? "Hi! 👋" }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // Hard off-topic block
        if (!isRenturaRelated(message)) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // Find best FAQ
        let best: { faq: FAQ; score: number } | null = null;
        for (const faq of FAQS) {
            const s = scoreFAQ(message, faq);
            if (!best || s > best.score) best = { faq, score: s };
        }

        // If score too low, unknown
        if (!best || best.score < 4) {
            return new Response(JSON.stringify({ reply: UNKNOWN_RENTURA_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        return new Response(JSON.stringify({ reply: best.faq.answer }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(
            JSON.stringify({
                reply: "Something went wrong on our side. Please try again or contact support@rentura.com.",
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
        );
    }
};
