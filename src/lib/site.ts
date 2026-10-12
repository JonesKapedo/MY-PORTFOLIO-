export const COMPANY = {
  name: "GREAT TURBINEZ",
  tagline: "Enterprise AI Transformation & Intelligent Automation",
  city: "Global",
  country: "Worldwide",
  location: "Global Operations",
  headquarters: "United States",
  regions: ["North America", "Europe", "Asia-Pacific", "Middle East"],
  email: "enterprise@greatturbinez.com",
  salesEmail: "sales@greatturbinez.com",
  supportEmail: "support@greatturbinez.com",
  phone: "+1 (555) 000-0000",
  year: 2024,
} as const;

export const QUOTE = {
  text: "In an era defined by exponential technological advancement, organizations face a critical choice: evolve or be left behind. Artificial intelligence is not the future—it is the present competitive advantage. We partner with visionary leaders to architect intelligent enterprises that anticipate, adapt, and accelerate.",
  attribution: "GREAT TURBINEZ",
} as const;

export type ServiceId =
  | "strategy"
  | "transformation"
  | "intelligent-automation"
  | "ai-solutions"
  | "data-intelligence"
  | "managed-services";

export type Service = {
  id: ServiceId;
  name: string;
  blurb: string;
  includes: string[];
  price: string;
  unit: string;
  note?: string;
};

export const SERVICES: Service[] = [
  {
    id: "strategy",
    name: "AI Strategy & Roadmap",
    blurb:
      "Executive-level strategic consulting to define your AI vision, identify high-impact opportunities, and create a 12-36 month transformation roadmap aligned with business objectives.",
    includes: [
      "C-suite workshops and stakeholder alignment",
      "AI maturity assessment and gap analysis",
      "Use case prioritization and ROI modeling",
      "Technology stack recommendations",
      "Governance framework and risk mitigation",
      "Executive presentation and board materials",
    ],
    price: "from $85,000",
    unit: "per engagement",
  },
  {
    id: "transformation",
    name: "Enterprise AI Transformation",
    blurb:
      "End-to-end transformation programs that embed AI and automation across your organization—from pilot to production at scale, with change management and center of excellence establishment.",
    includes: [
      "Full-cycle implementation (6-18 months)",
      "Cross-functional team enablement",
      "Pilot design, testing, and scaling",
      "Integration with existing enterprise systems",
      "Change management and adoption strategy",
      "Performance metrics and continuous optimization",
    ],
    price: "from $450,000",
    unit: "per program",
  },
  {
    id: "intelligent-automation",
    name: "Intelligent Process Automation",
    blurb:
      "Reimagine mission-critical workflows with AI-powered automation—eliminating manual bottlenecks, reducing errors, and freeing your teams to focus on strategic work that drives growth.",
    includes: [
      "Process mining and optimization analysis",
      "Intelligent document processing (IDP)",
      "RPA with AI/ML decision engines",
      "API and system integration architecture",
      "Exception handling and human-in-the-loop",
      "90-day hypercare and performance tuning",
    ],
    price: "from $120,000",
    unit: "per process domain",
  },
  {
    id: "ai-solutions",
    name: "Custom AI Solutions",
    blurb:
      "Bespoke AI applications tailored to your unique business challenges—conversational AI, predictive analytics, computer vision, NLP systems, and proprietary models trained on your data.",
    includes: [
      "Requirements discovery and solution design",
      "Custom model development and training",
      "Secure data pipeline architecture",
      "Multi-channel deployment (web, mobile, APIs)",
      "Model monitoring and drift detection",
      "Ongoing model retraining and updates",
    ],
    price: "from $200,000",
    unit: "per solution",
  },
  {
    id: "data-intelligence",
    name: "Data & Analytics Intelligence",
    blurb:
      "Transform raw data into strategic intelligence—real-time dashboards, predictive insights, and AI-driven analytics platforms that empower decision-makers at every level of your organization.",
    includes: [
      "Data architecture and governance design",
      "Advanced analytics and predictive modeling",
      "Executive dashboards and KPI frameworks",
      "Natural language query interfaces",
      "Automated reporting and alerting",
      "Data quality monitoring and remediation",
    ],
    price: "from $150,000",
    unit: "per platform",
  },
  {
    id: "managed-services",
    name: "AI Managed Services & Support",
    blurb:
      "24/7 monitoring, maintenance, and evolution of your AI systems—ensuring reliability, security, and continuous improvement while you focus on leveraging intelligence for competitive advantage.",
    includes: [
      "Dedicated account team and SLA",
      "Proactive system monitoring and incident response",
      "Security patching and compliance updates",
      "Performance optimization and cost management",
      "Quarterly innovation reviews and enhancements",
      "Executive business reviews and reporting",
    ],
    price: "from $25,000",
    unit: "per month",
  },
];

export type ProjectCategory = "Transformation" | "Automation" | "AI Solutions" | "Data Intelligence";

export type Project = {
  id: string;
  code: string;
  name: string;
  category: ProjectCategory;
  sector: string;
  place: string;
  summary: string;
  outcome: string;
  year: string;
  status: "Live" | "In Deployment" | "Completed";
};

export const PROJECTS: Project[] = [
  {
    id: "global-bank-transformation",
    code: "01",
    name: "Global Banking AI Transformation",
    category: "Transformation",
    sector: "Financial Services",
    place: "United States & Europe",
    summary:
      "Enterprise-wide AI transformation for a multinational bank with $200B+ in assets—intelligent document processing, fraud detection, and AI-powered customer service across 12 countries.",
    outcome: "68% reduction in processing time, $42M annual savings",
    year: "2024-2025",
    status: "Live",
  },
  {
    id: "healthcare-automation",
    code: "02",
    name: "Clinical Operations Automation",
    category: "Automation",
    sector: "Healthcare",
    place: "North America",
    summary:
      "End-to-end intelligent automation for a healthcare network serving 4M+ patients—claims processing, prior authorization, clinical documentation, and care coordination workflows.",
    outcome: "Claims cycle time reduced from 14 to 3 days",
    year: "2025",
    status: "Live",
  },
  {
    id: "manufacturing-predictive",
    code: "03",
    name: "Predictive Maintenance Platform",
    category: "AI Solutions",
    sector: "Manufacturing",
    place: "Asia-Pacific",
    summary:
      "AI-driven predictive maintenance system for a global automotive manufacturer—computer vision, IoT sensor fusion, and ML models preventing equipment failures across 23 facilities.",
    outcome: "87% reduction in unplanned downtime",
    year: "2024",
    status: "Completed",
  },
  {
    id: "retail-intelligence",
    code: "04",
    name: "Omnichannel Intelligence Suite",
    category: "Data Intelligence",
    sector: "Retail",
    place: "Global",
    summary:
      "Real-time analytics and AI forecasting platform for a Fortune 500 retailer—demand prediction, dynamic pricing, inventory optimization, and personalized customer experiences.",
    outcome: "23% improvement in inventory turnover, $180M revenue lift",
    year: "2025",
    status: "Live",
  },
  {
    id: "energy-optimization",
    code: "05",
    name: "Energy Grid Optimization",
    category: "AI Solutions",
    sector: "Energy & Utilities",
    place: "Europe & Middle East",
    summary:
      "AI-powered grid management and demand forecasting for renewable energy providers—optimizing distribution, predicting consumption patterns, and reducing energy waste.",
    outcome: "31% improvement in grid efficiency",
    year: "2025-2026",
    status: "In Deployment",
  },
  {
    id: "logistics-network",
    code: "06",
    name: "Intelligent Logistics Network",
    category: "Automation",
    sector: "Logistics & Supply Chain",
    place: "Worldwide",
    summary:
      "AI-orchestrated supply chain platform for a global logistics provider—route optimization, warehouse automation, predictive shipping, and real-time visibility across 45 countries.",
    outcome: "19% reduction in delivery times, $95M cost savings",
    year: "2024",
    status: "Completed",
  },
];

export const STATS = [
  { value: "$2.3B+", label: "Client value delivered" },
  { value: "47", label: "Enterprise transformations" },
  { value: "850K+", label: "Hours automated annually" },
  { value: "28", label: "Countries served" },
] as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/industries", label: "Industries" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const PRINCIPLES = [
  {
    title: "Strategic Intelligence First",
    body: "We begin with your business strategy, not technology. Every AI initiative must drive measurable business outcomes and sustainable competitive advantage.",
  },
  {
    title: "Enterprise-Grade Excellence",
    body: "Security, scalability, and governance are non-negotiable. We architect solutions that meet the rigorous demands of global enterprise operations.",
  },
  {
    title: "Human-Centered AI",
    body: "Technology amplifies human potential, not replaces it. We design intelligent systems that empower your workforce and enhance decision-making at every level.",
  },
] as const;

export const INDUSTRIES = [
  {
    id: "financial-services",
    name: "Financial Services",
    description: "AI-powered transformation for banking, insurance, and capital markets",
    capabilities: ["Fraud detection & AML", "Credit risk modeling", "Algorithmic trading", "Customer service automation"],
  },
  {
    id: "healthcare",
    name: "Healthcare & Life Sciences",
    description: "Intelligent solutions for patient care, clinical operations, and research",
    capabilities: ["Clinical decision support", "Medical imaging AI", "Drug discovery", "Revenue cycle automation"],
  },
  {
    id: "manufacturing",
    name: "Manufacturing & Industry",
    description: "Smart factories and predictive operations for industrial excellence",
    capabilities: ["Predictive maintenance", "Quality control AI", "Supply chain optimization", "Digital twins"],
  },
  {
    id: "retail",
    name: "Retail & Consumer",
    description: "Personalized experiences and optimized operations for modern commerce",
    capabilities: ["Demand forecasting", "Dynamic pricing", "Personalization engines", "Inventory optimization"],
  },
  {
    id: "energy",
    name: "Energy & Utilities",
    description: "Intelligent infrastructure for sustainable energy management",
    capabilities: ["Grid optimization", "Demand prediction", "Asset monitoring", "Renewable integration"],
  },
  {
    id: "logistics",
    name: "Logistics & Supply Chain",
    description: "End-to-end visibility and optimization for global supply networks",
    capabilities: ["Route optimization", "Warehouse automation", "Predictive shipping", "Real-time tracking"],
  },
] as const;
