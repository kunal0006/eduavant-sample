import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 inline-block">
          THE LAUNCHPAD
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-navy-900 tracking-tight font-display">
          Ready to Explore What's Next?
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Take the first step toward a practical, career-focused future with EduAvant.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/join"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            <span>JOIN EDUAVANT</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>

          <a
            href={getWhatsAppLink("Hi EduAvant team, I'm ready to explore my career options.")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 font-bold text-xs uppercase tracking-wider rounded-xl transition-all"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>TALK TO AN ADVISOR</span>
          </a>
        </div>

      </div>
    </section>
  );
};
