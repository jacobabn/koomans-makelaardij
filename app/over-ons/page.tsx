import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Ons | Koomans Makelaardij — NVM Makelaar Drenthe",
  description: "Koomans Makelaardij is uw NVM-makelaar en taxateur in Drenthe. Specialist in woningmakelaardij en agrarisch onroerend goed in Noord-Nederland.",
  openGraph: {
    title: "Over Ons | Koomans Makelaardij",
    description: "Koomans Makelaardij is uw NVM-makelaar en taxateur in Drenthe. Specialist in woningmakelaardij en agrarisch onroerend goed.",
    url: "https://koomansmakelaardij.nl/over-ons",
    type: "website",
  },
};

export default function OverOns() {
  return (
    <div className="bg-background text-text">
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol itemScope itemType="https://schema.org/BreadcrumbList" className="flex items-center space-x-2 text-sm text-primary/60">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item" className="hover:text-primary transition-colors"><span itemProp="name">Home</span></Link>
            <meta itemProp="position" content="1" />
          </li>
          <li><span>/</span></li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" className="text-primary font-medium">Over Ons</span>
            <meta itemProp="position" content="2" />
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-12 md:mb-16">
          <img 
            src="/images/homepage-2.jpg" 
            alt="Koomans Makelaardij kantoor in 1e Exloërmond, Drenthe" 
            width={1920} 
            height={600}
            className="w-full h-64 md:h-96 object-cover"
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-24">
          <div className="lg:col-span-2">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-primary mb-8 leading-tight">
              Over Koomans Makelaardij
            </h1>
            
            <div className="prose prose-lg max-w-none font-body text-text leading-relaxed space-y-6">
              <p className="text-lg md:text-xl leading-relaxed">
                Koomans Makelaardij staat bekend als dé specialist in vastgoedmakelaardij in Drenthe en Noord-Groningen. Met jarenlange ervaring in zowel woningmakelaardij als agrarisch onroerend goed, begrijpen wij de unieke karakter van het landelijk vastgoed in deze regio.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Ons team van gecertificeerde NVM-makelaars en taxateurs werkt met passie aan het realiseren van uw vastgoeddoelstellingen. Of het nu gaat om de aankoop of verkoop van een woning in Borger-Odoorn, Emmen, of Drouwenerveen, of de bemiddeling van landbouwgrond en boerderijen — wij hebben de expertise en het lokale netwerk om u optimaal te adviseren.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Met ons kantoor gevestigd in 1e Exloërmond, aan het hart van het Drentse platteland, zijn wij dicht bij onze klanten. Wij spreken de taal van het ruraal vastgoed: wij kennen de waarde van ruimte, privacy en groen, en wij begrijpen wat een boerderij, een landgoed of een woning op het platteland betekent voor zijn eigenaar.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Ons doel is niet alleen transacties tot stand brengen, maar langdurige relaties opbouwen met eigenaren, beleggers en geïnteresseerden in het Drentse en Groningse vastgoed. Transparantie, deskundigheid en een luisterend oor zijn de hoekstenen van onze dienstverlening.
              </p>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 sticky top-20">
              <h2 className="font-heading text-2xl text-primary mb-6">Koomans Makelaardij</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wide text-primary/60 mb-2">Vestiging</h3>
                  <p className="text-text">1e Exloërmond</p>
                </div>

                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wide text-primary/60 mb-2">Telefoon</h3>
                  <a href="tel:0599512111" className="text-accent hover:text-primary transition-colors font-medium">0599 512111</a>
                </div>

                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wide text-primary/60 mb-2">Specialisaties</h3>
                  <ul className="space-y-2 text-text text-sm">
                    <li>Woningmakelaardij Drenthe</li>
                    <li>Agrarisch onroerend goed</li>
                    <li>Taxaties</li>
                    <li>Landgoedmakelaardij</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-heading text-sm uppercase tracking-wide text-primary/60 mb-4">Certificeringen</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <img 
                          src="/images/nvm-11.png" 
                          alt="NVM makelaar certificaat" 
                          width={32} 
                          height={32}
                          className="w-8 h-8"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">NVM-Makelaar</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
                        <img 
                          src="/images/vastgoedcert-13.png" 
                          alt="Vastgoedcertificering" 
                          width={32} 
                          height={32}
                          className="w-8 h-8"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <span className="text-sm font-medium text-primary">Gecertificeerd Taxateur</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-12 md:py-16 border-y border-primary/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <p className="font-heading text-3xl md:text-4xl text-primary mb-2">25+</p>
              <p className="text-sm md:text-base text-text/70">Jaren ervaring</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl text-primary mb-2">500+</p>
              <p className="text-sm md:text-base text-text/70">Verkochte woningen</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl text-primary mb-2">1000+</p>
              <p className="text-sm md:text-base text-text/70">Hectare agrarisch grond</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl text-primary mb-2">100%</p>
              <p className="text-sm md:text-base text-text/70">NVM-Gecertificeerd</p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <h2 className="font-heading text-3xl md:text-4xl text-primary mb-12">Onze Diensten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group overflow-hidden rounded-lg bg-white border border-primary/10 hover-lift">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-48">
                <img 
                  src="/images/homepage-4.jpg" 
                  alt="Woningmakelaardij in Drenthe en Noord-Groningen" 
                  width={800} 
                  height={450}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-3">Woningmakelaardij</h3>
                <p className="text-text/80 text-sm mb-4">
                  Wij bemiddelen bij de aankoop en verkoop van woningen in heel Drenthe en Noord-Groningen. Van moderne nieuwbouw tot karaktervolle boerderijen — wij kennen de markt en vinden voor uw woning of bedrijfsgebouw de juiste koper.
                </p>
                <p className="text-text/60 text-xs">Borger-Odoorn • Emmen • Drouwenerveen • Exloo</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white border border-primary/10 hover-lift">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-48">
                <img 
                  src="/images/homepage-5.jpg" 
                  alt="Agrarisch onroerend goed en landbouwgrond in Drenthe" 
                  width={800} 
                  height={450}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-3">Agrarisch Onroerend Goed</h3>
                <p className="text-text/80 text-sm mb-4">
                  Landbouwgrond, boerderijen, landgoederen — wij zijn dé specialist in agrarisch vastgoed. Ons netwerk in de agrarische sector stelt ons in staat optimaal voor u te adviseren over waarde, potentieel en toekomstbestendigheid.
                </p>
                <p className="text-text/60 text-xs">Boerderijen • Landbouwgrond • Landgoederen</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="group overflow-hidden rounded-lg bg-white border border-primary/10 hover-lift">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-48">
                <img 
                  src="/images/homepage-3.png" 
                  alt="Taxaties en waardebepaling van vastgoed" 
                  width={800} 
                  height={450}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-3">Taxaties & Waardebepaling</h3>
                <p className="text-text/80 text-sm mb-4">
                  Onze gecertificeerde taxateurs bepalen de marktwaarde van uw vastgoed. Onpartijdig, deskundig en transparant — essentieel voor financieringsaanvragen, verzekeringen en erfzaken.
                </p>
                <p className="text-text/60 text-xs">Objectief • Gecertificeerd • Snel</p>
              </div>
            </div>

            <div className="group overflow-hidden rounded-lg bg-white border border-primary/10 hover-lift">
              <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-48">
                <img 
                  src="/images/homepage-6.png" 
                  alt="Vastgoedadvisering en consultation" 
                  width={800} 
                  height={450}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary mb-3">Advies & Consultation</h3>
                <p className="text-text/80 text-sm mb-4">
                  Strategisch advies over uw vastgoedportfolio. Wij helpen u bij investeringsbeslissingen, herpositionering en toekomstige plannen met vastgoed in Drenthe en Noord-Groningen.
                </p>
                <p className="text-text/60 text-xs">Strategisch • Praktisch • Betrouwbaar</p>
              </div>
            </div>
          </div>
        </section>

</div>
    </div>
  );
}