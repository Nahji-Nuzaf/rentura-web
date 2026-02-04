import React from 'react';
import { motion } from 'framer-motion';
import { Search, MessageSquareText, BarChart3 } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'List or Discover',
    description: 'Landlords publish complete listings in minutes. Tenants use smart filters to find their perfect match instantly.',
    icon: Search,
  },
  {
    id: 2,
    title: 'Request & Manage',
    description: 'handle applications, manage lease documents, and track maintenance requests all in one secure chat stream.',
    icon: MessageSquareText,
  },
  {
    id: 3,
    title: 'Manage & Monitor',
    description: 'Automate rent collection, track payments in real-time, and get financial clarity with a unified dashboard.',
    icon: BarChart3,
  },
];

const ThreeStepProcess: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-page relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-20">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-primary mb-4"
                >
                    From Listing to Living in 3 Steps.
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-secondary text-lg"
                >
                    A unified workflow for both Landlords and Tenants.
                </motion.p>
            </div>

            {/* Steps Grid */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Desktop Connector Line (Horizontal) */}
                <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-border-base z-0" />

                {/* Mobile Connector Line (Vertical) */}
                <div className="md:hidden absolute top-8 bottom-8 left-8 w-0.5 border-l-2 border-dashed border-border-base z-0" />

                {steps.map((step, index) => (
                    <motion.div 
                        key={step.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="relative z-10 group"
                    >
                         {/* Card */}
                         <div className="bg-card backdrop-blur-md border border-border-base rounded-2xl p-8 h-full transition-all duration-300 group-hover:-translate-y-2 group-hover:border-btn-primary/50 group-hover:shadow-[0_10px_40px_-10px_rgba(47,143,255,0.1)]">
                            
                            {/* Number Badge */}
                            <div className="absolute -top-5 -left-3 md:-top-6 md:-left-4">
                                <div className="relative">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#EAF3FF] dark:bg-[#102447] border border-border-base group-hover:border-btn-primary/50 flex items-center justify-center shadow-xl transition-colors">
                                        <span className="text-accent-blue font-bold text-xl md:text-2xl">
                                            0{step.id}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="mt-6 md:mt-8 flex flex-col items-start">
                                <div className="w-14 h-14 bg-page rounded-xl border border-border-base flex items-center justify-center mb-6 text-muted group-hover:text-white group-hover:bg-btn-primary group-hover:border-btn-primary transition-all duration-300 shadow-inner group-hover:shadow-lg group-hover:shadow-btn-primary/20">
                                    <step.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-btn-primary transition-colors">{step.title}</h3>
                                <p className="text-secondary leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                         </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default ThreeStepProcess;