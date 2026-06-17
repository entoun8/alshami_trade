import type { NavLink, Product, ContactInfo, PhoneContact, SocialLink, HeroCta, ImageConfig, BrandHighlight } from "@/types";

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
    name: "Extra Green Cardamom 450g",
    description: "Arabic coffee with extra green cardamom — bold.",
    image: "/images/product_images/alshami_coffee/extra-green-cardamom.png",
    alt: "Alshami Extra Green Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-2",
    name: "Premium Yemeni Plain 450g",
    description: "Yemeni Arabica — plain roast, no cardamom.",
    image: "/images/product_images/alshami_coffee/yemeni-plain-no-cardamom.png",
    alt: "Alshami Premium Yemeni Plain coffee — 200g, no cardamom",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-3",
    name: "Medium Green Cardamom 450g",
    description: "Arabic coffee with medium green cardamom — smooth.",
    image: "/images/product_images/alshami_coffee/medium-green-cardamom.png",
    alt: "Alshami Medium Green Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-4",
    name: "Shamia Blend Extra Cardamom 450g",
    description: "Shamia blend with extra cardamom — Damascus style.",
    image: "/images/product_images/alshami_coffee/shamia-blend-extra-cardamom.png",
    alt: "Alshami Shamia Blend Extra Cardamom coffee — 200g",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-5",
    name: "Café Shami Extra Cardamom — Gold 200g",
    description: "Luxury Turkish coffee — extra cardamom, gold pack.",
    image: "/images/product_images/alshami_coffee/shami-extra-cardamom-gold.png",
    alt: "Café Shami Extra Cardamom — Gold pack",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-6",
    name: "Café Shami Extra Cardamom — Blue 200g",
    description: "Luxury Turkish coffee — extra cardamom, blue pack.",
    image: "/images/product_images/alshami_coffee/shami-extra-cardamom-blue.png",
    alt: "Café Shami Extra Cardamom — Blue pack",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-7",
    name: "Café Shami Mocha 200g",
    description: "Luxury Turkish mocha coffee — no cardamom.",
    image: "/images/product_images/alshami_coffee/shami-mocha-no-cardamom.png",
    alt: "Café Shami Mocha — Turkish mocha coffee",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-9",
    name: "Café Alshami Extra Cardamom — Black 200g",
    description: "Luxury Turkish coffee — extra cardamom, black pack.",
    image: "/images/product_images/alshami_coffee/alshami-extra-cardamom-black.png",
    alt: "Café Alshami Extra Cardamom — Black pack",
    brand: "alshami-coffee",
  },
  {
    id: "coffee-8",
    name: "Alshami Extra Cardamom Value Pack — 10 × 20g",
    description: "Pack of 10 individual sachets, each makes one full pot of Arabic coffee",
    image: "/images/product_images/alshami_coffee/shami-extra-cardamom-value-pack.png",
    alt: "Alshami Extra Cardamom Value Pack — 200g",
    brand: "alshami-coffee",
  },
];

export const alAttarProducts: Product[] = [
  {
    id: "alattar-1",
    name: "Cumin & Lemon",
    description: "Cumin & lemon — caffeine-free, aids digestion.",
    image: "/images/product_images/alataar/cumin-lemon.png",
    alt: "Al-Attar Cumin & Lemon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-2",
    name: "Chamomile Flowers",
    description: "Pure chamomile — gently calming, floral sweetness.",
    image: "/images/product_images/alataar/chamomile-flowers.png",
    alt: "Al-Attar Chamomile Flowers herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-3",
    name: "Pomegranate",
    description: "Pomegranate infusion — antioxidant-rich, sweet-tart.",
    image: "/images/product_images/alataar/pomegranate.png",
    alt: "Al-Attar Pomegranate herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-4",
    name: "Green Tea Ginger & Cinnamon",
    description: "Green tea with ginger & cinnamon — warming.",
    image: "/images/product_images/alataar/green-tea-ginger-cinnamon.png",
    alt: "Al-Attar Green Tea Ginger & Cinnamon",
    brand: "al-attar",
  },
  {
    id: "alattar-5",
    name: "Green Tea",
    description: "Pure green tea — light, fresh, full of antioxidants.",
    image: "/images/product_images/alataar/green-tea.png",
    alt: "Al-Attar Green Tea",
    brand: "al-attar",
  },
  {
    id: "alattar-6",
    name: "Hibiscus",
    description: "Hibiscus flowers — bold, tangy, antioxidant-rich.",
    image: "/images/product_images/alataar/hibiscus.png",
    alt: "Al-Attar Hibiscus herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-7",
    name: "Green Tea Mint",
    description: "Green tea with cool fresh mint — refreshing.",
    image: "/images/product_images/alataar/green-tea-mint.png",
    alt: "Al-Attar Green Tea Mint",
    brand: "al-attar",
  },
  {
    id: "alattar-8",
    name: "Zhourat Lebnania",
    description: "Lebanese wildflower herbs — earthy, aromatic, soothing.",
    image: "/images/product_images/alataar/zhourat-lebnania.png",
    alt: "Al-Attar Zhourat Lebnania herbal blend",
    brand: "al-attar",
  },
  {
    id: "alattar-9",
    name: "Ginger & Cinnamon",
    description: "Spicy ginger with sweet cinnamon — warming.",
    image: "/images/product_images/alataar/ginger-cinnamon.png",
    alt: "Al-Attar Ginger & Cinnamon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-10",
    name: "Ginger & Honey",
    description: "Ginger with natural honey — soothing for the throat.",
    image: "/images/product_images/alataar/ginger-honey.png",
    alt: "Al-Attar Ginger & Honey herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-11",
    name: "Zhourat Shamia",
    description: "Syrian wildflower herbs — fragrant, floral, timeless.",
    image: "/images/product_images/alataar/zhourat-shamia.png",
    alt: "Al-Attar Zhourat Shamia herbal blend",
    brand: "al-attar",
  },
  {
    id: "alattar-12",
    name: "Ginger & Lemon",
    description: "Zesty lemon & bold ginger — bright, caffeine-free.",
    image: "/images/product_images/alataar/ginger-lemon.png",
    alt: "Al-Attar Ginger & Lemon herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-13",
    name: "Wild Thyme",
    description: "Wild thyme — earthy herbal depth, Levantine staple.",
    image: "/images/product_images/alataar/wild-thyme.png",
    alt: "Al-Attar Wild Thyme herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-14",
    name: "Aniseed",
    description: "Fragrant aniseed — liquorice warmth, aids digestion.",
    image: "/images/product_images/alataar/aniseed.png",
    alt: "Al-Attar Aniseed herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-15",
    name: "Noomi Basra",
    description: "Black Basra lime tea — tangy, smoky, Middle Eastern.",
    image: "/images/product_images/alataar/noomi-basra.png",
    alt: "Al-Attar Noomi Basra dried lime tea",
    brand: "al-attar",
  },
  {
    id: "alattar-16",
    name: "Lemon Verbena",
    description: "100% natural lemon verbena — triple-strength bags.",
    image: "/images/product_images/alataar/lemon-verbena.png",
    alt: "Al-Attar Lemon Verbena herbal tea",
    brand: "al-attar",
  },
  {
    id: "alattar-17",
    name: "Green Tea Variety Pack",
    description: "6 green tea flavours in one box — 100% natural.",
    image: "/images/product_images/alataar/green-tea-variety-pack.png",
    alt: "Al-Attar Green Tea Variety Pack",
    brand: "al-attar",
  },
  {
    id: "alattar-18",
    name: "Ginger Variety Pack",
    description: "6 ginger flavours in one box — 100% natural.",
    image: "/images/product_images/alataar/ginger-variety-pack.png",
    alt: "Al-Attar Ginger Variety Pack",
    brand: "al-attar",
  },
  {
    id: "alattar-19",
    name: "Natural Herbs Variety Pack",
    description: "6 natural herb varieties in one box — 100% natural.",
    image: "/images/product_images/alataar/natural-herbs-variety-pack.png",
    alt: "Al-Attar Natural Herbs Variety Pack",
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

const phoneContacts: PhoneContact[] = [
  { city: "Melbourne", role: "Local agent", number: "+61 439 622 559" },
  { city: "Sydney", role: "Local agent", number: "+61 450 517 084" },
  { city: "Adelaide", role: "Local agent", number: "+61 401 019 905" },
  { city: "Canberra", role: "Local agent", number: "+61 432 536 266" },
];

export const contactInfo: ContactInfo = {
  email: "basharshalhoub077@gmail.com",
  phones: phoneContacts,
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
        id: "lifestyle-1",
        src: "/images/other_images/about3.png",
        alt: "Syrian heritage lifestyle — coffee and herbs",
      },
      {
        id: "lifestyle-2",
        src: "/images/other_images/about4.png",
        alt: "Traditional Syrian market — authentic spices and herbs",
      },
    ] as (ImageConfig & { id: string })[],
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
