import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass } from 'lucide-react';

export const StudentAspiration: React.FC = () => {
  return (
    <section className="py-24 bg-navy-950 text-white relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto shadow-inner">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block">
          ASPIRATION & PURPOSE
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto font-display">
          Don't Just Choose a Course.{' '}
          <span className="text-amber-400 block sm:inline">
            Choose Where You Want to Go.
          </span>
        </h2>

        <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal">
          The right career path isn't about collecting certificates — it's about building real confidence, professional capabilities, and a future you look forward to every day.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2.5 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>FIND YOUR CAREER PATH</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
