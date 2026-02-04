import React from 'react';
import { motion } from 'framer-motion';

// --- Mock Data for Marquees ---
const users = [
    { name: "Alex Johnson", img: "https://i.pravatar.cc/150?u=1" },
    { name: "Sarah Smith", img: "https://i.pravatar.cc/150?u=2" },
    { name: "Mike Brown", img: "https://i.pravatar.cc/150?u=3" },
    { name: "Emily Davis", img: "https://i.pravatar.cc/150?u=4" },
    { name: "Chris Wilson", img: "https://i.pravatar.cc/150?u=5" },
    { name: "Jessica Taylor", img: "https://i.pravatar.cc/150?u=6" },
    { name: "David Martinez", img: "https://i.pravatar.cc/150?u=7" },
    { name: "Emma Anderson", img: "https://i.pravatar.cc/150?u=8" },
    { name: "Daniel Thomas", img: "https://i.pravatar.cc/150?u=9" },
    { name: "Lisa Jackson", img: "https://i.pravatar.cc/150?u=10" },
    { name: "Brian White", img: "https://i.pravatar.cc/150?u=11" },
    { name: "Karen Harris", img: "https://i.pravatar.cc/150?u=12" },
];

interface User {
    name: string;
    img: string;
}

const UserPill: React.FC<{ user: User }> = ({ user }) => (
    <div className="flex items-center gap-3 px-4 py-2 bg-card border border-border-base rounded-full backdrop-blur-sm shrink-0">
        <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full border border-border-base object-cover" />
        <span className="text-secondary text-xs font-medium whitespace-nowrap">{user.name}</span>
    </div>
);

const MarqueeRow = ({ users, direction, speed }: { users: User[], direction: 'left' | 'right', speed: number }) => {
    return (
        <div className="flex overflow-hidden relative w-full">
            <motion.div
                className="flex gap-4 pr-4"
                initial={{ x: direction === 'left' ? "0%" : "-50%" }}
                animate={{
                    x: direction === 'left' ? "-50%" : "0%"
                }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity
                }}
                style={{ width: "fit-content" }}
            >
                {/* Quadruple the list to ensure smooth scrolling on wide screens */}
                {[...users, ...users, ...users, ...users].map((user, i) => (
                    <UserPill key={i} user={user} />
                ))}
            </motion.div>
        </div>
    );
};

const CommunityTrust: React.FC = () => {
    return (
        <section className="relative h-[70vh] min-h-[450px] bg-page overflow-hidden flex items-center justify-center">
            
            {/* --- 1. Background Animation (The Marquee) --- */}
            <div className="absolute inset-0 flex flex-col justify-center gap-6 md:gap-12 opacity-60 select-none pointer-events-none z-0">
                {/* Row 1: Left -> Right */}
                <MarqueeRow users={users.slice(0, 6)} direction="right" speed={40} />
                
                {/* Row 2: Right -> Left */}
                <MarqueeRow users={users.slice(6, 12)} direction="left" speed={50} />

                {/* Row 3: Left -> Right */}
                <MarqueeRow users={users.slice(0, 6).reverse()} direction="right" speed={45} />
                
                {/* Row 4: Right -> Left */}
                <MarqueeRow users={users.slice(6, 12).reverse()} direction="left" speed={55} />
            </div>

            {/* --- Side Fades --- */}
            <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-page to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-page to-transparent z-10 pointer-events-none" />

            {/* --- 2. Foreground Card (The Hero) --- */}
            <motion.div 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-20 w-full max-w-4xl mx-6"
            >
                <div className="bg-card-elevated backdrop-blur-xl border border-border-base rounded-3xl shadow-2xl p-8 md:p-12 text-center">
                    
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-tight tracking-tight">
                        Growing with early landlords, <br className="hidden md:block"/> tenants, renters & service providers.
                        {/* Trusted by thousands of <br className="hidden md:block"/> Landlords & Tenants. */}
                    </h2>
                    
                    {/* Divider */}
                    <div className="w-full h-px bg-border-base mb-8" />
                    
                    {/* Stats Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-extrabold text-btn-primary mb-2">300+</span>
                            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Early Access Signups</span>
                        </div>
                        
                        {/* Stat 2 */}
                        <div className="flex flex-col items-center relative md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-12 md:before:w-px md:before:bg-border-base md:after:absolute md:after:right-0 md:after:top-1/2 md:after:-translate-y-1/2 md:after:h-12 md:after:w-px md:after:bg-border-base">
                            <span className="text-4xl md:text-5xl font-extrabold text-btn-primary mb-2">10+</span>
                            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Categories Supported</span>
                        </div>
                        
                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-extrabold text-btn-primary mb-2">100%</span>
                            <span className="text-secondary font-bold text-sm uppercase tracking-wider">Privacy-First</span>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
}

export default CommunityTrust;