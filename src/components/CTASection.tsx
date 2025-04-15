import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const CTASection = () => {
  return (
    <section id="contact" className="bg-[#030303]">
      <div className="container-section">
        <div className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
          <GlowingEffect
            spread={40}
            glow={true}
            disabled={false}
            proximity={64}
            inactiveZone={0.01}
            borderWidth={3}
          />
          <div className="relative grid md:grid-cols-2 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 shadow-sm backdrop-blur-sm">
            <div className="p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's build something meaningful together.
              </h2>
              <p className="text-xl text-white/90 mb-8 md:pr-6 leading-relaxed">
                Schedule a free call and tell us about your goals. We will help you map out the right solution for your next big move.
              </p>
              <a 
                href="/contact" 
                className="btn inline-flex items-center gap-2 bg-black/40 border border-white/10 text-white hover:bg-indigo-500/20 group px-6 py-3 rounded-md"
              >
                <Calendar className="h-5 w-5 text-indigo-300" />
                Book a Call
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform text-indigo-300" size={16} />
              </a>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
              <div className="relative h-full min-h-[300px] flex items-center justify-center p-8 md:p-12">
                <div className="text-center text-white">
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-500/10 backdrop-blur-sm">
                    <Calendar className="h-8 w-8 text-indigo-300" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Free Discovery Call</h3>
                  <p className="text-lg text-white/90 mb-4 leading-relaxed">
                    No commitment, just a conversation to explore how we can help.
                  </p>
                  <span className="inline-block text-sm bg-indigo-500/10 px-3 py-1 rounded-full backdrop-blur-sm text-indigo-300">
                    30 minutes • Zero obligation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
