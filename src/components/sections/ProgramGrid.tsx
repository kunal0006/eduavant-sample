import React, { useState } from 'react';
import { Program } from '../../data/careers';
import { ProgramCard } from './ProgramCard';
import { ProgramModal } from '../ui/ProgramModal';

interface ProgramGridProps {
  programs: Program[];
  title?: string;
  subtitle?: string;
}

export const ProgramGrid: React.FC<ProgramGridProps> = ({
  programs,
  title = "Career-Oriented Programs",
  subtitle = "Select a program track to explore detailed curriculum highlights, eligibility guidelines, and career opportunities."
}) => {
  const [activeModalProgram, setActiveModalProgram] = useState<Program | null>(null);

  return (
    <div className="space-y-8">
      {title && (
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {programs.map((program) => (
          <ProgramCard
            key={program.slug}
            program={program}
            onQuickView={(p) => setActiveModalProgram(p)}
          />
        ))}
      </div>

      {/* Program Quick View Modal */}
      <ProgramModal
        program={activeModalProgram}
        onClose={() => setActiveModalProgram(null)}
      />
    </div>
  );
};
