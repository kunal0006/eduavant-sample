import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight, Phone, Mail, MessageCircle, MapPin } from 'lucide-react';
import { CONTACT_CONFIG, getWhatsAppLink, getCallLink } from '../../data/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Callout Banner */}
        <div className="bg-navy-900 border border-slate-800 rounded-2xl p-6 sm:p-10 mb-16 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">
              Ready to Explore What's Next?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Start your EduAvant career journey today.
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Connect with our career advisors to discover structured certification paths in Aviation, Hospitality, Travel & Digital Skills.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 shrink-0">
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-navy-950 font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all transform hover:-translate-y-0.5 shadow-md"
            >
              <span>JOIN EDUAVANT</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-slate-700"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>TALK TO AN ADVISOR</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center text-navy-950">
                <Compass className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                Edu<span className="text-amber-500">Avant</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              A launchpad for your career. Providing practical, industry-oriented career programs designed to equip 12th-pass students and college youth with real market skills.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{CONTACT_CONFIG.address}</span>
              </p>
            </div>
          </div>

          {/* Explore Category Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Explore Careers</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/careers/aviation" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Aviation Opportunities
                </Link>
              </li>
              <li>
                <Link to="/careers/hospitality" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Hospitality & Hotels
                </Link>
              </li>
              <li>
                <Link to="/careers/travel-tourism" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Travel & Tourism
                </Link>
              </li>
              <li>
                <Link to="/careers/digital" className="text-slate-400 hover:text-amber-400 transition-colors">
                  Digital & Creative Skills
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-amber-500 hover:text-amber-400 font-semibold transition-colors inline-flex items-center gap-1">
                  <span>View All Categories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors">
                  About EduAvant
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Career Programs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Enquiry
                </Link>
              </li>
              <li>
                <a href="#faqs" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <Link to="/join" className="text-slate-400 hover:text-white transition-colors">
                  Join EduAvant
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Options */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Admissions Desk</h4>
            <div className="space-y-3 text-sm">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp: {CONTACT_CONFIG.whatsappFormatted}</span>
              </a>
              <a
                href={getCallLink()}
                className="flex items-center gap-2.5 text-slate-300 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Phone: {CONTACT_CONFIG.phoneFormatted}</span>
              </a>
              <a
                href={`mailto:${CONTACT_CONFIG.email}`}
                className="flex items-center gap-2.5 text-slate-300 hover:text-sky-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-sky-500" />
                <span>{CONTACT_CONFIG.email}</span>
              </a>
            </div>
            <div className="pt-2">
              <span className="text-xs text-slate-500 block">{CONTACT_CONFIG.operatingHours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 EduAvant. All rights reserved. Career-focused certification programs.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-slate-400">Enquiry Policy</Link>
            <Link to="/about" className="hover:text-slate-400">Privacy Notice</Link>
            <Link to="/join" className="text-amber-500 hover:text-amber-400 font-bold uppercase">JOIN NOW</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
