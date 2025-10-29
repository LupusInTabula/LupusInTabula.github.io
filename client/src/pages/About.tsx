import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Star, 
  Lightbulb, 
  Handshake, 
  Wrench, 
  Cpu, 
  UserCheck,
  Phone,
  Mail,
  MapPin,
  Send,
  Loader2
} from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, "Il nome deve contenere almeno 2 caratteri"),
  email: z.string().email("Inserisci un'email valida"),
  phone: z.string().min(8, "Inserisci un numero di telefono valido"),
  message: z
    .string()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function About() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato!",
        description:
          "Grazie per averci contattato. Ti risponderemo al più presto.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Errore",
        description:
          "Si è verificato un errore. Riprova o contattaci telefonicamente.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4">
            Chi Siamo
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto px-4">
            Passione per la qualità e l'innovazione
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                La Nostra Storia
              </h2>
              <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  [Qui puoi inserire la storia della tua azienda. Descrivi come
                  è nata l'azienda, quali sono stati i momenti chiave del suo
                  sviluppo, e come si è evoluta nel tempo. Racconta la tua
                  esperienza nel settore della lavorazione della pelle e delle
                  attrezzature pneumatiche.]
                </p>
                <p>
                  [Continua con dettagli sulla crescita dell'azienda, sui
                  traguardi raggiunti, e su come avete costruito la vostra
                  reputazione nel settore. Menziona eventuali certificazioni,
                  riconoscimenti o collaborazioni importanti.]
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                La Nostra Missione
              </h2>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                [Descrivi la missione della tua azienda. Quali sono i vostri
                obiettivi principali? Cosa vi distingue dalla concorrenza? Come
                volete contribuire al successo dei vostri clienti? Parla dei
                valori che guidano il vostro lavoro quotidiano e del vostro
                impegno verso l'eccellenza.]
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                I Nostri Valori
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center p-6" data-testid="value-quality">
                  <CardContent className="pt-6 space-y-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                      <Star className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Qualità
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ogni prodotto rispecchia il nostro impegno per
                      l'eccellenza e la durabilità.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6" data-testid="value-innovation">
                  <CardContent className="pt-6 space-y-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                      <Lightbulb className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Innovazione
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Ricerchiamo costantemente soluzioni migliori per
                      ottimizzare i processi.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-6" data-testid="value-trust">
                  <CardContent className="pt-6 space-y-3">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-3">
                      <Handshake className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold text-xl text-foreground">
                      Fiducia
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Costruiamo relazioni durature basate su affidabilità e
                      trasparenza.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              La Nostra Expertise
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tre pilastri fondamentali del nostro successo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4" data-testid="expertise-craftsmanship">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <Wrench className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Artigianato Tradizionale
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Rispettiamo le tecniche tradizionali della lavorazione della
                pelle, integrate con tecnologie moderne.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="expertise-technology">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Innovazione Tecnologica
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Sviluppiamo soluzioni all'avanguardia per migliorare efficienza
                e precisione.
              </p>
            </div>

            <div className="text-center space-y-4" data-testid="expertise-service">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-3">
                <UserCheck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground">
                Servizio Clienti
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Assistenza dedicata per garantire che ogni cliente ottenga il
                massimo dai nostri prodotti.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-16 md:py-20 lg:py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
              Contattaci
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Siamo qui per rispondere a tutte le tue domande
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <Card className="h-full">
                <CardContent className="p-8">
                  <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                    Invia un Messaggio
                  </h3>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nome e Cognome</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Mario Rossi"
                                {...field}
                                data-testid="input-contact-name"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="mario.rossi@example.com"
                                {...field}
                                data-testid="input-contact-email"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefono</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="+39 012 345 6789"
                                {...field}
                                data-testid="input-contact-phone"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Messaggio</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Scrivi qui il tuo messaggio..."
                                className="min-h-[120px] resize-none"
                                {...field}
                                data-testid="input-contact-message"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full"
                        disabled={contactMutation.isPending}
                        data-testid="button-submit-contact"
                      >
                        {contactMutation.isPending ? (
                          <span className="flex items-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Invio in corso...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            Invia Messaggio
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="font-heading font-semibold text-2xl text-foreground mb-6">
                  Informazioni di Contatto
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4" data-testid="contact-phone">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">
                        Telefono
                      </h4>
                      <a
                        href="tel:+390123456789"
                        className="text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        +39 012 345 6789
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Lun-Ven: 9:00 - 18:00
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-email">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:info@pneumatictools.it"
                        className="text-base text-muted-foreground hover:text-primary transition-colors"
                      >
                        info@pneumatictools.it
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        Rispondiamo entro 24 ore
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-address">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-foreground mb-1">
                        Indirizzo
                      </h4>
                      <p className="text-base text-muted-foreground">
                        Via dell'Industria, 123
                        <br />
                        00100 Roma, Italia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-3">
                    Orari di Apertura
                  </h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lunedì - Venerdì</span>
                      <span className="font-medium text-foreground">
                        9:00 - 18:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sabato</span>
                      <span className="font-medium text-foreground">
                        9:00 - 13:00
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domenica</span>
                      <span className="font-medium text-foreground">Chiuso</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
