import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Check, Search, Compass, Cpu, Rocket, ChevronRight } from "lucide-react";

/**
 * Services Page
 * Detailed breakdown of all services offered by NAS Craft Digitals
 * Design: Alternating layout with images and content, red accent highlights
 */

import { useSEO } from "@/hooks/useSEO";

export default function Services() {
  useSEO(
    "Nascraft Digitals | Custom Software & Media Services",
    "Explore our custom digital services including software development, UI/UX design, videography, branding, and high-impact media production."
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="relative pt-16 pb-10 md:pt-20 md:pb-12 bg-white border-b border-border overflow-hidden">
        {/* Background Watermark Dragon Logo */}
        <div className="dragon-bg"></div>
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-foreground mb-4">
            Our Services
          </h1>
          <p className="text-lg text-primary font-medium max-w-5xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and drive measurable business results.
          </p>
        </div>
      </section>

      {/* Service 1: Software Development */}
      <section id="software-development" className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image (Top on mobile, Right on desktop) */}
            <div className="relative max-w-lg mx-auto w-full lg:order-2">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/25 to-transparent rounded-2xl blur-lg pointer-events-none opacity-60"></div>
              <img
                src="/services-software-development.webp"
                alt="Software Development"
                className="w-full h-[360px] object-cover rounded-xl shadow-2xl border border-white/10 relative z-10"
              />
            </div>

            {/* Text Content (Bottom on mobile, Left on desktop) */}
            <div className="space-y-6 lg:order-1 mt-8 lg:mt-0">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Software Development
              </h2>
              <p className="text-lg text-primary font-medium leading-relaxed">
                We build robust, scalable software solutions that power modern businesses. From concept to deployment, we handle every aspect of development with precision and expertise.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Web Applications</h4>
                    <p className="text-secondary text-sm">
                      Custom web apps built with modern frameworks and best practices for performance and user experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Mobile Applications</h4>
                    <p className="text-secondary text-sm">
                      Native and cross-platform mobile apps that deliver seamless experiences on iOS and Android.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">API Development</h4>
                    <p className="text-secondary text-sm">
                      Powerful backend APIs that integrate seamlessly with your existing systems and third-party services.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95">
                <Link href="/contact">
                  Let's Build Your Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary to-transparent"></div>

      {/* Service 2: Digital Media */}
      <section id="digital-media" className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2 relative max-w-lg mx-auto w-full">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/25 to-transparent rounded-2xl blur-lg pointer-events-none opacity-60"></div>
              <img
                src="/services-digital-media.webp"
                alt="Digital Media"
                className="w-full h-[360px] object-cover rounded-xl shadow-2xl border border-white/10 relative z-10"
                loading="lazy"
              />
            </div>

            <div className="space-y-6 lg:order-1 mt-8 lg:mt-0">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Digital Media
              </h2>
              <p className="text-lg text-primary font-medium leading-relaxed">
                Captivating visual content that tells your brand's story. Our creative team transforms ideas into stunning media that engages and inspires your audience.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Video Editing</h4>
                    <p className="text-secondary text-sm">
                      Professional video editing with color grading, motion graphics, and cinematic effects.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Graphic Design</h4>
                    <p className="text-secondary text-sm">
                      Custom graphics, branding materials, and visual assets that elevate your brand identity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Photo Editing</h4>
                    <p className="text-secondary text-sm">
                      Professional photo retouching, enhancement, and manipulation to showcase your products and services.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95">
                <Link href="/contact">
                  Elevate Your Brand
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Accent Line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-primary to-primary"></div>

      {/* Service 3: Production Shoots */}
      <section id="production-shoots" className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image (Top on mobile, Right on desktop) */}
            <div className="relative max-w-lg mx-auto w-full lg:order-2">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/25 to-transparent rounded-2xl blur-lg pointer-events-none opacity-60"></div>
              <img
                src="/services-production-shoots.webp"
                alt="Production Shoots"
                className="w-full h-[360px] object-cover rounded-xl shadow-2xl border border-white/10 relative z-10"
                loading="lazy"
              />
            </div>

            {/* Text Content (Bottom on mobile, Left on desktop) */}
            <div className="space-y-6 lg:order-1 mt-8 lg:mt-0">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Production Shoots
              </h2>
              <p className="text-lg text-primary font-medium leading-relaxed">
                Professional photography and videography that captures the essence of your brand. From concept to final delivery, we handle every detail with cinematic precision.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Product Photography</h4>
                    <p className="text-secondary text-sm">
                      High-quality product shots that showcase your offerings in the best possible light.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Corporate Videography</h4>
                    <p className="text-secondary text-sm">
                      Professional videos for corporate events, testimonials, and brand storytelling.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Event Coverage</h4>
                    <p className="text-secondary text-sm">
                      Comprehensive photography and videography for conferences, launches, and special events.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95">
                <Link href="/contact">
                  Bring Your Story to Screen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-slate-950 text-white relative overflow-hidden">
        {/* Background glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Methodology</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
              A proven, step-by-step system engineered to translate complex ideas into clean, functional digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We understand your vision, goals, target audience, and engineering requirements.",
                icon: Search
              },
              {
                step: "02",
                title: "Strategy",
                desc: "We develop a comprehensive product blueprint and architectural plan tailored to your scale.",
                icon: Compass
              },
              {
                step: "03",
                title: "Execution",
                desc: "We translate specifications into code and design assets with strict precision and quality control.",
                icon: Cpu
              },
              {
                step: "04",
                title: "Delivery",
                desc: "We test thoroughly, launch seamlessly, and provide ongoing optimization and platform scaling.",
                icon: Rocket
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative group">
                  {/* Card wrapper */}
                  <div className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col items-center text-center space-y-4 hover:border-primary/45 hover:bg-white/[0.05] transition-all duration-300 relative z-10 h-full hover:-translate-y-1 hover:shadow-[0_12px_30px_-10px_rgba(196,30,58,0.25)]">
                    {/* Icon container */}
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:scale-105 group-hover:bg-primary group-hover:text-white transition-all duration-300 mt-2">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="font-playfair text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 pt-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Flow Arrow (Desktop) */}
                  {idx < 3 && (
                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 -right-6 items-center justify-center z-20 text-white/20 group-hover:text-primary transition-colors duration-300">
                      <ChevronRight className="w-8 h-8 animate-pulse" />
                    </div>
                  )}

                  {/* Flow Arrow (Mobile) */}
                  {idx < 3 && (
                    <div className="lg:hidden flex justify-center py-4 text-white/20">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-white/10 to-primary/45"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Have an Idea Worth Building?
          </h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-8">
            Whether you're launching a product, growing your brand, or telling your story through visuals, we're here to help turn your vision into something meaningful, impactful, and built to last.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 h-auto inline-flex items-center gap-2 mx-auto transition-all duration-200 hover:shadow-lg active:scale-95">
            <Link href="/contact">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
