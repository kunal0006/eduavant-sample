import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, MessageCircle, RefreshCw, CheckCircle2, Sparkles, Plane, Hotel, Laptop } from 'lucide-react';
import { careerCategories } from '../../data/careers';
import { getWhatsAppLink } from '../../data/config';

export const CareerMatcher: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedInterest, setSelectedInterest] = useState<string>('aviation');
  const [selectedBackground, setSelectedBackground] = useState<string>('12th Pass');

  const interestOptions = [
    {
      id: 'aviation',
      title: 'Aviation & Flight Services',
      description: 'Airports, flight attendant grooming, passenger safety & airline operations.',
      icon: Plane,
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Luxury Hotels',
      description: '5-star guest relations, front office management & fine dining service.',
      icon: Hotel,
    },
    {
      id: 'travel-tourism',
      title: 'Travel & Global Tourism',
      description: 'International tour packaging, destination travel & airline CRS/GDS ticketing.',
      icon: Compass,
    },
    {
      id: 'digital-careers',
      title: 'Digital Marketing & Design',
      description: 'SEO, performance ad campaigns, graphic branding & social media content.',
      icon: Laptop,
    },
  ];

  const backgroundOptions = [
    '12th Pass / Awaiting Results',
    'College Student / Pursuing Degree',
    'Graduate / Looking for Career Switch',
  ];

  const matchedCategory = careerCategories.find(c => c.slug === selectedInterest) || careerCategories[0];

  const handleReset = () => {
    setStep(1);
    setSelectedInterest('aviation');
    setSelectedBackground('12th Pass');
  };

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-navy-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Subtle ambient glow */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header */}
          <div className="text-center space-y-3 mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 font-bold text-xs uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>INTERACTIVE CAREER FINDER</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display">
              Discover Your Ideal Career Stream.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Answer 2 quick questions to find the program best matched for your background and goals.
            </p>
          </div>

          {/* Step 1: Interest Choice */}
          {step === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                <span>Step 1 of 2: What environment excites you most?</span>
                <span>50% Completed</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interestOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = selectedInterest === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setSelectedInterest(opt.id)}
                      className={`p-5 rounded-2xl border text-left transition-all flex items-start gap-4 ${
                        isSelected
                          ? 'bg-navy-900 border-amber-500 ring-2 ring-amber-500/30 text-white shadow-lg'
                          : 'bg-navy-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                        isSelected ? 'bg-amber-500 text-navy-950' : 'bg-slate-800 text-amber-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-extrabold text-sm text-white">{opt.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{opt.description}</p>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  <span>NEXT STEP</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Background Choice */}
          {step === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="flex items-center justify-between text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                <span>Step 2 of 2: What is your current background stage?</span>
                <span>100% Completed</span>
              </div>

              <div className="space-y-3">
                {backgroundOptions.map((bg) => {
                  const isSelected = selectedBackground === bg;
                  return (
                    <button
                      key={bg}
                      type="button"
                      onClick={() => setSelectedBackground(bg)}
                      className={`w-full p-4 rounded-xl border text-left font-bold text-sm transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-navy-900 border-amber-500 text-amber-400 ring-2 ring-amber-500/30'
                          : 'bg-navy-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <span>{bg}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-amber-400" />}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider"
                >
                  ← Back to Step 1
                </button>

                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-md transition-all"
                >
                  <span>VIEW MATCHED PATH</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Match Result */}
          {step === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold text-amber-400 uppercase tracking-widest bg-amber-500/20 px-3 py-1 rounded-md border border-amber-500/30">
                    YOUR RECOMMENDED CAREER MATCH
                  </span>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-bold text-slate-400 hover:text-white inline-flex items-center gap-1"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retake Quiz</span>
                  </button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-extrabold text-white font-display">
                    {matchedCategory.title} Stream
                  </h3>
                  <p className="text-slate-300 text-sm">
                    Based on your profile ({selectedBackground}), you are well-positioned for career modules under <strong className="text-white">{matchedCategory.title}</strong>.
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                    Recommended Programs:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {matchedCategory.programs.map((p) => (
                      <Link
                        key={p.slug}
                        to={`/programs/${p.slug}`}
                        className="bg-navy-950 hover:bg-navy-800 border border-slate-700 text-slate-200 text-xs font-bold px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{p.title}</span>
                        <ArrowRight className="w-3 h-3 text-amber-400" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={getWhatsAppLink(`Hi EduAvant, I took the Career Matcher quiz. My result is ${matchedCategory.title} (${selectedBackground}). I would like to speak to an advisor.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>TALK TO ADVISOR ABOUT THIS MATCH</span>
                </a>

                <Link
                  to={`/careers/${matchedCategory.slug}`}
                  className="w-full sm:w-auto py-3.5 px-6 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center border border-slate-700"
                >
                  EXPLORE {matchedCategory.title.toUpperCase()}
                </Link>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
