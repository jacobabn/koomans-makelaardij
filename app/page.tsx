import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Koomans Makelaardij | NVM Makelaar Drenthe - Woningen & Agrarisch Vastgoed",
  description: "Koomans Makelaardij: NVM-makelaar specialist in woningen en agrarisch vastgoed in Drenthe, Borger-Odoorn, Emmen en Noord-Groningen. Taxateur en makelaar 1e Exloërmond.",
  keywords: "makelaar Drenthe, agrarisch makelaar, NVM-makelaar, makelaar Borger-Odoorn, makelaar Emmen, taxateur Drenthe, boerderij kopen",
  openGraph: {
    title: "Koomans Makelaardij | NVM Makelaar Drenthe",
    description: "Specialist in woningen en agrarisch vastgoed in Drenthe en Noord-Groningen",
    type: "website",
    locale: "nl_NL",
  },
};

export default function Home() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-primary">
        <div className="relative w-full h-full">
          <img
            src="/images/homepage-2.jpg"
            alt="Landschap Drenthe - Koomans Makelaardij makelaar specialist"
            width={1920}
            height={700}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-2 md:mb-4 leading-tight max-w-2xl">
            Koomans Makelaardij
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-body">
            Uw specialist in 1e Exloërmond
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <button className="px-6 md:px-8 py-3 md:py-4 bg-secondary text-on-secondary font-heading font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Woningaanbod
            </button>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-accent text-on-primary font-heading font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Agrarisch Aanbod
            </button>
          </div>

          <div className="w-24 md:w-32 h-px bg-white/40 mb-8"></div>

          <div className="flex flex-col items-start gap-2">
            <svg className="w-6 h-6 text-white/60 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-sm text-white/60 font-body">Scroll voor meer informatie</p>
          </div>
        </div>
      </section>

      {/* EDITORIAL INTRO SECTION */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="lg:pr-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Landschap & Vastgoed
              </h2>
              <p className="text-lg text-text font-body mb-5 leading-relaxed">
                Met meer dan twee decennia ervaring is Koomans Makelaardij dé specialist voor makelaar Drenthe. Als NVM-makelaar in 1e Exloërmond bieden wij deskundige begeleiding bij de verkoop en aankoop van zowel residentieel als agrarisch onroerend goed.
              </p>
              <p className="text-lg text-text font-body mb-5 leading-relaxed">
                Onze expertise als <strong>agrarisch makelaar Drenthe</strong> en <strong>makelaar Borger-Odoorn</strong> strekt zich uit over heel Noord-Nederland. Of u nu een boerderij wil verkopen, landbouwgrond zoekt, of een woning in Emmen, Drouwenerveen of omgeving wilt verkopen — wij hebben de lokale kennis en NVM-certificering om u optimaal te ondersteunen.
              </p>
              <p className="text-lg text-text/80 font-body italic mb-8">
                "Ruraliteit en professionele vakbekwaamheid gaan hand in hand."
              </p>
              <Link href="/over-ons" className="inline-block px-6 md:px-8 py-3 md:py-4 bg-primary text-on-primary font-heading font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                Over Ons
              </Link>
            </div>

            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="/images/homepage-4.jpg"
                  alt="Agrarisch vastgoed Drenthe - boerderijen en landbouwgrond bemiddeling"
                  width={600}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 md:h-96 object-cover relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Onze Diensten
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WONINGMAKELAARDIJ */}
            <Link href="/diensten" className="group">
              <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift overflow-hidden">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-56">
                  <img
                    src="/images/homepage-5.jpg"
                    alt="Woningmakelaardij Drenthe - huizen kopen verkopen makelaar"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    Woningmakelaardij
                  </h3>
                  <p className="text-text font-body mb-4">
                    Wij begeleiden u bij de verkoop en aankoop van uw woning in Drenthe, Emmen, Borger-Odoorn en omgeving. Professionele taxatie en NVM-garantie.
                  </p>
                  <p className="text-accent font-heading font-semibold">Lees meer →</p>
                </div>
              </div>
            </Link>

            {/* AGRARISCHE MAKELAARDIJ */}
            <Link href="/diensten" className="group">
              <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift overflow-hidden">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-56">
                  <img
                    src="/images/homepage-3.png"
                    alt="Agrarische makelaardij Drenthe Groningen - boerderijen landbouwgrond verkoop"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    Agrarische Makelaardij
                  </h3>
                  <p className="text-text font-body mb-4">
                    Specialist in agrarisch onroerend goed. Boerderijen, landbouwgrond, en hectare-bemiddeling met diepgaande marktkennis van Noord-Nederland.
                  </p>
                  <p className="text-accent font-heading font-semibold">Lees meer →</p>
                </div>
              </div>
            </Link>

            {/* TAXATIE */}
            <Link href="/diensten" className="group">
              <div className="h-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover-lift overflow-hidden">
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-56">
                  <img
                    src="/images/homepage-6.png"
                    alt="Taxatie Drenthe - onafhankelijke taxateur voor woningen en vastgoed"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                    Taxatie
                  </h3>
                  <p className="text-text font-body mb-4">
                    Onafhankelijke en deskundige taxatie van woningen en agrarisch onroerend goed. Erkend taxateur met NVM-status.
                  </p>
                  <p className="text-accent font-heading font-semibold">Lees meer →</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE COMPARISON SECTION */}
      <section className="bg-background py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Onze Specialisaties
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* WONEN */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Wonen in Drenthe
              </h3>
              <ul className="space-y-3 font-body text-text mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Verkoop van residentieel vastgoed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Aankoop begeleiding in Emmen, Borger-Odoorn, Drouwenerveen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Taxatie van woningen en huizen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>NVM-makelaar garantie</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Lokale marktkennis</span>
                </li>
              </ul>
              <Link href="/diensten" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02]">
                Meer over Woningmakelaardij
              </Link>
            </div>

            {/* AGRARISCH */}
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                Agrarisch Vastgoed
              </h3>
              <ul className="space-y-3 font-body text-text mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Boerderijen en bedrijfsgebouwen</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Landbouwgrond bemiddeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Hectare-transacties Noord-Nederland</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold mt-1">✓</span>
                  <span>Agrarisch onroerend goed expertise</span>
                </li>
</ul>
              <Link href="/diensten" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading font-semibold rounded-full hover:bg-opacity-90 transition-all duration-300 hover:scale-[1.02]">
                Meer over Agrarisch Vastgoed
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}