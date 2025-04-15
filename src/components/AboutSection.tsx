import React from 'react';
import { Briefcase, Target, Zap } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SectionAnimation } from '@/components/ui/section-animation';
import { motion, useInView } from 'framer-motion';

const Feature = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="flex gap-4"
    >
      <div className="mt-1">
        <div className="p-2 bg-indigo-500/10 rounded-full">
          <Icon className="w-5 h-5 text-indigo-300" />
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-[#E9E9E9] leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-[#000000] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
        <SectionAnimation>
          <div className="max-w-3xl mb-16">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                About
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Rovamo
              </span>
            </h2>
            <p className="text-xl text-[#D9D9D9] max-w-3xl leading-relaxed">
              We are a digital innovation studio focused on helping businesses build smarter, faster, and more efficiently.
            </p>
          </div>
        </SectionAnimation>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <SectionAnimation>
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
                  <p className="text-lg text-[#D9D9D9] mb-6 relative z-10 leading-relaxed">
                    Our team combines AI expertise, design thinking, and product strategy to deliver solutions that align with your business goals.
                  </p>
                  <p className="text-lg text-[#D9D9D9] relative z-10 leading-relaxed">
                    Whether you are launching a startup or modernizing enterprise operations, we become part of your team to co-create, iterate, and deliver results that drive long term value.
                  </p>
                </div>
              </div>
            </div>
          </SectionAnimation>
          
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
