# Design Guidelines: Industrial Pneumatic Tools Product Showcase

## Design Approach

**Reference-Based Approach** drawing from professional industrial and B2B product websites (Bosch Professional, Hilti, Stanley) combined with modern manufacturing showcase aesthetics. The design emphasizes credibility, technical precision, and product excellence through clean layouts and strategic use of whitespace.

**Key Principles:**
- Professional credibility through clean, structured layouts
- Product-first presentation with clear visual hierarchy
- Trust-building through comprehensive information architecture
- Accessible, straightforward navigation for B2B buyers

---

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts CDN) - Clean, professional sans-serif for body text and UI
- Headings: Work Sans (via Google Fonts CDN) - Strong, industrial feel for headlines

**Type Scale:**
- Hero Headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section Headers: text-3xl md:text-4xl lg:text-5xl, font-bold
- Product Names: text-2xl md:text-3xl, font-semibold
- Subsection Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Print/Captions: text-sm, font-normal

---

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-4, mb-8, py-20)

**Responsive Containers:**
- Full-width sections with inner max-w-7xl mx-auto px-4 md:px-8
- Product detail areas: max-w-6xl
- Text content blocks: max-w-3xl for optimal readability

**Vertical Rhythm:**
- Section padding: py-16 md:py-20 lg:py-24
- Component spacing: space-y-8 to space-y-16
- Tight groupings: space-y-4

---

## Page Structure & Components

### Homepage

**1. Navigation Header**
- Fixed/sticky top navigation with company logo (left), navigation links (center: Home, Prodotti, Chi Siamo, Contatti), CTA button (right: "Richiedi Preventivo")
- Clean horizontal layout with subtle border-bottom
- Height: h-16 md:h-20

**2. Hero Section**
- Large hero image showcasing leather tanning workshop environment or close-up of tools in action
- Height: h-[500px] md:h-[600px] lg:h-[700px]
- Overlay with blurred background buttons
- Hero content: Company tagline, brief value proposition (2-3 lines), primary CTA button
- Layout: Centered text overlay on image

**3. Products Overview Section**
- Two-column grid on desktop (grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12)
- Each product card includes:
  - Large product image placeholder (aspect-ratio-square or 4:3)
  - Product name heading
  - Brief intro text (50-80 words placeholder)
  - "Scopri di più" link/button
- Balanced, symmetrical layout

**4. Product Detail Sections** (One for each product)
- Alternating layout pattern: Image left/text right for Pinza, text left/image right for Martello
- Two-column grid (grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16)
- Image column: Large product photo placeholder with aspect-ratio-4/3
- Content column includes:
  - Product name (large heading)
  - Detailed description area (expandable text block, 200-400 words placeholder)
  - Technical specifications list (placeholder with 5-6 items)
  - Key features list with icons (Font Awesome via CDN: check-circle icons)
  - CTA button: "Richiedi Informazioni"

**5. Why Choose Us Section**
- Three-column grid (grid-cols-1 md:grid-cols-3 gap-8)
- Each column: icon (Font Awesome: award, cog, headset), title, description
- Topics: Qualità Garantita, Esperienza Tecnica, Assistenza Clienti

**6. Call-to-Action Section**
- Full-width background with centered content
- Large heading, supporting text, primary and secondary buttons
- max-w-3xl centered content

**7. Footer**
- Three-column layout (grid-cols-1 md:grid-cols-3 gap-8)
- Column 1: Company info and brief description
- Column 2: Quick links (Prodotti, Chi Siamo, Contatti)
- Column 3: Contact information (phone icon + number, email icon + address)
- Bottom bar with copyright

### About Us Page

**1. Hero Banner**
- Medium-height banner h-[300px] md:h-[400px] with company/factory image
- Centered "Chi Siamo" heading overlay with blurred button background

**2. Company Story Section**
- Single-column layout max-w-4xl centered
- Large heading followed by multi-paragraph company description (placeholder for 300-500 words)
- Subsections with headings: La Nostra Storia, La Nostra Missione, I Nostri Valori

**3. Team/Expertise Section** (Optional visual interest)
- Three-column grid showcasing expertise areas
- Icon + title + description format
- Topics: Artigianato Tradizionale, Innovazione Tecnologica, Servizio Clienti

**4. Contact Information Section**
- Two-column layout (grid-cols-1 md:grid-cols-2 gap-12)
- Left column: Contact form (Nome, Email, Telefono, Messaggio fields with labels)
- Right column: 
  - Direct contact details (large, prominent display)
  - Phone: Icon + "+39 XXX XXX XXXX" (placeholder)
  - Email: Icon + "info@azienda.it" (placeholder)
  - Address: Icon + full address (placeholder)
  - Business hours

---

## Component Library

**Buttons:**
- Primary: Rounded-lg, px-8 py-3, font-semibold text-base
- Secondary: Similar size with border and transparent background
- Icon buttons: Square aspect ratio, p-3

**Cards:**
- Product cards: Rounded-xl, subtle shadow, p-6 spacing
- Feature cards: Rounded-lg, border or subtle background, p-8

**Forms:**
- Input fields: Rounded-lg border, px-4 py-3, full-width
- Labels: Above inputs, font-medium, mb-2
- Consistent spacing between form groups (space-y-4)

**Icons:**
- Font Awesome via CDN (check-circle, phone, envelope, map-marker-alt, award, cog, headset, tools)
- Icon size: text-2xl md:text-3xl for feature icons, text-xl for list items

**Navigation:**
- Clean horizontal menu with consistent spacing (gap-8)
- Active state indicated by underline or subtle highlight

---

## Images

**Required Image Placements:**

1. **Homepage Hero:** Full-width background image of leather tanning workshop, tools in industrial setting, or artisan at work (h-[600px])
2. **Product Image - Pinza Pneumatica:** High-quality product photo, preferably on white/neutral background or in-use context (aspect-ratio-4/3)
3. **Product Image - Martello Pneumatico:** Matching style to pinza image (aspect-ratio-4/3)
4. **About Us Hero:** Company building, team photo, or manufacturing facility (h-[400px])
5. **Product Cards (Homepage):** Thumbnail versions of main product images (aspect-ratio-square)

All images should convey professionalism, quality craftsmanship, and industrial reliability.

---

## Accessibility & Best Practices

- Maintain WCAG AA contrast ratios throughout
- Semantic HTML structure (header, main, section, footer, nav)
- Form labels properly associated with inputs
- Keyboard navigation support for all interactive elements
- Aria labels for icon-only buttons
- Responsive images with appropriate alt text placeholders