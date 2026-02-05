import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, User, Upload } from 'lucide-react';

const Waitlist: React.FC = () => {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState<'email' | 'avatar' | 'success'>('email');
    const [loading, setLoading] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const presetAvatars = [
        "https://i.pravatar.cc/150?u=a1",
        "https://i.pravatar.cc/150?u=a2",
        "https://i.pravatar.cc/150?u=a3",
        "https://i.pravatar.cc/150?u=a4"
    ];

    const handleEmailSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setLoading(true);
        // Simulate API check
        setTimeout(() => {
            setLoading(false);
            setStep('avatar');
        }, 800);
    };

    const handleAvatarSubmit = () => {
        setLoading(true);
        // Simulate profile creation
        setTimeout(() => {
            setLoading(false);
            setStep('success');
        }, 1000);
    };

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedAvatar(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <section id="waitlist" className="relative py-24 lg:py-40 bg-page overflow-hidden">

            {/* Background Decor - Massive Text */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end select-none pointer-events-none opacity-5">
                <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter text-transparent whitespace-nowrap stroke-text">
                    RENTURA
                </h1>
                <style jsx>{`
                    .stroke-text {
                        -webkit-text-stroke: 2px var(--border-base);
                    }
                 `}</style>
            </div>

            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end select-none pointer-events-none">
                <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter whitespace-nowrap outline-text">
                    RENTURA
                </h1>

                <style jsx>{`
    .outline-text {
      color: transparent;
      -webkit-text-stroke: 3px rgba(47, 143, 255, 0.18);
      text-shadow: 0 0 24px rgba(47, 143, 255, 0.12);
    }
  `}</style>
            </div> */}

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full flex justify-center items-end select-none pointer-events-none opacity-5">
                <h1 className="text-[12rem] md:text-[18rem] lg:text-[22rem] font-black leading-none tracking-tighter text-transparent whitespace-nowrap stroke-text">
                    RENTURA
                </h1>

                <style jsx>{`
    .stroke-text {
      color: transparent;
      -webkit-text-stroke: 2.5px rgba(47, 143, 255, 2);
    }
  `}</style>
            </div>




            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">

                    {/* LEFT COLUMN: Value Prop */}
                    <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl lg:text-6xl font-extrabold text-primary leading-tight mb-6"
                        >
                            Ready to <br />
                            <span className="text-btn-primary">Rent Smarter?</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-secondary font-medium mb-12"
                        >
                            Join the ecosystem today.
                        </motion.p>

                        {/* Social Proof Links */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="hidden lg:flex flex-wrap gap-5 items-center text-muted font-bold uppercase tracking-wider text-sm"
                        >
                            <span>Save Time</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border-base"></span>
                            <span>Reduce Manual Work</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-border-base"></span>
                            <span>Clear Payments</span>
                            {/* <span className="w-1.5 h-1.5 rounded-full bg-border-base"></span>
                            <span>One Dashboard</span> */}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Floating Card (Super Sized) */}
                    <div className="flex justify-center lg:justify-end w-full relative z-20">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="relative w-full max-w-xl lg:-my-12"
                        >
                            {/* Pill Badge */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 bg-card text-primary px-8 py-3 rounded-full font-bold text-xs md:text-base uppercase tracking-widest shadow-[0_0_25px_rgba(0,0,0,0.1)] border border-border-base">
                                Early Access
                            </div>

                            <div className="bg-white dark:bg-[#102447] border border-border-base rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-2xl shadow-black/20 dark:shadow-black/50 relative overflow-hidden min-h-[550px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">

                                    {step === 'email' && (
                                        <motion.div
                                            key="email"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="text-center"
                                        >
                                            <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 leading-tight">Get the Latest Updates.</h3>
                                            <p className="text-secondary text-lg md:text-xl mb-10 leading-relaxed font-medium">
                                                Subscribe to be the first to know when Rentura launches and get early-access perks.
                                            </p>
                                            <form onSubmit={handleEmailSubmit} className="space-y-5">
                                                <input
                                                    type="email"
                                                    placeholder="Your email address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                    className="w-full h-16 bg-page text-primary placeholder-muted px-8 rounded-2xl text-lg font-semibold focus:outline-none focus:ring-4 focus:ring-btn-primary/20 transition-all border border-border-base"
                                                />
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="w-full h-16 bg-btn-primary hover:bg-btn-hover text-white text-lg font-bold rounded-2xl transition-all shadow-lg shadow-btn-primary/20 flex items-center justify-center gap-3"
                                                >
                                                    {loading ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : <>Join Waitlist <ArrowRight size={24} /></>}
                                                </button>
                                            </form>
                                        </motion.div>
                                    )}

                                    {step === 'avatar' && (
                                        <motion.div
                                            key="avatar"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                        >
                                            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 text-center">Customize Profile</h3>
                                            <p className="text-secondary mb-8 text-center text-lg">Choose an avatar for your new account.</p>

                                            <div className="grid grid-cols-4 gap-4 mb-8">
                                                {presetAvatars.map((avatar, i) => (
                                                    <button key={i} onClick={() => setSelectedAvatar(avatar)} className={`relative rounded-2xl overflow-hidden aspect-square border-4 ${selectedAvatar === avatar ? 'border-btn-primary ring-4 ring-btn-primary/30' : 'border-transparent opacity-60 hover:opacity-100 transition-opacity'}`}>
                                                        <img src={avatar} alt="" className="w-full h-full object-cover" />
                                                        {selectedAvatar === avatar && <div className="absolute inset-0 bg-btn-primary/40 flex items-center justify-center"><CheckCircle2 size={32} className="text-white drop-shadow-lg" /></div>}
                                                    </button>
                                                ))}
                                            </div>

                                            <div className="text-center mb-8">
                                                <div className="text-sm text-muted font-bold uppercase tracking-wider mb-6">OR</div>
                                                <button onClick={() => fileInputRef.current?.click()} className="flex items-center justify-center gap-3 w-full h-16 border-2 border-dashed border-border-base rounded-2xl text-secondary text-lg font-semibold hover:text-primary hover:border-muted hover:bg-page transition-all">
                                                    <Upload size={20} /> <span>Upload Custom Photo</span>
                                                </button>
                                                <input type="file" ref={fileInputRef} onChange={handleFileUpload} className="hidden" accept="image/*" />
                                            </div>

                                            <button
                                                onClick={handleAvatarSubmit}
                                                disabled={!selectedAvatar || loading}
                                                className={`w-full h-16 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${selectedAvatar ? 'bg-btn-primary text-white hover:bg-btn-hover shadow-xl' : 'bg-page text-muted cursor-not-allowed border border-border-base'}`}
                                            >
                                                {loading ? <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" /> : 'Complete Setup'}
                                            </button>
                                        </motion.div>
                                    )}

                                    {step === 'success' && (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-4"
                                        >
                                            <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-500/30">
                                                <CheckCircle2 size={48} className="text-white" />
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">You're In!</h3>
                                            <p className="text-secondary text-lg md:text-xl mb-10 leading-relaxed">
                                                Welcome, {email.split('@')[0]}. <br /> We've sent a confirmation to your inbox.
                                            </p>
                                            <div className="bg-page rounded-2xl p-6 flex items-center gap-5 text-left border border-border-base">
                                                {selectedAvatar ? (
                                                    <img src={selectedAvatar} className="w-16 h-16 rounded-full border-2 border-border-base object-cover" />
                                                ) : (
                                                    <div className="w-16 h-16 bg-card rounded-full flex items-center justify-center"><User size={24} className="text-muted" /></div>
                                                )}
                                                <div>
                                                    <div className="text-primary font-bold text-lg">Profile Created</div>
                                                    <div className="text-accent-blue text-sm font-medium">Priority Access Granted</div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>

        </section>
    );
};

export default Waitlist;