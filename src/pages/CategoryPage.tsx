import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryBySlug } from '../data/careers';
import { ProgramGrid } from '../components/sections/ProgramGrid';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/config';

export const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <main className="pt-28 pb-20 bg-ivory-50">
      
      {/* Category Hero */}
      <section className="relative bg-navy-950 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={category.heroImage}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Career Streams</span>
          </Link>

          <div className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/20 px-3.5 py-1.5 rounded-full border border-amber-500/30 inline-block">
              {category.title} Stream
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              {category.tagline}
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {category.description}
            </p>
          </div>

          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md"
            >
              <span>JOIN {category.title.toUpperCase()} PROGRAM</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppLink(`Hi EduAvant, I would like to enquire about ${category.title} career opportunities.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl border border-slate-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>TALK TO AN ADVISOR</span>
            </a>
          </div>
        </div>
      </section>

      {/* Program Cards in this Category */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgramGrid
          programs={category.programs}
          title={`${category.title} Programs`}
          subtitle={`Explore practical certification modules available under ${category.title}.`}
        />
      </section>

      {/* Category Specific CTA Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-navy-900">
            Have Questions About {category.title} Careers?
          </h2>
          <p className="text-slate-600 text-sm max-w-md mx-auto">
            Our admissions desk will walk you through role expectations, software tools, and starting guidelines.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md"
            >
              <span>SUBMIT ENQUIRY</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
};
