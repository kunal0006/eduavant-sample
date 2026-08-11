import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, Award, Globe } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white via-slate-50 to-ivory-50 overflow-hidden">
      
      {/* Ambient background glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-amber-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Funnel Hook */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-amber-900 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>BUILD YOUR CAREER</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.08] font-display">
              Your Career Starts With the{' '}
              <span className="relative inline-block text-navy-900">
                Right Opportunity.
                <span className="absolute bottom-1 left-0 w-full h-3 bg-amber-300/40 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-600 text-base sm:text-xl font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              EduAvant empowers post-12th students and ambitious youth with practical, market-aligned certification tracks across <span className="font-semibold text-navy-900">Aviation</span>, <span className="font-semibold text-navy-900">Hospitality</span>, <span className="font-semibold text-navy-900">Travel & Tourism</span>, and <span className="font-semibold text-navy-900">Digital Careers</span>.
            </p>

            {/* Call to Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4">
              <Link
                to="/careers"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 sm:py-4 min-h-[48px] bg-navy-900 hover:bg-navy-800 text-white font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                <span>EXPLORE CAREERS</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <a
                href={getWhatsAppLink("Hi EduAvant, I'd like to speak with a career advisor regarding opportunities.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 sm:py-4 min-h-[48px] bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-900 border border-slate-200 hover:border-emerald-300 font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>TALK TO AN ADVISOR</span>
              </a>
            </div>

            {/* Quick trust micro-badge */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-semibold text-slate-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Career-Focused Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Practical Industry Skills</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sky-500" />
                <span>Expert Guidance</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Imagery Grid & Minimal Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="grid grid-cols-2 gap-4 relative">
              
              {/* Image 1: Aviation */}
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/5] transform lg:-rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80"
                  alt="Aviation & Flight Crew Career"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-xs px-2.5 py-1 bg-navy-950/60 backdrop-blur-md rounded-md border border-white/20">
                  Aviation Services
                </span>
              </div>

              {/* Image 2: Hospitality */}
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/5] transform lg:rotate-2 hover:rotate-0 transition-transform duration-500 mt-6 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
                  alt="Luxury Hospitality & Guest Management"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-xs px-2.5 py-1 bg-navy-950/60 backdrop-blur-md rounded-md border border-white/20">
                  Hospitality Excellence
                </span>
              </div>

              {/* Image 3: Travel & Tourism */}
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[4/3] col-span-2 border border-white/60">
                <img
                  src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
                  alt="International Travel & Tourism Operations"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white">
                  <span className="font-bold text-xs px-2.5 py-1 bg-navy-950/60 backdrop-blur-md rounded-md border border-white/20">
                    Travel & Tourism Management
                  </span>
                  <span className="font-semibold text-[11px] text-amber-300">
                    Modern Careers
                  </span>
                </div>
              </div>

              {/* Minimal Floating Label 1 */}
              <div className="absolute -top-4 -left-4 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center text-amber-700">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-navy-900">Career-Focused</p>
                  <p className="text-[10px] text-slate-500 font-medium">Industry Aligned Tracks</p>
                </div>
              </div>

              {/* Minimal Floating Label 2 */}
              <div className="absolute -bottom-4 -right-4 bg-navy-900 text-white p-3.5 rounded-2xl shadow-xl border border-navy-800 flex items-center gap-3 hidden sm:flex">
                <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-navy-950">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white">Multiple Career Paths</p>
                  <p className="text-[10px] text-slate-300">Aviation · Hospitality · Digital</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
