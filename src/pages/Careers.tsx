import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowRight, Briefcase, Globe, Clock } from 'lucide-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';

// Job type component
const JobType = ({ children }: { children: React.ReactNode }) => (
  <span className="text-xs font-medium px-2 py-1 bg-black/30 backdrop-blur-sm border border-white/10 rounded-full mr-2 text-white/80">
    {children}
  </span>
);

// Career Card component
const CareerCard = ({ 
  title, 
  jobTypes = ['Full-time', 'Freelance', 'Remote', 'Contract'],
  isInternship = false,
  applyLink
}: { 
  title: string;
  jobTypes?: string[];
  isInternship?: boolean;
  applyLink?: string;
}) => {
  return (
    <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={3}
      />
      <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 p-6 shadow-sm backdrop-blur-sm">
        <div className="relative flex flex-1 flex-col justify-between gap-3">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <div className="bg-indigo-500/10 p-2 rounded-full">
              <Briefcase className="text-indigo-300" size={20} />
            </div>
          </div>
          
          <div className="flex items-center mb-2">
            <Globe size={16} className="text-gray-400 mr-2" />
            <span className="text-gray-400">Remote</span>
          </div>
          
          <div className="flex flex-wrap mb-4 mt-4">
            {jobTypes.map((type, index) => (
              <JobType key={index}>{type}</JobType>
            ))}
          </div>
          
          {isInternship && (
            <p className="text-sm text-gray-400 mt-4 mb-4">
              For UX/UI Designers, Webflow and Framer Developers, Frontend Developers, Business Analysts, and AI Automation Developers
            </p>
          )}
          
          <a 
            href={applyLink || "#apply"} 
            className="inline-flex items-center text-indigo-300 hover:text-rose-300 font-medium transition-colors group mt-2"
          >
            Apply Now
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Careers = () => {
  useEffect(() => {
    document.title = "Careers - Rovamo";
    window.scrollTo(0, 0);
  }, []);

  const regularJobs = [
    {
      title: "Business Development Manager",
      link: "https://airtable.com/app7RDDI9IGVFPv3B/pagGKWHuaJsdHsyS7/form"
    },
    {
      title: "UX/UI Designer",
      link: "https://airtable.com/app95ys7slzbSVreC/paglhcgueHm5IZli2/form"
    },
    {
      title: "Executive Assistant",
      link: "https://airtable.com/appdYRkZDQK8kB9Vj/pagFBCK4lCQLLUriN/form"
    },
    {
      title: "Web Developer",
      link: "https://airtable.com/appAz2Lf8WBe4Q70k/paglhcgueHm5IZli2/form"
    },
    {
      title: "No Code Developer",
      link: "https://airtable.com/appjSpnpzUiQfhwGG/paglhcgueHm5IZli2/form"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="bg-[#030303] pt-32 pb-24 md:pt-44 md:pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl"></div>
          <div className="absolute top-0 right-0 w-full h-full opacity-20">
            {/* Geometric patterns */}
            <div className="absolute top-20 left-20 w-32 h-32 border-4 border-indigo-500/40 rotate-45"></div>
            <div className="absolute bottom-40 right-40 w-40 h-40 border-4 border-rose-500/40 rotate-12"></div>
            <div className="w-60 h-60 border-6 border-violet-500/30 rounded-full absolute -bottom-20 -left-20 opacity-30"></div>
          </div>
          
          <div className="container-section !py-0 relative z-10">
            <div className="flex flex-col items-start max-w-3xl animate-fade-in">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                  Join Our
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Team Today
                </span>
              </h1>
              
              <p className="text-lg text-white/70 max-w-3xl mb-8">
                Help us build the future of AI-powered innovation. We're always looking for talented people to join our team.
              </p>
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]">
                <Clock className="h-4 w-4 text-indigo-300" />
                <span className="text-sm text-white/60 tracking-wide">Multiple Positions Available</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* Job Listings */}
        <section className="container-section bg-[#040404] relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-rose-500/[0.02] blur-xl"></div>
          <div className="relative z-10">
            <div className="mb-12 text-center">
              <h2 className="section-title text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                  Open Positions
                </span>
              </h2>
              <p className="section-subtitle mx-auto">Explore our current job openings and find your next opportunity</p>
            </div>
            
            <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
              {regularJobs.map((job, index) => (
                <CareerCard 
                  key={index} 
                  title={job.title}
                  applyLink={job.link}
                />
              ))}
              
              <CareerCard 
                title="Digital Talent Internship Program" 
                jobTypes={['Internship', 'Remote']}
                isInternship={true}
                applyLink="https://airtable.com/appkOEtBI53eMKJML/pagNsOu8o84mpiuY8/form"
              />
            </div>
          </div>
        </section>
        
        {/* Apply Section */}
        <section id="apply" className="bg-[#030303] py-16 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-violet-500/[0.02] blur-xl"></div>
          <div className="container-section !py-0 relative z-10">
            <div className="relative rounded-[1.25rem] border-[0.75px] border-white/10 p-3 md:rounded-[1.5rem] md:p-4 max-w-3xl mx-auto">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={3}
              />
              <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/40 p-6 shadow-sm backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-white">How to Apply</h2>
                <p className="text-gray-300 mb-8">
                  Send your CV and portfolio to <span className="text-indigo-300 font-medium">hr@hellorovamo.com</span> with the position title in the subject line
                </p>
                
                <div>
                  <h3 className="text-xl font-bold mb-4 text-white">What We Look For</h3>
                  <ul className="text-left space-y-3">
                    <li className="flex items-start">
                      <div className="bg-indigo-500/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight size={14} className="text-indigo-300" />
                      </div>
                      <span className="text-gray-300">Problem solvers who think creatively</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-500/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight size={14} className="text-indigo-300" />
                      </div>
                      <span className="text-gray-300">Excellent communicators with strong collaboration skills</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-500/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight size={14} className="text-indigo-300" />
                      </div>
                      <span className="text-gray-300">Tech enthusiasts who stay up-to-date with industry trends</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-indigo-500/10 p-1 rounded-full mr-3 mt-1">
                        <ArrowRight size={14} className="text-indigo-300" />
                      </div>
                      <span className="text-gray-300">Self-motivated individuals who can work independently</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
