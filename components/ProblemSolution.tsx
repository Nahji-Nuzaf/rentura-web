import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Mail, MessageCircle, StickyNote, ArrowRight, TrendingUp, AlertTriangle, ShieldCheck, Wrench } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-page relative overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-btn-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Headline */}
             <div className="text-center mb-16">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-extrabold text-primary leading-tight mb-4"
                >
                    Rentals shouldn't feel like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-muted decoration-4 underline decoration-btn-primary/50 underline-offset-4">second job</span>.
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-secondary text-lg max-w-2xl mx-auto"
                >
                    Stop juggling spreadsheets and apps. Switch to the operating system that brings sanity back to rentals.
                </motion.p>
            </div>

            {/* Container for Cards + Arrow */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-0 relative">
                
                {/* LEFT CARD: The Old Way */}
                {/* Light: bg-[#F3F6FA] (Manual Hex for light), Dark: bg-card */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full lg:w-[42%] h-[540px] rounded-[2.5rem] bg-[#F3F6FA] dark:bg-[#0B1B33] border border-border-base overflow-hidden relative flex flex-col group"
                >
                    {/* Header Content */}
                    <div className="p-8 text-center border-b border-border-base z-10">
                        <h3 className="text-2xl font-bold text-primary">The Fragmented Reality</h3>
                        <p className="text-secondary text-sm mt-2 font-medium">Multiple tools. No visibility. Constant follow-ups.</p>
                    </div>

                    {/* Visual Chaos */}
                    <div className="flex-1 relative flex items-center justify-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                         {/* Overdue Pill */}
                         <div className="absolute top-8 right-8 z-20 bg-red-500/10 border border-red-500/50 text-red-500 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 animate-pulse shadow-lg shadow-red-900/20">
                            <AlertTriangle size={12} /> OVERDUE
                         </div>

                         {/* Excel */}
                         <motion.div 
                             animate={{ rotate: [-12, -10, -12], y: [0, -5, 0] }} 
                             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                             className="absolute bg-[#1D6F42] p-4 rounded-xl shadow-2xl border border-white/10 left-12 top-16 text-white w-24 h-24 flex items-center justify-center"
                         >
                             <FileSpreadsheet size={40}/>
                         </motion.div>

                         {/* Gmail */}
                         <motion.div 
                             animate={{ rotate: [12, 10, 12], y: [0, 5, 0] }} 
                             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} 
                             className="absolute bg-white p-4 rounded-xl shadow-2xl right-12 top-28 text-red-500 relative w-24 h-24 flex items-center justify-center"
                         >
                            <Mail size={40}/>
                            <div className="absolute -top-3 -right-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-slate-900 shadow-md">99+</div>
                         </motion.div>

                         {/* WhatsApp */}
                         <motion.div 
                             animate={{ rotate: [-6, -3, -6], x: [0, 5, 0] }} 
                             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} 
                             className="absolute bg-[#25D366] p-4 rounded-xl shadow-2xl left-20 bottom-24 text-white w-20 h-20 flex items-center justify-center"
                         >
                             <MessageCircle size={32}/>
                         </motion.div>

                         {/* Sticky Note */}
                         <motion.div 
                             animate={{ rotate: [6, 8, 6] }} 
                             transition={{ duration: 7, repeat: Infinity }}
                             className="absolute bg-[#FACC15] p-4 rounded shadow-xl text-slate-900 w-32 bottom-32 right-16 rotate-6 flex flex-col items-center justify-center aspect-square"
                         >
                             <StickyNote size={24} className="mb-1 opacity-70"/>
                             <span className="text-xs font-bold leading-tight text-center italic font-serif">Call Plumber ASAP!!</span>
                         </motion.div>
                    </div>

                    {/* Description Footer */}
                    <div className="p-6 text-center text-secondary text-sm border-t border-border-base z-10">
                        Hours wasted connecting bank transfers, messages, and spreadsheets.
                    </div>
                </motion.div>

                {/* CONNECTOR ARROW */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                    className="z-20 -my-6 lg:my-0 lg:-mx-6 relative"
                >
                    <div className="bg-card border border-border-base text-secondary rounded-full p-4 shadow-xl flex items-center justify-center relative z-10">
                        <ArrowRight size={24} className="rotate-90 lg:rotate-0 transition-transform duration-300" />
                    </div>
                </motion.div>

                {/* RIGHT CARD: The Rentura Way */}
                {/* Light: bg-white, Dark: bg-card-elevated (#102447) */}
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-full lg:w-[42%] h-[540px] rounded-[2.5rem] bg-white dark:bg-[#102447] border border-btn-primary/30 dark:border-[#1E335C] overflow-hidden relative flex flex-col shadow-2xl shadow-btn-primary/5 dark:shadow-btn-primary/10"
                >
                     {/* Header Content */}
                     <div className="p-8 text-center border-b border-border-base bg-btn-primary/5 z-10">
                        <h3 className="text-2xl font-bold text-primary">The Unified Standard</h3>
                        <p className="text-secondary text-sm mt-2 font-medium">One platform. Total clarity. Automated peace of mind.</p>
                    </div>

                    {/* Visual Solution */}
                    <div className="flex-1 relative flex items-center justify-center p-6">
                        {/* Glow */}
                        <div className="absolute w-64 h-64 bg-btn-primary/10 rounded-full blur-[80px] pointer-events-none animate-pulse"></div>
                        
                        {/* Glassmorphic Card */}
                        <motion.div 
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            className="w-full max-w-[280px] bg-card/60 backdrop-blur-xl border border-border-base rounded-2xl p-6 shadow-2xl relative z-10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <span className="text-xs font-bold text-muted uppercase tracking-wider">Status Overview</span>
                                <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e] animate-pulse"></div>
                            </div>
                            
                            <div className="space-y-4">
                                {/* Status Items */}
                                <div className="flex items-center justify-between bg-page/50 p-3 rounded-xl border border-border-base hover:bg-page transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-500/10 p-1.5 rounded-lg text-green-500"><TrendingUp size={16} /></div>
                                        <span className="text-sm font-semibold text-primary">Rent</span>
                                    </div>
                                    <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded border border-green-500/20">Paid</span>
                                </div>
                                
                                <div className="flex items-center justify-between bg-page/50 p-3 rounded-xl border border-border-base hover:bg-page transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-btn-primary/10 p-1.5 rounded-lg text-btn-primary"><ShieldCheck size={16} /></div>
                                        <span className="text-sm font-semibold text-primary">Tenant</span>
                                    </div>
                                    <span className="text-xs font-bold text-btn-primary bg-btn-primary/10 px-2 py-1 rounded border border-btn-primary/20">Active</span>
                                </div>
                                
                                <div className="flex items-center justify-between bg-page/50 p-3 rounded-xl border border-border-base hover:bg-page transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-purple-500/10 p-1.5 rounded-lg text-purple-500"><Wrench size={16} /></div>
                                        <span className="text-sm font-semibold text-primary">Maint.</span>
                                    </div>
                                    <span className="text-xs font-bold text-purple-500 bg-purple-500/10 px-2 py-1 rounded border border-purple-500/20">Resolved</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Description Footer */}
                    <div className="p-6 text-center text-secondary text-sm border-t border-border-base bg-btn-primary/5 z-10">
                        Manage payments, chat, and rental documents in one synchronized, secure hub.
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  );
};

export default ProblemSolution;