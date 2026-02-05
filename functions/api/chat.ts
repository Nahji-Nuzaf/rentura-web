// functions/api/chat.ts

// ✅ Rentura-only knowledge base (edit/extend this any time)
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

// ✅ Strict “only Rentura” policy (enforced on the server)
const SYSTEM_POLICY = `
You are Rentura AI, the official support assistant for the Rentura website.

Hard rules you MUST follow:
- Only answer questions directly about Rentura (features, pricing, usage, troubleshooting, product info).
- Use ONLY the knowledge in RENTURA_KB below. Do NOT use outside knowledge.
- If the user asks anything unrelated to Rentura, reply EXACTLY with:
  "I can only help with Rentura-related questions. Please ask about Rentura features, pricing, or how to use the platform. If you need support, contact support@rentura.com."
- If the user asks something Rentura-related but it is not covered in RENTURA_KB, say you don’t know and direct them to support@rentura.com.
- Keep answers concise, helpful, and friendly.
`;

// ✅ Simple keyword gate to block off-topic queries BEFORE calling Gemini (saves cost)
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
    "service-providers",
];

const OFF_TOPIC_REPLY =
    "I can assist with Rentura related questions only. For support, please contact rentura@gmail.com";

export const onRequestPost = async (context: any) => {
    try {
        const { message } = await context.request.json();
        const userMessage = String(message ?? "").trim();

        if (!userMessage) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        // 🔒 Block off-topic messages early
        const lower = userMessage.toLowerCase();
        const isRenturaRelated = RENTURA_KEYWORDS.some((k) => lower.includes(k));
        if (!isRenturaRelated) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

        const apiKey = context.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: "GEMINI_API_KEY is not set" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        // ✅ Strongly-scoped prompt: policy + KB + user question
        const prompt = `
${SYSTEM_POLICY}

RENTURA_KB:
${RENTURA_KB}

USER QUESTION:
${userMessage}
`;

        const resp = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: prompt }],
                        },
                    ],
                    // Optional: keep responses more deterministic
                    generationConfig: {
                        temperature: 0.3,
                        topP: 0.9,
                    },
                }),
            }
        );

        const data: any = await resp.json();

        // if (!resp.ok) {
        //     return new Response(JSON.stringify({ error: data?.error || data }), {
        //         status: 500,
        //         headers: { "Content-Type": "application/json" },
        //     });
        // }
        if (!resp.ok) {
            const errorMessage =
                data?.error?.message ||
                (typeof data === "string" ? data : JSON.stringify(data));

            return new Response(JSON.stringify({ error: errorMessage }), {
                status: resp.status,
                headers: { "Content-Type": "application/json" },
            });
        }


        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim() ||
            "Sorry, I couldn’t generate a reply.";

        // Final safety net: if the model still answers off-topic, override it
        const replyLower = reply.toLowerCase();
        const looksOffTopic =
            replyLower.includes("as an ai") ||
            replyLower.includes("i can help with many") ||
            replyLower.includes("general") ||
            replyLower.includes("unrelated");

        if (looksOffTopic) {
            return new Response(JSON.stringify({ reply: OFF_TOPIC_REPLY }), {
                headers: { "Content-Type": "application/json" },
            });
        }

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
