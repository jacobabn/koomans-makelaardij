import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Koomans Makelaardij — NVM Makelaar Drenthe",
  description: "Neem contact op met Koomans Makelaardij in 1e Exloërmond. Bel 0599-512111 voor makelaardij, taxatie en agrarische diensten in Drenthe en Noord-Groningen.",
  openGraph: {
    title: "Contact | Koomans Makelaardij",
    description: "Neem contact op met Koomans Makelaardij in 1e Exloërmond.",
    url: "https://koomans-makelaardij.nl/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div>
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <ol className="flex items-center space-x-2 text-sm text-text/60">
          <li>
            <Link href="/" className="hover:text-text"><span>Home</span></Link>
            <meta content="1" />
          </li>
          <li><span>/</span></li>
          <li>
            <span className="text-text font-medium">Contact</span>
            <meta content="2" />
          </li>
        </ol>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-2 lg:order-1">
            <h1 className="font-heading text-4xl sm:text-5xl text-text mb-8">Neem contact op</h1>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-heading text-text mb-2">
                  Uw naam *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text placeholder-text/50"
                  placeholder="Voornaam en achternaam"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-heading text-text mb-2">
                  E-mailadres *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text placeholder-text/50"
                  placeholder="uw@emailadres.nl"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-heading text-text mb-2">
                  Telefoonnummer *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text placeholder-text/50"
                  placeholder="06 - 12345678"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-heading text-text mb-2">
                  Onderwerp *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text"
                >
                  <option value="">Kies onderwerp</option>
                  <option value="verkoop">Woningverkoop</option>
                  <option value="aankoop">Woningaankoop</option>
                  <option value="taxatie">Taxatie</option>
                  <option value="agrarisch">Agrarische diensten</option>
                  <option value="overig">Overig</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-heading text-text mb-2">
                  Bericht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-primary/20 rounded focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-white text-text placeholder-text/50 font-body"
                  placeholder="Vertel ons meer over uw vraag..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary px-6 py-3 rounded font-heading font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Verstuur bericht
              </button>

              <p className="text-xs text-text/60 font-body">
                * Verplichte velden
              </p>
            </form>
          </div>

          <div
           
           
            className="order-1 lg:order-2 bg-primary text-on-primary rounded-lg p-8 lg:p-10 space-y-8 h-fit"
          >
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl mb-6">Contactgegevens</h2>

              <div className="space-y-6">
                <div>
                  <p className="font-heading text-sm text-on-primary/70 mb-2">Telefoonnummer</p>
                  <a
                    href="tel:+31599512111"
                    className="text-lg sm:text-xl font-heading text-on-primary hover:text-on-primary/80 transition-colors"
                   
                  >
                    0599 - 512111
                  </a>
                </div>

                <div>
                  <p className="font-heading text-sm text-on-primary/70 mb-2">Adres</p>
                  <address className="font-body text-base not-italic text-on-primary">
                    1e Exloërmond
                  </address>
                </div>

                <div>
                  <p className="font-heading text-sm text-on-primary/70 mb-2">Openingstijden</p>
                  <dl className="space-y-2 font-body text-base text-on-primary">
                    <div className="flex justify-between">
                      <dt>Maandag t/m vrijdag:</dt>
                      <dd>09:00 - 17:00</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt>Zaterdag & zondag:</dt>
                      <dd>Op afspraak</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-on-primary/20">
              <p className="font-body text-sm text-on-primary/80">
                Voor urgente vragen kunt u altijd bellen. Wij helpen u graag verder!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl text-text mb-8">Bezoek ons kantoor</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=1e%20Exlo%C3%ABrmond&output=embed"
              width="100%"
              height="450"
              style={{ border: "none" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locatie Koomans Makelaardij, 1e Exloërmond"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-heading text-2xl text-text mb-4">Routebeschrijving</h3>
              <p className="font-body text-text mb-4">
                Koomans Makelaardij is goed bereikbaar vanaf alle kanten van Drenthe en Noord-Groningen. Volg de routebeschrijving in Google Maps voor de beste rijroute naar ons kantoor in 1e Exloërmond.
              </p>
              <a
                href="https://maps.google.com/maps?q=1e%20Exlo%C3%ABrmond"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-on-primary px-6 py-3 rounded font-heading font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Routekaart openen
              </a>
            </div>

            <div>
              <h3 className="font-heading text-2xl text-text mb-4">Waarom kiezen voor ons?</h3>
              <ul className="font-body text-text space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>NVM-makelaar met jarenlange ervaring in Drenthe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Specialist in agrarische en landelijke vastgoed</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Persoonlijke begeleiding van A tot Z</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Sterke lokale netwerken in de regio</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}