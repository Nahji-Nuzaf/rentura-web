import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LineChart, FileText, ShieldCheck, Check } from 'lucide-react';

const PremiumAI: React.FC = () => {
    const [email, setEmail] = useState('');
    const [notified, setNotified] = useState(false);

    const handleNotify = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setNotified(true);
        }
    };

    return (
        <section className="py-20 bg-page">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-card dark:bg-card-elevated border border-border-base rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl shadow-black/10 dark:shadow-black/30"
                >
                    {/* Background Detail - Subtle Purple Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-btn-primary/5 to-transparent pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        {/* Header */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAF3FF] dark:bg-[#102447] border border-btn-primary/20 text-btn-primary dark:text-accent-blue text-xs font-bold tracking-wider mb-6">
                            COMING SOON
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Rentura Intelligence.</h2>
                        <p className="text-secondary text-lg max-w-2xl leading-relaxed mb-12">
                            A suite of AI-powered tools designed to maximize revenue and minimize risk.
                        </p>

                        {/* Feature Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left w-full mb-12">
                            {/* Column 1: Market Insights */}
                            <div className="flex flex-col items-start">
                                <div className="w-12 h-12 bg-page rounded-lg flex items-center justify-center mb-4 border border-border-base">
                                    <LineChart className="text-btn-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">Smart Price Predictions</h3>
                                <p className="text-secondary leading-relaxed text-sm">
                                    Know exactly how much to charge based on real-time local market trends.
                                </p>
                            </div>

                            {/* Column 2: Legal Automation */}
                            <div className="flex flex-col items-start">
                                <div className="w-12 h-12 bg-page rounded-lg flex items-center justify-center mb-4 border border-border-base">
                                    <FileText className="text-btn-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">Auto-Draft Leases</h3>
                                <p className="text-secondary leading-relaxed text-sm">
                                    Generate lawyer-grade rental agreements tailored to your specific region.
                                </p>
                            </div>

                            {/* Column 3: Risk Assessment */}
                            <div className="flex flex-col items-start">
                                <div className="w-12 h-12 bg-page rounded-lg flex items-center justify-center mb-4 border border-border-base">
                                    <ShieldCheck className="text-btn-primary" size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-primary mb-2">Tenant Trust Score</h3>
                                <p className="text-secondary leading-relaxed text-sm">
                                    Go beyond credit scores with behavioral risk analysis and income verification.
                                </p>
                            </div>
                        </div>

                        {/* CTA Bottom */}
                        <div className="w-full max-w-md">
                            {!notified ? (
                                <form onSubmit={handleNotify} className="flex gap-3">
                                    <input 
                                        type="email" 
                                        placeholder="Enter your email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="flex-1 bg-page border border-border-base rounded-xl px-4 py-3 text-primary placeholder-muted focus:outline-none focus:border-btn-primary transition-colors text-sm"
                                        required
                                    />
                                    <button type="submit" className="bg-btn-primary hover:bg-btn-hover text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap text-sm shadow-lg shadow-btn-primary/20">
                                        Notify Me
                                    </button>
                                </form>
                            ) : (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex items-center justify-center gap-2 text-green-500 font-bold bg-green-500/10 py-3 rounded-xl border border-green-500/20 w-full"
                                >
                                    <Check size={18} /> You're on the list!
                                </motion.div>
                            )}
                            <p className="text-muted text-xs mt-3">
                                Be the first to know when AI features launch.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default PremiumAI;