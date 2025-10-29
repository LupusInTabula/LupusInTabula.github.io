# Sito Web Pneumatic Tools - Attrezzature per Conciatura Pelle

## Panoramica del Progetto
Sito web professionale per la pubblicizzazione di attrezzature pneumatiche per la conciatura della pelle per scarpe. Il sito presenta due prodotti principali: Pinza Pneumatica e Martello Pneumatico.

## Stack Tecnologico
- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Express.js, Node.js
- **Routing**: Wouter
- **Form Management**: React Hook Form con Zod validation
- **State Management**: TanStack Query (React Query)
- **Database**: PostgreSQL (per messaggi di contatto)
- **Styling**: Tailwind CSS con design system personalizzato

## Struttura del Progetto

### Pagine Principali
1. **Home (`/`)** - Pagina principale con:
   - Hero section con immagine di sfondo
   - Panoramica prodotti (cards con placeholder per immagini)
   - Sezioni dettagliate per Pinza Pneumatica e Martello Pneumatico
   - Sezione "Perché Sceglierci" con 3 caratteristiche
   - Call-to-Action finale

2. **About Us (`/about`)** - Pagina aziendale con:
   - Hero banner
   - Sezione Storia dell'Azienda
   - Missione aziendale
   - Valori aziendali (3 cards)
   - Expertise (3 pilastri)
   - Form di contatto completo
   - Informazioni di contatto dirette (telefono, email, indirizzo)

### Componenti Principali
- **Header**: Navigazione sticky con logo, menu desktop/mobile, CTA button
- **Footer**: Informazioni azienda, link veloci, contatti
- **Forms**: Form di contatto con validazione completa

### Design System
- **Colori**: Schema professionale blu/grigio per settore industriale
- **Typography**: 
  - Heading font: Work Sans (grassetto, industriale)
  - Body font: Inter (pulito, leggibile)
- **Spaziature**: Sistema consistente (4, 8, 12, 16, 20, 24, 32)
- **Icone**: Font Awesome 6.4.0

## Funzionalità

### Completate
- ✅ Navigazione completa tra pagine
- ✅ Design responsive per tutti i dispositivi
- ✅ Hero sections con immagini di sfondo
- ✅ Sezioni prodotto con placeholder per immagini
- ✅ Form di contatto con validazione
- ✅ Layout accessibile e SEO-friendly
- ✅ Menu mobile hamburger

### Da Completare (Utente)
- 📝 Aggiungere immagini reali dei prodotti (Pinza e Martello)
- 📝 Inserire descrizioni dettagliate dei prodotti
- 📝 Compilare testo "La Nostra Storia"
- 📝 Compilare testo "La Nostra Missione"
- 📝 Aggiornare recapiti (telefono, email, indirizzo)
- 📝 Aggiungere specifiche tecniche dei prodotti

### Backend API
- `POST /api/contact` - Invio messaggi dal form di contatto

## Note per il Proprietario

### Come Aggiungere Immagini
Le immagini dei prodotti possono essere aggiunte sostituendo i placeholder nelle seguenti sezioni:
- Home page: sezione prodotti overview (linea ~133-135, ~154-156)
- Home page: dettagli Pinza Pneumatica (linea ~178-184)
- Home page: dettagli Martello Pneumatico (linea ~269-275)

### Come Modificare i Testi
Tutti i testi segnaposto sono contrassegnati da `[da specificare]` o `[Qui puoi inserire...]`. Cerca questi marcatori per trovare rapidamente le sezioni da personalizzare.

### Contatti da Aggiornare
- Telefono: attualmente `+39 012 345 6789`
- Email: attualmente `info@pneumatictools.it`
- Indirizzo: attualmente placeholder generico

## Modifiche Recenti
- 2025-10-29: Creazione iniziale del sito con design professionale industriale
- Frontend completo con tutte le pagine e componenti
- Form di contatto con validazione implementato
- Design responsive e accessibile

## Deployment
Il sito è pronto per il deployment. Assicurati di:
1. Aggiungere le immagini dei prodotti
2. Completare tutti i testi personalizzati
3. Aggiornare i recapiti aziendali
4. Configurare il database per i messaggi di contatto
