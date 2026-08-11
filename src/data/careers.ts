export interface Program {
  slug: string;
  title: string;
  categorySlug: string;
  categoryTitle: string;
  shortDescription: string;
  overview: string;
  whoItIsFor: string[];
  whatYouWillLearn: string[];
  durationPlaceholder: string;
  eligibilityPlaceholder: string;
  careerDirection: string;
  potentialRoles: string[];
  learningExperience: string;
  image: string;
  badgeTag?: string;
}

export interface CareerCategory {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  heroImage: string;
  iconName: string;
  colorAccent: string;
  badgeClass: string;
  borderHoverClass: string;
  programs: Program[];
}

export const careerCategories: CareerCategory[] = [
  {
    slug: "aviation",
    title: "Aviation",
    tagline: "Take off towards high-flying international aviation careers",
    description: "Prepare for dynamic roles across passenger services, flight operations, cabin crew excellence, and ground management.",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1519074069444-1ba4e2221665?auto=format&fit=crop&w=1600&q=80",
    iconName: "Plane",
    colorAccent: "sky",
    badgeClass: "bg-sky-100/90 text-sky-800 border-sky-200",
    borderHoverClass: "hover:border-sky-400 hover:shadow-sky-500/10",
    programs: [
      {
        slug: "diploma-in-aviation",
        title: "Diploma in Aviation",
        categorySlug: "aviation",
        categoryTitle: "Aviation",
        badgeTag: "Popular 12th-Pass Track",
        shortDescription: "Comprehensive training covering airport operations, passenger handling, and aviation safety fundamentals.",
        overview: "A holistic program designed to equip students with core operational knowledge of commercial airports and airline protocols.",
        whoItIsFor: [
          "Students after 12th looking for fast-track entry into the aviation industry",
          "Graduates seeking specialization in airport ground management",
          "Individuals with strong communication skills and global ambition"
        ],
        whatYouWillLearn: [
          "Airport passenger service systems and check-in procedures",
          "Aviation safety regulations and emergency management",
          "Airlines baggage handling and ramp operations",
          "Customer relationship management in high-touch environments"
        ],
        durationPlaceholder: "Industry-aligned certification track",
        eligibilityPlaceholder: "10+2 pass (any stream) or equivalent",
        careerDirection: "Airport Operations & Ground Service",
        potentialRoles: ["Passenger Service Executive", "Duty Officer", "Ramp Supervisor", "Airport Operations Assistant"],
        learningExperience: "Hands-on simulation sessions, airport site visits, and direct interaction with seasoned airline professionals.",
        image: "https://images.unsplash.com/photo-1529074963764-98f45c47344b?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "cabin-crew-training",
        title: "Cabin Crew & Flight Attendant Program",
        categorySlug: "aviation",
        categoryTitle: "Aviation",
        badgeTag: "High Global Demand",
        shortDescription: "Master in-flight service excellence, passenger safety protocols, and international hospitality standards.",
        overview: "Tailored grooming, safety, emergency procedure, and inflight hospitality training designed to prepare students for airline cabin crew assessments.",
        whoItIsFor: [
          "Aspirational students aiming for international and domestic airline cabin crew roles",
          "Candidates seeking professional grooming, communication, and poise enhancement"
        ],
        whatYouWillLearn: [
          "In-flight safety equipment protocols and first aid drills",
          "Professional aviation grooming, body language, and etiquette",
          "Crisis communication and de-escalation under pressure",
          "World-class food & beverage cabin service standards"
        ],
        durationPlaceholder: "Career-focused intensive module",
        eligibilityPlaceholder: "10+2 pass with confident spoken English",
        careerDirection: "In-flight Services & Cabin Safety",
        potentialRoles: ["Air Hostess / Cabin Crew", "Flight Attendant", "VIP Aviation Host"],
        learningExperience: "Mock aircraft cabin practicals, emergency evacuation simulations, and interview mock drills.",
        image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "airport-management",
        title: "Airport Management & Logistics",
        categorySlug: "aviation",
        categoryTitle: "Aviation",
        shortDescription: "Learn key administrative, logistical, and security management functions of modern international airports.",
        overview: "Focuses on behind-the-scenes administrative efficiency, terminal management, cargo logistics, and aviation compliance.",
        whoItIsFor: [
          "Graduates and post-12th students with an aptitude for administration and logistics",
          "Future leaders aiming for managerial tracks in airport infrastructure"
        ],
        whatYouWillLearn: [
          "Terminal layout design and passenger flow optimization",
          "Aviation security standards and IATA regulations",
          "Cargo handling, air freight logistics, and tracking",
          "Airline vendor coordination and facility maintenance"
        ],
        durationPlaceholder: "Structured career skill track",
        eligibilityPlaceholder: "10+2 pass or Graduate in any stream",
        careerDirection: "Airport Logistics & Terminal Management",
        potentialRoles: ["Terminal Operations Executive", "Air Cargo Officer", "Aviation Security Coordinator"],
        learningExperience: "Real-world case studies of major global hub airports and logistics workflows.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "ground-staff-operations",
        title: "Ground Staff Operations",
        categorySlug: "aviation",
        categoryTitle: "Aviation",
        shortDescription: "Specialized training for gate handling, ticketing counters, baggage tracing, and arrival assistance.",
        overview: "Develop frontline operational capabilities needed to keep airline ground operations smooth, punctual, and customer-friendly.",
        whoItIsFor: [
          "Job-seeking 12th pass & diploma holders who thrive in active service environments",
          "Communicative candidates eager to start working directly at international airports"
        ],
        whatYouWillLearn: [
          "Global distribution systems (GDS) and ticketing entry",
          "Special assistance passenger handling (PRM & VIPs)",
          "Baggage screening, tagging, and mishandled baggage procedures",
          "Turnaround time management for aircraft departure"
        ],
        durationPlaceholder: "Practical skills certificate track",
        eligibilityPlaceholder: "10+2 pass (any stream)",
        careerDirection: "Airport Frontline Services",
        potentialRoles: ["Ground Handling Agent", "Ticketing Executive", "Guest Service Associate"],
        learningExperience: "Interactive software training and role-playing customer service scenarios.",
        image: "https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    slug: "hospitality",
    title: "Hospitality",
    tagline: "Excellence in premium guest relations and luxury hotel management",
    description: "Master world-class guest experiences, front office leadership, food & beverage operations, and resort management.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1600&q=80",
    iconName: "Hotel",
    colorAccent: "emerald",
    badgeClass: "bg-emerald-100/90 text-emerald-800 border-emerald-200",
    borderHoverClass: "hover:border-emerald-400 hover:shadow-emerald-500/10",
    programs: [
      {
        slug: "diploma-in-hospitality",
        title: "Diploma in Hospitality Management",
        categorySlug: "hospitality",
        categoryTitle: "Hospitality",
        badgeTag: "5-Star Luxury Focus",
        shortDescription: "A comprehensive program covering hotel operations, luxury service standards, and front office leadership.",
        overview: "Build a strong foundation across core hotel operational departments: Front Office, Housekeeping, F&B, and Event Planning.",
        whoItIsFor: [
          "Students passionate about service excellence and luxury hospitality",
          "Aspirational youth seeking careers in 5-star hotel chains globally"
        ],
        whatYouWillLearn: [
          "Luxury guest journey mapping and concierge operations",
          "Property management systems (PMS) and reservation workflows",
          "Service etiquette and cross-cultural communication",
          "Basic financial management for hotel departments"
        ],
        durationPlaceholder: "Comprehensive career track",
        eligibilityPlaceholder: "10+2 pass in any discipline",
        careerDirection: "Hotel Operations & Management",
        potentialRoles: ["Guest Relations Executive", "Front Desk Officer", "Hospitality Operations Associate"],
        learningExperience: "Practical workshops in luxury setup environments and industry mentor sessions.",
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "front-office-operations",
        title: "Front Office & Guest Relations",
        categorySlug: "hospitality",
        categoryTitle: "Hospitality",
        shortDescription: "Become the face of top hotel brands with specialized guest engagement and administrative skills.",
        overview: "Focuses on front desk management, guest check-in/out efficiency, conflict resolution, and VIP protocol implementation.",
        whoItIsFor: [
          "Outgoing individuals with strong interpersonal skills",
          "Candidates aiming for rapid career growth in front-of-house hotel operations"
        ],
        whatYouWillLearn: [
          "Front desk software and check-in procedure efficiency",
          "Guest feedback management and service recovery strategies",
          "Concierge recommendations and city guide expertise",
          "Revenue basics and room allocation strategies"
        ],
        durationPlaceholder: "Focused practical module",
        eligibilityPlaceholder: "10+2 pass",
        careerDirection: "Front of House Leadership",
        potentialRoles: ["Front Desk Agent", "Concierge Assistant", "VIP Guest Relations Executive"],
        learningExperience: "Real-time reservation software practice and live customer scenario drills.",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "food-beverage-management",
        title: "Food & Beverage Operations",
        categorySlug: "hospitality",
        categoryTitle: "Hospitality",
        shortDescription: "Learn restaurant management, banquet services, mixology basics, and culinary service workflows.",
        overview: "Covers fine dining service etiquette, banquet logistics, beverage management, and hygiene standards in commercial kitchens.",
        whoItIsFor: [
          "Students eager to enter restaurant management, luxury resort F&B, or cruise dining",
          "Enthusiasts of culinary arts, beverage pairing, and event service"
        ],
        whatYouWillLearn: [
          "Fine dining service styles (Silver service, American, French)",
          "Banquet and large-scale event catering execution",
          "Inventory control, food cost calculation, and hygiene compliance",
          "Menu engineering and upselling techniques"
        ],
        durationPlaceholder: "Skill-focused training certificate",
        eligibilityPlaceholder: "10+2 pass",
        careerDirection: "Restaurant & Banquet Management",
        potentialRoles: ["F&B Service Executive", "Banquet Supervisor", "Restaurant Host / Captain"],
        learningExperience: "Hands-on table setting, beverage service etiquette, and event management simulations.",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    slug: "travel-tourism",
    title: "Travel & Tourism",
    tagline: "Design global journeys and lead international tourism enterprises",
    description: "Explore tour packaging, international ticketing, itinerary planning, destination marketing, and travel consulting.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80",
    iconName: "Compass",
    colorAccent: "amber",
    badgeClass: "bg-amber-100/90 text-amber-900 border-amber-200",
    borderHoverClass: "hover:border-amber-400 hover:shadow-amber-500/10",
    programs: [
      {
        slug: "diploma-in-travel-tourism",
        title: "Diploma in Travel & Tourism Management",
        categorySlug: "travel-tourism",
        categoryTitle: "Travel & Tourism",
        badgeTag: "Global Destination Focus",
        shortDescription: "Master global destination geography, tour packaging, itinerary design, and travel agency operations.",
        overview: "Equips students with comprehensive tools to craft memorable travel experiences and manage modern tourism agencies.",
        whoItIsFor: [
          "Travel enthusiasts eager to turn their passion into an international career",
          "Students interested in destination management, tour guiding, and travel tech"
        ],
        whatYouWillLearn: [
          "Global geography, time zones, and international routing",
          "Custom itinerary creation for corporate and leisure travellers",
          "Visa processing requirements, travel insurance, and passport rules",
          "Destination branding and eco-tourism trends"
        ],
        durationPlaceholder: "Professional career track",
        eligibilityPlaceholder: "10+2 pass (any stream)",
        careerDirection: "Tourism Management & Travel Consultancy",
        potentialRoles: ["Travel Consultant", "Tour Operations Executive", "Destination Specialist"],
        learningExperience: "Practical itinerary creation workshops using real-world travel planning software.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "ticketing-reservations",
        title: "Air Ticketing & Global Distribution Systems",
        categorySlug: "travel-tourism",
        categoryTitle: "Travel & Tourism",
        badgeTag: "GDS Software Practicals",
        shortDescription: "Specialized computer reservation systems (CRS/GDS) training for flight booking and fare calculation.",
        overview: "Focuses on hands-on airline ticketing software, baggage allowance rules, code-share flights, and fare construction.",
        whoItIsFor: [
          "Detail-oriented candidates seeking roles in corporate travel desks and travel portals",
          "Students looking for high-demand technical skills in travel booking systems"
        ],
        whatYouWillLearn: [
          "GDS booking entries (Amadeus/Galileo fundamentals)",
          "Complex multi-city fare calculation and refund processing",
          "Corporate travel policy compliance and booking workflows",
          "Customer service for flight delays and rescheduling"
        ],
        durationPlaceholder: "Technical software certificate track",
        eligibilityPlaceholder: "10+2 pass with basic computer familiarity",
        careerDirection: "Airline & Portal Reservation Management",
        potentialRoles: ["Ticketing Specialist", "Corporate Travel Desk Executive", "Reservation Agent"],
        learningExperience: "Intensive software lab sessions replicating real travel desk booking platforms.",
        image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80"
      }
    ]
  },
  {
    slug: "digital-careers",
    title: "Other Career Skills",
    tagline: "In-demand digital skillsets for modern corporate & creative roles",
    description: "Build job-ready competencies in digital marketing, brand graphics design, and strategic social media management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
    iconName: "Laptop",
    colorAccent: "indigo",
    badgeClass: "bg-indigo-100/90 text-indigo-800 border-indigo-200",
    borderHoverClass: "hover:border-indigo-400 hover:shadow-indigo-500/10",
    programs: [
      {
        slug: "digital-marketing",
        title: "Professional Digital Marketing",
        categorySlug: "digital-careers",
        categoryTitle: "Other Career Skills",
        badgeTag: "Live Campaign Practicals",
        shortDescription: "Master search engine optimization, performance ads, lead generation, and content strategies.",
        overview: "A practical guide to launching and scaling digital campaigns across Search, Social, Email, and Content channels.",
        whoItIsFor: [
          "Students wanting fast-track entrance into growth marketing and advertising",
          "Creative thinkers who like data-driven decision making"
        ],
        whatYouWillLearn: [
          "Search Engine Optimization (SEO) & Keyword Strategy",
          "Google Ads & Meta (Facebook/Instagram) Paid Campaigns",
          "Web Analytics, conversion tracking, and campaign ROI",
          "Email marketing automation and funnel optimization"
        ],
        durationPlaceholder: "Job-ready modern skill module",
        eligibilityPlaceholder: "10+2 pass or college student",
        careerDirection: "Digital Marketing & Performance Ads",
        potentialRoles: ["Digital Marketing Executive", "SEO Specialist", "PPC Campaign Specialist"],
        learningExperience: "Live campaign building exercises, analytics breakdown, and portfolio development.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "graphic-design",
        title: "Graphic Design & Visual Branding",
        categorySlug: "digital-careers",
        categoryTitle: "Other Career Skills",
        shortDescription: "Learn visual hierarchy, typography, brand logo design, and marketing creative assets design.",
        overview: "Covers core graphic design principles, industry tool mastery, layout composition, and brand identity development.",
        whoItIsFor: [
          "Creative visual thinkers aspiring to work with ad agencies, studios, or remote clients",
          "Design enthusiasts wanting to build a professional creative portfolio"
        ],
        whatYouWillLearn: [
          "Design principles: balance, visual weight, color theory & typography",
          "Creating brand identity collateral (Logos, Brand books, Posters)",
          "Social media ad graphics & digital banner composition",
          "Portfolio curation and client communication"
        ],
        durationPlaceholder: "Creative design certification",
        eligibilityPlaceholder: "10+2 pass (creative mindset)",
        careerDirection: "Visual Design & Creative Agencies",
        potentialRoles: ["Junior Graphic Designer", "Visual Asset Creator", "Brand Identity Assistant"],
        learningExperience: "Design critique sessions, real project briefs, and personal portfolio construction.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80"
      },
      {
        slug: "social-media-marketing",
        title: "Social Media & Content Strategy",
        categorySlug: "digital-careers",
        categoryTitle: "Other Career Skills",
        shortDescription: "Learn community building, viral short-form video planning, brand storytelling, and influencer outreach.",
        overview: "Specialized in growing brand presence across Instagram, LinkedIn, YouTube Shorts, and emerging social platforms.",
        whoItIsFor: [
          "Social media savvy individuals wanting a structured career in content strategy",
          "Aspiring brand managers and digital content creators"
        ],
        whatYouWillLearn: [
          "Short-form video scripting, hook creation & trend adaptation",
          "Social media content calendar scheduling and curation",
          "Community engagement & reputation management",
          "Analytics reporting & audience growth tactics"
        ],
        durationPlaceholder: "Practical social media module",
        eligibilityPlaceholder: "10+2 pass",
        careerDirection: "Social Media Management & Content Strategy",
        potentialRoles: ["Social Media Specialist", "Content Strategist", "Community Coordinator"],
        learningExperience: "Hands-on content calendar creation, video scripting exercises, and brand audit case studies.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      }
    ]
  }
];

export const getAllPrograms = (): Program[] => {
  return careerCategories.flatMap(cat => cat.programs);
};

export const getProgramBySlug = (slug: string): Program | undefined => {
  return getAllPrograms().find(p => p.slug === slug);
};

export const getCategoryBySlug = (slug: string): CareerCategory | undefined => {
  return careerCategories.find(cat => cat.slug === slug);
};
