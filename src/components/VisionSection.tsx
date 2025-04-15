import React from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { ScrollAnimation } from '@/components/ui/scroll-animation';
import launchImg from '@/img/launch.png';
import elevateImg from '@/img/elevate.png';
import empowerImg from '@/img/empower.png';

const VisionCard = ({ title, description, image, delay }: {
  title: string;
  description: string;
  image: string;
  delay: number;
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 1.2,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay + 0.2,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: delay + 0.4,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <div className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3 h-full" ref={ref}>
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex flex-col h-full overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 shadow-md backdrop-blur-sm hover:shadow-indigo-500/20 transition-all duration-500">
        <motion.div 
          className="w-full aspect-[4/3] overflow-hidden"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
        <motion.div 
          className="flex flex-col flex-grow p-6"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-2xl md:text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
          >
            {title}
          </motion.h3>
          <p className="text-lg text-[#D9D9D9] leading-relaxed">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

const VisionSection = () => {
  const visionCards = [
    {
      title: "Launch New Ventures with Confidence",
      description: "We help founders and teams go from idea to launch with clarity. From AI powered strategy and UX design to rapid MVP development using no code platforms, we support your journey from zero to one.",
      image: launchImg
    },
    {
      title: "Redesign Products for Growth",
      description: "We partner with businesses to rethink and rebuild digital products. Whether you need a better user experience, a stronger visual identity, or a more scalable system, we align design with your growth goals.",
      image: elevateImg
    },
    {
      title: "Accelerate Innovation Inside Enterprises",
      description: "We collaborate with established teams to modernize workflows, design internal tools, and lead new initiatives. Using AI, automation, and thoughtful design, we help you stay ahead in a fast changing landscape.",
      image: empowerImg
    }
  ];

  return (
    <section id="vision" className="bg-[#000000] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
        <ScrollAnimation delay={0.2}>
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
            <p className="text-xl text-[#D9D9D9] max-w-3xl leading-relaxed">
              We help organizations turn bold ideas into real-world impact through strategic thinking, emerging technologies, and intuitive design. we partner with startups and established enterprises alike to modernize systems. Whether building from scratch or transforming legacy platforms, we help teams move faster, smarter, and more confidently toward what's next.
            </p>
          </div>
        </ScrollAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visionCards.map((card, index) => (
            <VisionCard
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              delay={0.4 + index * 0.2}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 