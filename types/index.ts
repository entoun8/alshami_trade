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
  platform: "facebook" | "instagram" | "tiktok";
  href: string;
  label: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  social: SocialLink[];
}
