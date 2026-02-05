// functions/api/chat.ts

const RENTURA_KB = `
Rentura is a modern property management platform.

Key Features & Benefits:
1) Unified Dashboard: Track rent, maintenance requests, and occupancy rates in one real-time view.
2) Smart Messaging: Context-aware chat that keeps leases and maintenance history in the thread.
3) Financial Automations: Auto-reconcile payments and generate tax-ready reports instantly.
4) AI Screening: Catch fraud instantly with ML-powered checks (identity, income, eviction history).
5) Auto-Collect: Sync banks & automate rent chasing.
6) Maintenance Tracking: Track repairs from request to resolution, auto-assign vendors.
7) For Tenants: Build credit scores with rent payments, split rent with roommates, one-tap payments.
8) Rentura Intelligence (Coming Q4 2026): Predictive analytics, legal copilot, and smart tenant risk scores.

Pricing:
- Free for Tenants.
- Subscription models for Landlords (Basic & Premium).

Support:
- support@rentura.com
`;

const OFF_TOPIC_REPLY =
    "I can only help with Rentura-related questions. Please ask about Rentura features, pricing, or how to use the platform. If you need support, contact support@rentura.com.";

const RENTURA_KEYWORDS = [
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
    "vendor",
    "occupancy",
    "auto-collect",
    "support",
    "report",
    "tax",
    "fraud",
    "roommate",
    "credit",
];

export const onRequestPost = async (context: any) => {
    try {
        const { message } = await context.request.json();
        const userMessage = String(message ?? "").trim();

        if (!userMessage) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // Block off-topic early (saves cost)
        const lower = userMessage.toLowerCase();
        const isRenturaRelated = RENTURA_KEYWORDS.some((k) => lower.includes(k));
        if (!isRenturaRelated) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        const apiKey = context.env.OPENAI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: "OPENAI_API_KEY is not set" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const system = [
            "You are Rentura AI, the official support assistant for the Rentura website.",
            "Rules:",
            "- Only answer questions directly about Rentura (features, pricing, usage, troubleshooting, product info).",
            "- Use ONLY the knowledge in RENTURA_KB. Do NOT use outside knowledge.",
            `- If the question is unrelated to Rentura, reply EXACTLY with: "${OFF_TOPIC_REPLY}"`,
            "- If the question is Rentura-related but not covered in RENTURA_KB, say you don’t know and direct to support@rentura.com.",
            "- Keep answers concise, helpful, and friendly.",
            "",
            "RENTURA_KB:",
            RENTURA_KB,
        ].join("\n");

        const resp = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify({
                model: "gpt-4o-mini",
                temperature: 0.3,
                messages: [
                    { role: "system", content: system },
                    { role: "user", content: userMessage },
                ],
            }),
        });

        const data: any = await resp.json();

        if (!resp.ok) {
            const errorMessage =
                data?.error?.message || (typeof data === "string" ? data : JSON.stringify(data));
            return new Response(JSON.stringify({ error: errorMessage }), {
                status: resp.status,
                headers: { "Content-Type": "application/json" },
            });
        }

        const reply =
            data?.choices?.[0]?.message?.content?.trim() ||
            "Sorry, I couldn’t generate a reply.";

        return new Response(JSON.stringify({ reply }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(JSON.stringify({ error: err?.message ?? "Server error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};
