# 📦 Shri Ram Graphics

> **"Imagine • Believe • Create"**  
> *Creative Designs & Quality Offset Printing Works | Manufacturers of Duplex & Corrugated Boxes*

[![Deploy to GitHub Pages](https://github.com/deepak7mahto/shri-ram-graphics/actions/workflows/deploy.yml/badge.svg)](https://github.com/deepak7mahto/shri-ram-graphics/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/Live-Demo-emerald?style=flat&logo=github)](https://deepak7mahto.github.io/shri-ram-graphics/)
[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-purple?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwindcss)](https://tailwindcss.com/)

---

## 🌐 Live Website

🔗 **Production URL**: [https://deepak7mahto.github.io/shri-ram-graphics/](https://deepak7mahto.github.io/shri-ram-graphics/)

---

## 🏢 About Shri Ram Graphics

**Shri Ram Graphics** is an end-to-end packaging and commercial printing enterprise based in South Delhi, India. We specialize in custom-designed **Duplex Boxes (Mono-Cartons)** and **Heavy-Duty Corrugated Master Cartons**, backed by in-house multi-color sheetfed offset presses and premium surface embellishments.

### 🏛️ Official Credentials
* **Registered Office**: `Building No.-7, GF, Street No.-26C1, Molarband Extn., Badarpur, New Delhi - 110044`
* **GSTIN**: `07IWWPD8374Q1Z5`
* **Jurisdiction**: Delhi (State Code: 07)
* **Phone / WhatsApp**: `+91-9810254955` / `+91-9716373323`
* **Email**: `shriramgraphics.rp@gmail.com`

---

## 🎯 Core Capabilities & Product Offerings

### 1. Duplex Boxes (Mono-Cartons - HSN 48192020)
* **Orthopedic & Healthcare Packaging**: Custom folding duplex cartons for *Wrist Binders*, *Knee Supports*, *Cervical Collars*, *Lumbar Belts*, and *Traction Kits*.
* **Pharmaceutical & Medical Device Cartons**: High-definition micro-text, high-density barcode legibility, and regulatory compliance.
* **Paperboard Grades**: 300 – 450 GSM White Duplex Board / Cyber XL / FBB.
* **Structural Formats**: Reverse-tuck, straight-tuck, and auto crash-lock bottoms.

### 2. Corrugated Boxes (Master Shipping Cartons)
* **3-Ply Corrugated Packaging Boxes**: Lightweight & sturdy fluted boxes for transit and retail protection.
* **5-Ply Heavy-Duty Master Cartons**: High-burst strength (18–32 BF) double-wall fluted boxes for bulk storage and export shipping.
* **Flute Profiles**: A, B, C, and E Flute options with stitched or heavy industrial glued joints.

### 3. Quality Offset Printing & Surface Finishes
* **Multi-Color Commercial Offset Presses**: Sheetfed CMYK and Pantone color reproduction up to 28×40 inch sheet sizes.
* **Thermal BOPP Lamination**: Velvet Soft-Touch, Scuff-Free Matte, and High-Gloss moisture barrier films.
* **Spot UV & Drip-Off Varnish**: High-gloss selective UV highlights and tactile textured contrast.
* **Metallic Hot Foil Stamping**: Rich Gold, Silver, Rose Gold, and Holographic anti-counterfeit foils.
* **3D Embossing & Debossing**: Raised tactile textures and compliant Braille embossing.
* **Precision Auto Die-Punching**: ±0.2mm tolerance cutting with crack-free spine creasing.

---

## ✨ Web App Key Features

* 🎨 **Dual Brand Theme Switcher**: 1-click toggle between **Luxury Gold Prestige** and **Crimson Red & Royal Blue** matching the official brand logos.
* 📱 **Mobile-First Responsive Layout**: Optimized header, navigation drawer, and cards designed for effortless viewing on all devices.
* 💬 **Deep WhatsApp Integration**: Dynamic 1-click quotation links that pre-populate inquiries with client specifications directly to `+91 9810254955`.
* ⚡ **Ultra-Fast Performance**: Built on Vite 5 with manual chunking and zero external heavy dependencies for instant page loads.
* 🚀 **Zero-Config GitHub Pages CI/CD**: Automated deployment workflow triggering on every push to the `main` branch.

---

## 🛠️ Tech Stack

* **Frontend Framework**: [React 18](https://react.dev/)
* **Build Tool**: [Vite 5](https://vitejs.dev/)
* **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Typography**: Plus Jakarta Sans & Outfit (Google Fonts)
* **Unit Testing**: [Vitest](https://vitest.dev/)
* **CI/CD & Hosting**: GitHub Actions & GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v18.0.0 or higher)
* `npm` (comes with Node.js)

### Installation
```bash
# Clone repository
git clone https://github.com/deepak7mahto/shri-ram-graphics.git

# Navigate into project directory
cd shri-ram-graphics

# Install dependencies
npm install
```

### Local Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Tests
```bash
npm test
```

### Build for Production
```bash
npm run build
```
Production artifacts will be generated in the `dist/` directory.

---

## 📂 Project Structure

```
shri-ram-graphics/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages CI/CD workflow
├── public/
│   └── assets/
│       ├── logo-gold.png       # Luxury Gold Emblem Logo
│       └── logo-redblue.png    # Red & Blue Brand Crest Logo
├── src/
│   ├── components/
│   │   ├── hero/
│   │   │   └── HeroSection.jsx
│   │   ├── layout/
│   │   │   ├── TopBar.jsx      # Top credentials & registered office bar
│   │   │   ├── Navbar.jsx      # Sticky nav with logo & theme toggle
│   │   │   └── Footer.jsx      # Footer with credentials & legal notice
│   │   └── sections/
│   │       ├── BoxesManufacturingSection.jsx  # Duplex & Corrugated products
│   │       ├── OffsetPrintingSection.jsx      # Offset presses & finishes
│   │       └── PlantAndContactSection.jsx     # Registered office & RFQ form
│   ├── data/
│   │   ├── companyInfo.js      # Business info, GSTIN, and contacts
│   │   └── products.js         # Box packaging specifications
│   ├── utils/
│   │   ├── priceCalculator.js
│   │   └── whatsappFormatter.js
│   ├── App.jsx                 # Main application root
│   ├── index.css               # Tailwind CSS & custom typography
│   └── main.jsx
├── tests/                      # Vitest test suites
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 📄 License & Terms

All business operations, transactions, and quotations by **Shri Ram Graphics** are subject to Delhi Jurisdiction.  
© 2026 **Shri Ram Graphics**. All rights reserved.
