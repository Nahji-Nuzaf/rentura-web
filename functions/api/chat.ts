export const onRequestPost = async (context: any) => {
    try {
        const { message } = await context.request.json();
        const userMessage = String(message ?? "");

        const apiKey = context.env.GEMINI_API_KEY;
        if (!apiKey) {
            return new Response(
                JSON.stringify({ error: "GEMINI_API_KEY is not set" }),
                { status: 500 }
            );
        }

        const resp = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents: [
                        {
                            role: "user",
                            parts: [{ text: userMessage }],
                        },
                    ],
                }),
            }
        );

        const data: any = await resp.json();

        if (!resp.ok) {
            return new Response(
                JSON.stringify({ error: data?.error || data }),
                { status: 500 }
            );
        }

        const reply =
            data?.candidates?.[0]?.content?.parts?.[0]?.text ??
            "Sorry, I couldn’t generate a reply.";

        return new Response(JSON.stringify({ reply }), {
            headers: { "Content-Type": "application/json" },
        });
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err?.message ?? "Server error" }),
            { status: 500 }
        );
    }
};
