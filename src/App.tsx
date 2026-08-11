import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/layout/WhatsAppButton';
import { MobileCTA } from './components/layout/MobileCTA';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { CareersOverview } from './pages/CareersOverview';
import { CategoryPage } from './pages/CategoryPage';
import { ProgramDetail } from './pages/ProgramDetail';
import { Contact } from './pages/Contact';
import { Join } from './pages/Join';

// Scroll to top automatically on route changes
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-50 text-navy-900 font-sans antialiased overflow-x-hidden pb-16 md:pb-0">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<CareersOverview />} />
            <Route path="/careers/:categorySlug" element={<CategoryPage />} />
            <Route path="/programs/:slug" element={<ProgramDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
        <WhatsAppButton />
        <MobileCTA />
      </div>
    </Router>
  );
};

export default App;
