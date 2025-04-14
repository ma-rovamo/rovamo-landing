import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith('/#')) {
      // If we're on the careers page, navigate to home first
      if (location.pathname !== '/') {
        window.location.href = href;
      } else {
        // If we're already on home page, just scroll to the section
        const sectionId = href.split('#')[1];
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-black/80 backdrop-blur-sm border-b border-white/5" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-white">ROVAMO</span>
            <span className="text-rovamo-blue">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => handleLinkClick(link.href)}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 text-white rounded-md hover:bg-indigo-500/20 transition-colors text-sm"
            >
              <Calendar className="h-4 w-4 text-indigo-300" />
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/5">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-black/40 border border-white/10 text-white rounded-md hover:bg-indigo-500/20 transition-colors"
              >
                <Calendar className="h-4 w-4 text-indigo-300" />
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
