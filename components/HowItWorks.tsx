import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, MessageSquareText, ShieldCheck, FileSignature, Wallet } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Discover",
    description: "Smart filters help Seekers find their dream home instantly. View 3D tours, neighborhood stats, and verified listings before you visit.",
    icon: Search
  },
  {
    id: 2,
    title: "Connect",
    description: "Chat securely with landlords or property managers without sharing your personal phone number. Schedule viewings directly in the app.",
    icon: MessageSquareText
  },
  {
    id: 3,
    title: "Verify",
    description: "Instant ID verification and credit checks for peace of mind. We protect your data while giving landlords the confidence to say yes.",
    icon: ShieldCheck
  },
  {
    id: 4,
    title: "Sign",
    description: "Generate and sign lawyer-approved digital leases. e-Signatures make the paperwork painless, secure, and legally binding.",
    icon: FileSignature
  },
  {
    id: 5,
    title: "Manage",
    description: "Automate rent collection and track maintenance requests. Build your credit score automatically with every on-time payment.",
    icon: Wallet
  }
];

const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const beamHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-page relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10" ref={containerRef}>
          
          {/* Section Header */}
          <div className="text-center mb-24 max-w-3xl mx-auto">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-btn-primary/10 border border-btn-primary/20 text-btn-primary text-sm font-bold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-btn-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-btn-primary"></span>
                </span>
                Seamless Process
             </div>
             <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                From Search to Signature
             </h2>
             <p className="text-lg text-secondary">
                A unified platform connecting every stakeholder in the property market.
             </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
              
              {/* Central Beam (Desktop: Center, Mobile: Left) */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 md:-translate-x-1/2 bg-border-base rounded-full overflow-hidden">
                  <motion.div
                      style={{ height: beamHeight }}
                      className="w-full bg-gradient-to-b from-btn-primary to-accent-blue shadow-[0_0_20px_rgba(47,143,255,0.8)]"
                  />
              </div>

              {/* Steps */}
              <div className="space-y-12 md:space-y-24">
                  {steps.map((step, index) => {
                      const isEven = index % 2 === 0;
                      
                      return (
                          <div key={step.id} className={`relative flex items-center md:justify-center w-full`}>
                              
                              {/* The Connection Node */}
                              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 z-20 flex items-center justify-center">
                                  <div className="w-full h-full bg-page border-2 border-border-base rounded-full relative">
                                      <motion.div 
                                         initial={{ opacity: 0, scale: 0 }}
                                         whileInView={{ opacity: 1, scale: 1 }}
                                         viewport={{ margin: "-50% 0px -50% 0px" }}
                                         className="absolute inset-0 bg-btn-primary rounded-full shadow-[0_0_15px_rgba(47,143,255,1)]"
                                      />
                                  </div>
                              </div>

                              {/* Desktop Grid Layout Wrapper */}
                              <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                  
                                  {/* Left Side Content (Even Items) */}
                                  <div className={`pl-20 md:pl-0 ${isEven ? 'md:text-right order-1' : 'md:hidden order-1'}`}>
                                      {isEven && (
                                          <StepCard step={step} align="right" />
                                      )}
                                  </div>

                                  {/* Right Side Content (Odd Items) */}
                                  <div className={`pl-20 md:pl-0 ${!isEven ? 'md:text-left order-1' : 'md:hidden order-1'}`}>
                                      {!isEven && (
                                          <StepCard step={step} align="left" />
                                      )}
                                  </div>
                                  
                                  {/* Mobile Content (Always rendered, hidden on desktop if empty) */}
                                  <div className="pl-20 md:hidden col-span-1">
                                      <StepCard step={step} align="left" />
                                  </div>
                              </div>
                          </div>
                      );
                  })}
              </div>
          </div>
      </div>

    </section>
  );
};

const StepCard = ({ step, align }: { step: any, align: 'left' | 'right' }) => (
    <motion.div 
        initial={{ opacity: 0, y: 20, x: align === 'left' ? 20 : -20 }}
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className={`group relative bg-card backdrop-blur-md border border-border-base rounded-2xl p-8 hover:border-btn-primary transition-colors duration-300 ${align === 'right' ? 'md:mr-0' : 'md:ml-0'}`}
    >
        {/* Glow Hover Effect */}
        <div className="absolute inset-0 rounded-2xl bg-btn-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

        <div className={`relative z-10 flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'}`}>
            <div className="w-14 h-14 rounded-2xl bg-[#EAF3FF] dark:bg-[#102447] border border-border-base flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon size={28} className="text-btn-primary" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 flex items-center gap-3">
                <span className="text-muted font-mono text-lg">0{step.id}</span> {step.title}
            </h3>
            
            <p className="text-secondary leading-relaxed text-sm md:text-base">
                {step.description}
            </p>
        </div>
    </motion.div>
);

export default HowItWorks;