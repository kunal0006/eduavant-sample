import React, { useState } from 'react';
import { BookOpen, Briefcase, Compass, Users, ShieldCheck, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const [perspective, setPerspective] = useState<'student' | 'parent'>('student');

  const studentProps = [
    {
      icon: BookOpen,
      title: "Career-Focused Learning",
      description: "Practical skillsets tailored for real-world employment."
    },
    {
      icon: Briefcase,
      title: "Industry-Oriented Programs",
      description: "Designed around modern market demands & corporate workflows."
    },
    {
      icon: Compass,
      title: "Multiple Career Paths",
      description: "Specializations across Aviation, Hotels, Travel & Digital."
    },
    {
      icon: Users,
      title: "Expert Guidance",
      description: "Mentorship from experienced industry practitioners."
    }
  ];

  const parentProps = [
    {
      icon: ShieldCheck,
      title: "Ethical & Transparent",
      description: "No false placement promises or unrealistic salary claims."
    },
    {
      icon: Award,
      title: "Structured Employability",
      description: "Focus on character, discipline, grooming, and workplace confidence."
    },
    {
      icon: Users,
      title: "Parent Counseling Desk",
      description: "Direct 1-on-1 advisor sessions to discuss career trajectory and safety."
    },
    {
      icon: BookOpen,
      title: "Post-12th Fast-Track",
      description: "Clear, job-ready alternative to non-focused traditional general degrees."
    }
  ];

  const currentProps = perspective === 'student' ? studentProps : parentProps;

  return (
    <section className="bg-navy-900 text-white py-12 border-y border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Perspective Toggle Switch */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-navy-800">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-400">
              TRUSTED BY STUDENTS & FAMILIES
            </span>
            <p className="text-xs text-slate-300">
              {perspective === 'student'
                ? "Showing core practical learning advantages for ambitious candidates."
                : "Showing institutional structure, safety, and employability standards for parents."}
            </p>
          </div>

          <div className="bg-navy-950 p-1.5 rounded-xl border border-navy-800 flex items-center gap-1 shrink-0">
            <button
              type="button"
              onClick={() => setPerspective('student')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                perspective === 'student'
                  ? 'bg-amber-500 text-navy-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Students
            </button>
            <button
              type="button"
              onClick={() => setPerspective('parent')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                perspective === 'parent'
                  ? 'bg-amber-500 text-navy-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              For Parents
            </button>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {currentProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-navy-800/50 border border-navy-700/60 hover:border-amber-500/40 transition-colors animate-fadeIn"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base leading-snug">
                    {prop.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
