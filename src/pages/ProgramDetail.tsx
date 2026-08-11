import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getProgramBySlug } from '../data/careers';
import { ArrowLeft, ArrowRight, Clock, Award, Briefcase, CheckCircle2, MessageCircle, Sparkles, UserCheck, BookOpen } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = slug ? getProgramBySlug(slug) : undefined;

  if (!program) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <main className="pt-28 pb-24 bg-ivory-50">
      
      {/* Top Breadcrumb & Hero Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            to={`/careers/${program.categorySlug}`}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {program.categoryTitle} Stream</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30 inline-block">
                {program.categoryTitle} Specialization
              </span>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                {program.title}
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                {program.overview}
              </p>

              {/* Key Highlights Bar */}
              <div className="pt-4 flex flex-wrap gap-4 text-xs">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-900 border border-slate-800 rounded-lg text-slate-300">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Duration: {program.durationPlaceholder}</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 bg-navy-900 border border-slate-800 rounded-lg text-slate-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Eligibility: {program.eligibilityPlaceholder}</span>
                </div>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="lg:col-span-4 bg-navy-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl">
              <h3 className="text-lg font-extrabold text-white">
                Interested in this program?
              </h3>
              <p className="text-xs text-slate-400">
                Connect with an EduAvant advisor to check eligibility guidelines and upcoming start dates.
              </p>
              
              <div className="space-y-3">
                <Link
                  to="/join"
                  className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>JOIN THIS PROGRAM</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppLink(`Hi EduAvant, I would like to speak to an advisor regarding the ${program.title} program.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>TALK TO AN ADVISOR</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Who It Is For */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                  <UserCheck className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy-900">
                  Who This Program Is For
                </h2>
              </div>
              <ul className="space-y-3">
                {program.whoItIsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Will Learn */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy-900">
                  What You Will Learn
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {program.whatYouWillLearn.map((skill, index) => (
                  <div key={index} className="bg-ivory-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-slate-800 text-sm font-semibold leading-snug">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Experience */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 space-y-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                  <Sparkles className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-2xl font-extrabold text-navy-900">
                  Learning Experience
                </h2>
              </div>
              <p className="text-slate-600 text-base leading-relaxed">
                {program.learningExperience}
              </p>
            </div>

          </div>

          {/* Right Sidebar: Potential Roles & Quick Contact */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Potential Roles Box */}
            <div className="bg-white border border-slate-200 rounded-3xl p-6 space-y-4 shadow-sm">
              <h3 className="text-lg font-extrabold text-navy-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-amber-600" />
                <span>Potential Roles</span>
              </h3>
              <p className="text-xs text-slate-500">
                Careers & positions candidates typically prepare for:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {program.potentialRoles.map((role, idx) => (
                  <span key={idx} className="bg-ivory-50 border border-slate-200 text-navy-900 font-bold text-xs px-3 py-1.5 rounded-lg">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            {/* Guidance Callout */}
            <div className="bg-navy-900 text-white rounded-3xl p-6 space-y-4 shadow-md">
              <h3 className="text-lg font-extrabold text-white">
                Need Specific Counseling?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Have questions about batch start dates, eligibility criteria, or program details? Ask an EduAvant advisor on WhatsApp.
              </p>
              <a
                href={getWhatsAppLink(`Hi EduAvant, I have a specific question about the ${program.title} program.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WHATSAPP AN ADVISOR</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
};
