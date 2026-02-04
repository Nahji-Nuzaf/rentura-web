import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, RefreshCcw, Globe, Wrench, ShieldCheck, CreditCard, Activity, ArrowRight } from 'lucide-react';

const features = [
  {
    id: 1,
    title: 'AI Screening',
    description: 'Catch fraud instantly with ML-powered checks that analyze thousands of data points to verify identity and income.',
    icon: Cpu,
    visualColor: 'bg-blue-500',
    visualIcon: ShieldCheck
  },
  {
    id: 2,
    title: 'Auto-Collect',
    description: 'Sync banks & automate rent chasing. Reduce processing costs by 50% with direct reconciliation.',
    icon: RefreshCcw,
    visualColor: 'bg-emerald-500',
    visualIcon: CreditCard
  },
  {
    id: 3,
    title: 'Global Mgmt',
    description: 'Manage units across borders effortlessly. Multi-currency support and localized compliance built-in.',
    icon: Globe,
    visualColor: 'bg-purple-500',
    visualIcon: Globe
  },
  {
    id: 4,
    title: 'Maintenance',
    description: 'Track repairs from request to resolution. Auto-assign vendors and approve invoices on the go.',
    icon: Wrench,
    visualColor: 'bg-orange-500',
    visualIcon: Activity
  }
];

const PlatformFeatures: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-page border-t border-border-base">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="bg-card rounded-full px-4 py-1.5 mb-6 border border-border-base inline-block">
            <span className="text-primary text-sm font-medium tracking-wide">Our Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary max-w-2xl leading-tight">
            One Platform, <br/> Many Solutions.
          </h2>
        </div>

        {/* Desktop Horizontal Accordion */}
        <div className="hidden lg:flex h-[600px] w-full border border-border-base rounded-3xl overflow-hidden shadow-2xl shadow-black/10 bg-[#0B1B33]">
            {features.map((feature, index) => {
                const isHovered = hoveredIndex === index;
                
                return (
                    <motion.div
                        key={feature.id}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                        className={`relative h-full border-r border-[#1E335C] last:border-r-0 bg-gradient-to-b from-[#0B1B33] to-[#050B17] overflow-hidden cursor-pointer transition-colors duration-500`}
                        animate={{ 
                            flex: isHovered ? 3 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 200, damping: 25 }}
                    >
                         {/* Background Highlight on Hover */}
                         {isHovered && <div className="absolute inset-0 bg-[#102447] pointer-events-none" />}

                         {/* Active Highlight (Bottom Glow) */}
                         <div className={`absolute bottom-0 left-0 right-0 h-1 bg-btn-primary shadow-[0_-2px_20px_rgba(47,143,255,0.8)] transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

                         {/* Content Container */}
                         <div className="relative h-full w-full">
                             
                             {/* Compressed State Content (Icon + Vertical Text) */}
                             <motion.div
                                animate={{ 
                                    opacity: isHovered ? 0 : 1,
                                    scale: isHovered ? 0.9 : 1
                                }}
                                transition={{ duration: 0.3 }}
                                className="absolute inset-0 flex flex-col items-center justify-center gap-12 p-4"
                             >
                                 <div className={`w-16 h-16 rounded-2xl bg-[#102447] border border-[#1E335C] flex items-center justify-center text-[#7E8BAA] group-hover:text-white transition-colors`}>
                                     <feature.icon size={32} />
                                 </div>
                                 <h3 className="text-xl font-bold text-[#5F6F8A] tracking-widest uppercase [writing-mode:vertical-rl] rotate-180 whitespace-nowrap">
                                     {feature.title}
                                 </h3>
                             </motion.div>

                             {/* Expanded State Content */}
                             <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ 
                                    opacity: isHovered ? 1 : 0,
                                }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                                className="w-full h-full flex items-center justify-between gap-8 absolute inset-0 p-12"
                             >
                                 {/* Text Content (Left) */}
                                 <div className="flex-1 min-w-[300px] z-10">
                                     <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white ${feature.visualColor} shadow-lg`}>
                                         <feature.icon size={28} />
                                     </div>
                                     <h3 className="text-4xl font-bold text-white mb-6 leading-tight">
                                         {feature.title}
                                     </h3>
                                     <p className="text-[#A8B3CF] text-lg leading-relaxed mb-8 border-l-2 border-[#1E335C] pl-4">
                                         {feature.description}
                                     </p>
                                     <div className="flex items-center gap-2 text-btn-primary font-bold text-sm uppercase tracking-wider group">
                                         Explore Feature <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                     </div>
                                 </div>

                                 {/* Visual (Right) - Simulated UI */}
                                 <div className="flex-1 h-full flex items-center justify-center relative">
                                      {/* Decorative glowing background */}
                                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 ${feature.visualColor} blur-[100px] opacity-20 rounded-full pointer-events-none`}></div>
                                      
                                      {/* UI Card */}
                                      <motion.div 
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="relative w-full aspect-square max-w-[320px] bg-[#102447] backdrop-blur-xl border border-[#1E335C] rounded-3xl p-8 shadow-2xl flex flex-col items-center justify-center text-center transform rotate-3"
                                      >
                                           <div className={`w-20 h-20 ${feature.visualColor} bg-opacity-20 rounded-full flex items-center justify-center mb-6 ring-8 ring-white/5`}>
                                               <feature.visualIcon size={40} className="text-white" />
                                           </div>
                                           <div className="text-white font-bold text-xl mb-2">{feature.title} Active</div>
                                           <div className="text-[#A8B3CF] text-sm">System operational</div>
                                           
                                           {/* Fake Loading Bar */}
                                           <div className="w-full h-1.5 bg-[#0B1B33] rounded-full mt-8 overflow-hidden">
                                               <motion.div 
                                                  initial={{ width: 0 }}
                                                  animate={{ width: isHovered ? "70%" : 0 }}
                                                  transition={{ duration: 1, delay: 0.4 }}
                                                  className={`h-full ${feature.visualColor} rounded-full`} 
                                               />
                                           </div>
                                      </motion.div>
                                 </div>
                             </motion.div>
                         </div>
                    </motion.div>
                );
            })}
        </div>

        {/* Mobile Vertical Stack Fallback */}
        <div className="lg:hidden flex flex-col gap-6">
            {features.map((feature) => (
                <div key={feature.id} className="bg-card border border-border-base rounded-3xl p-8 shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${feature.visualColor} shadow-lg`}>
                            <feature.icon size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">{feature.title}</h3>
                    </div>
                    <p className="text-secondary mb-8 leading-relaxed text-lg">{feature.description}</p>
                    
                    {/* Simplified Visual */}
                    <div className="w-full h-48 bg-page rounded-2xl flex items-center justify-center border border-border-base relative overflow-hidden">
                         <div className={`absolute inset-0 ${feature.visualColor} blur-[60px] opacity-15`}></div>
                         <div className="relative z-10 flex flex-col items-center gap-3">
                             <feature.visualIcon size={40} className="text-secondary" />
                             <span className="text-xs font-bold text-muted uppercase tracking-wider">Feature Active</span>
                         </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default PlatformFeatures;