import React from 'react';
import { CheckCircle } from 'lucide-react';

export const BenefitsProof: React.FC = () => {
  const pillars = [
    {
      title: "Clarity Over Confusion",
      detail: "Instead of generic degrees with unclear career outcomes, EduAvant programs focus on specific, in-demand roles across airlines, luxury resorts, and digital marketing."
    },
    {
      title: "Confidence Through Practice",
      detail: "Students build real-world communication skills, airport software familiarity, and customer service poise before attending employer interviews."
    },
    {
      title: "Parental Trust & Professionalism",
      detail: "Parents value EduAvant's structured environment, ethical advisor guidance, and clear focus on employability and character development."
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 inline-block">
            EMPLOYABILITY STANDARDS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
            Why Students Choose Career-Focused Learning.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real skills, structured guidance, and market relevance — designed to help 12th-pass youth step into professional roles with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-ivory-50 border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 font-bold">
                <CheckCircle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900">
                {pillar.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
