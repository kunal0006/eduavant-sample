import React from 'react';
import { careerCategories, getAllPrograms } from '../data/careers';
import { CareerCard } from '../components/sections/CareerCard';
import { ProgramGrid } from '../components/sections/ProgramGrid';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CareersOverview: React.FC = () => {
  const allPrograms = getAllPrograms();

  return (
    <main className="pt-28 pb-20 bg-ivory-50">
      
      {/* Header */}
      <section className="bg-navy-950 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 relative z-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-4 py-1.5 rounded-full border border-amber-500/20 inline-block">
            CAREER OPPORTUNITIES
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Explore All Career Streams.
          </h1>
          <p className="text-slate-300 text-base sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Discover specialized certification modules across Aviation, Hospitality, Travel & Tourism, and Digital Skills designed for modern employability.
          </p>
        </div>
      </section>

      {/* 4 Category Stream Cards */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            Career Categories
          </h2>
          <p className="text-slate-600 text-sm">
            Select a career stream to view detailed programs or browse the complete list below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerCategories.map((cat) => (
            <CareerCard key={cat.slug} category={cat} />
          ))}
        </div>
      </section>

      {/* All Available Programs Grid */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProgramGrid
            programs={allPrograms}
            title="All Career Programs"
            subtitle="Browse every certification program available across our 4 core career streams."
          />
        </div>
      </section>

      {/* Bottom Conversion Bar */}
      <section className="py-16 max-w-4xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-navy-900">
          Need Help Selecting a Program?
        </h2>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          Our admissions advisors can review your background and suggest the best suited path.
        </p>
        <div className="pt-2">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md"
          >
            <span>START YOUR APPLICATION</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </section>

    </main>
  );
};
