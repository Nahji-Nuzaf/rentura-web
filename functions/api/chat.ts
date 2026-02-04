export const onRequestPost = async (context: any) => {
    try {
        const { message, system, history } = await context.request.json();
        const userMessage = String(message ?? "");

        const apiKey = context.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(JSON.stringify({ error: "GEMINI_API_KEY is not set" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        // Build a single prompt that includes system context + short history
        const safeHistory = Array.isArray(history) ? history.slice(-10) : [];
        const systemText = String(system ?? "");

        const prompt = [
            systemText ? `SYSTEM:\n${systemText}` : "",
            safeHistory.length
                ? `\nCHAT HISTORY:\n${safeHistory
                    .map((m: any) => `${m.role === "user" ? "User" : "Assistant"}: ${m.text}`)
                    .join("\n")}`
                : "",
            `\nUser: ${userMessage}\nAssistant:`,
        ]
            .filter(Boolean)
            .join("\n");

        const resp = await fetch(
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=" + apiKey,
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
                }),
            }
        );

        const data: any = await resp.json();

        if (!resp.ok) {
            return new Response(JSON.stringify({ error: data?.error?.message || "Gemini API error" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
            });
        }

        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ??
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
