import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Compass, ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../data/config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 border-b border-slate-200/80 shadow-nav'
          : 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-navy-900 flex items-center justify-center text-amber-500 shadow-md group-hover:bg-navy-800 transition-colors">
              <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-45" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-navy-900 leading-none">
                Edu<span className="text-amber-600">Avant</span>
              </span>
              <span className="text-[10px] font-medium text-slate-500 tracking-wider uppercase mt-0.5">
                Career Launchpad
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-navy-900 bg-slate-100/90'
                    : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#why-eduavant"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  // Let router handle home navigate, then scroll
                } else {
                  e.preventDefault();
                  document.getElementById('why-eduavant')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-3.5 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-navy-900 hover:bg-slate-50 transition-all"
            >
              Why EduAvant
            </a>
          </nav>

          {/* Desktop Right Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-emerald-50 rounded-lg transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Talk to Advisor</span>
            </a>

            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy-900 hover:bg-navy-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
            >
              <span>JOIN NOW</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/join"
              className="px-3.5 py-2 bg-navy-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm"
            >
              JOIN NOW
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'text-navy-900 bg-slate-100 font-bold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#why-eduavant"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 rounded-lg text-base font-semibold text-slate-700 hover:bg-slate-50"
            >
              Why EduAvant
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold text-sm rounded-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600" />
              <span>Talk to an Advisor on WhatsApp</span>
            </a>
            
            <Link
              to="/join"
              className="w-full py-3.5 px-4 bg-navy-900 text-white font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-md"
            >
              <span>JOIN EDUAVANT</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
