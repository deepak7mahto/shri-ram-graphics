# Technical & Visual Design Specification: Shri Ram Graphics Web Platform

**Date**: 2026-08-22  
**Target Client**: Shri Ram Graphics (New Delhi)  
**Deployment Target**: GitHub Pages (`https://<username>.github.io/<repo>/`) & Custom Domains  

---

## 1. Executive Summary & Brand Identity

**Shri Ram Graphics** is a premier packaging design, offset printing, and carton manufacturing enterprise based in New Delhi. The website provides a high-converting digital storefront and interactive engineering portal for B2B procurement managers, pharmaceutical/healthcare brands, FMCG companies, and retail businesses.

### Verified Company Information
* **Company Name**: Shri Ram Graphics
* **Tagline**: *"Imagine • Believe • Create"*
* **Business Type**: Creative Packaging Design, Quality Offset Printing Works & Manufacturers of Duplex & Corrugated Boxes
* **Factory / Works Unit**: A-1/1, Okhla Industrial Area, Phase-I, New Delhi - 110020
* **Registered Office**: Building No.-7, GF, Street No.-26C1, Molarband Extn., Badarpur, New Delhi - 110044
* **Direct Contacts**:
  * Phone / WhatsApp: `+91-9810254955`
  * Secondary / Factory Contact: `+91-9716373323`
  * Email: `shriramgraphics.rp@gmail.com`
  * GSTIN: `07IWWPD8374Q1Z5`

---

## 2. Technical Stack & Architecture

* **Framework**: React 18 + Vite (ESM)
* **Styling**: Tailwind CSS (with custom industrial theme & animations)
* **3D Visualizer**: Three.js (WebGL rendering for 3D procedural box models with realistic lighting, shadows, folding flaps, and material textures)
* **Icons**: Lucide React
* **Deployment & CI/CD**:
  * Vite configured with relative base resolution (`base: './'`) for compatibility across GitHub Pages sub-paths or custom domains.
  * Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) for continuous deployment.

---

## 3. UI/UX & Layout Structure

### 3.1 Top Bar & Header Navigation
* **Top Bar**: Live status ("Factory Operational • Mon-Sat 9AM-8PM"), direct WhatsApp link (`+91 9810254955`), GSTIN verification tag, and emergency quotation hotline.
* **Sticky Navigation**:
  * Brand Logo with "Imagine • Believe • Create" emblem.
  * Navigation Links: Products & Solutions, 3D Box Studio, Instant RFQ Calculator, Factory & Infrastructure, About Us, Contact.
  * Primary Action: `[ Get Instant Quote ]` (smooth scrolls to RFQ engine) and `[ WhatsApp Us ]`.

### 3.2 Hero Section
* Dynamic headline: *"Engineered Packaging & Premium Offset Printing That Protects and Elevates Your Brand."*
* Sub-headline: Custom Duplex Mono-Cartons, Corrugated Master Boxes & High-Precision Print Finishes manufactured at our Okhla Industrial Facility.
* Dual CTA: `[ Open 3D Box Studio ]` and `[ Calculate Bulk Price ]`.
* Key Statistics Banner:
  * **50,000+** Daily Box Output Capacity
  * **300 to 450 GSM** High-Grade Duplex Boards
  * **3-Ply, 5-Ply & 7-Ply** Heavy-Duty Corrugated Cartons
  * **100% In-House** Die-Cutting, UV & Lamination

### 3.3 Interactive 3D Packaging Studio
* **Viewport**: 360° orbital view, mouse/touch rotation, zoom controls, and realistic ambient & directional lighting.
* **Interactive Flap Animation**: "Open / Close Box" button triggers a smooth Three.js rotational hinge animation of top and bottom flaps.
* **Box Styles**:
  1. *Tuck-End Duplex Carton* (Pharmaceuticals, Ortho, Cosmetics)
  2. *Corrugated Master Box (RSC)* (Shipping, Logistics, Heavy Goods)
  3. *E-Commerce Self-Locking Mailer* (Subscription, Apparel, Gadgets)
  4. *Two-Piece Rigid Box* (Luxury Gifts, Electronics, Perfumes)
* **Real-time Dimension Controls**:
  * Length (L), Width (W), Height (H) sliders with millimeter (mm) and inch (in) toggles.
  * 3D procedural mesh morphs instantly to match exact aspect ratios.
* **Material & Finish Simulator**:
  * Materials: Coated White Duplex, Natural Brown Kraft, Luxury Matte Charcoal, Bleached White Corrugated.
  * Value-Add Finishes: Spot UV Gloss, Gold Hot Foil Stamping, Matte Velvet Lamination, Embossed Logo badge.

### 3.4 Live RFQ & WhatsApp Estimator Engine
* Integrates directly with the chosen 3D Box specs.
* User selects: Quantity tier (1,000 / 5,000 / 10,000 / 50,000+ pcs), Print colors (1-Color / 4-Color CMYK / Special Pantone), Special Finishes, and Delivery Pincode.
* Generates instant ballpark estimate breakdown and 1-Click WhatsApp RFQ:
  * Creates a formatted WhatsApp message with dimensions, box style, material, and quantity.
  * Direct deep link opens WhatsApp chat with `+91 9810254955`.

### 3.5 Filterable Product Portfolio
* Tabs: *All, Duplex Boxes, Corrugated Cartons, Die-Cut & Luxury, Offset Printing & Finishes*.
* Detailed Cards with high-resolution imagery, GSM specifications, ideal industry applications (Pharma, Orthopedic goods, Confectionery, E-commerce), and direct `[ Customize in 3D ]` button.

### 3.6 Factory & Manufacturing Infrastructure
* Okhla Industrial Area Phase-I plant showcase:
  * Multi-Color Sheetfed Offset Printing Press
  * Automatic High-Speed Die-Cutting & Creasing Machines
  * Automatic Folder-Gluer Lines
  * Thermal Lamination & Spot UV Coating Facilities
  * Strict QA & Bursting Strength Testing Lab
* Badarpur Registered Office details.

### 3.7 Free Sample Kit Request Modal
* Low-friction form for procurement managers to request a sample box kit containing paper swatch grades, flute calipers, and finish samples.

### 3.8 Contact, Map & Footer
* Dual location cards (Okhla Plant + Badarpur Office).
* Interactive Google Maps embedded view.
* Quick inquiry submission form.
* Complete footer with legal information, GSTIN number, quick links, and copyright.

---

## 4. GitHub Pages Deployment Configuration

* `vite.config.js`: Configured with `base: './'` for asset path independence.
* `.github/workflows/deploy.yml`: Automated GitHub Actions pipeline targeting `gh-pages` branch.
* Production build output optimized with zero external runtime server dependencies.
