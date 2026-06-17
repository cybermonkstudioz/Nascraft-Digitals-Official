import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

/**
 * Portfolio Page
 * Showcase of completed projects and case studies
 * Design: Grid layout with project cards, hover effects, red accents
 */

import { useSEO } from "@/hooks/useSEO";

export default function Portfolio() {
  useSEO(
    "Nascraft Digitals | Case Studies & Creative Work",
    "Explore our portfolio of high-performance websites, custom web applications, digital designs, and cinematic media campaigns."
  );

  const projects = [
    {
      id: 1,
      title: "NutriIntern",
      category: "Software System",
      description: "NutriIntern is an AI-powered clinical dietetics learning platform that uses real patient cases, interactive activities, and personalized feedback to prepare nutrition students for ward-based practice.",
      image: "/nutriintern.webp",
      tags: ["React", "TypeScript", "Tailwind", "MongoDB"]
    },
    {
      id: 2,
      title: "VarahiAstro Trip Planner",
      category: "Web App",
      description: "VarahiAstro TripPlanner is an AI-powered pilgrimage planning platform that creates personalized temple pariharam travel itineraries, including temple visits, accommodation, food, transportation, and estimated expenses.",
      image: "/varahiastro.webp",
      tags: ["React", "Framer Motion", "Express API"]
    },
    {
      id: 3,
      title: "CarRental Pro",
      category: "Web App",
      description: "CarRental Pro is a smart vehicle booking platform that enables users to rent cars for hourly, daily, and trip-based travel with both self-drive and chauffeur-driven options. From everyday commuting to premium travel experiences, users can seamlessly browse, compare, and book standard, luxury, and high-end vehicles through a streamlined digital experience.",
      image: "/carrental.webp",
      tags: ["React", "TypeScript", "Tailwind CSS", "MongoDB"]
    },
    {
      id: 4,
      title: "BillFlow",
      category: "Web App",
      description: "BillFlow is a digital billing and invoicing platform designed to simplify business operations through fast and accurate document generation. Users can create, manage, print, and download professional invoices, bills, and cost estimations in PDF format, helping businesses streamline their financial workflows and maintain organized records.",
      image: "/billflow.webp",
      tags: ["React", "TypeScript", "Tailwind CSS"]
    },
    {
      id: 5,
      title: "SpherePulse",
      category: "Web App",
      description: "SpherePulse is a comprehensive employee and team management platform that simplifies workforce operations through attendance tracking, task assignments, project management, performance analytics, leave management, and real-time team insights. Designed for modern agencies and businesses, it provides leaders with complete visibility into team productivity while helping employees stay organized and accountable.",
      image: "/spherepulse.webp",
      tags: ["Next", "TypeScript", "Tailwind CSS", "MongoDB"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Portfolio
          </h1>
          <p className="text-lg text-primary font-medium max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped brands transform their digital presence.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <h3 className="font-playfair text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Tech Stack Tags */}
                    {project.tags && (
                      <div className="flex gap-1.5 flex-wrap">
                        {project.tags.map((tag, tagIdx) => (
                          <span key={tagIdx} className="text-[10px] font-mono font-semibold px-2 py-0.5 bg-slate-100 rounded text-slate-650">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all cursor-pointer">
                      View Case Study
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Your Next <span className="text-primary">Success Story</span> Could Start Here.
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
            Every project begins with a vision. Together, let's transform yours into an experience that creates value, builds trust, and leaves a lasting impact.
          </p>
          <Link href="/contact">
            <a>
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto flex items-center gap-2 mx-auto transition-all duration-200 hover:shadow-lg active:scale-95">
                Let's Build It Together
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
