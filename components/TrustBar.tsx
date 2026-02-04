import React from 'react';

const tickerItems = [
  "Homes",
  "Apartments",
  "Offices",
  "Workspaces",
  "Commercial Properties",
  "Student Housing",
  "Launching Soon",
];

const TrustBar: React.FC = () => {
  return (
    <section className="bg-page py-8 border-b border-border-base relative overflow-hidden select-none">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      {/* Label */}
      <div className="relative z-10 text-center mb-6 px-6">
        <span className="text-btn-primary text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          Built for Modern Rentals
        </span>
      </div>

      <div className="relative w-full max-w-[1920px] mx-auto">
        {/* Vignette Gradients - Matching bg-page */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-r from-page to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-64 bg-gradient-to-l from-page to-transparent z-20 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex overflow-hidden group">
            <div className="flex items-center animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap pl-4">
              {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
                <div key={i} className="flex items-center">
                    <span className="text-2xl md:text-3xl font-bold text-secondary opacity-80 px-8 hover:opacity-100 transition-opacity cursor-default">
                        {item}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-border-base" />
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;