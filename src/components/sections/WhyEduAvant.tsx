import React from 'react';
import { Target, Cpu, Sparkles, UserCheck, Layers, Rocket } from 'lucide-react';

export const WhyEduAvant: React.FC = () => {
  const benefits = [
    {
      icon: Target,
      title: "Career-Focused Learning",
      description: "We don't teach abstract theory. Every module is structured around practical skills needed on the job."
    },
    {
      icon: Cpu,
      title: "Practical Skills & Grooming",
      description: "Build confidence with professional body language, communication etiquette, and hands-on tool practicals."
    },
    {
      icon: Layers,
      title: "Multiple Career Paths",
      description: "Flexibility to explore Aviation, Hospitality, Travel Operations, or Digital Marketing according to your strengths."
    },
    {
      icon: UserCheck,
      title: "Guidance That Matters",
      description: "Personalized support from dedicated career counselors who help you discover where you fit best."
    },
    {
      icon: Sparkles,
      title: "Industry-Oriented Approach",
      description: "Curriculum aligned with current airline standards, luxury hotel protocols, and digital agency workflows."
    },
    {
      icon: Rocket,
      title: "Your Next Step Starts Here",
      description: "A structured, reliable bridge between completing 12th/College and beginning your professional career."
    }
  ];

  return (
    <section id="why-eduavant" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 inline-block">
            WHY EDUAVANT
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight font-display">
            More Than a Course. A Starting Point.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            EduAvant is designed to provide clarity, capability, and career direction for students ready to step beyond traditional classroom boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-ivory-50 border border-slate-200 rounded-3xl p-8 hover:border-amber-400 hover:shadow-card transition-all duration-300 space-y-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy-900 group-hover:bg-amber-500 text-amber-400 group-hover:text-navy-950 flex items-center justify-center transition-colors duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-extrabold text-navy-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
