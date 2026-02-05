import React from 'react';
import { Home, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-border-base pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="w-8 h-8 bg-btn-primary rounded-lg flex items-center justify-center">
                <Home className="text-white w-5 h-5" />
              </div> */}
              <img src="src/rentura-logo-bgremove.png" alt="Rentura Logo" className="w-9 h-9 transform group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl font-bold text-primary tracking-tight">Rentura</span>
            </div>
            <p className="text-secondary leading-relaxed mb-6">
              The all-in-one platform revolutionizing how the world rents, manages, and maintains properties.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/RHomes89613" target="_blank" className="w-10 h-10 rounded-full bg-page flex items-center justify-center text-muted hover:bg-btn-primary hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-page flex items-center justify-center text-muted hover:bg-btn-primary hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-page flex items-center justify-center text-muted hover:bg-btn-primary hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-primary font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">For Landlords</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">For Tenants</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">For Service Providers</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">For Renters</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-primary font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-primary font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-secondary hover:text-btn-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-base flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted text-sm">
            &copy; 2026 Rentura Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-muted text-sm">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;