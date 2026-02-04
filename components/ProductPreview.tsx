import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart3, MessageCircle, FileCheck, 
  ArrowUpRight, DollarSign, Bell, 
  Search, Download, User, MoreHorizontal, 
  CheckCircle2, Send
} from 'lucide-react';

// --- DATA & CONTENT CONFIG ---

const features = [
  {
    id: 0,
    title: 'Unified Dashboard',
    description: 'Track rent, maintenance, and occupancy rates in one real-time view.',
    icon: BarChart3,
    floatingLabel: 'Rent Received',
    floatingValue: '+$2,450',
    floatingIcon: DollarSign,
    floatingColor: 'text-emerald-500 bg-emerald-500/10',
  },
  {
    id: 1,
    title: 'Smart Messaging',
    description: 'Context aware chat that keeps conversations, documents, and maintenance history in one place.',
    icon: MessageCircle,
    floatingLabel: 'New Message',
    floatingValue: 'Agreement Updated',
    floatingIcon: MessageCircle,
    floatingColor: 'text-blue-500 bg-blue-500/10',
  },
  {
    id: 2,
    title: 'Financial Automations',
    description: 'Auto-organize transactions and generate financial reports to simplify tax preparation.',
    icon: FileCheck,
    floatingLabel: 'Report Ready',
    floatingValue: '2025 Tax Prep',
    floatingIcon: Download,
    floatingColor: 'text-purple-500 bg-purple-500/10',
  }
];

// --- MOBILE SCREEN VISUALS (Keeping screens dark for mockups) ---

const MobileDashboardScreen = () => (
  <div className="w-full h-full bg-[#0B1B33] flex flex-col pt-12 px-4 pb-6 font-sans relative overflow-hidden">
     {/* Status Bar Shim */}
     <div className="absolute top-0 left-0 right-0 h-12 z-20"></div>

     {/* Header */}
     <div className="flex justify-between items-center mb-6">
        <div>
           <p className="text-[#A8B3CF] text-xs font-medium">Good Morning,</p>
           <h4 className="text-white font-bold text-lg">Alex Johnson</h4>
        </div>
        <div className="w-10 h-10 rounded-full bg-[#102447] border border-[#1E335C] flex items-center justify-center relative">
            <Bell size={18} className="text-[#A8B3CF]"/>
            <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0B1B33]"></div>
        </div>
     </div>

     {/* Main Stats Card */}
     <div className="bg-btn-primary rounded-2xl p-5 mb-4 shadow-lg shadow-btn-primary/20 relative overflow-hidden">
        <div className="relative z-10">
            <div className="text-white/80 text-xs font-medium mb-1">Total Revenue</div>
            <div className="text-white font-bold text-3xl mb-2">$42,500</div>
            <div className="inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[10px] text-white font-bold backdrop-blur-sm">
                <ArrowUpRight size={10} /> +12% vs last month
            </div>
        </div>
        <div className="absolute -right-4 -bottom-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
     </div>

     {/* Grid Stats */}
     <div className="grid grid-cols-2 gap-3 mb-6">
         <div className="bg-[#102447] border border-[#1E335C] p-4 rounded-2xl">
             <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-2">
                 <CheckCircle2 size={16} />
             </div>
             <div className="text-[#A8B3CF] text-xs font-medium">Occupancy</div>
             <div className="text-white font-bold text-xl">96%</div>
         </div>
         <div className="bg-[#102447] border border-[#1E335C] p-4 rounded-2xl">
             <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 mb-2">
                 <MoreHorizontal size={16} />
             </div>
             <div className="text-[#A8B3CF] text-xs font-medium">Requests</div>
             <div className="text-white font-bold text-xl">4 Active</div>
         </div>
     </div>

     {/* Recent Activity List */}
     <div className="flex-1 overflow-hidden">
         <div className="flex justify-between items-center mb-3">
             <h5 className="text-white font-bold text-sm">Recent Activity</h5>
             <span className="text-accent-blue text-xs font-bold">See All</span>
         </div>
         <div className="space-y-3">
             {[1, 2, 3].map((i) => (
                 <div key={i} className="flex items-center gap-3 bg-[#102447]/50 p-3 rounded-xl border border-[#1E335C]/50">
                     <div className="w-10 h-10 rounded-full bg-[#1E335C] flex items-center justify-center text-[#A8B3CF] font-bold text-xs">
                         JD
                     </div>
                     <div className="flex-1">
                         <div className="text-white text-xs font-bold">Rent Payment</div>
                         <div className="text-slate-500 text-[10px]">Unit 4B • 2m ago</div>
                     </div>
                     <div className="text-emerald-500 text-xs font-bold">+$2,400</div>
                 </div>
             ))}
         </div>
     </div>
  </div>
);

const MobileChatScreen = () => (
  <div className="w-full h-full bg-[#0B1B33] flex flex-col pt-12 font-sans relative">
      {/* Header */}
      <div className="px-4 pb-4 border-b border-[#1E335C] flex items-center gap-3 bg-[#0B1B33] z-10">
          <div className="relative">
             <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-btn-primary to-purple-500 p-[2px]">
                 <div className="w-full h-full bg-[#102447] rounded-full flex items-center justify-center text-white text-xs font-bold">
                     SJ
                 </div>
             </div>
             <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#0B1B33] rounded-full"></div>
          </div>
          <div className="flex-1">
              <div className="text-white font-bold text-sm">Sarah Jenkins</div>
              <div className="text-[#A8B3CF] text-[10px]">Unit 2A • Lease Active</div>
          </div>
          <MoreHorizontal size={20} className="text-[#A8B3CF]"/>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-hidden flex flex-col justify-end">
          <div className="text-center text-[10px] text-[#7E8BAA] my-2">Today 9:41 AM</div>
          
          <div className="flex justify-start">
             <div className="bg-[#102447] border border-[#1E335C] text-[#E6ECF5] px-4 py-3 rounded-2xl rounded-tl-sm text-xs max-w-[85%]">
                 Hi Alex, is it okay if I schedule the move-in for this Saturday?
             </div>
          </div>

          <div className="flex justify-end">
             <div className="bg-btn-primary text-white px-4 py-3 rounded-2xl rounded-tr-sm text-xs max-w-[85%] shadow-md">
                 Absolutely! I'll have the keys ready for you at the front desk.
             </div>
          </div>

          <div className="flex justify-start">
             <div className="bg-[#102447] border border-[#1E335C] text-[#E6ECF5] px-4 py-3 rounded-2xl rounded-tl-sm text-xs max-w-[85%]">
                 Perfect, thanks! Also, did you receive the signed lease?
             </div>
          </div>
          
          {/* Typing Indicator */}
          <div className="flex justify-end">
              <div className="bg-btn-primary/20 px-3 py-2 rounded-2xl rounded-tr-sm">
                  <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-btn-primary rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-btn-primary rounded-full animate-bounce delay-100"></div>
                      <div className="w-1.5 h-1.5 bg-btn-primary rounded-full animate-bounce delay-200"></div>
                  </div>
              </div>
          </div>
      </div>

      {/* Input */}
      <div className="p-4 bg-[#0B1B33] border-t border-[#1E335C]">
          <div className="h-12 bg-[#102447] rounded-full border border-[#1E335C] flex items-center px-4 gap-3">
              <div className="w-6 h-6 rounded-full bg-[#0B1B33] flex items-center justify-center border border-[#1E335C]">
                  <div className="w-3 h-3 text-[#A8B3CF]">+</div>
              </div>
              <input type="text" placeholder="Type a message..." className="flex-1 bg-transparent text-white text-xs focus:outline-none placeholder-[#7E8BAA]" disabled/>
              <Send size={16} className="text-btn-primary"/>
          </div>
      </div>
  </div>
);

const MobileFinanceScreen = () => (
  <div className="w-full h-full bg-[#0B1B33] flex flex-col pt-12 px-4 font-sans relative">
      {/* Header */}
      <div className="flex justify-between items-end mb-6">
         <div>
             <h4 className="text-white font-bold text-xl">Financials</h4>
             <p className="text-[#A8B3CF] text-xs">October 2025</p>
         </div>
         <button className="w-8 h-8 bg-[#102447] border border-[#1E335C] rounded-lg flex items-center justify-center text-btn-primary">
             <Download size={16}/>
         </button>
      </div>

      {/* Summary Chart Shim */}
      <div className="h-32 w-full bg-gradient-to-b from-[#102447] to-transparent border-t border-x border-[#1E335C] rounded-t-2xl p-4 flex items-end justify-between gap-2 mb-4">
          {[40, 60, 35, 80, 50, 90, 65, 85].map((h, i) => (
              <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 animate={{ height: `${h}%` }}
                 transition={{ duration: 0.6, delay: i * 0.05 }}
                 className="flex-1 bg-btn-primary/80 rounded-t-sm"
              />
          ))}
      </div>

      {/* Transactions */}
      <div className="flex-1">
          <div className="text-xs font-bold text-[#7E8BAA] uppercase tracking-wider mb-3">Transactions</div>
          <div className="space-y-3">
              <div className="bg-[#102447] p-3 rounded-xl border border-[#1E335C] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                          <DollarSign size={16}/>
                      </div>
                      <div>
                          <div className="text-white text-xs font-bold">Rent - Unit 301</div>
                          <div className="text-slate-500 text-[10px]">Today, 9:00 AM</div>
                      </div>
                  </div>
                  <div className="text-emerald-500 text-xs font-bold">+$2,100</div>
              </div>

              <div className="bg-[#102447] p-3 rounded-xl border border-[#1E335C] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                          <ArrowUpRight size={16}/>
                      </div>
                      <div>
                          <div className="text-white text-xs font-bold">Plumbing Repair</div>
                          <div className="text-slate-500 text-[10px]">Yesterday</div>
                      </div>
                  </div>
                  <div className="text-[#E6ECF5] text-xs font-bold">-$150.00</div>
              </div>

              <div className="bg-[#102447] p-3 rounded-xl border border-[#1E335C] flex items-center justify-between opacity-60">
                  <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                          <DollarSign size={16}/>
                      </div>
                      <div>
                          <div className="text-white text-xs font-bold">Rent - Unit 104</div>
                          <div className="text-slate-500 text-[10px]">Oct 1</div>
                      </div>
                  </div>
                  <div className="text-emerald-500 text-xs font-bold">+$1,850</div>
              </div>
          </div>
      </div>
  </div>
);

const ProductPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="py-24 bg-page relative overflow-hidden">
        
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-btn-primary/10 dark:bg-btn-primary/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
            
            {/* 
               DESKTOP LAYOUT (Grid) 
            */}
            <div className="hidden lg:grid grid-cols-12 gap-12 items-center">
                
                {/* Left Column: Triggers */}
                <div className="col-span-5">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-primary mb-8"
                    >
                        Powerful features <br />
                        in your pocket.
                    </motion.h2>

                    <div className="space-y-4">
                        {features.map((feature, index) => {
                            const isActive = activeTab === index;
                            return (
                                <div 
                                    key={feature.id}
                                    onClick={() => setActiveTab(index)}
                                    className={`relative pl-8 py-6 cursor-pointer group transition-all duration-300`}
                                >
                                    {/* Active Border Line */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] rounded-full transition-all duration-300 ${isActive ? 'bg-btn-primary shadow-[0_0_12px_rgba(47,143,255,0.8)]' : 'bg-border-base group-hover:bg-muted'}`} />

                                    <h3 className={`text-xl font-bold transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted group-hover:text-secondary'}`}>
                                        {feature.title}
                                    </h3>

                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-secondary mt-3 text-base leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Visual Stage */}
                <div className="col-span-7 relative h-[650px] flex items-center justify-center">
                     <div className="relative w-full max-w-sm">
                         
                         {/* Floating Notification (The 'Pop') */}
                         <AnimatePresence mode="wait">
                             <motion.div
                                key={`float-${activeTab}`}
                                initial={{ opacity: 0, y: 40, x: 20 }}
                                animate={{ opacity: 1, y: 20, x: 40 }}
                                exit={{ opacity: 0, y: 30, x: 30 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="absolute -right-8 top-1/4 z-30 bg-card/90 backdrop-blur-md border border-border-base p-4 rounded-2xl shadow-2xl flex items-center gap-4 min-w-[220px]"
                             >
                                 <div className={`w-10 h-10 rounded-full flex items-center justify-center ${features[activeTab].floatingColor}`}>
                                     {React.createElement(features[activeTab].floatingIcon, { size: 20 })}
                                 </div>
                                 <div>
                                     <div className="text-muted text-[10px] font-bold uppercase tracking-wider">{features[activeTab].floatingLabel}</div>
                                     <div className="text-primary font-bold text-sm">{features[activeTab].floatingValue}</div>
                                 </div>
                             </motion.div>
                         </AnimatePresence>

                         {/* iPhone Frame */}
                         <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl shadow-slate-200 dark:shadow-black flex flex-col justify-start overflow-hidden">
                             {/* Dynamic Island */}
                             <div className="absolute top-0 w-full flex justify-center z-50 pt-2">
                                 <div className="h-[24px] w-[100px] bg-black rounded-full"></div>
                             </div>
                             
                             {/* Screen Content */}
                             <div className="h-full w-full bg-[#0B1B33] rounded-[2rem] overflow-hidden relative">
                                 <AnimatePresence mode="wait">
                                     <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="h-full w-full"
                                     >
                                         {activeTab === 0 && <MobileDashboardScreen />}
                                         {activeTab === 1 && <MobileChatScreen />}
                                         {activeTab === 2 && <MobileFinanceScreen />}
                                     </motion.div>
                                 </AnimatePresence>
                             </div>

                             {/* Button Shim (Right Side) */}
                             <div className="h-[46px] w-[3px] bg-gray-800 absolute -right-[17px] top-[120px] rounded-r-lg"></div>
                             <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[80px] rounded-l-lg"></div>
                             <div className="h-[64px] w-[3px] bg-gray-800 absolute -left-[17px] top-[150px] rounded-l-lg"></div>
                         </div>
                     </div>
                </div>
            </div>

            {/* 
               MOBILE LAYOUT (Stacked) 
            */}
            <div className="lg:hidden space-y-24">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-primary mb-4">Powerful features <br /> in your pocket.</h2>
                </div>

                {features.map((feature, index) => (
                    <div key={feature.id} className="flex flex-col items-center gap-8">
                        {/* Text Trigger */}
                        <div className="text-center px-4 max-w-sm">
                            <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>
                            <p className="text-secondary text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>

                        {/* Visual Stage */}
                        <div className="relative">
                             {/* Simplified Phone Frame */}
                             <div className="relative border-gray-800 bg-gray-800 border-[8px] rounded-[2rem] h-[500px] w-[260px] shadow-2xl overflow-hidden mx-auto">
                                 <div className="absolute top-0 w-full flex justify-center z-50 pt-2">
                                     <div className="h-[18px] w-[80px] bg-black rounded-full"></div>
                                 </div>
                                 <div className="w-full h-full bg-[#0B1B33] rounded-[1.5rem] overflow-hidden relative">
                                     {feature.id === 0 && <MobileDashboardScreen />}
                                     {feature.id === 1 && <MobileChatScreen />}
                                     {feature.id === 2 && <MobileFinanceScreen />}
                                 </div>
                             </div>
                             
                             {/* Floating Card Mobile */}
                             <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-card border border-border-base p-3 rounded-xl shadow-xl flex items-center gap-3 w-max max-w-[90%] z-20">
                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center ${feature.floatingColor}`}>
                                     {React.createElement(feature.floatingIcon, { size: 16 })}
                                 </div>
                                 <div className="text-left">
                                     <div className="text-muted text-[10px] font-bold uppercase tracking-wider">{feature.floatingLabel}</div>
                                     <div className="text-primary font-bold text-xs">{feature.floatingValue}</div>
                                 </div>
                             </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
  );
};

export default ProductPreview;