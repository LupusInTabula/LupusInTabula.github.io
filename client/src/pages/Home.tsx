import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Hammer, Award, Cog, Headphones, CheckCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-white mb-6">
            Attrezzature Pneumatiche di Precisione
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Soluzioni professionali per la conciatura della pelle. Qualità,
            affidabilità e innovazione per l'industria calzaturiera.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              data-testid="button-hero-products"
              asChild
            >
              <a href="#prodotti">Scopri i Prodotti</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
              data-testid="button-hero-contact"
              asChild
            >
              <a href="#contatti">Contattaci</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="prodotti" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              I Nostri Prodotti
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Strumenti pneumatici progettati per garantire precisione e
              durata nella lavorazione della pelle per calzature.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid="card-product-pliers">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <Wrench className="h-32 w-32 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Immagine del prodotto da aggiungere
                  </p>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground">
                  Pinza Pneumatica
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Progettata per la massima precisione nella lavorazione della
                  pelle. Ergonomica, potente e affidabile per uso intensivo in
                  ambiente professionale. Ideale per operazioni di conciatura e
                  finitura di calzature di alta qualità.
                </p>
                <Button
                  variant="outline"
                  data-testid="button-learn-pliers"
                  asChild
                >
                  <a href="#pinza">Scopri di più</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover-elevate transition-all duration-300" data-testid="card-product-hammer">
              <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 flex items-center justify-center">
                <div className="text-center p-8">
                  <Hammer className="h-32 w-32 text-primary mx-auto mb-4" />
                  <p className="text-sm text-muted-foreground">
                    Immagine del prodotto da aggiungere
                  </p>
                </div>
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="font-heading font-semibold text-2xl md:text-3xl text-foreground">
                  Martello Pneumatico
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Potenza e controllo per lavorazioni impegnative. Sistema
                  pneumatico avanzato che garantisce risultati uniformi su ogni
                  tipo di pelle. Riduce l'affaticamento dell'operatore
                  mantenendo prestazioni elevate durante tutta la giornata.
                </p>
                <Button
                  variant="outline"
                  data-testid="button-learn-hammer"
                  asChild
                >
                  <a href="#martello">Scopri di più</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="pinza" className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center">
                <div className="text-center p-12">
                  <Wrench className="h-36 w-36 text-primary mx-auto mb-6" />
                  <p className="text-base text-muted-foreground">
                    Immagine ad alta risoluzione della Pinza Pneumatica
                  </p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
                Pinza Pneumatica Professionale
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                La nostra pinza pneumatica rappresenta l'eccellenza nella
                lavorazione della pelle. Progettata per professionisti che non
                accettano compromessi sulla qualità.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                [Qui puoi inserire una descrizione dettagliata del prodotto di
                200-400 parole. Parla delle caratteristiche tecniche, dei
                vantaggi, delle applicazioni specifiche, della durabilità, della
                facilità d'uso e di come questo strumento migliora il processo
                di lavorazione della pelle per calzature.]
              </p>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                  Caratteristiche Tecniche
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Pressione di esercizio: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Materiali: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Peso: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Dimensioni: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Garanzia: [da specificare]
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                  Vantaggi Principali
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Precisione millimetrica nella lavorazione
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Design ergonomico per ridurre l'affaticamento
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Costruzione robusta per uso industriale intensivo
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  variant="default"
                  size="lg"
                  data-testid="button-request-info-pliers"
                  asChild
                >
                  <a href="#contatti">Richiedi Informazioni</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="martello" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
                Martello Pneumatico Industriale
              </h2>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                Il martello pneumatico che ridefinisce gli standard di
                efficienza nella lavorazione della pelle. Potenza controllata
                per risultati professionali.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                [Qui puoi inserire una descrizione dettagliata del prodotto di
                200-400 parole. Descrivi le caratteristiche uniche del martello
                pneumatico, come viene utilizzato nel processo di conciatura,
                quali vantaggi offre rispetto agli strumenti tradizionali, e
                perché è la scelta preferita dai professionisti del settore
                calzaturiero.]
              </p>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                  Specifiche Tecniche
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Potenza di impatto: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Frequenza colpi/minuto: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Consumo aria: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Livello di rumore: [da specificare]
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Certificazioni: [da specificare]
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                  Punti di Forza
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Sistema di controllo della potenza per massima versatilità
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Manutenzione semplificata e costi operativi ridotti
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-base text-muted-foreground">
                      Compatibile con tutti i sistemi pneumatici standard
                    </span>
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <Button
                  variant="default"
                  size="lg"
                  data-testid="button-request-info-hammer"
                  asChild
                >
                  <a href="#contatti">Richiedi Informazioni</a>
                </Button>
              </div>
            </div>

            <div>
              <div className="aspect-[4/3] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-xl flex items-center justify-center">
                <div className="text-center p-12">
                  <Hammer className="h-36 w-36 text-primary mx-auto mb-6" />
                  <p className="text-base text-muted-foreground">
                    Immagine ad alta risoluzione del Martello Pneumatico
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Perché Sceglierci
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tre motivi per cui siamo il partner ideale per la tua attività
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 p-8" data-testid="feature-quality">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                Qualità Garantita
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Ogni prodotto è testato e certificato per garantire le massime
                prestazioni e durata nel tempo.
              </p>
            </div>

            <div className="text-center space-y-4 p-8" data-testid="feature-experience">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                Esperienza Tecnica
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Anni di esperienza nel settore della lavorazione della pelle e
                delle attrezzature pneumatiche.
              </p>
            </div>

            <div className="text-center space-y-4 p-8" data-testid="feature-support">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl md:text-2xl text-foreground">
                Assistenza Clienti
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Supporto dedicato per consulenza tecnica, manutenzione e
                risoluzione di ogni esigenza.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contatti" className="py-16 md:py-20 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Pronto a Migliorare la Tua Produzione?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Contattaci oggi per scoprire come le nostre attrezzature pneumatiche
            possono ottimizzare il tuo processo di lavorazione della pelle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              data-testid="button-cta-contact"
              asChild
            >
              <a href="/about#contact-form">Contattaci Ora</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              data-testid="button-cta-phone"
              asChild
            >
              <a href="tel:+390123456789" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Chiamaci
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
