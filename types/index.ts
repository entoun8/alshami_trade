export interface HeroCta {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface ImageConfig {
  src: string;
  alt: string;
}

export interface BrandHighlight {
  id: string;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: ImageConfig;
}

export interface Product {
  id: string;
  name: string;
  description?: string;
  image: string;
  alt: string;
  brand: "alshami-coffee" | "al-attar";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: "facebook" | "instagram";
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  social: SocialLink[];
}
