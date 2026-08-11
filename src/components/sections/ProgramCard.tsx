import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Award, Briefcase, MessageCircle, Eye } from 'lucide-react';
import { Program } from '../../data/careers';
import { getWhatsAppLink } from '../../data/config';

interface ProgramCardProps {
  program: Program;
  onQuickView?: (program: Program) => void;
}

export const ProgramCard: React.FC<ProgramCardProps> = ({ program, onQuickView }) => {
  return (
    <div className="bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group hover:border-amber-400/80">
      <div>
        {/* Program Thumbnail */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
          
          <div className="absolute top-3 left-3 bg-navy-900/90 backdrop-blur-md text-amber-400 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md">
            {program.categoryTitle}
          </div>

          {program.badgeTag && (
            <div className="absolute top-3 right-3 bg-amber-500 text-navy-950 text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-sm">
              {program.badgeTag}
            </div>
          )}
        </div>

        {/* Content Details */}
        <div className="p-6 space-y-3.5">
          <h3 className="text-2xl font-extrabold text-navy-900 leading-snug font-display group-hover:text-amber-600 transition-colors">
            {program.title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
            {program.shortDescription}
          </p>

          {/* Placeholders for duration, eligibility, career direction */}
          <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
            
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500 shrink-0" />
              <span><strong className="text-slate-900">Duration:</strong> {program.durationPlaceholder}</span>
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-500 shrink-0" />
              <span><strong className="text-slate-900">Eligibility:</strong> {program.eligibilityPlaceholder}</span>
            </div>

            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-500 shrink-0" />
              <span><strong className="text-slate-900">Role Focus:</strong> {program.careerDirection}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="px-6 pb-6 pt-2 space-y-2">
        <div className="flex items-center gap-2">
          <Link
            to={`/programs/${program.slug}`}
            className="flex-1 py-3 px-4 bg-navy-900 hover:bg-navy-800 text-white rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1.5 shadow-sm"
          >
            <span>EXPLORE</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </Link>

          {onQuickView && (
            <button
              type="button"
              onClick={() => onQuickView(program)}
              title="Quick Preview"
              className="py-3 px-3.5 bg-slate-100 hover:bg-amber-100 text-slate-700 hover:text-amber-900 rounded-xl font-bold text-xs transition-colors flex items-center gap-1 shrink-0"
            >
              <Eye className="w-4 h-4 text-amber-600" />
              <span className="hidden sm:inline">Preview</span>
            </button>
          )}

          <a
            href={getWhatsAppLink(`Hi, I would like to enquire about the ${program.title} program.`)}
            target="_blank"
            rel="noopener noreferrer"
            title="Enquire on WhatsApp"
            className="p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
          </a>
        </div>
      </div>
    </div>
  );
};
