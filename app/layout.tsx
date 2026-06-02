import type { Metadata, Viewport } from "next";
import { Urbanist, Instrument_Serif, JetBrains_Mono, Gochi_Hand } from "next/font/google";
import { Loader } from "@/src/components/ui/Loader";
import { ScrollToTop } from "@/src/components/layout/ScrollToTop";
import "./globals.css";

const SITE_URL = "https://www.entrext.com";

// Key pages surfaced in the navbar. Mirrored into SiteNavigationElement JSON-LD
// below so search engines can offer them as sitelinks.
const SITE_NAV = [
  { name: "Entrext Pro", path: "/pro", description: "High-conviction co-founder matching on validated ideas." },
  { name: "Entrext Labs", path: "/labs", description: "Experimental build space. Ship one-feature products in public." },
  { name: "Edge", path: "/edge", description: "Marketplace for hyper-casual, skill-elevating games." },
  { name: "Products", path: "/products", description: "Products built and validated across the Entrext ecosystem." },
  { name: "Apply", path: "/apply", description: "Apply to build, own, and scale with Entrext." },
  { name: "Advertise", path: "/advertise", description: "Advertise with Entrext and reach the founder ecosystem." },
  { name: "Blog", path: "/blog", description: "Writing on building, ownership, and the studio model." },
] as const;

// Use --next-font-* names so they don't collide with Tailwind's @theme tokens
// (--font-sans etc.), which compose them with system fallbacks in globals.css.
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--next-font-sans",
  display: "swap",
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--next-font-display",
  display: "swap",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--next-font-mono",
  display: "swap",
});
const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--next-font-doodle",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Entrext. World's First Technology-Owned Founder Ecosystem",
    template: "%s · Entrext",
  },
  description:
    "Building the world's first technology-owned founder ecosystem. Entrext is a bootstrapped venture studio where founders co-build and launch startups, not jobs. We pair technical builders with growth operators to validate and scale niche digital products end-to-end.",
  applicationName: "Entrext",
  authors: [{ name: "Entrext" }],
  generator: "Next.js",
  keywords: [
    "technology-owned founder ecosystem",
    "venture studio",
    "founder ecosystem",
    "co-build startups",
    "bootstrapped startup",
    "technical co-founder",
    "growth operator",
    "Entrext",
    "Entrext Pro",
    "Entrext Labs",
    "Edge Foundation",
    "advertise with Entrext",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Entrext",
    url: SITE_URL,
    title: "Entrext. Building the World's First Technology-Owned Founder Ecosystem",
    description:
      "Not a job. You co-build and build startups here. Entrext pairs builders and growth operators to launch, validate, and scale digital products.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrext. Building the World's First Technology-Owned Founder Ecosystem",
    description:
      "Not a job. You co-build and build startups here. Entrext pairs builders and growth operators to launch, validate, and scale digital products.",
    creator: "@Entrextlabs",
  },
  icons: {
    icon: [
      { url: "/logos/entrext.webp", type: "image/webp", sizes: "256x256" },
    ],
    shortcut: "/logos/entrext.webp",
    apple: "/logos/entrext.webp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}#organization`,
        name: "Entrext",
        alternateName: "Entrepreneur's Next",
        url: SITE_URL,
        logo: `${SITE_URL}/logos/entrext.webp`,
        description:
          "A bootstrapped venture studio that pairs technical builders with growth operators to launch, validate, and scale niche digital products.",
        slogan: "Build. Own. Compound.",
        sameAs: [
          "https://x.com/Entrextlabs",
          "https://entrextlabs.substack.com/",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: "Entrext",
        publisher: { "@id": `${SITE_URL}#organization` },
        inLanguage: "en-US",
      },
      // Primary navigation — gives Google a structured map of the key pages so
      // they're eligible to surface as sitelinks under the main result.
      ...SITE_NAV.map((item) => ({
        "@type": "SiteNavigationElement",
        name: item.name,
        description: item.description,
        url: `${SITE_URL}${item.path}`,
      })),
    ],
  };

  return (
    <html
      lang="en"
      className={`${urbanist.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} ${gochiHand.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[1000] focus:bg-[#ff4d00] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <Loader />
        {children}
      </body>
    </html>
  );
}
