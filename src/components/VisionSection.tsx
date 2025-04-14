import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const VisionCard = ({ title, description }: {
  title: string;
  description: string;
}) => {
  return (
    <div className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 p-6 shadow-sm backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const VisionSection = () => {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.5 + i * 0.2,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  const visionCards = [
    {
      title: "Launching Bold Ideas From Scratch",
      description: "For startups aiming to make their mark, we simplify the complex process of turning concepts into successful products. From the initial idea to a full-fledged launch, we provide end-to-end guidance to create innovative solutions tailored for impact."
    },
    {
      title: "Elevating Products to Scale New Heights",
      description: "When it's time to expand, we reimagine your product to meet the demands of growth. By reconfiguring designs and optimizing user experiences, we ensure your products are ready to thrive in increasingly competitive markets."
    },
    {
      title: "Empowering Established Organizations to Evolve",
      description: "Change within institutions requires strategic innovation. We collaborate with enterprises to design and implement cutting-edge solutions that breathe new life into their processes and operations, preparing them for a progressive future."
    }
  ];

  return (
    <section id="vision" className="bg-[#030303] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
              Where Vision
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              Meets Action
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visionCards.map((card, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <VisionCard
                title={card.title}
                description={card.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 