import { Link } from "wouter";
import { Wrench, Phone, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-xl">
                Pneumatic Tools
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Soluzioni professionali per la lavorazione della pelle.
              Attrezzature pneumatiche di alta qualità per l'industria
              calzaturiera.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Link Veloci
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" data-testid="link-footer-home">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                    Prodotti
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about" data-testid="link-footer-about">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer text-sm">
                    Chi Siamo
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="#contatti"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  data-testid="link-footer-contact"
                >
                  Contatti
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-heading font-semibold text-lg text-foreground">
              Contatti
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Telefono
                  </p>
                  <a
                    href="tel:+390123456789"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-footer-phone"
                  >
                    +39 012 345 6789
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <a
                    href="mailto:info@pneumatictools.it"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-footer-email"
                  >
                    info@pneumatictools.it
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} Pneumatic Tools. Tutti i diritti riservati.
            </p>
            <p className="text-sm text-muted-foreground">
              Made with precision and care
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
