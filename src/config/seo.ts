import { faqData, programListings } from "@/data/site";

const siteUrl = "https://skill99.com";

export const siteMetadata = {
  title: "Skill99 · Master a Skill in 99 Days",
  description:
    "Skill99 by Shivora Infotech offers outcome-focused 99-Day Career Programs with mentors, real projects, certifications, and placement assistance.",
  siteUrl,
  email: "hello@skill99.com",
  phone: "+91 80 1234 5678",
};

export const defaultSeo = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  canonical: siteUrl,
  openGraph: {
    type: "website",
    url: siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Student building a tech project with mentors",
      },
    ],
  },
  twitter: {
    handle: "@Skill99",
    site: "@Skill99",
    cardType: "summary_large_image",
  },
};

const programCourses = programListings.map((program) => ({
  "@type": "Course",
  name: program.title,
  description: `99-Day immersive learning path for ${program.career}.`,
  provider: {
    "@type": "Organization",
    name: "Skill99",
    sameAs: siteUrl,
  },
}));

const faqSchema = {
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export const schemaScripts = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Skill99",
    url: siteUrl,
    logo: "https://skill99.com/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteMetadata.phone,
        contactType: "customer support",
        areaServed: "IN",
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Programs",
        item: `${siteUrl}/programs`,
      },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: siteUrl,
    name: "Skill99",
    publisher: {
      "@type": "Organization",
      name: "Skill99",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Skill99",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80",
    telephone: siteMetadata.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Koramangala 5th Block",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560095",
      addressCountry: "IN",
    },
  },
  ...programCourses,
  faqSchema,
];
