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
    <nav 
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-black/90 backdrop-blur-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container-section !py-0 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl tracking-tight flex items-center text-white">
          <span>ROVAMO</span>
          <span className="ml-1 text-rovamo-blue">.</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              link.href.startsWith('/#') ? (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className="text-white/80 hover:text-rovamo-blue font-medium transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className="text-white/80 hover:text-rovamo-blue font-medium transition-colors"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>
          <a 
            href="https://cal.com/murtaza-akbar/15min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/40 border border-white/10 text-white hover:bg-indigo-500/20 group px-6 py-3 rounded-md"
          >
            <Calendar className="h-5 w-5 text-indigo-300" />
            Book a Call
            <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform text-indigo-300" size={16} />
          </a>
        </div>

        {/* Mobile navigation toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation menu */}
      <div className={cn(
        "fixed inset-0 bg-black/95 z-40 pt-20 px-6 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="flex flex-col space-y-8 py-8">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-xl font-medium text-white hover:text-rovamo-blue"
              >
                {link.name}
              </a>
            ) : (
              <Link 
                key={link.name} 
                to={link.href}
                onClick={toggleMenu}
                className="text-xl font-medium text-white hover:text-rovamo-blue"
              >
                {link.name}
              </Link>
            )
          ))}
          <a 
            href="https://cal.com/murtaza-akbar/15min" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black/40 border border-white/10 text-white hover:bg-indigo-500/20 group px-6 py-3 rounded-md w-full justify-center"
          >
            <Calendar className="h-5 w-5 text-indigo-300" />
            Book a Call
            <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform text-indigo-300" size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
