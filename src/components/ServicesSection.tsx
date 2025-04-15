import React from 'react';
import { Bot, Lightbulb, Laptop, PenTool, Globe } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { SectionAnimation } from '@/components/ui/section-animation';
import { motion, useInView } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon, items }: {
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
}) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative rounded-[1.25rem] p-2 md:rounded-[1.5rem] md:p-3"
    >
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 p-6 shadow-sm backdrop-blur-sm">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-indigo-500/10 rounded-full">
            <Icon className="w-5 h-5 text-indigo-300" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-lg text-[#D9D9D9] leading-relaxed">{description}</p>
            
            <ul className="space-y-2 mt-4">
              {items.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="mt-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-300/50"></div>
                  </div>
                  <span className="text-base text-[#D9D9D9]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const services = [
  {
    title: "AI Consulting and Workflow Automation",
    description: "Streamline operations and drive efficiency with smart automation",
    icon: Bot,
    items: [
      "AI strategy and integration",
      "Workflow automation",
      "Process optimization",
      "Custom AI powered solutions"
    ]
  },
  {
    title: "Product Management and Business Analysis",
    description: "Translate ideas into actionable plans and successful deliveries",
    icon: Lightbulb,
    items: [
      "Product roadmaps and feature planning",
      "Requirement gathering and user stories",
      "Sprint and backlog management",
      "Stakeholder communication and UAT"
    ]
  },
  {
    title: "MVP Development and No Code Solutions",
    description: "Validate your product idea quickly with low code and no code platforms",
    icon: Laptop,
    items: [
      "Clickable design prototypes",
      "MVP development using tools like Bubble, FlutterFlow, Softr and Odoo",
      "CRM and ERP setup using no code tools",
      "Scalable architecture for rapid iteration"
    ]
  },
  {
    title: "UX UI Design",
    description: "Design interfaces that are intuitive, accessible, and built for engagement",
    icon: PenTool,
    items: [
      "UX research and audits",
      "Wireframes and high fidelity design",
      "Design systems",
      "Web and mobile app interfaces"
    ]
  },
  {
    title: "Web Development",
    description: "Build beautiful, responsive websites tailored to your brand and goals",
    icon: Globe,
    items: [
      "Webflow development",
      "Framer websites",
      "Custom front end and back end builds",
      "SEO optimization and responsive performance"
    ]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#000000] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
        <SectionAnimation>
          <div className="max-w-3xl">
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                Our
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                Services
              </span>
            </h2>
            <p className="text-xl text-[#D9D9D9] max-w-3xl leading-relaxed">
              We support businesses at every stage of their digital journey. From strategy to execution, our services are designed to help you launch faster, operate smarter, and stay ahead of the curve.
            </p>
          </div>
        </SectionAnimation>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              items={service.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
