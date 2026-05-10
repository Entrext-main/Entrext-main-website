import type { Metadata, Viewport } from "next";
import { Urbanist, Instrument_Serif, JetBrains_Mono, Gochi_Hand } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://www.entrext.com";

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
    default: "Entrext — World's First Technology-Owned Founder Ecosystem",
    template: "%s · Entrext",
  },
  description:
    "Entrext is a bootstrapped venture studio that pairs technical builders with growth operators to launch, validate, and scale niche digital products end-to-end.",
  applicationName: "Entrext",
  authors: [{ name: "Entrext" }],
  generator: "Next.js",
  keywords: [
    "venture studio",
    "founder ecosystem",
    "bootstrapped startup",
    "technical co-founder",
    "growth operator",
    "Entrext",
    "Entrext Pro",
    "Entrext Labs",
    "Edge Foundation",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Entrext",
    url: SITE_URL,
    title: "Entrext — World's First Technology-Owned Founder Ecosystem",
    description:
      "A bootstrapped venture studio pairing builders and growth operators to launch, validate, and scale digital products.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrext — World's First Technology-Owned Founder Ecosystem",
    description:
      "A bootstrapped venture studio pairing builders and growth operators to launch, validate, and scale digital products.",
    creator: "@entrext",
  },
  // Favicon is auto-generated from app/icon.tsx — no static asset declaration needed.
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
        logo: `${SITE_URL}/icon.png`,
        description:
          "A bootstrapped venture studio that pairs technical builders with growth operators to launch, validate, and scale niche digital products.",
        slogan: "Build. Own. Compound.",
        sameAs: [
          // TODO: replace with real handles when active
          // "https://x.com/entrext",
          // "https://www.linkedin.com/company/entrext",
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
        {children}
      </body>
    </html>
  );
}
