import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Diensten | Koomans Makelaardij — NVM Makelaar Drenthe",
  description: "Professionele makelaardij diensten in Drenthe: woningverkoop, aankoop, taxatie, agrarisch vastgoed en landbouwgrond. Makelaar Borger-Odoorn, Emmen en omgeving.",
  keywords: "makelaar Drenthe, agrarisch makelaar, taxateur, woningmakelaardij, agrarische makelaardij, Borger-Odoorn, Emmen, NVM-makelaar",
};

export default function DiestenPage() {
  return (
    <div className="bg-background text-text">
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center space-x-2 text-sm text-primary/60">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-primary transition-colors">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li className="text-primary/40">/</li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-primary font-medium">Diensten</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 border-b border-primary/10">
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-6">
            Onze Diensten
          </h1>
          <p className="font-body text-lg text-text/80 leading-relaxed mb-8">
            Bij Koomans Makelaardij bieden we een compleet scala aan makelaardij diensten voor zowel woning- als agrarisch vastgoed in Drenthe en Noord-Groningen. Met jarenlange expertise begeleiden we u professioneel bij elke stap van het proces.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <h2 className="font-heading text-3xl md:text-4xl text-primary mb-12">
          Diensten Wonen
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <article itemScope itemType="https://schema.org/Service" className="group border border-primary/10 rounded-lg overflow-hidden hover-lift transition-all duration-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-64 md:h-72">
              <img
                src="/images/homepage-4.jpg"
                alt="Woning verkopen begeleiding in Drenthe"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h3 itemProp="name" className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Woning Verkopen
              </h3>
              <p itemProp="description" className="font-body text-base text-text/80 leading-relaxed mb-6">
                Wij begeleiden u volledig bij de verkoop van uw woning. Van professionele fotografie en presentatie tot onderhandeling en notariële afwikkeling — wij zorgen dat uw woning op de juiste manier wordt verkocht. Onze ervaring in Drenthe en omgeving garandeert maximale zichtbaarheid en betrokkenheid van serieuze kopers.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Profesionele fotografie en virtuele tours</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Digitale marketingstrategie op Funda en andere platforms</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Professionele onderhandeling en contractonderhandeling</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Begeleiding tot sluitingsdatum</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading text-sm rounded-lg hover:bg-primary/90 transition-all duration-300">
                Meer informatie
              </Link>
            </div>
          </article>

          <article itemScope itemType="https://schema.org/Service" className="group border border-primary/10 rounded-lg overflow-hidden hover-lift transition-all duration-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-64 md:h-72">
              <img
                src="/images/homepage-5.jpg"
                alt="Woning kopen begeleiding Drenthe"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h3 itemProp="name" className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Woning Kopen
              </h3>
              <p itemProp="description" className="font-body text-base text-text/80 leading-relaxed mb-6">
                Op zoek naar uw droomwoning in Drenthe? Wij helpen u bij het vinden, inspecteren en onderhandelen van de juiste woning. Met onze uitgebreide netwerk en lokale kennis van de huizenmarkt in Drouwenerveen, Emmen en omgeving, vinden we precies wat u zoekt.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Persoonlijke begeleiding en advisering</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Inspectie en technische beoordeling van woningen</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Onderhandelingsbegeleiding</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Ondersteuning bij financiering en hypotheek</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading text-sm rounded-lg hover:bg-primary/90 transition-all duration-300">
                Meer informatie
              </Link>
            </div>
          </article>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          <article itemScope itemType="https://schema.org/Service" className="group border border-primary/10 rounded-lg overflow-hidden hover-lift transition-all duration-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-64 md:h-72">
              <img
                src="/images/homepage-3.png"
                alt="Gratis waardebepaling woning Drenthe"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h3 itemProp="name" className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Gratis Waardebepaling
              </h3>
              <p itemProp="description" className="font-body text-base text-text/80 leading-relaxed mb-6">
                Wat is uw woning waard? Wij bieden u een vrijblijvende, gratis waardebepaling van uw woning. Onze deskundigen analyseren de marktwaarde op basis van actuele verkoopgegevens, locatie en conditie van uw pand.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Kosteloos en zonder verplichting</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Gebaseerd op actuele marktgegevens</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Ter plekke inspectie en beoordeling</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Advies op maat voor uw situatie</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading text-sm rounded-lg hover:bg-primary/90 transition-all duration-300">
                Meer informatie
              </Link>
            </div>
          </article>

          <article itemScope itemType="https://schema.org/Service" className="group border border-primary/10 rounded-lg overflow-hidden hover-lift transition-all duration-300">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-64 md:h-72">
              <img
                src="/images/homepage-6.png"
                alt="Taxatie taxateur Drenthe"
                width={800}
                height={450}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="p-6 md:p-8 bg-white">
              <h3 itemProp="name" className="font-heading text-2xl md:text-3xl text-primary mb-4">
                Taxatie
              </h3>
              <p itemProp="description" className="font-body text-base text-text/80 leading-relaxed mb-6">
                Een professionele taxatie is essentieel voor verkoopprijs bepaling, erfenissen, huwelijksgoederenregelingen en financieringsaanvragen. Onze ervaren taxateurs leveren betrouwbare taxatierapporten op.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Erkende NWWI-taxateurs met certificering</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Officieel taxatierapport voor alle doeleinden</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Snelle afwikkeling en professioneel advies</span>
                </li>
                <li className="flex items-start text-sm text-text/70">
                  <span className="inline-block w-4 h-4 rounded-full bg-accent mr-3 mt-1.5 flex-shrink-0" />
                  <span>Acceptatie bij financieringsmaatschappijen</span>
                </li>
              </ul>
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading text-sm rounded-lg hover:bg-primary/90 transition-all duration-300">
                Meer informatie
              </Link>
</div>
          </div>
        </div>
      </div>
    </div>
  );
}