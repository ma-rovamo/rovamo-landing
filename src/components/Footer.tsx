import React from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const services = [
    { name: 'AI Consulting', href: '#services' },
    { name: 'Product Strategy', href: '#services' },
    { name: 'Design', href: '#services' },
    { name: 'No Code Development', href: '#services' },
    { name: 'Web Development', href: '#services' },
  ];

  const links = [
    { name: 'LinkedIn', href: 'https://pk.linkedin.com/company/rovamo-agency', icon: Linkedin },
    { name: 'Contact', href: '/contact', icon: Mail },
    { name: 'Privacy Policy', href: '#', icon: ArrowUpRight },
  ];

  return (
    <footer className="bg-[#050505] text-white border-t border-white/5">
      <div className="container-section !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-8 border-b border-white/10">
          <div>
            <a href="#" className="font-bold text-2xl tracking-tight flex items-center">
              <span>ROVAMO</span>
              <span className="ml-1 text-rovamo-blue">.</span>
            </a>
            <p className="mt-4 text-gray-400 max-w-md">
              We act as an extension of your team, helping you turn bold ideas into scalable digital solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service, index) => (
                  <li key={index}>
                    <a 
                      href={service.href} 
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-4">Connect</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-white transition-colors flex items-center"
                    >
                      <link.icon className="h-4 w-4 mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Rovamo. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-sm text-gray-400 hover:text-white flex items-center transition-colors"
            >
              Back to top <ArrowUpRight className="ml-1 h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
