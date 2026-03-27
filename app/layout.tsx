import type { Metadata } from "next";
import Link from "next/link";
import { Outfit as HeadingFont, Source_Serif_4 as BodyFont } from "next/font/google";
import "./globals.css";

const headingFont = HeadingFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = BodyFont({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Koomans Makelaardij | NVM Makelaar Drenthe — Agrarisch & Woningmakelaardij",
  description:
    "Koomans Makelaardij is uw NVM-makelaar in Drenthe en Noord-Groningen. Specialisten in woningmakelaardij, agrarisch onroerend goed en taxaties. Borger-Odoorn, Emmen, Exloo.",
  keywords:
    "makelaar Drenthe, agrarisch makelaar Drenthe, makelaar Borger-Odoorn, makelaar Emmen, NVM-makelaar, taxateur Drenthe, agrarisch makelaar Groningen, boerderij kopen, landbouwgrond",
  metadataBase: new URL("https://koomans-makelaardij.abn.company"),
  openGraph: {
    title: "Koomans Makelaardij | NVM Makelaar Drenthe",
    description:
      "Agrarisch & woningmakelaardij in Drenthe en Noord-Groningen. Specialisten in landelijk onroerend goed.",
    url: "https://koomans-makelaardij.abn.company",
    siteName: "Koomans Makelaardij",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koomans Makelaardij | NVM Makelaar Drenthe",
    description:
      "Agrarisch & woningmakelaardij in Drenthe en Noord-Groningen.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "google-site-verification=YOUR_VERIFICATION_CODE",
  },
};

function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md shadow-sm border-b border-text/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img
            src="/images/logo-koomans-makelaardij-0.png"
            alt="Koomans Makelaardij"
            width={40}
            height={40}
            className="h-10 w-auto"
            decoding="async"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/over-ons"
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Over Ons
          </Link>
          <Link
            href="/diensten"
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Diensten
          </Link>
          <Link
            href="/werkgebied"
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Werkgebied
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-text hover:text-primary transition-colors"
          >
            Contact
          </Link>
          <a
            href="tel:0599512111"
            className="ml-4 px-6 py-2 bg-primary text-on-primary text-sm font-medium rounded-full hover:scale-[1.02] transition-all duration-300 hover:shadow-lg"
          >
            Neem Contact Op
          </a>
        </div>

        <details className="md:hidden group">
          <summary className="list-none cursor-pointer flex items-center justify-center w-10 h-10 rounded-lg hover:bg-primary/10 transition-colors">
            <svg
              className="w-6 h-6 text-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </summary>
          <div className="absolute top-full right-0 left-0 bg-background border-b border-text/5 p-4 space-y-3">
            <Link
              href="/"
              className="block text-sm font-medium text-text hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/over-ons"
              className="block text-sm font-medium text-text hover:text-primary transition-colors py-2"
            >
              Over Ons
            </Link>
            <Link
              href="/diensten"
              className="block text-sm font-medium text-text hover:text-primary transition-colors py-2"
            >
              Diensten
            </Link>
            <Link
              href="/werkgebied"
              className="block text-sm font-medium text-text hover:text-primary transition-colors py-2"
            >
              Werkgebied
            </Link>
            <Link
              href="/contact"
              className="block text-sm font-medium text-text hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
            <a
              href="tel:0599512111"
              className="block w-full px-6 py-2 bg-primary text-on-primary text-sm font-medium rounded-full text-center hover:scale-[1.02] transition-all duration-300 hover:shadow-lg mt-4"
            >
              Neem Contact Op
            </a>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-on-primary mt-16 border-t border-on-primary/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div className="space-y-4">
            <img
              src="/images/logo-koomans-makelaardij-0.png"
              alt="Koomans Makelaardij"
              width={32}
              height={32}
              className="h-8 w-auto"
              decoding="async"
            />
            <h3 className="text-sm font-heading font-bold text-on-primary">
              Koomans Makelaardij
            </h3>
            <p className="text-sm text-on-primary/70">
              NVM-makelaar in Drenthe en Noord-Groningen. Specialisten in
              agrarisch onroerend goed en woningmakelaardij.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-bold text-on-primary">
              Diensten
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/diensten"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Woningmakelaardij
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Agrarische Makelaardij
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Taxaties
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-bold text-on-primary">
              Werkgebied
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/werkgebied"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Borger-Odoorn
                </Link>
              </li>
              <li>
                <Link
                  href="/werkgebied"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Emmen
                </Link>
              </li>
              <li>
                <Link
                  href="/werkgebied"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Exloo
                </Link>
              </li>
              <li>
                <Link
                  href="/werkgebied"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Drenthe
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-heading font-bold text-on-primary">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="tel:0599512111"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  0599 512 111
                </a>
              </li>
              <li className="text-on-primary/70">1e Exloërmond</li>
              <li>
                <Link
                  href="/contact"
                  className="text-on-primary/70 hover:text-on-primary transition-colors"
                >
                  Contactformulier
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-on-primary/10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-on-primary/60">
            © {currentYear} Koomans Makelaardij. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/koomansmakelaardij"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-on-primary/60 hover:text-on-primary transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/koomansmakelaardij/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-on-primary/60 hover:text-on-primary transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.779.263-1.618.558-2.353 1.294-.735.735-1.031 1.574-1.294 2.353-.267.788-.468 1.658-.6 2.936C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.062 1.277.261 2.148.599 2.936.262.779.559 1.618 1.294 2.353.735.735 1.575 1.031 2.354 1.294.788.268 1.657.47 2.936.601C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.062 2.148-.262 2.936-.599.779-.263 1.618-.56 2.353-1.294.735-.735 1.032-1.575 1.294-2.354.268-.788.47-1.657.601-2.936.057-1.28.073-1.687.073-4.947s-.015-3.667-.072-4.947c-.062-1.277-.262-2.149-.599-2.936-.263-.779-.56-1.618-1.294-2.353-.735-.735-1.575-1.032-2.354-1.294-.788-.268-1.657-.47-2.936-.601C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.42.42.679.819.896 1.381.164.422.355 1.056.41 2.223.061 1.264.07 1.646.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.42-.819.679-1.381.896-.422.164-1.056.355-2.223.41-1.264.061-1.646.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.42-.42-.679-.819-.896-1.381-.164-.422-.355-1.056-.41-2.223-.061-1.264-.07-1.646-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.42.819-.679 1.381-.896.422-.164 1.056-.355 2.223-.41 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/" />
        <link rel="apple-touch-icon" href="/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "LocalBusiness",
                  "@id": "https://koomans-makelaardij.abn.company/#organization",
                  name: "Koomans Makelaardij",
                  description:
                    "NVM-makelaar in Drenthe en Noord-Groningen. Specialisten in agrarisch onroerend goed, woningmakelaardij en taxaties.",
                  url: "https://koomans-makelaardij.abn.company",
                  telephone: "0599512111",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "1e Exloërmond",
                    addressLocality: "Exloo",
                    addressRegion: "Drenthe",
                    postalCode: "7873",
                    addressCountry: "NL",
                  },
                  areaServed: [
                    {
                      "@type": "City",
                      name: "Borger-Odoorn",
                    },
                    {
                      "@type": "City",
                      name: "Emmen",
                    },
                    {
                      "@type": "City",
                      name: "Exloo",
                    },
                    {
                      "@type": "City",
                      name: "Drouwenerveen",
                    },
                  ],
                  sameAs: [
                    "https://www.facebook.com/koomansmakelaardij",
                    "https://www.instagram.com/koomansmakelaardij/",
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://koomans-makelaardij.abn.company/#website",
                  url: "https://koomans-makelaardij.abn.company",
                  name: "Koomans Makelaardij",
                  description:
                    "NVM-makelaar Drenthe — Agrarisch & woningmakelaardij",
                  potentialAction: {
                    "@type": "SearchAction",
                    target:
                      "https://koomans-makelaardij.abn.company/?s={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} bg-background text-text font-body`}
      >
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}