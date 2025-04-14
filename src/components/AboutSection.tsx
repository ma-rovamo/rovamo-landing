
import React from 'react';
import { Briefcase, Target, Zap } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex gap-4 animate-fade-in-up">
      <div className="mt-1">
        <div className="p-2 bg-indigo-500/10 rounded-full">
          <Icon className="w-5 h-5 text-indigo-300" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-bold mb-1 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#040404] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <div className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 p-8 shadow-sm backdrop-blur-sm">
                <h2 className="text-3xl font-bold mb-4 relative z-10">About Rovamo</h2>
                <p className="text-white/80 mb-8 relative z-10">
                  We are a digital innovation studio focused on helping businesses build smarter, faster, and more efficiently. Our team combines AI expertise, design thinking, and product strategy to deliver solutions that align with your business goals.
                </p>
                <p className="text-white/90 relative z-10">
                  Whether you are launching a startup or modernizing enterprise operations, we become part of your team to co-create, iterate, and deliver results that drive long term value.
                </p>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <Feature 
              icon={Briefcase}
              title="Business-Focused Approach"
              description="We align technology solutions with your specific business goals to ensure maximum ROI."
            />
            <Feature 
              icon={Target}
              title="Strategic Partnership"
              description="We work as an extension of your team, providing expertise and guidance at every step."
            />
            <Feature 
              icon={Zap}
              title="Innovative Solutions"
              description="We leverage cutting-edge technologies and methodologies to solve complex business challenges."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
