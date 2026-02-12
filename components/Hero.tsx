import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-28 pb-20 lg:pb-26 overflow-hidden bg-hero-pattern-light dark:bg-hero-pattern">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border-base text-accent-blue text-sm font-semibold mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-blue"></span>
            </span>
            Early Access Open
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-primary leading-tight mb-6">
            {/* Unlock Peace of Mind: The <span className="text-transparent bg-clip-text bg-gradient-to-r from-btn-primary to-accent-blue">All-in-One</span> Rental Ecosystem. */}
            {/* The <span className="text-transparent bg-clip-text bg-gradient-to-r from-btn-primary to-accent-blue">All-in-One</span> Rental Platform for Modern Properties. */}
            {/* Automate Rent. Manage Tenants. Grow Your Properties. */}
            Automated <span className="text-transparent bg-clip-text bg-gradient-to-r from-btn-primary to-accent-blue">Rental Management Software</span> to Simplify Rent, Tenants & Properties
          </h1>

          <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
            Manage properties, pay rent, and find service providers in one secure app. The future of renting is here.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-4 rounded-xl bg-card border border-border-base text-primary placeholder-muted focus:outline-none focus:ring-2 focus:ring-btn-primary focus:border-transparent transition-all shadow-sm"
              required
            />
            <button
              onClick={() => scrollToSection('#waitlist')}
              type="submit"
              className="px-8 py-4 bg-btn-primary hover:bg-btn-hover text-white font-bold rounded-xl transition-all shadow-lg shadow-btn-primary/20 flex items-center justify-center gap-2 group whitespace-nowrap"
            >
              Reserve Your Spot <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              {/* {submitted ? (
                <>
                  <CheckCircle2 className="w-5 h-5" /> Joined!
                </>
              ) : (
                <>
                  Join Waitlist <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </>
              )} */}
            </button>
          </form>
          <p className="mt-4 text-sm text-muted">Launching soon. Early users get priority access.</p>
        </motion.div>

        {/* 3D Mockup Visual */}
        <motion.div
          initial={{ opacity: 0, y: 50, rotate: 5 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center perspective-1000"
        >
          {/* Decorative blobs */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-btn-primary/10 rounded-full blur-3xl"></div>

          {/* Phone Frame */}
          <div className="relative w-[300px] h-[600px] bg-card-elevated rounded-[3rem] border-8 border-border-base shadow-2xl overflow-hidden transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-transform duration-700 ease-out z-20">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-black rounded-b-2xl z-30"></div>

            {/* Screen Content - Always Dark Mode inside the phone for better contrast/visual */}
            <div className="w-full h-full bg-[#0B1B33] flex flex-col relative text-white">
              {/* Header in App */}
              <div className="pt-12 px-6 pb-6 bg-[#0B1B33] border-b border-[#1E335C]">
                <div className="flex justify-between items-center mb-4">
                  <div className="h-8 w-8 rounded-full bg-[#1E335C]"></div>
                  <div className="h-4 w-24 rounded-full bg-[#1E335C]"></div>
                </div>
                <div className="h-8 w-3/4 rounded-lg bg-[#1E335C] mb-2"></div>
                <div className="h-4 w-1/2 rounded-lg bg-[#1E335C]"></div>
              </div>

              {/* Dashboard Widgets */}
              <div className="p-6 space-y-4">
                <div className="p-4 bg-btn-primary/10 border border-btn-primary/20 rounded-2xl">
                  <div className="flex justify-between items-start mb-2">
                    <div className="h-8 w-8 rounded-lg bg-btn-primary/20 flex items-center justify-center text-btn-primary text-xs font-bold">$</div>
                    <span className="text-xs text-accent-blue font-semibold">Due Today</span>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">$1,250.00</div>
                  <div className="text-xs text-[#7E8BAA]">Next payment: Oct 1st</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#102447] rounded-2xl border border-[#1E335C]">
                    <div className="h-8 w-8 rounded-full bg-btn-primary/20 mb-2"></div>
                    <div className="h-3 w-16 bg-[#1E335C] rounded mb-1"></div>
                    <div className="h-2 w-10 bg-[#1E335C] rounded"></div>
                  </div>
                  <div className="p-4 bg-[#102447] rounded-2xl border border-[#1E335C]">
                    <div className="h-8 w-8 rounded-full bg-purple-500/20 mb-2"></div>
                    <div className="h-3 w-16 bg-[#1E335C] rounded mb-1"></div>
                    <div className="h-2 w-10 bg-[#1E335C] rounded"></div>
                  </div>
                </div>
              </div>

              {/* Bottom Nav */}
              <div className="mt-auto p-6 bg-[#0B1B33] border-t border-[#1E335C] flex justify-between">
                <div className="w-6 h-6 rounded bg-btn-primary"></div>
                <div className="w-6 h-6 rounded bg-[#1E335C]"></div>
                <div className="w-6 h-6 rounded bg-[#1E335C]"></div>
                <div className="w-6 h-6 rounded bg-[#1E335C]"></div>
              </div>
            </div>
          </div>

          {/* Floating UI Elements */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 lg:-right-12 top-1/4 bg-card p-4 rounded-xl border border-border-base shadow-xl z-30 max-w-[180px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-btn-primary/10 flex items-center justify-center text-btn-primary">
                <CheckCircle2 size={16} />
              </div>
              <div>
                <div className="text-xs text-muted">Rent Status</div>
                <div className="text-sm font-bold text-primary">Paid in Full</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 lg:-left-12 bottom-1/3 bg-card p-4 rounded-xl border border-border-base shadow-xl z-30 max-w-[180px]"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-btn-primary/10 flex items-center justify-center text-btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
              </div>
              <div>
                <div className="text-xs text-muted">Maintenance</div>
                <div className="text-sm font-bold text-primary">Plumber Arriving</div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;