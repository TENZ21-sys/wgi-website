export type ProductCategory = 'all' | 'geotechnical' | 'railway' | 'structural' | 'telemetry';

export type NavTab = 'home' | 'about' | 'products' | 'solutions' | 'services' | 'estimator' | 'contact';

export interface ProductSpecification {
  category: string;
  items: { label: string; value: string }[];
}

export interface ProductVariant {
  name: string;
  code: string;
  description: string;
  image: string;
  features: string[];
}

export interface MountImage {
  label: string;
  image: string;
}

export interface ProductData {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory[];
  shortDescription: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  variants: ProductVariant[];
  operatingPrinciple: string;
  verifiedSpecs: ProductSpecification[];
  installationOverview: string[];
  mountImages?: MountImage[];
  industrialApplications: string[];
  keyBenefits: string[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionData {
  id: string;
  title: string;
  sriLankaContext: string;
  problem: string;
  solution: string;
  recommendedHardware: string[];
  keyBenefits: string[];
  icon: string;
  illustrationImage?: string;
  realPhotoImage?: string;
  realPhotoCaption?: string;
  whyItMatters?: string;
  howWgiSecures?: string;
  installationSteps?: { step: string; title: string; desc: string }[];
}

export interface ServiceData {
  id: string;
  title: string;
  step: string;
  description: string;
  scopeItems: string[];
  icon: string;
}
