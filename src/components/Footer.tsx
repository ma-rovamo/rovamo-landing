import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Linkedin, Twitter, Instagram, Dribbble } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/[0.02]">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-white">ROVAMO</span>
              <span className="text-rovamo-blue">.</span>
            </Link>
            <p className="text-white/60 text-base max-w-md">
              Building the future of AI-powered innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-white font-medium text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/60 hover:text-white transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white/60 hover:text-white transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-white/60 hover:text-white transition-colors text-base">
                  About
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-white/60 hover:text-white transition-colors text-base inline-flex items-center gap-1.5">
                  Careers
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/60 hover:text-white transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6">
            <h3 className="text-white font-medium text-lg">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://pk.linkedin.com/company/rovamo-agency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-base inline-flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-base inline-flex items-center gap-2"
                >
                  <Twitter size={18} />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-base inline-flex items-center gap-2"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors text-base inline-flex items-center gap-2"
                >
                  <Dribbble size={18} />
                  Dribbble
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.02] mt-16 pt-8">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} Rovamo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
