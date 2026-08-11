import React from 'react';
import { careerCategories } from '../../data/careers';
import { CareerCard } from './CareerCard';

export const CareerGrid: React.FC = () => {
  return (
    <section id="careers" className="py-20 bg-ivory-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-amber-600 bg-amber-100/80 px-3.5 py-1.5 rounded-full border border-amber-300/60 inline-block">
            CAREER OPPORTUNITIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Explore Where Your Career Can Take You.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Discover structured certification streams designed around high-demand industry sectors. Choose your direction to see potential roles and program opportunities.
          </p>
        </div>

        {/* 4 Large Interactive Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {careerCategories.map((category) => (
            <CareerCard key={category.slug} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
};
