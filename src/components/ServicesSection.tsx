import React from 'react';
import { Check, Bot, Lightbulb, Laptop, PenTool, Globe } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

const ServiceCard = ({ title, description, icon: Icon, items }: {
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
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
        <div className="bg-indigo-500/10 p-2 rounded-full w-fit mb-4">
          <Icon className="w-5 h-5 text-indigo-300" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="service-list">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-indigo-500/10 p-1 rounded-full mr-3 mt-1">
                <Check className="h-4 w-4 text-indigo-300" />
              </div>
              <span className="text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
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
    <section id="services" className="bg-[#080808] relative">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
      <div className="container-section relative z-10">
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
          <p className="text-lg text-gray-400 max-w-3xl">
            We support businesses at every stage of their digital journey. From strategy to execution, our services are designed to help you launch faster, operate smarter, and stay ahead of the curve.
          </p>
        </div>
        
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
