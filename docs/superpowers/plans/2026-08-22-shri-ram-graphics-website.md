# Shri Ram Graphics Web Platform Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a modern, interactive, high-converting commercial web platform for Shri Ram Graphics (New Delhi) with a live 3D procedural box customizer, RFQ estimator with 1-click WhatsApp quote generator, filterable B2B product catalog, factory infrastructure credentials, and GitHub Pages deployment configuration.

**Architecture:** Single Page Application built on React 18, Vite, Tailwind CSS, and Three.js for procedural 3D box rendering. Configured with relative asset resolution (`base: './'`) for standalone GitHub Pages hosting.

**Tech Stack:** React 18, Vite, Tailwind CSS, Three.js, Lucide React, Vitest.

**Spec:** `docs/superpowers/specs/2026-08-22-shri-ram-graphics-website-design.md`

## Global Constraints
- Company Name: `Shri Ram Graphics`
- Tagline: `Imagine • Believe • Create`
- Factory Address: `A-1/1, Okhla Industrial Area, Phase-I, New Delhi - 110020`
- Registered Office: `Building No.-7, GF, Street No.-26C1, Molarband Extn., Badarpur, New Delhi - 110044`
- Direct WhatsApp / Phone: `+91-9810254955`
- Secondary Phone: `+91-9716373323`
- Email: `shriramgraphics.rp@gmail.com`
- GSTIN: `07IWWPD8374Q1Z5`
- Deployment: GitHub Pages ready (`base: './'` in `vite.config.js`)

---

### Task 1: Scaffolding, Tooling & GitHub Pages CI/CD

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `tailwind.config.js`
- Create: `postcss.config.js`
- Create: `index.html`
- Create: `.github/workflows/deploy.yml`

**Interfaces:**
- Consumes: None
- Produces: Project build & test runtime (`npm run dev`, `npm run build`, `npm run test`)

- [ ] **Step 1: Create package.json with dependencies**
- [ ] **Step 2: Configure Vite with `base: './'` and Tailwind CSS**
- [ ] **Step 3: Create index.html with SEO metadata and Google Fonts (Outfit & Plus Jakarta Sans)**
- [ ] **Step 4: Create automated GitHub Actions deploy workflow**
- [ ] **Step 5: Run `npm install` and verify development environment**

---

### Task 2: Core Data Stores & Utilities (TDD)

**Files:**
- Create: `src/data/companyInfo.js`
- Create: `src/data/products.js`
- Create: `src/data/machinery.js`
- Create: `src/data/faqs.js`
- Create: `src/utils/priceCalculator.js`
- Create: `src/utils/whatsappFormatter.js`
- Test: `tests/priceCalculator.test.js`
- Test: `tests/whatsappFormatter.test.js`

**Interfaces:**
- Consumes: None
- Produces:
  - `calculateBoxEstimate({ length, width, height, unit, boxType, gsm, quantity, colors, finishes })`
  - `generateWhatsAppRFQUrl({ boxType, dimensions, material, quantity, finishes, notes })`
  - `companyInfo`, `productsData`, `machineryData`, `faqsData`

- [ ] **Step 1: Write failing tests for price calculation and WhatsApp message builder**
- [ ] **Step 2: Run tests and verify failure**
- [ ] **Step 3: Implement data modules, `priceCalculator.js` and `whatsappFormatter.js`**
- [ ] **Step 4: Run tests to verify they pass**

---

### Task 3: Interactive 3D Packaging Studio (Three.js WebGL)

**Files:**
- Create: `src/components/customizer/Box3DViewer.jsx`
- Create: `src/components/customizer/CustomizerControls.jsx`
- Create: `src/components/customizer/PackagingStudio.jsx`

**Interfaces:**
- Consumes: `companyInfo.js`, Box styles and materials
- Produces: `<PackagingStudio onSyncToRFQ={(specs) => void} />`

- [ ] **Step 1: Implement `Box3DViewer.jsx` with Three.js scene, lighting, procedural box mesh, flap rotation hinges, and OrbitControls**
- [ ] **Step 2: Implement `CustomizerControls.jsx` with L×W×H sliders (mm/inch), box type picker, material swatches, and finish toggles**
- [ ] **Step 3: Implement `PackagingStudio.jsx` combining 3D canvas and controls with live state and "Open Flap" animation**

---

### Task 4: Live RFQ Estimator & 1-Click WhatsApp Quote Engine

**Files:**
- Create: `src/components/rfq/RFQCalculator.jsx`

**Interfaces:**
- Consumes: `priceCalculator.js`, `whatsappFormatter.js`, `companyInfo.js`
- Produces: `<RFQCalculator customizerSpecs={specs} />`

- [ ] **Step 1: Implement dimension & specification synchronization from 3D studio**
- [ ] **Step 2: Add quantity bracket selectors (1k, 5k, 10k, 25k, 50k+ pcs), print color options, and special finish checkboxes**
- [ ] **Step 3: Implement real-time estimated rate display with breakdown**
- [ ] **Step 4: Connect 1-click `[ Send via WhatsApp ]` button to open WhatsApp chat with `+91 9810254955`**

---

### Task 5: TopBar, Navigation, Hero & Brand Credibility

**Files:**
- Create: `src/components/layout/TopBar.jsx`
- Create: `src/components/layout/Navbar.jsx`
- Create: `src/components/hero/HeroSection.jsx`
- Create: `src/components/shared/StatCard.jsx`

**Interfaces:**
- Consumes: `companyInfo.js`
- Produces: Header and Hero components

- [ ] **Step 1: Implement `TopBar.jsx` with factory live status, GSTIN badge (`07IWWPD8374Q1Z5`), and hotline**
- [ ] **Step 2: Implement `Navbar.jsx` with sticky scrolling, mobile menu drawer, and logo**
- [ ] **Step 3: Implement `HeroSection.jsx` with value propositions, metrics banner, and dual CTA buttons**

---

### Task 6: Filterable Product Catalog, Factory Infrastructure & FAQs

**Files:**
- Create: `src/components/products/ProductCatalog.jsx`
- Create: `src/components/products/ProductCard.jsx`
- Create: `src/components/factory/FactoryTour.jsx`
- Create: `src/components/factory/QualityBadges.jsx`
- Create: `src/components/faqs/PackagingGuide.jsx`

**Interfaces:**
- Consumes: `products.js`, `machinery.js`, `faqs.js`
- Produces: Product catalog and Factory showcase sections

- [ ] **Step 1: Implement filterable `ProductCatalog.jsx` (Duplex, Corrugated, Die-Cut, Printing) with `[ Customize in 3D ]` hook**
- [ ] **Step 2: Implement `FactoryTour.jsx` highlighting Okhla Phase-I offset press and finishing machinery**
- [ ] **Step 3: Implement `QualityBadges.jsx` and `PackagingGuide.jsx` with B2B carton specifications and FAQs**

---

### Task 7: Sample Kit Request Modal, Contact Section & Footer

**Files:**
- Create: `src/components/modals/SampleKitModal.jsx`
- Create: `src/components/modals/QuickContactModal.jsx`
- Create: `src/components/layout/Footer.jsx`
- Create: `src/App.jsx`
- Create: `src/main.jsx`
- Create: `src/index.css`

**Interfaces:**
- Consumes: All components
- Produces: Full working Single Page Application

- [ ] **Step 1: Implement `SampleKitModal.jsx` multi-step swatch kit request form**
- [ ] **Step 2: Implement `Footer.jsx` with dual locations (Okhla Plant & Badarpur Office), interactive map, and floating WhatsApp launcher**
- [ ] **Step 3: Wire everything in `App.jsx` with smooth modal coordination and scroll navigation**

---

### Task 8: Verification, Test Execution & GitHub Pages Build

**Files:**
- Test: All tests in `tests/`
- Build: `dist/`

- [ ] **Step 1: Run `npm run test` to verify all utility tests pass**
- [ ] **Step 2: Run `npm run build` to verify clean production static build**
- [ ] **Step 3: Verify responsive layout and interactive 3D performance**
