import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "When will Rentura launch?",
    answer: "Rentura is currently in early access. Join the waitlist to be notified at launch."
  },
  {
    question: "Who is Rentura built for?",
    answer: "Rentura is designed for landlords, renters, and service providers managing modern rental properties."
  },
  {
    question: "Is Rentura free to use?",
    answer: "Yes! Rentura is completely free for tenants to pay rent and submit maintenance requests. Landlords pay a small subscription fee for premium management features, but the basic plan is free forever."
  },
  {
    question: "How secure is my financial data?",
    answer: "We take security seriously. We use bank-level 256-bit encryption and partner with top-tier payment processors to ensure your sensitive financial data is never stored directly on our servers."
  },
  // {
  //   question: "Can I build credit by paying rent?",
  //   answer: "Rentura is exploring features that may help renters build positive financial habits. Credit-related features, where available, will be clearly communicated after launch."
  // },
  {
    question: "How do maintenance requests work?",
    answer: "It's simple: snap a photo, describe the issue, and hit send. Your landlord receives the request instantly and can assign a verified service provider. You'll get real-time updates on the status of your repair directly in the app."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-page transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Column: Feature Image */}
            <div className="relative order-1 lg:order-1">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-video lg:aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden border border-border-base shadow-2xl shadow-black/10 group"
                >
                    <img 
                        src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop" 
                        alt="Modern Living Room" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    {/* Dark Gradient Overlay for consistency */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Optional Floating Badge */}
                    <div className="absolute bottom-8 left-8 right-8 bg-card/90 backdrop-blur-md p-4 rounded-2xl border border-border-base hidden sm:block">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            <span className="text-sm font-semibold text-primary">24/7 Support Available</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className="order-2 lg:order-2">
                <div className="mb-10 text-left">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                        Frequently Asked <span className="text-btn-primary">Questions</span>
                    </h2>
                    <p className="text-secondary text-base leading-relaxed">
                        Everything you need to know about the Rentura ecosystem. Can't find the answer you're looking for? Contact our support team anytime.
                    </p>
                </div>

                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`rounded-2xl transition-all duration-300 border ${
                        openIndex === index 
                          ? 'bg-card border-btn-primary shadow-lg shadow-btn-primary/5' 
                          : 'bg-card border-border-base hover:border-muted'
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      >
                        <span className={`text-lg font-semibold transition-colors pr-4 ${openIndex === index ? 'text-btn-primary' : 'text-primary'}`}>
                          {faq.question}
                        </span>
                        <div className={`p-2 rounded-full shrink-0 transition-colors ${openIndex === index ? 'bg-btn-primary/10 text-btn-primary' : 'bg-page text-muted'}`}>
                          {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                      </button>
                      
                      <AnimatePresence>
                        {openIndex === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 text-secondary leading-relaxed border-t border-border-base pt-4 mt-2">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;