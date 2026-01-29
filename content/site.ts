// Core section keys - must match registry
export type SectionKey =
  | "navbar"
  | "hero"
  | "logos"
  | "benefits"
  | "howItWorks"
  | "pricing"
  | "testimonials"
  | "faq"
  | "finalCta"
  | "footer";

// Section configuration
export interface SectionConfig {
  key: SectionKey;
  enabled: boolean;
  id?: string;
  variant?: string;
  props: Record<string, any>;
}

// Site metadata
export interface SiteContent {
  site: {
    name: string;
    tagline: string;
  };
  page: {
    title?: string;
    description?: string;
  };
  sections: SectionConfig[];
}

// Single source of truth for site content
export const siteContent: SiteContent = {
  site: {
    name: "Your Brand",
    tagline: "Your tagline here",
  },
  page: {
    title: "Your Brand",
    description: "Your page description for SEO",
  },
  sections: [
    {
      key: "navbar",
      enabled: true,
      props: {
        links: [
          { label: "Features", href: "#benefits" },
          { label: "How It Works", href: "#howItWorks" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
        cta: { label: "Get Started", href: "#pricing" },
      },
    },
    {
      key: "hero",
      enabled: true,
      id: "hero",
      props: {
        badge: "New: Something exciting",
        title: "Your Main Headline Here",
        subtitle: "A compelling subheadline that explains your value proposition in one or two sentences.",
        ctaPrimary: { label: "Get Started", href: "#pricing" },
        ctaSecondary: { label: "Learn More", href: "#benefits" },
        socialProof: "Trusted by X+ customers",
      },
    },
    {
      key: "logos",
      enabled: true,
      id: "logos",
      props: {
        title: "Trusted by leading companies",
        logos: [
          { name: "Company 1" },
          { name: "Company 2" },
          { name: "Company 3" },
          { name: "Company 4" },
          { name: "Company 5" },
        ],
      },
    },
    {
      key: "benefits",
      enabled: true,
      id: "benefits",
      props: {
        title: "Why choose us",
        subtitle: "Everything you need to succeed",
        items: [
          { title: "Benefit 1", description: "Description of benefit 1" },
          { title: "Benefit 2", description: "Description of benefit 2" },
          { title: "Benefit 3", description: "Description of benefit 3" },
        ],
      },
    },
    {
      key: "howItWorks",
      enabled: true,
      id: "howItWorks",
      props: {
        title: "How it works",
        subtitle: "Get started in three simple steps",
        steps: [
          { title: "Step 1", description: "Description of step 1" },
          { title: "Step 2", description: "Description of step 2" },
          { title: "Step 3", description: "Description of step 3" },
        ],
      },
    },
    {
      key: "pricing",
      enabled: true,
      id: "pricing",
      props: {
        title: "Simple pricing",
        subtitle: "Choose the plan that works for you",
        plans: [
          { name: "Basic", price: "$9", period: "/mo", description: "For individuals", features: [], cta: "Start", highlighted: false },
          { name: "Pro", price: "$29", period: "/mo", description: "For teams", features: [], cta: "Start", highlighted: true },
          { name: "Enterprise", price: "$99", period: "/mo", description: "For organizations", features: [], cta: "Contact", highlighted: false },
        ],
      },
    },
    {
      key: "testimonials",
      enabled: true,
      id: "testimonials",
      props: {
        title: "What our customers say",
        testimonials: [
          { quote: "Quote from customer 1", author: "Name 1", role: "Role, Company" },
          { quote: "Quote from customer 2", author: "Name 2", role: "Role, Company" },
          { quote: "Quote from customer 3", author: "Name 3", role: "Role, Company" },
        ],
      },
    },
    {
      key: "faq",
      enabled: true,
      id: "faq",
      props: {
        title: "Frequently asked questions",
        faqs: [
          { question: "Question 1?", answer: "Answer to question 1." },
          { question: "Question 2?", answer: "Answer to question 2." },
          { question: "Question 3?", answer: "Answer to question 3." },
        ],
      },
    },
    {
      key: "finalCta",
      enabled: true,
      id: "finalCta",
      props: {
        title: "Ready to get started?",
        subtitle: "Join thousands of satisfied customers today",
        ctaPrimary: "Get Started",
        ctaSecondary: "Contact Sales",
      },
    },
    {
      key: "footer",
      enabled: true,
      props: {
        logo: "Your Brand",
        tagline: "Your tagline here",
        links: [],
        social: [],
      },
    },
  ],
};
