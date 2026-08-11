import React from 'react';
import { Link } from 'react-router-dom';
import { X, Clock, Award, Briefcase, CheckCircle2, ArrowRight, MessageCircle } from 'lucide-react';
import { Program } from '../../data/careers';
import { getWhatsAppLink } from '../../data/config';

interface ProgramModalProps {
  program: Program | null;
  onClose: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({ program, onClose }) => {
  if (!program) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      
      {/* Dark backdrop blur */}
      <div
        className="fixed inset-0 bg-navy-950/70 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative bg-white border border-slate-200 rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden z-10 animate-fadeIn max-h-[85vh] flex flex-col">
        
        {/* Header image banner */}
        <div className="relative h-36 sm:h-52 bg-navy-950 overflow-hidden shrink-0">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
          
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview modal"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center shadow-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 text-white space-y-1">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-500/30 inline-block">
              {program.categoryTitle}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display">
              {program.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {program.overview}
          </p>

          {/* Highlights bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="flex items-center gap-2 p-3 bg-ivory-50 border border-slate-200 rounded-xl">
              <Clock className="w-4 h-4 text-amber-600 shrink-0" />
              <span><strong className="text-navy-900">Duration:</strong> {program.durationPlaceholder}</span>
            </div>
            <div className="flex items-center gap-2 p-3 bg-ivory-50 border border-slate-200 rounded-xl">
              <Award className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong className="text-navy-900">Eligibility:</strong> {program.eligibilityPlaceholder}</span>
            </div>
          </div>

          {/* Key Learnings */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-navy-900 uppercase tracking-wider">
              What You Will Learn
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {program.whatYouWillLearn.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Potential Roles */}
          <div className="space-y-2">
            <h4 className="text-sm font-extrabold text-navy-900 uppercase tracking-wider flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-amber-600" />
              <span>Potential Roles</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {program.potentialRoles.map((role, rIdx) => (
                <span key={rIdx} className="bg-slate-100 text-slate-800 font-semibold text-[11px] px-2.5 py-1 rounded-md">
                  {role}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-3">
          <Link
            to={`/programs/${program.slug}`}
            onClick={onClose}
            className="w-full sm:flex-1 py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center flex items-center justify-center gap-2 shadow-sm"
          >
            <span>VIEW FULL DETAILS</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>

          <a
            href={getWhatsAppLink(`Hi EduAvant, I would like to enquire about ${program.title}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto py-3 px-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
            <span>ASK ADVISOR</span>
          </a>
        </div>

      </div>

    </div>
  );
};
