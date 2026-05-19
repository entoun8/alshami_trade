import type { NavLink, Product, ContactInfo, SocialLink } from "@/types";

interface HeroCta {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

interface ImageConfig {
  src: string;
  alt: string;
}

interface BrandHighlight {
  id: string;
  name: string;
  description: string;
  href: string;
  ctaLabel: string;
  image: ImageConfig;
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Alshami Coffee", href: "/alshami-coffee" },
  { label: "Al-Attar", href: "/al-attar" },
  { label: "Contact", href: "/contact" },
];

export const alshamiCoffeeProducts: Product[] = [
  {
    id: "coffee-1",
    name: "Extra Green Cardamom",
    description:
      "Bold Arabic coffee packed with extra green cardamom for an intense, aromatic brew.",
    image: "/images/product_images/alshami_coffee/extra-green-cardamom.png",
    alt: "Alshami Extra Green Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-2",
    name: "Premium Yemeni Plain",
    description:
      "Fine Yemeni Arabica beans roasted plain without cardamom — pure, rich coffee flavour.",
    image: "/images/product_images/alshami_coffee/yemeni-plain-no-cardamom.png",
    alt: "Alshami Premium Yemeni Plain coffee — 200g, no cardamom",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-3",
    name: "Medium Green Cardamom",
    description:
      "Balanced Arabic coffee with a medium measure of green cardamom — smooth and fragrant.",
    image: "/images/product_images/alshami_coffee/medium-green-cardamom.png",
    alt: "Alshami Medium Green Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-4",
    name: "Shamia Blend Extra Cardamom",
    description:
      "A signature Shamia blend loaded with extra green cardamom — the Damascus way.",
    image: "/images/product_images/alshami_coffee/shamia-blend-extra-cardamom.png",
    alt: "Alshami Shamia Blend Extra Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
];

export const alAttarProducts: Product[] = [
  {
    id: "alattar-1",
    name: "Cumin & Lemon",
    description:
      "A warming blend of cumin and lemon — naturally caffeine-free and aids digestion.",
    image: "/images/product_images/alataar/cumin-lemon.png",
    alt: "Al-Attar Cumin & Lemon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-2",
    name: "Chamomile Flowers",
    description:
      "Pure chamomile blossoms — gently calming with a mild, floral sweetness.",
    image: "/images/product_images/alataar/chamomile-flowers.png",
    alt: "Al-Attar Chamomile Flowers herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-3",
    name: "Pomegranate",
    description:
      "Rich, fruity pomegranate infusion — antioxidant-packed and naturally sweet-tart.",
    image: "/images/product_images/alataar/pomegranate.png",
    alt: "Al-Attar Pomegranate herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-4",
    name: "Green Tea Ginger & Cinnamon",
    description:
      "Green tea lifted with warming ginger and cinnamon — energising and spiced.",
    image: "/images/product_images/alataar/green-tea-ginger-cinnamon.png",
    alt: "Al-Attar Green Tea Ginger & Cinnamon",
    brand: "al-attar",
  },
  {
    id: "alattar-5",
    name: "Green Tea",
    description:
      "Classic pure green tea — light, fresh, and full of natural antioxidants.",
    image: "/images/product_images/alataar/green-tea.png",
    alt: "Al-Attar Green Tea",
    brand: "al-attar",
  },
  {
    id: "alattar-6",
    name: "Hibiscus",
    description:
      "Deep ruby hibiscus flowers with a bold, tangy flavour — rich in antioxidants.",
    image: "/images/product_images/alataar/hibiscus.png",
    alt: "Al-Attar Hibiscus herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-7",
    name: "Green Tea Mint",
    description:
      "Crisp green tea paired with cool fresh mint — refreshing any time of day.",
    image: "/images/product_images/alataar/green-tea-mint.png",
    alt: "Al-Attar Green Tea Mint",
    brand: "al-attar",
  },
  {
    id: "alattar-8",
    name: "Zhourat Lebnania",
    description:
      "A Lebanese wildflower blend of herbs and spices — earthy, aromatic, and soothing.",
    image: "/images/product_images/alataar/zhourat-lebnania.png",
    alt: "Al-Attar Zhourat Lebnania herbal blend",
    brand: "al-attar",
  },
  {
    id: "alattar-9",
    name: "Ginger & Cinnamon",
    description:
      "Spicy ginger with sweet cinnamon — a warming, comforting infusion.",
    image: "/images/product_images/alataar/ginger-cinnamon.png",
    alt: "Al-Attar Ginger & Cinnamon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-10",
    name: "Ginger & Honey",
    description:
      "Fiery ginger softened with natural honey — soothing for the throat.",
    image: "/images/product_images/alataar/ginger-honey.png",
    alt: "Al-Attar Ginger & Honey herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-11",
    name: "Zhourat Shamia",
    description:
      "A Syrian wildflower medley of Levantine herbs — fragrant, floral, and timeless.",
    image: "/images/product_images/alataar/zhourat-shamia.png",
    alt: "Al-Attar Zhourat Shamia herbal blend",
    brand: "al-attar",
  },
  {
    id: "alattar-12",
    name: "Ginger & Lemon",
    description:
      "Zesty lemon with bold ginger — bright, invigorating, and naturally caffeine-free.",
    image: "/images/product_images/alataar/ginger-lemon.png",
    alt: "Al-Attar Ginger & Lemon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-13",
    name: "Wild Thyme",
    description:
      "Sun-dried wild thyme with an earthy, herbal depth — a Levantine staple.",
    image: "/images/product_images/alataar/wild-thyme.png",
    alt: "Al-Attar Wild Thyme herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-14",
    name: "Aniseed",
    description:
      "Fragrant aniseed with a gentle liquorice warmth — traditionally aids digestion.",
    image: "/images/product_images/alataar/aniseed.png",
    alt: "Al-Attar Aniseed herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-15",
    name: "Noomi Basra",
    description:
      "Dried black Basra lime tea — tangy, smoky, and distinctly Middle Eastern.",
    image: "/images/product_images/alataar/noomi-basra.png",
    alt: "Al-Attar Noomi Basra dried lime tea",
    brand: "al-attar",
  },
];

const socialLinks: SocialLink[] = [
  {
    platform: "facebook",
    href: "https://www.facebook.com/share/1Ns9CYWGsb/?mibextid=wwXIfr",
    label: "Follow us on Facebook",
  },
  {
    platform: "instagram",
    href: "https://www.instagram.com/alshami_coffee?igsh=MXhlb2psMWh2Z2l1Ng%3D%3D&utm_source=qr",
    label: "Follow us on Instagram",
  },

];

export const contactInfo: ContactInfo = {
  email: "basharshalhoub077@gmail.com",
  phone: "+61 439 622 559",
  social: socialLinks,
};

export const featuredBrands: BrandHighlight[] = [
  {
    id: "alshami-coffee",
    name: "Alshami Coffee",
    description:
      "Premium Arabica coffee with cardamom, roasted in the Damascus tradition since 1924.",
    href: "/alshami-coffee",
    ctaLabel: "Explore Alshami Coffee",
    image: {
      src: "/images/other_images/home2.png",
      alt: "Alshami Coffee — Arabic coffee with cardamom",
    },
  },
  {
    id: "al-attar",
    name: "Al-Attar",
    description:
      "100% natural Syrian herbal teas and medicinal plant infusions, allergen-free since 1990.",
    href: "/al-attar",
    ctaLabel: "Discover Al-Attar",
    image: {
      src: "/images/other_images/home3.png",
      alt: "Al-Attar herbal tea collection — natural Syrian herbs",
    },
  },
];

export const pageContent = {
  home: {
    hero: {
      heading: "Authentic Syrian Heritage, Delivered to Australia",
      body: "Alshami Trading brings the finest Syrian products — premium coffee and natural herbal teas — to Australian homes. Discover centuries of tradition in every cup.",
      ctas: [
        {
          label: "Explore Alshami Coffee",
          href: "/alshami-coffee",
          variant: "primary" as const,
        },
        {
          label: "Discover Al-Attar",
          href: "/al-attar",
          variant: "secondary" as const,
        },
      ] as HeroCta[],
      image: {
        src: "/images/other_images/home1.png",
        alt: "Syrian coffee and herbal tea lifestyle — authentic heritage products",
      },
    },
    brandIntro: {
      heading: "Rooted in Syrian Heritage",
      body: "We are an Australian business deeply connected to the rich culinary and herbal traditions of Syria. We source directly from Damascus's most trusted producers — Alshami Coffee, established in 1924, and Al-Attar, established in 1990 — to bring authentic quality to your table.",
    },
    featuredHeading: "Our Brands",
    featuredSubheading: "Two iconic Damascus brands, one Australian home.",
  },
  about: {
    hero: {
      heading: "Our Story",
      body: "Alshami Trading is an Australian business born from a passion for Syrian heritage and a desire to share its authentic flavours with the world.",
    },
    companyStory: {
      heading: "From Damascus to Australia",
      body: "The word ‘Shami’ — meaning of Damascus or the Levant — is woven into our identity. Alshami Trading was founded by a Syrian-Australian family determined to bridge two worlds: the ancient culinary traditions of the Levant and the modern Australian lifestyle. We carefully select products that carry genuine provenance, authentic recipes, and the warm generosity of Syrian hospitality.",
    },
    alshamiCoffeeSection: {
      heading: "Alshami Coffee — Est. Damascus 1924",
      body: "For over a century, Alshami Coffee has been crafting Arabic and Turkish coffee blends using 100% Arabica beans with natural green cardamom, following traditional Damascus roasting methods. Every batch honours the same recipe that made it a household name across the Levant.",
      cta: { label: "Explore Alshami Coffee", href: "/alshami-coffee" },
      image: {
        src: "/images/other_images/about1.png",
        alt: "Alshami Coffee — Damascus tradition since 1924",
      },
    },
    alAttarSection: {
      heading: "Al-Attar — Est. Damascus 1990",
      body: "Al-Attar (‘the herbalist’ in Arabic) has spent over three decades cultivating Syria’s finest medicinal herbs and natural teas. Their products are 100% natural, allergen-free, and free from artificial colours or preservatives — connecting you to the living traditions of Syrian folk medicine.",
      cta: { label: "Discover Al-Attar", href: "/al-attar" },
      image: {
        src: "/images/other_images/about2-new.png",
        alt: "Al-Attar natural Syrian herbal teas",
      },
    },
    lifestyleImages: [
      {
        src: "/images/other_images/about3.png",
        alt: "Syrian heritage lifestyle — coffee and herbs",
      },
      {
        src: "/images/other_images/about4.png",
        alt: "Traditional Syrian market — authentic spices and herbs",
      },
    ],
  },
  alshamiCoffee: {
    hero: {
      heading: "Alshami Coffee",
      body: "Est. Damascus, 1924 — For over a century, Alshami Coffee has perfected the art of Arabic and Turkish coffee. Sourcing only the finest Arabica beans and blending them with natural green cardamom, each batch is roasted using traditional Damascus methods.",
      image: {
        src: "/images/other_images/alshami1.png",
        alt: "Alshami Coffee — premium Damascus roast",
      },
    },
    catalogueHeading: "Our Coffee Range",
    catalogueSubheading:
      "Authentic Arabic and Turkish blends, roasted the Damascus way.",
  },
  alAttar: {
    hero: {
      heading: "Al-Attar",
      body: "Est. Damascus, 1990 — Al-Attar (‘the herbalist’ in Arabic) has spent over three decades sourcing Syria’s finest herbs and medicinal plants. Every product is 100% natural, allergen-free, and crafted without artificial colours or preservatives.",
      image: {
        src: "/images/other_images/alataar1.png",
        alt: "Al-Attar natural Syrian herbal teas and plant infusions",
      },
    },
    catalogueHeading: "Our Herbal Range",
    catalogueSubheading: "100% natural, allergen-free Syrian herbs and teas.",
  },
  contact: {
    hero: {
      heading: "Get in Touch",
      body: "We’d love to hear from you. Reach out via email or phone, or connect with us on social media to stay up to date with our latest products and stories from Damascus.",
    },
    socialHeading: "Follow Us",
    socialSubheading: "Stay connected with Alshami Trading on social media.",
  },
};

export const pageMetadata = {
  home: {
    title: "Alshami Trading — Authentic Syrian Products in Australia",
    description:
      "Discover the finest Syrian coffee and herbal teas from Alshami Trading. We bring the authentic flavours of Damascus to Australia.",
  },
  about: {
    title: "About Us — Alshami Trading",
    description:
      "Learn about Alshami Trading and our mission to bring authentic Syrian heritage products — Alshami Coffee and Al-Attar herbal teas — to Australia.",
  },
  alshamiCoffee: {
    title: "Alshami Coffee — Premium Syrian Coffee",
    description:
      "Explore Alshami Coffee's range of Arabic and Turkish coffees, roasted since 1924 in Damascus using 100% Arabica beans with cardamom.",
  },
  alAttar: {
    title: "Al-Attar — Natural Syrian Herbal Teas",
    description:
      "Discover Al-Attar's collection of 100% natural, allergen-free Syrian herbal teas, crafted in Damascus since 1990.",
  },
  contact: {
    title: "Contact Us — Alshami Trading",
    description:
      "Get in touch with Alshami Trading. Find our contact details and connect with us on social media.",
  },
};
