/**
 * Blade & Cedar — Translation Catalogue
 *
 * All user-facing text lives here. Image URLs stay in lib/config.ts.
 * The only cross-file dependency is `Barber.image`, which pulls its
 * URL from SITE_CONFIG so it can be swapped in one place.
 */

import { SITE_CONFIG } from "./config";

export type Language = "en" | "ar";

export interface ServiceItem {
  name: string;
  price: string;
}

export interface Barber {
  name: string;
  role: string;
  image: string;
}

export interface Review {
  text: string;
  author: string;
  rating: number;
}

export interface Translations {
  nav: {
    about: string;
    services: string;
    gallery: string;
    barbers: string;
    reviews: string;
    location: string;
    bookNow: string;
  };
  hero: {
    headline: string;
    subtext: string;
    bookButton: string;
    servicesButton: string;
  };
  about: {
    title: string;
    body: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  gallery: {
    title: string;
    alts: string[];
  };
  barbers: {
    title: string;
    subtitle: string;
    profiles: Barber[];
  };
  reviews: {
    title: string;
    subtitle: string;
    items: Review[];
  };
  location: {
    title: string;
    address: string;
    hours: string;
    mapPlaceholder: string;
  };
  cta: {
    headline: string;
    subtext: string;
    button: string;
  };
  footer: {
    copyright: string;
    concept: string;
    socialLabel: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      services: "Services",
      gallery: "Gallery",
      barbers: "Barbers",
      reviews: "Reviews",
      location: "Location",
      bookNow: "Book Now",
    },
    hero: {
      headline: "Modern Barbering, Traditional Craft",
      subtext: "A premium barbershop experience in the heart of Beirut.",
      bookButton: "Book on WhatsApp",
      servicesButton: "View Services",
    },
    about: {
      title: "Our Story",
      body: "Founded in 2020, Blade & Cedar began with a single chair and a promise: to revive the art of the barber shop in Lebanon. Every cut is a conversation, every shave a ritual. We work exclusively with timeless tools and cedar-scented products that honour the craft.",
    },
    services: {
      title: "Services & Prices",
      subtitle: "All prices in USD. Each service is performed by hand, with attention to detail.",
      items: [
        { name: "Classic Haircut", price: "$12" },
        { name: "Skin Fade", price: "$15" },
        { name: "Beard Trim & Shape", price: "$8" },
        { name: "Haircut + Beard", price: "$18" },
        { name: "Hot Towel Shave", price: "$12" },
        { name: "Kids Cut", price: "$8" },
      ],
    },
    gallery: {
      title: "The Shop",
      alts: [
        "Barber crafting a precise haircut with scissors",
        "Close-up of a lined-up beard trim",
        "Classic red barber chair with cedar wood details",
        "Straight razor and hot towel shaving setup",
        "Barber comb and tools arranged on leather",
        "Finished textured crop with natural shine product",
      ],
    },
    barbers: {
      title: "The Barbers",
      subtitle: "Meet the craftsmen behind every cut.",
      profiles: [
        {
          name: "Samir Nassar",
          role: "Master Barber • Founder",
          image: SITE_CONFIG.images.barbers[0],
        },
        {
          name: "Karim Abou",
          role: "Texture Specialist",
          image: SITE_CONFIG.images.barbers[1],
        },
        {
          name: "Tarek Salem",
          role: "Beard Architect",
          image: SITE_CONFIG.images.barbers[2],
        },
      ],
    },
    reviews: {
      title: "What They Say",
      subtitle: "Don't just take our word for it.",
      items: [
        {
          text: "Best barbershop in Beirut. The hot towel shave alone is worth the trip.",
          author: "Ahmad K.",
          rating: 5,
        },
        {
          text: "Finally found my guy. Samir gave me a cut that actually works for my hair type.",
          author: "Joe M.",
          rating: 5,
        },
        {
          text: "Blade & Cedar isn't just a haircut — it's an experience. The cedar scent is incredible.",
          author: "Walid R.",
          rating: 4,
        },
      ],
    },
    location: {
      title: "Find Us",
      address: "Rue de la Paix 12, Gemmayzeh, Beirut, Lebanon",
      hours: "Mon–Fri: 10am – 8pm | Sat–Sun: 9am – 6pm",
      mapPlaceholder: "Map of Blade & Cedar, Gemmayzeh, Beirut",
    },
    cta: {
      headline: "Ready for Your Cut?",
      subtext: "Book your appointment on WhatsApp and experience the Blade & Cedar difference.",
      button: "Book on WhatsApp",
    },
    footer: {
      copyright: "© 2024 Blade & Cedar",
      concept: "Concept design by Mawqe3 Studio",
      socialLabel: "Follow us",
    },
  },

  ar: {
    nav: {
      about: "عن المحل",
      services: "الخدمات",
      gallery: "معرض الصور",
      barbers: "الحلاقين",
      reviews: "الآراء",
      location: "الموقع",
      bookNow: "احجز الآن",
    },
    hero: {
      headline: "حلاقة حديثة، حرفة تقليدية",
      subtext: "تجربة رفاهية في قلب بيروت.",
      bookButton: "احجز عبر الواتساب",
      servicesButton: "عرض الخدمات",
    },
    about: {
      title: "قصتنا",
      body: "تأسست بليد آند سيدر عام 2020 بكرسي واحد، ووعدٌ إحياء فن الحلاقة في لبنان. كل قصة حوار، وكل حلاقة طقسٌ. نعمل استثنائياً بأدوات لا عمر لها ومنتجاتٍ مُعطرة بخشب السيدر التي تُكرم الحرفة.",
    },
    services: {
      title: "الخدمات والأسعار",
      subtitle: "جميع الأسعار بالدولار الأمريكي. كل خدمة تُؤدى بعناية يدوية.",
      items: [
        { name: "قصة كلاسيكية", price: "$12" },
        { name: "تدريد جلدي", price: "$15" },
        { name: "تقليم ذقن وتشكيله", price: "$8" },
        { name: "قصة + تقليم ذقن", price: "$18" },
        { name: "حلاقة بمنشفى ساخن", price: "$12" },
        { name: "قصة للأطفال", price: "$8" },
      ],
    },
    gallery: {
      title: "المحل",
      alts: [
        "حلاك يقص شعرًا بدقة باستخدام المقص",
        "تفصيل تقليم لحية منقوش",
        "كرسي حلاقة كلاسيكي أحمر بتفاصيل خشب السيدر",
        "إعداد الحلاقة بحلاقة حادة ومنشفى ساخن",
        "مقص وأدوات حلاقة مرتبة على جلد",
        "تصفيق ريشة مُرصّقة بنعومة طبيعية",
      ],
    },
    barbers: {
      title: "الحلاقون",
      subtitle: "العارفون وراء كل قصة.",
      profiles: [
        {
          name: "سامر نصار",
          role: "حلاك أساسي • مؤسس",
          image: SITE_CONFIG.images.barbers[0],
        },
        {
          name: "كريم عبّو",
          role: "متخصص في القوام",
          image: SITE_CONFIG.images.barbers[1],
        },
        {
          name: "طارق سالم",
          role: "مهندس الذقن",
          image: SITE_CONFIG.images.barbers[2],
        },
      ],
    },
    reviews: {
      title: "ماذا يقولون",
      subtitle: "لا تأخذ كلمتنا بوعد.",
      items: [
        {
          text: "أفضل محل حلاقة في بيروت. الحلاقة بالمنشفى الساخن تستحق الرحلة بمفردها.",
          author: "أحمد ك.",
          rating: 5,
        },
        {
          text: "وأخيرًا وجدت رجالي. سامر قدّم لي قصة تناسب شعري تمامًا.",
          author: "جوزيف م.",
          rating: 5,
        },
        {
          text: "بليد آند سيدر ليست مجرد حلاقة بل تجربة. عطر السيدر يتفوق الخيال.",
          author: "وليد ر.",
          rating: 4,
        },
      ],
    },
    location: {
      title: "كيف تصل إلينا",
      address: "شارع دو باسي 12، جيممايزه، بيروت، لبنان",
      hours: "الاثنثن–الجمعة: 10ص – 8م | السبت–الأحد: 9ص – 6م",
      mapPlaceholder: "خريطة بليد آند سيدر، جيممايزه، بيروت",
    },
    cta: {
      headline: "مستعد للقصة؟",
      subtext: "احجز موعدك عبر الواتساب وجرب فرق بليد آند سيدر.",
      button: "احجز عبر الواتساب",
    },
    footer: {
      copyright: "© 2024 بليد آند سيدر",
      concept: "تصميم مفهوم بواسطة Mawqe3 Studio",
      socialLabel: "تواصل معنا",
    },
  },
};

/**
 * Convenience accessor — returns the translation set for the given language.
 */
export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
