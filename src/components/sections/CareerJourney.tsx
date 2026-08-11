import React from 'react';
import { Search, GraduationCap, Award, Compass } from 'lucide-react';

export const CareerJourney: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discover",
      description: "Explore career streams across Aviation, Hospitality, Travel, or Digital Skills with guidance from our advisors."
    },
    {
      number: "02",
      icon: GraduationCap,
      title: "Learn",
      description: "Acquire market-relevant practical knowledge, software tools, and customer handling techniques."
    },
    {
      number: "03",
      icon: Award,
      title: "Prepare",
      description: "Refine your communication, interview readiness, and professional grooming through practical drills."
    },
    {
      number: "04",
      icon: Compass,
      title: "Start",
      description: "Transition confidently into entry-level roles across airlines, luxury hotels, travel desks, or agencies."
    }
  ];

  return (
    <section className="py-20 bg-ivory-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 inline-block">
            THE CAREER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            How Your Path Unfolds.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A simple 4-stage framework designed to take you from career uncertainty to workplace confidence.
          </p>
        </div>

        {/* 4-Step Visual Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector Line on Large Screens */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-0.5 bg-slate-200 -z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-3xl p-6 relative z-10 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-amber-500 text-navy-950 flex items-center justify-center font-bold shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-navy-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-[11px] font-bold text-amber-600 uppercase tracking-widest">
                  Step {index + 1} of 4
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
