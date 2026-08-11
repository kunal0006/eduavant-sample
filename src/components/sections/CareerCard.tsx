import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Plane, Hotel, Compass, Laptop } from 'lucide-react';
import { CareerCategory } from '../../data/careers';

interface CareerCardProps {
  category: CareerCategory;
}

export const CareerCard: React.FC<CareerCardProps> = ({ category }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Plane': return Plane;
      case 'Hotel': return Hotel;
      case 'Compass': return Compass;
      case 'Laptop': return Laptop;
      default: return Compass;
    }
  };

  const IconComponent = getIcon(category.iconName);

  return (
    <Link
      to={`/careers/${category.slug}`}
      className={`group relative bg-white border border-slate-200/90 rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between ${category.borderHoverClass}`}
    >
      <div>
        {/* Category Image Header with subtle zoom */}
        <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-100">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
          
          {/* Stream Icon Badge */}
          <div className="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-white/90 backdrop-blur-md flex items-center justify-center text-navy-900 shadow-md">
            <IconComponent className="w-5 h-5 text-navy-900" />
          </div>

          {/* Program Count Badge */}
          <div className="absolute top-4 right-4">
            <span className={`text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border shadow-sm ${category.badgeClass}`}>
              ● 2026 Admissions Open
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 text-white">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-0.5">
              {category.programs.length} Specialization Tracks
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight font-display leading-tight">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-3">
          <p className="text-xs font-bold text-amber-700 uppercase tracking-wide">
            {category.tagline}
          </p>
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
            {category.description}
          </p>
        </div>
      </div>

      {/* Card Footer Action */}
      <div className="px-6 pb-6 pt-2">
        <div className="w-full py-3.5 px-4 bg-slate-50 group-hover:bg-navy-900 text-navy-900 group-hover:text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-between shadow-sm">
          <span>EXPLORE {category.title.toUpperCase()}</span>
          <ArrowRight className="w-4 h-4 text-amber-500 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};
