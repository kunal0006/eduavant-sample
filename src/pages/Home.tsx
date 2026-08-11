import React from 'react';
import { Hero } from '../components/sections/Hero';
import { TrustStrip } from '../components/sections/TrustStrip';
import { QueryForm } from '../components/sections/QueryForm';
import { CareerMatcher } from '../components/sections/CareerMatcher';
import { CareerGrid } from '../components/sections/CareerGrid';
import { WhyEduAvant } from '../components/sections/WhyEduAvant';
import { CareerJourney } from '../components/sections/CareerJourney';
import { StudentAspiration } from '../components/sections/StudentAspiration';
import { BenefitsProof } from '../components/sections/BenefitsProof';
import { FAQSection } from '../components/sections/FAQSection';
import { FinalEnquiry } from '../components/sections/FinalEnquiry';
import { FinalCTA } from '../components/sections/FinalCTA';

export const Home: React.FC = () => {
  return (
    <main className="space-y-0">
      <Hero />
      <TrustStrip />
      <QueryForm />
      <CareerMatcher />
      <CareerGrid />
      <WhyEduAvant />
      <CareerJourney />
      <StudentAspiration />
      <BenefitsProof />
      <FAQSection />
      <FinalEnquiry />
      <FinalCTA />
    </main>
  );
};
