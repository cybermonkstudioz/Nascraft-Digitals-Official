import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { build } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PROJECT_ROOT = path.resolve(__dirname, "..");
const DIST_DIR = path.resolve(PROJECT_ROOT, "dist/public");
const SSR_DIR = path.resolve(PROJECT_ROOT, "dist/ssr");

const routes = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about/index.html" },
  { path: "/services", file: "services/index.html" },
  { path: "/portfolio", file: "portfolio/index.html" },
  { path: "/academy", file: "academy/index.html" },
  { path: "/booking", file: "booking/index.html" },
  { path: "/contact", file: "contact/index.html" },
];

const seoData: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Nascraft Digitals | Software & Digital Media Agency",
    description: "Nascraft Digitals builds bespoke software, websites, and cinematic media for brands that demand precision engineering and creative excellence.",
  },
  "/services": {
    title: "Nascraft Digitals | Custom Software & Media Services",
    description: "Explore our custom digital services including software development, UI/UX design, videography, branding, and high-impact media production.",
  },
  "/portfolio": {
    title: "Nascraft Digitals | Case Studies & Creative Work",
    description: "Explore our portfolio of high-performance websites, custom web applications, digital designs, and cinematic media campaigns.",
  },
  "/about": {
    title: "Nascraft Digitals | Our Philosophy & Team",
    description: "Learn about our agency philosophy of craftsmanship, growth, and partnership. Meet our core team driving digital innovation.",
  },
  "/academy": {
    title: "Nascraft Digitals | Learn Software & Media Creation",
    description: "Gain practical skills in coding, design, and media production through portfolio-driven learning and industry-aligned training programs.",
  },
  "/booking": {
    title: "Nascraft Digitals | Start Your Project With Us",
    description: "Have something you've been wanting to build? Share your ideas and book a consultation with our digital product engineering team.",
  },
  "/contact": {
    title: "Nascraft Digitals | Contact Our Team",
    description: "Get in touch with Nascraft Digitals to request a quote, partner with us, or discuss your software development and media project goals.",
  },
};

const commonSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nascraft-digitals.pages.dev/#organization",
  "name": "Nascraft Digitals",
  "url": "https://nascraft-digitals.pages.dev",
  "logo": "https://nascraft-digitals.pages.dev/favicon.png",
  "image": "https://nascraft-digitals.pages.dev/og-image.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-63696-18775",
    "contactType": "customer support",
    "email": "contatcnas@gmail.com",
    "availableLanguage": ["English", "Tamil"]
  },
  "sameAs": [
    "https://www.linkedin.com/company/nascraft-digitals",
    "https://www.instagram.com/nascraft_digitals"
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "provider": {
    "@type": "Organization",
    "name": "Nascraft Digitals",
    "url": "https://nascraft-digitals.pages.dev"
  },
  "serviceType": "Software Development & Digital Media Production",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Nascraft Digitals Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Custom Software Development",
          "description": "High-performance web applications, server APIs, and bespoke software systems built using React, TypeScript, and Node.js."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Digital Design & Media Production",
          "description": "Stunning graphic interface design, branding guidelines, and professional video editing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Production Shoots",
          "description": "Cinematic corporate shoots, product photography, event media coverages, and social campaigns."
        }
      }
    ]
  }
};

async function prerender() {
  console.log("Compiling server-side entry point for prerendering...");
  
  // Build the SSR bundle for entry-server
  await build({
    configFile: path.resolve(PROJECT_ROOT, "vite.config.ts"),
    build: {
      ssr: true,
      outDir: SSR_DIR,
      rollupOptions: {
        input: path.resolve(PROJECT_ROOT, "client/src/entry-server.tsx"),
      },
      minify: false,
      emptyOutDir: true,
    },
  });

  const entryServerPath = path.resolve(SSR_DIR, "entry-server.js");
  
  if (!fs.existsSync(entryServerPath)) {
    throw new Error(`Compiled entry-server.js not found at: ${entryServerPath}`);
  }

  // Import the SSR bundle
  const { render } = await import(`file://${entryServerPath}`);
  
  // Read template HTML from the standard build
  const templatePath = path.resolve(DIST_DIR, "index.html");
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client build index.html not found at: ${templatePath}`);
  }
  const template = fs.readFileSync(templatePath, "utf-8");

  console.log("Prerendering pages...");
  
  for (const route of routes) {
    const seo = seoData[route.path] || seoData["/"];
    const canonical = `https://nascraft-digitals.pages.dev${route.path === "/" ? "" : route.path}`;
    const ogImage = "https://nascraft-digitals.pages.dev/og-image.png";

    // Build the specific JSON-LD schema
    const schema = route.path === "/services" 
      ? [commonSchema, serviceSchema] 
      : commonSchema;
      
    // Render the React markup
    console.log(`Rendering route: ${route.path}`);
    const appHtml = render(route.path);

    // Replace placeholders in the HTML
    let html = template
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replaceAll("__SEO_TITLE__", seo.title)
      .replaceAll("__SEO_DESCRIPTION__", seo.description)
      .replaceAll("__SEO_CANONICAL__", canonical)
      .replaceAll("__SEO_OG_IMAGE__", ogImage)
      .replaceAll("__SEO_SCHEMA__", JSON.stringify(schema));

    // Determine output file path
    const outputPath = path.resolve(DIST_DIR, route.file);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, html, "utf-8");
    console.log(`Wrote pre-rendered HTML to: ${outputPath}`);
  }

  // Cleanup the temporary ssr folder
  console.log("Cleaning up temporary SSR files...");
  fs.rmSync(SSR_DIR, { recursive: true, force: true });
  
  console.log("Prerendering completed successfully!");
}

prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
