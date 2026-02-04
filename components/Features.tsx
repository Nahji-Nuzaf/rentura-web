import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import {
    TrendingUp, ShieldCheck, Wrench, Wallet,
    CheckCircle2, Smartphone, CreditCard,
    Briefcase, Zap, FileText,
    Search, Video, MapPin,
    ArrowRight, Activity, Bell, Calendar
} from 'lucide-react';

// --- VISUAL COMPONENTS (High Fidelity Mockups) ---

const LandlordVisual = () => (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-md bg-[#0B1B33] rounded-xl border border-[#1E335C] p-6 shadow-2xl shadow-black/20 relative overflow-hidden group">
            {/* Glow effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-btn-primary/20 blur-3xl rounded-full pointer-events-none"></div>

            {/* Header */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <div className="text-[#7E8BAA] text-[10px] md:text-xs font-bold uppercase tracking-widest">Total Revenue</div>
                    <div className="text-2xl md:text-2xl font-bold text-white mt-1">$14,250.00</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
                    <TrendingUp size={12} /> +12.5%
                </div>
            </div>

            {/* Chart Bars */}
            <div className="flex items-end justify-between gap-2 h-32 md:h-40 mb-6">
                {[35, 65, 45, 80, 55, 90, 75].map((h, i) => (
                    <div key={i} className="w-full bg-[#102447] rounded-t-sm relative group/bar h-full flex items-end">
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className="w-full bg-btn-primary rounded-t-sm group-hover/bar:bg-btn-hover transition-colors relative"
                        >
                            {/* Tooltip on hover */}
                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0B1B33] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-[#1E335C]">
                                ${h * 150}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
            <div className="flex justify-between text-[10px] text-[#5F6F8A] font-mono font-medium">
                <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
            </div>

            {/* Recent Activity Item */}
            <div className="mt-6 pt-4 border-t border-[#1E335C] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={16} />
                </div>
                <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[#E6ECF5] truncate">Unit 4B Rent Received</div>
                    <div className="text-[10px] text-[#7E8BAA]">2 minutes ago</div>
                </div>
                <div className="text-xs font-bold text-white">+$2,400</div>
            </div>
        </div>
    </div>
);

const TenantVisual = () => (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 md:p-10 relative">
        {/* Background decorative elements */}
        <div className="absolute w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full max-w-[320px] bg-[#0B1B33] rounded-3xl border border-[#1E335C] p-8 shadow-2xl relative z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>

            <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-500/30 relative"
            >
                <div className="absolute inset-0 border-4 border-white/20 rounded-full"></div>
                <CheckCircle2 size={40} className="text-white" />
            </motion.div>

            <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Rent Paid!</h3>
                <p className="text-[#A8B3CF] text-sm">Your payment of <span className="text-white font-bold">$1,850</span> was successful.</p>
            </div>

            <div className="bg-[#102447] rounded-2xl p-4 border border-[#1E335C] backdrop-blur-sm">
                <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                        <ShieldCheck size={14} className="text-purple-400" />
                        <span className="text-xs font-bold text-[#A8B3CF]">Payment Logged</span>
                    </div>
                    <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">+15 pts</span>
                </div>
                <div className="h-2 w-full bg-[#050B17] rounded-full overflow-hidden mb-2">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    />
                </div>
                <div className="flex justify-between text-[10px] font-bold text-[#5F6F8A]">
                    <span>720</span>
                    <span className="text-white">735</span>
                    <span>850</span>
                </div>
            </div>
        </div>
    </div>
);

const ProviderVisual = () => (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 md:p-10">
        <div className="w-full max-w-sm space-y-4">
            <div className="text-xs font-bold text-[#5F6F8A] uppercase tracking-widest mb-2 pl-1">Job Feed</div>

            {/* Active Job Card */}
            <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="bg-[#102447] border border-[#1E335C] p-5 rounded-2xl shadow-xl border-l-4 border-l-purple-500 relative"
            >
                <div className="absolute top-4 right-4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>

                <div className="flex justify-between items-start mb-2">
                    <span className="bg-purple-500/20 text-purple-300 text-[10px] font-bold px-2 py-1 rounded">NEW REQUEST</span>
                </div>

                <div className="flex items-center justify-between mb-1">
                    <h4 className="font-bold text-white text-lg">Leaky Kitchen Faucet</h4>
                    <span className="font-bold text-white text-lg">$150</span>
                </div>

                <p className="text-xs text-[#7E8BAA] mb-4 flex items-center gap-1">
                    <MapPin size={12} /> 123 Main St, Apt 4B • 1.2mi away
                </p>

                <div className="flex gap-3">
                    <button className="flex-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold py-2.5 rounded-xl transition-colors shadow-lg shadow-purple-900/20">
                        Accept Job
                    </button>
                    <button className="px-4 bg-[#0B1B33] hover:bg-[#1E335C] text-[#A8B3CF] text-xs font-bold py-2.5 rounded-xl transition-colors">
                        Decline
                    </button>
                </div>
            </motion.div>

            {/* Inactive Card (Blurred) */}
            <div className="bg-[#0B1B33] border border-[#1E335C] p-4 rounded-2xl opacity-50 blur-[1px]">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                        <span className="text-xs text-[#7E8BAA] font-bold">COMPLETED</span>
                    </div>
                    <span className="font-bold text-[#5F6F8A]">$320</span>
                </div>
                <h4 className="font-bold text-[#A8B3CF] text-sm">HVAC Maintenance</h4>
            </div>
        </div>
    </div>
);

const SeekerVisual = () => (
    <div className="w-full h-full p-6 md:p-10 flex items-center justify-center">
        <div className="relative w-full max-w-md aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-[#1E335C] group cursor-pointer bg-[#0B1B33]">
            <img
                src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80"
                alt="Apartment Interior"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

            {/* Header Overlay */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div>
                    <div className="text-white font-bold text-lg">Mission Loft</div>
                    <div className="text-[#A8B3CF] text-xs">$2,800/mo</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                    <Video size={10} /> 3D TOUR
                </div>
            </div>

            {/* 3D Nav Controls Mockup */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#0B1B33]/90 backdrop-blur-md px-6 py-2 rounded-full border border-[#1E335C] flex items-center gap-6 shadow-xl">
                <button className="text-[#7E8BAA] hover:text-white transition-colors"><ArrowRight size={16} className="rotate-180" /></button>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Living Room</span>
                <button className="text-[#7E8BAA] hover:text-white transition-colors"><ArrowRight size={16} /></button>
            </div>

            {/* Interactive Hotspot */}
            <div className="absolute top-1/3 left-1/4 group/spot">
                <div className="w-4 h-4 bg-white rounded-full relative animate-ping opacity-75"></div>
                <div className="w-4 h-4 bg-white rounded-full absolute top-0 left-0 border-2 border-btn-primary shadow-lg cursor-pointer hover:scale-125 transition-transform"></div>

                {/* Tooltip */}
                <div className="absolute left-6 top-1/2 -translate-x-1/2 bg-[#0B1B33] text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap border border-[#1E335C] pointer-events-none">
                    Hardwood Floors
                </div>
            </div>
        </div>
    </div>
);

// --- DATA ---

const roles = [
    {
        id: 'landlord',
        label: 'Landlords',
        headline: 'Maximize Revenue. Reduce overhead.',
        subheadline: 'Automate Rent & Maintenance.',
        description: "Automate rent collection, maintenance workflows, and property oversight — all in one place.",
        Visual: LandlordVisual,
        features: [
            { label: 'Rent Collection', icon: Wallet },
            { label: 'Screening', icon: ShieldCheck },
            { label: 'Maintenance', icon: Wrench },
        ]
    },
    {
        id: 'tenant',
        label: 'Tenants',
        headline: 'Live Better.',
        subheadline: 'Smart rent payments, simplified.',
        description: "Simplify rent payments, split expenses with roommates, and keep your rental history organized — all in one app.",
        Visual: TenantVisual,
        features: [
            { label: 'Credit Boost', icon: TrendingUp },
            { label: 'Split Pay', icon: Smartphone },
            { label: '1-Tap Rent', icon: CreditCard },
        ]
    },
    {
        id: 'provider',
        label: 'Service Providers',
        headline: 'Grow Business.',
        subheadline: 'Jobs and simplified payouts.',
        description: "Stop chasing invoices. Get matched with verified maintenance jobs in your area and Get paid faster upon completion.",
        Visual: ProviderVisual,
        features: [
            { label: 'Instant Pay', icon: Zap },
            { label: 'Job Calendar', icon: Calendar },
            { label: 'Invoicing', icon: FileText },
        ]
    },
    {
        id: 'seeker',
        label: 'Renters',
        headline: 'Find Home.',
        subheadline: 'Tour smarter. Apply faster.',
        description: "Skip open house lines. Tour verified apartments in 3D, apply instantly, and manage rental steps digitally, all from your phone.",
        Visual: SeekerVisual,
        features: [
            { label: 'Smart Filters', icon: Search },
            { label: '3D Tours', icon: Video },
            { label: 'Direct Booking', icon: Activity },
        ]
    }
];

const Features: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeRoleIndex, setActiveRoleIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Breakpoints for 4 items: 0-0.25, 0.25-0.5, 0.5-0.75, 0.75-1.0
        const newIndex = Math.min(Math.floor(latest * 4), 3);
        if (newIndex !== activeRoleIndex) {
            setActiveRoleIndex(newIndex);
        }
    });

    const activeRole = roles[activeRoleIndex];

    return (
        <section id="benefits" className="bg-page relative">

            {/* 
         MOBILE VIEW (Standard Stack)
      */}
            <div className="lg:hidden py-20 px-6 space-y-20">
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-primary mb-4">The Ecosystem</h2>
                    <p className="text-secondary">One platform for everyone.</p>
                </div>
                {roles.map((role) => (
                    <div key={role.id} className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-2">{role.label}</h3>
                            <p className="text-secondary text-sm leading-relaxed">{role.description}</p>
                        </div>
                        <div className="aspect-[4/3] bg-card border border-border-base rounded-2xl overflow-hidden">
                            <role.Visual />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                            {role.features.map((feat, i) => (
                                <div key={i} className="bg-card p-3 rounded-lg flex flex-col items-center gap-2 text-center border border-border-base">
                                    <feat.icon className="text-btn-primary" size={16} />
                                    <span className="text-[10px] font-bold text-muted">{feat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* 
         DESKTOP VIEW (Sticky Scroll Tall Track)
      */}
            <div ref={containerRef} className="hidden lg:block relative h-[400vh]">
                <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden bg-page">

                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border-base)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-base)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-page via-transparent to-page pointer-events-none"></div>

                    <div className="max-w-7xl w-full px-6 grid grid-cols-12 gap-8 items-center relative z-10">

                        {/* LEFT COLUMN: Navigation (4 Cols) */}
                        <div className="col-span-4 space-y-12 pl-4">
                            <div>
                                <h2 className="text-5xl font-extrabold text-primary mb-6">The Ecosystem</h2>
                                <p className="text-secondary text-lg leading-relaxed max-w-sm">
                                    A unified platform connecting every stakeholder in the property market.
                                </p>
                            </div>

                            <div className="space-y-6 relative">
                                {roles.map((role, index) => {
                                    const isActive = index === activeRoleIndex;
                                    return (
                                        <div
                                            key={role.id}
                                            className={`relative pl-6 py-2 transition-all duration-500 cursor-pointer group ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-60'}`}
                                        >
                                            {/* Glowing Active Line */}
                                            <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-full transition-all duration-500 ${isActive ? 'bg-btn-primary shadow-[0_0_15px_rgba(47,143,255,0.8)]' : 'bg-border-base'}`}></div>

                                            <h3 className={`text-3xl font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted'}`}>
                                                {role.label}
                                            </h3>
                                            <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                                                <p className="text-btn-primary font-medium text-sm">{role.subheadline}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Dynamic Card (8 Cols) */}
                        <div className="col-span-8 flex justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeRole.id}
                                    initial={{ opacity: 0, y: 20, scale: 0.98 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -20, scale: 0.98 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="w-full aspect-[4/3] min-h-[600px] relative"
                                >
                                    {/* Glassmorphic Card Container */}
                                    <div className="absolute inset-0 bg-card/60 backdrop-blur-xl border border-border-base rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col">

                                        {/* Top Content */}
                                        <div className="p-8 pb-0 flex justify-between items-start z-10 relative">
                                            <div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                >
                                                    <h3 className="text-3xl font-bold text-primary mb-2">{activeRole.headline}</h3>
                                                    <p className="text-secondary text-base max-w-md leading-relaxed">
                                                        {activeRole.description}
                                                    </p>
                                                </motion.div>
                                            </div>

                                            {/* Icon Badge */}
                                            <div className="w-16 h-16 rounded-2xl bg-page border border-border-base flex items-center justify-center text-btn-primary">
                                                {activeRole.id === 'landlord' && <Briefcase size={32} />}
                                                {activeRole.id === 'tenant' && <Smartphone size={32} />}
                                                {activeRole.id === 'provider' && <Wrench size={32} />}
                                                {activeRole.id === 'seeker' && <Search size={32} />}
                                            </div>
                                        </div>

                                        {/* Middle Visual Area */}
                                        <div className="flex-1 relative z-0 lg:mb-44">
                                            <activeRole.Visual />
                                        </div>

                                        {/* Bottom Feature Grid */}
                                        <div className="p-8 pt-0 z-10 relative">
                                            <div className="grid grid-cols-3 gap-4">
                                                {activeRole.features.map((feat, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                                        className="bg-page/50 border border-border-base p-4 rounded-xl flex items-center gap-3 hover:bg-page transition-colors"
                                                    >
                                                        <div className="p-2 bg-btn-primary/10 rounded-lg text-btn-primary">
                                                            <feat.icon size={20} />
                                                        </div>
                                                        <span className="text-secondary font-bold text-sm">{feat.label}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;