import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center space-x-2 cursor-pointer hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-colors">
              <Wrench className="h-6 w-6 text-primary" />
              <span className="font-heading font-bold text-xl md:text-2xl">
                Pneumatic Tools
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" data-testid="link-nav-home">
              <span
                className={`cursor-pointer text-base font-medium transition-colors hover:text-primary ${
                  isActive("/")
                    ? "text-foreground border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                Home
              </span>
            </Link>
            <Link href="/about" data-testid="link-nav-about">
              <span
                className={`cursor-pointer text-base font-medium transition-colors hover:text-primary ${
                  isActive("/about")
                    ? "text-foreground border-b-2 border-primary pb-1"
                    : "text-muted-foreground"
                }`}
              >
                Chi Siamo
              </span>
            </Link>
            <a href="#contatti" data-testid="link-nav-contact">
              <span className="cursor-pointer text-base font-medium text-muted-foreground transition-colors hover:text-primary">
                Contatti
              </span>
            </a>
          </nav>

          <div className="hidden md:block">
            <Button
              variant="default"
              size="default"
              data-testid="button-request-quote"
              asChild
            >
              <a href="#contatti">Richiedi Preventivo</a>
            </Button>
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4 border-t">
            <Link href="/" data-testid="link-mobile-home">
              <div
                className={`block px-4 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2 ${
                  isActive("/")
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </div>
            </Link>
            <Link href="/about" data-testid="link-mobile-about">
              <div
                className={`block px-4 py-2 text-base font-medium rounded-md hover-elevate active-elevate-2 ${
                  isActive("/about")
                    ? "bg-accent text-foreground"
                    : "text-muted-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Chi Siamo
              </div>
            </Link>
            <a
              href="#contatti"
              className="block px-4 py-2 text-base font-medium text-muted-foreground hover-elevate active-elevate-2 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-mobile-contact"
            >
              Contatti
            </a>
            <div className="px-4">
              <Button
                variant="default"
                size="default"
                className="w-full"
                data-testid="button-mobile-quote"
                asChild
              >
                <a href="#contatti" onClick={() => setMobileMenuOpen(false)}>
                  Richiedi Preventivo
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
