import React from 'react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';

const HeroSection = () => {
  return (
    <HeroGeometric 
      badge="AI for What’s Next"
      title1="Design. Automate."
      title2="Launch. Grow."
      description="We act as an extension of your team, helping you turn bold ideas into scalable digital solutions using AI, automation, and modern technologies"
      ctaText="Book a Free Discovery Call"
      ctaHref="/contact"
    />
  );
};

export default HeroSection;
