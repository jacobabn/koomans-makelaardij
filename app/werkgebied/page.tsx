import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werkgebied | Koomans Makelaardij — NVM Makelaar Drenthe",
  description: "Makelaar Drenthe en Noord-Groningen. Koomans Makelaardij is gespecialiseerd in woningmakelaardij en agrarisch onroerend goed. 1e Exloërmond.",
};

export default function WerkgebiedPage() {
  return (
    <div className="bg-background text-text">
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-primary/60">
          <li>
            <Link href="/" className="hover:text-primary transition-colors">
              <span>Home</span>
            </Link>
            <meta content="1" />
          </li>
          <li className="text-primary/40">/</li>
          <li>
            <span className="text-primary font-medium font-heading">Werkgebied</span>
            <meta content="2" />
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
              Ons werkgebied
            </h1>
            <p className="text-lg font-body text-text/80 mb-6 leading-relaxed">
              Koomans Makelaardij is dé specialist in woningmakelaardij en agrarisch onroerend goed in Drenthe en Noord-Groningen. Met meer dan dertig jaren ervaring in de regio kennen wij elk hoekje van ons werkgebied. Wij begrijpen de unieke karakteristieken van dorpen en landschappen, van de veenkoloniën tot de grotebroeklandbouw.
            </p>
            <p className="text-lg font-body text-text/80 mb-8 leading-relaxed">
              Of u nu een woning wilt verkopen in 1e Exloërmond, een boerderij in Borger-Odoorn zoekt, of landbouwgrond in Emmen wilt bemiddelen — wij hebben de expertise en het netwerk om u optimaal te adviseren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-block px-6 py-3 bg-primary text-on-primary font-heading font-semibold rounded-lg hover:bg-primary/90 transition-all duration-300 text-center">
                Neem contact op
              </Link>
              <Link href="/diensten" className="inline-block px-6 py-3 border-2 border-primary text-primary font-heading font-semibold rounded-lg hover:bg-primary/5 transition-all duration-300 text-center">
                Onze diensten
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
              <img
                src="/images/homepage-2.jpg"
                alt="Drenthe landschap makelaar"
                width={600}
                height={400}
                className="w-full h-64 sm:h-80 object-cover"
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Onze kerngebieden
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Borger-Odoorn
              </h3>
              <p className="font-body text-text/80 mb-4">
                Gelegen in het hart van de Drentse Hondsrug, Borger-Odoorn is een vogelvrije gemeente met een rijk erfgoed. Makelaar Borger-Odoorn in moderne woningen en karakteristieke agrarische bedrijven.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Emmen
              </h3>
              <p className="font-body text-text/80 mb-4">
                Emmen staat bekend als de groenste stad van Nederland met veel natuur en ruimte. Wij helpen u een woning of bedrijf in Emmen te vinden, kopen of verkopen.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Exloo
              </h3>
              <p className="font-body text-text/80 mb-4">
                Exloo is het centrum van de veenweidegebieden in Noord-Drenthe. Een levendige gemeente met veel landelijke woonkwaliteit en agrarische activiteiten.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Drouwenerveen
              </h3>
              <p className="font-body text-text/80 mb-4">
                Drouwenerveen biedt een perfecte mix van plattelands­leven en toegankelijkheid. Wij bemiddelen in diverse woon- en agrarische onroerende goederen in deze gemeente.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                1e Exloërmond
              </h3>
              <p className="font-body text-text/80 mb-4">
                Ons thuisadres. 1e Exloërmond is een rustig dorp met karakter, waar landbouw en wonen goed samengaan. Hier voeren wij ons zaken met toewijding uit.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>

            <div className="bg-white rounded-lg p-8 hover-lift transition-all duration-300 border border-primary/10">
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">
                Noord-Groningen
              </h3>
              <p className="font-body text-text/80 mb-4">
                Wij werken ook in Noord-Groningen, waar dezelfde landelijke waarden en agrarische traditie heerst als in Drenthe. Landbouwgrond en bedrijven zijn onze specialiteit.
              </p>
              <Link href="/" className="inline-block text-primary font-heading font-semibold hover:">
                Meer informatie →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-6">
              Waarom Drenthe en Noord-Groningen?
            </h2>
            <div className="space-y-6 font-body text-text/80">
              <p>
                Drenthe en Noord-Groningen staan bekend om hun unieke landschappen, rijke cultuurhistorie en groeiende vraag naar duurzaam wonen en werken op het platteland. De regio biedt een perfecte balans tussen natuur, ruimte en toegankelijkheid.
              </p>
              <p>
                Als NVM-makelaar beschikken wij over het juiste netwerk, de nieuwste marktinzichten en een grondige kennis van lokale regelgeving. Wij helpen eigenaren hun onroerend goed optimaal in de markt te zetten en kopers hun droomhuis of bedrijf te vinden.
              </p>
              <p>
                Onze expertise in agrarisch onroerend goed maakt ons onmisbaar voor boeren en tuinders die hun bedrijf willen uitbreiden, saneren of verkopen. Ook taxaties voor erfheden, verzekeringen en bankzaken behoren tot ons dagelijks werk.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
            <img
              src="/images/homepage-5.jpg"
              alt="Agrarisch landschap Drenthe makelaardij"
              width={600}
              height={400}
              className="w-full h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="bg-primary/5 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-12 text-center">
            Veelgestelde vragen over ons werkgebied
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                In welke gemeenten werk je?
              </h3>
              <div>
                <p className="font-body text-text/80">
                  Koomans Makelaardij is werkzaam in Borger-Odoorn, Emmen, Exloo, Drouwenerveen, 1e Exloërmond en Noord-Groningen. Dit is ons kernwerkgebied waar wij jarenlange ervaring en sterke lokale netwerken hebben.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Bemiddelen jullie ook in agrarisch onroerend goed?
              </h3>
              <div>
                <p className="font-body text-text/80">
                  Ja, agrarisch onroerend goed is één van onze sterke specialisaties. We bemiddelen in landbouwbedrijven, veebedrijven, groenteteeltbedrijven en landbouwgrond.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Kan ik een taxatie aanvragen voor mijn woning of bedrijf?
              </h3>
              <div>
                <p className="font-body text-text/80">
                  Zeker. Als NVM-taxateur voeren wij professionele taxaties uit voor woningen, agrarische bedrijven en grond. Bel ons of stuur een e-mail voor een vrijblijvend gesprek.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-primary/10">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Hoe lang duurt het om mijn woning te verkopen?
              </h3>
              <div>
                <p className="font-body text-text/80">
                  Dit hangt af van de ligging, prijs en toestand van uw woning. In ons werkgebied hebben we een sterke markt en geïnteresseerde koper. Een orienterende schatting bespreken we graag met u.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 border border-primary/10">
<h3 className="text-xl font-heading font-bold text-primary mb-3">
                Werkt u ook samen met andere makelaars?
              </h3>
              <div>
                <p className="font-body text-text/80">
                  Ja, als NVM-makelaar werken wij samen met een groot netwerk van collega-makelaars. Dit vergroot de kans op een succesvolle verkoop of aankoop voor onze klanten.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}