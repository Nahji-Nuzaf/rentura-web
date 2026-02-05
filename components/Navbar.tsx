import React, { useState, useEffect } from 'react';
import { Home, Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import logo from "../src/rentura-logo-bgremove.png";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About Us', href: '#about-us' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Benefits', href: '#benefits' },
    // { label: 'For Landlords', href: '#features' },
    // { label: 'For Tenants', href: '#features' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-page/80 backdrop-blur-md border-border-base py-3'
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {/* <div className="w-10 h-10 bg-btn-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <Home className="text-white w-6 h-6" />
            </div> */}
            {/* <img src={logo} alt="Rentura Logo" className="w-10 h-10 transform group-hover:rotate-12 transition-transform duration-300" /> */}
            <span className="text-2xl font-bold text-primary tracking-tight ">
              RENTURA
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-secondary hover:text-btn-primary font-medium transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA & Actions */}
          <div className="flex items-center gap-4">
             {/* Theme Toggle */}
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-secondary hover:bg-card border border-transparent hover:border-border-base transition-all"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => scrollToSection('#waitlist')}
              className="hidden md:block px-5 py-2.5 bg-btn-primary hover:bg-btn-hover text-white font-semibold rounded-lg shadow-lg shadow-btn-primary/30 transition-all transform hover:-translate-y-0.5"
            >
              Join Waitlist
            </button>
            
            <button
              className="md:hidden text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-page pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-xl text-primary font-medium py-2 border-b border-border-base"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#waitlist')}
                className="mt-4 w-full py-4 bg-btn-primary text-white text-lg font-bold rounded-xl"
              >
                Join Waitlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;