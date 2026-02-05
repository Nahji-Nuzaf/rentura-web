import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Sparkles, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const RENTURA_CONTEXT = `
You are the AI Support Assistant for Rentura, a modern property management platform.
Your goal is to help users understand Rentura's features and benefits.

Key Features & Benefits:
1. Unified Dashboard: Track rent, maintenance requests, and occupancy rates in one real-time view.
2. Smart Messaging: Context-aware chat that keeps leases and maintenance history in the thread.
3. Financial Automations: Auto-reconcile payments and generate tax-ready reports instantly.
4. AI Screening: Catch fraud instantly with ML-powered checks (identity, income, eviction history).
5. Auto-Collect: Sync banks & automate rent chasing.
6. Maintenance Tracking: Track repairs from request to resolution, auto-assign vendors.
7. For Tenants: Build credit scores with rent payments, split rent with roommates, one-tap payments.
8. Rentura Intelligence (Coming Q4 2026): Predictive analytics, legal copilot, and smart tenant risk scores.

Pricing:
- Free for Tenants.
- Subscription models for Landlords (Basic & Premium).

Tone: Professional, helpful, concise, and friendly.
If you don't know an answer, suggest contacting support@rentura.com.
`;

type ChatMessage = { role: "user" | "model"; text: string };

const AiChatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<ChatMessage[]>([
        {
            role: "model",
            text: "Hi! I'm Rentura's AI assistant. How can I help you optimize your rental experience today?",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isOpen]);

    const handleSend = async (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMsg = input;
        setInput("");

        // Add user message immediately
        setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
        setIsLoading(true);

        try {
            // Build history INCLUDING the new user message (since state update is async)
            const historyForRequest = [
                ...messages,
                { role: "user" as const, text: userMsg },
            ];

            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Send context + history so backend can answer accurately
                body: JSON.stringify({
                    message: userMsg,
                    system: RENTURA_CONTEXT,
                    history: historyForRequest,
                }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data?.error || "Failed to get response");
            }

            const responseText = String(data?.reply ?? "").trim();

            if (!responseText) {
                throw new Error("Empty response");
            }

            setMessages((prev) => [...prev, { role: "model", text: responseText }]);
        } catch (error) {
            console.error("Chat Error:", error);
            setMessages((prev) => [
                ...prev,
                {
                    role: "model",
                    text: "I'm having a little trouble connecting to the server right now. Please try again later.",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Toggle Button */}
            <motion.button
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-btn-primary hover:bg-btn-hover text-white rounded-full shadow-lg shadow-btn-primary/30 flex items-center justify-center transition-colors"
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X size={24} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle size={24} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 z-50 w-[90vw] md:w-[400px] h-[500px] max-h-[80vh] bg-card-elevated backdrop-blur-xl border border-border-base rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-border-base bg-page/50 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-btn-primary/20 flex items-center justify-center text-btn-primary">
                                <Sparkles size={16} />
                            </div>
                            <div>
                                <h3 className="font-bold text-primary text-sm">Rentura AI</h3>
                                <div className="flex items-center gap-1.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                    <span className="text-[10px] text-muted font-medium">
                                        Online
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border-base scrollbar-track-transparent">
                            {messages.map((msg, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-start gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                        }`}
                                >
                                    <div
                                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user"
                                            ? "bg-secondary text-white"
                                            : "bg-btn-primary/20 text-btn-primary"
                                            }`}
                                    >
                                        {msg.role === "user" ? (
                                            <User size={14} />
                                        ) : (
                                            <Bot size={14} />
                                        )}
                                    </div>

                                    <div
                                        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === "user"
                                            ? "bg-btn-primary text-white rounded-tr-sm"
                                            : "bg-page text-primary border border-border-base rounded-tl-sm"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-full bg-btn-primary/20 text-btn-primary flex items-center justify-center shrink-0">
                                        <Bot size={14} />
                                    </div>
                                    <div className="bg-page border border-border-base rounded-2xl rounded-tl-sm px-4 py-3">
                                        <div className="flex gap-1">
                                            <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce"></div>
                                            <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce delay-100"></div>
                                            <div className="w-1.5 h-1.5 bg-muted rounded-full animate-bounce delay-200"></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={handleSend}
                            className="p-4 border-t border-border-base bg-page/50"
                        >
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about features, pricing..."
                                    className="w-full bg-card border border-border-base text-primary text-sm rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-btn-primary/50 focus:ring-1 focus:ring-btn-primary/50 transition-all placeholder-muted"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 p-2 bg-btn-primary text-white rounded-lg hover:bg-btn-hover disabled:opacity-50 disabled:hover:bg-btn-primary transition-colors"
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-muted">
                                    AI can make mistakes. Please verify important info.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default AiChatbot;
