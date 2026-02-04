import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import ThreeStepProcess from './components/ThreeStepProcess';
import ProductPreview from './components/ProductPreview';
import Features from './components/Features';
import PremiumAI from './components/PremiumAI';
import PlatformFeatures from './components/PlatformFeatures';
import HowItWorks from './components/HowItWorks';
import CommunityTrust from './components/CommunityTrust';
import FAQ from './components/FAQ';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import AiChatbot from './components/AiChatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-page text-primary selection:bg-btn-primary selection:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSolution />
        <ThreeStepProcess />
        <ProductPreview />
        <Features />
        {/* <PremiumAI /> */}
        {/* <PlatformFeatures /> */}
        {/* <HowItWorks /> */}
        <FAQ />
        <CommunityTrust />
        <Waitlist />
      </main>
      <Footer />
      <AiChatbot />
    </div>
  );
};

export default App;