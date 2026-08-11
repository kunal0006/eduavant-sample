import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Award, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const About: React.FC = () => {
  return (
    <main className="pt-28 pb-20 bg-ivory-50">
      
      {/* Header Banner */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block">
            ABOUT EDUAVANT
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            A Launchpad for Your Career.
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Empowering 12th-pass youth and ambitious students with practical, industry-oriented skillsets across Aviation, Hospitality, Travel, and Digital Careers.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-900 tracking-tight">
              Bridging the Gap Between Education and Employability.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              EduAvant was founded on a simple realization: millions of ambitious young adults pass 12th grade every year looking for quick, practical, and honorable career paths, yet traditional education often focuses purely on theory.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              We design specialized certification and diploma tracks focused entirely on market-relevant practical capabilities — from airport passenger operations and hotel guest relations to tour packaging and performance digital marketing.
            </p>

            <div className="pt-2 space-y-3 text-sm font-semibold text-navy-900">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>No invented guarantees — honest, structured learning paths</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Professional grooming & communication confidence</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span>Direct 1-on-1 counselor guidance for parents & students</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="EduAvant Learning Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-950/20" />
            </div>
          </div>

        </div>
      </section>

      {/* Core Principles */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-extrabold text-navy-900">
              Our Core Educational Pillars
            </h2>
            <p className="text-slate-600 text-sm">
              The values that guide every curriculum module, advisor interaction, and practical session.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-ivory-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-navy-950 flex items-center justify-center font-bold">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900">Career Relevance</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every topic taught must directly serve a workplace requirement. We eliminate redundant filler content.
              </p>
            </div>

            <div className="bg-ivory-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-navy-900 text-amber-400 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900">Grooming & Poise</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Technical skill is only half the battle. We place equal emphasis on posture, voice modulation, and etiquette.
              </p>
            </div>

            <div className="bg-ivory-50 p-8 rounded-3xl border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-navy-900">Transparent Counseling</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We guide candidates to programs where they are genuinely suited, ensuring realistic expectation setting for families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-navy-900">
          Want to Learn More About EduAvant Programs?
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md"
          >
            <span>JOIN NOW</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
          <a
            href={getWhatsAppLink("Hi EduAvant, I'd like to learn more about the institution.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm"
          >
            <span>TALK TO AN ADVISOR</span>
          </a>
        </div>
      </section>

    </main>
  );
};
