export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What career programs are offered at EduAvant?",
    answer: "EduAvant offers practical, industry-oriented certification and diploma programs in four key career streams: Aviation (Cabin Crew, Airport Management, Ground Staff), Hospitality (Hotel Operations, Guest Relations, F&B), Travel & Tourism (Tour Management, GDS Ticketing), and Digital Careers (Digital Marketing, Graphic Design, Social Media Strategy)."
  },
  {
    id: "faq-2",
    question: "Who can apply for these programs? Is 12th pass eligible?",
    answer: "Yes, students who have passed 12th grade (10+2 in any stream) as well as college students and graduates can apply. Our programs are designed to take candidates from foundational learning to job-ready practical skillsets."
  },
  {
    id: "faq-3",
    question: "How do I choose which career stream is right for me?",
    answer: "If you are unsure between Aviation, Hospitality, Travel, or Digital Skills, you can request a 1-on-1 session with our career advisors. We analyze your communication strengths, career interests, and goals to help you select the ideal path."
  },
  {
    id: "faq-4",
    question: "What are the program durations and eligibility requirements?",
    answer: "Specific program durations and entry criteria vary based on the specialization level. Detailed duration tracks and stream eligibility requirements are shared during the career counseling call."
  },
  {
    id: "faq-5",
    question: "How can I get in touch with an EduAvant career advisor?",
    answer: "You can click on 'Talk to an Advisor' or 'WhatsApp Us' anywhere on the site to connect instantly on WhatsApp, fill out our early Query Form, or call our admissions desk directly."
  },
  {
    id: "faq-6",
    question: "What does the learning experience look like at EduAvant?",
    answer: "Our learning approach emphasizes practical workshops, real-world case simulations, mock interviews, grooming sessions, and industry mentor interactions rather than purely theoretical lectures."
  },
  {
    id: "faq-7",
    question: "How do I submit an enquiry or start my application process?",
    answer: "You can click 'Join Now' or fill out the enquiry form on any page. Our admissions counselor will review your preferences and reach out within 24 hours with complete details."
  }
];
