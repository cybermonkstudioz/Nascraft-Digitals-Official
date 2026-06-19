import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroVisual from "@/components/HeroVisual";
import { 
  ArrowRight, 
  Code2, 
  Palette, 
  Camera, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  Quote, 
  ExternalLink,
  Sparkles,
  Zap,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO(
    "Nascraft Digitals | Software & Digital Media Agency",
    "Nascraft Digitals builds bespoke software, websites, and cinematic media for brands that demand precision engineering and creative excellence."
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">

        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                  <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                  <span className="font-semibold text-xs tracking-wider uppercase">
                    Premium Digital Agency
                  </span>
                </div>
                <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight">
                  Crafting Digital <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-red-600 to-primary/80">
                    Excellence
                  </span>
                </h1>
              </div>

              <p className="text-lg text-secondary max-w-lg leading-relaxed">
                We design and build bespoke, high-performance software systems and cinematic digital media for brands that refuse to compromise on quality. Fusing precision engineering with creative mastery.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-[0_10px_20px_-10px_rgba(196,30,58,0.5)] active:scale-95">
                  <Link href="/services">
                    Discover What We Build
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-8 py-3.5 h-auto transition-all duration-200 active:scale-95"
                >
                  <Link href="/contact">
                    Ready to Bring It to Life?
                  </Link>
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/80 max-w-md">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">20+</div>
                  <p className="text-xs text-secondary/80 font-medium uppercase tracking-wider mt-1">Projects Done</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">15+</div>
                  <p className="text-xs text-secondary/80 font-medium uppercase tracking-wider mt-1">Happy Clients</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary tracking-tight">2+</div>
                  <p className="text-xs text-secondary/80 font-medium uppercase tracking-wider mt-1">Years Active</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual Component */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:block relative"
            >
              <HeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Thin Red Accent Divider */}
      <div className="h-[2px] bg-gradient-to-r from-primary via-primary to-transparent opacity-50"></div>

      {/* Core Principles / Why Us Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-stretch">
            <div className="lg:col-span-1 flex flex-col justify-center space-y-6">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Our DNA</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Designed for Absolute Precision.
              </h2>
              <p className="text-secondary leading-relaxed">
                At Nascraft Digitals, we reject template-based cookie-cutter solutions. We construct custom architectures designed to scale, optimized for performance, and aligned with aesthetic excellence.
              </p>
              <div className="pt-2">
                <Link href="/about" className="inline-flex items-center text-primary font-bold text-sm hover:gap-2 transition-all">
                  Learn about our philosophy
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="dna-card group p-8 bg-background border border-border/60 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="dna-card-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <h3 className="dna-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Custom Engineering</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Custom web & mobile architectures engineered with clean code paradigms (React, TypeScript, Node). No bloat, pure speed.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-4">
                  <CheckCircle2 className="w-4 h-4" /> 100% Performance Optimized
                </div>
              </div>

              {/* Card 2 */}
              <div className="dna-card group p-8 bg-background border border-border/60 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="dna-card-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Palette className="w-6 h-6" />
                  </div>
                  <h3 className="dna-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Aesthetic Sophistication</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Visual experiences designed to captivate and establish digital authority. Clean grid structures, micro-interactions, and premium layouts.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-4">
                  <CheckCircle2 className="w-4 h-4" /> Premium User Interfaces
                </div>
              </div>

              {/* Card 3 */}
              <div className="dna-card group p-8 bg-background border border-border/60 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="dna-card-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Camera className="w-6 h-6" />
                  </div>
                  <h3 className="dna-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Cinematic Digital Media</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Professional, state-of-the-art video editing, motion graphics, and content shoots tailored for high-impact social campaigns and corporate stories.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-4">
                  <CheckCircle2 className="w-4 h-4" /> High-End Media Assets
                </div>
              </div>

              {/* Card 4 */}
              <div className="dna-card group p-8 bg-background border border-border/60 rounded-xl space-y-4 hover:border-primary/40 hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 cursor-pointer flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="dna-card-icon w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="dna-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Scale & Security</h3>
                  <p className="text-secondary text-sm leading-relaxed">
                    Every digital platform we build incorporates industry-standard security protocols and is engineered to scale from initial prototype to millions of active nodes.
                  </p>
                </div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold pt-4">
                  <CheckCircle2 className="w-4 h-4" /> Secure & Scalable Architecture
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Capabilities</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              What We Craft
            </h2>
            <p className="text-lg text-primary font-medium max-w-none mx-auto leading-relaxed whitespace-nowrap">
              Tailored services engineered for modern platforms, digital branding, and brand scaling.
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="hover-card group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/40 cursor-pointer flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/software-engineering.webp"
                  alt="Software Engineering"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Code2 className="w-5.5 h-5.5 text-primary" />
                    <h3 className="hover-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Software Development</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    High-performance web applications, server APIs, cloud platforms, and custom software systems designed to run seamlessly.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-1.5 transition-all pt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="hover-card group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/40 cursor-pointer flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/digital-design.webp"
                  alt="Digital Design & Media"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Palette className="w-5.5 h-5.5 text-primary" />
                    <h3 className="hover-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Digital Design & Media</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    Stunning graphic design, interface mockups, cinematic video edits, and branding materials to set you apart.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-1.5 transition-all pt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="hover-card group bg-card rounded-xl overflow-hidden shadow-md hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.2)] hover:-translate-y-2 transition-all duration-300 border border-border hover:border-primary/40 cursor-pointer flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/production-shoots.webp"
                  alt="Production Shoots"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <Camera className="w-5.5 h-5.5 text-primary" />
                    <h3 className="hover-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">Production Shoots</h3>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">
                    Professional, high-end photography, cinematic video shoots, corporate profiles, and media production sets.
                  </p>
                </div>
                <Link href="/services" className="inline-flex items-center text-primary font-semibold text-sm group-hover:gap-1.5 transition-all pt-4">
                  Learn More <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects / Portfolio Showcase */}
      <section className="py-20 md:py-32 bg-white relative">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Case Studies</span>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Crafted Masterpieces
              </h2>
              <p className="text-secondary max-w-lg leading-relaxed">
                Take a look at some of the premium systems and visual products built recently.
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Button asChild variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all font-semibold flex items-center gap-2 py-3 px-6 h-auto">
                <Link href="/portfolio">
                  View Portfolio
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="hover-card group relative overflow-hidden rounded-xl border border-border/80 shadow-md hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.25)] hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 cursor-pointer">
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300 z-10"></div>
                <img
                  src="/nutriintern.webp"
                  alt="NutriIntern"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-20 shadow-md">
                  Software System
                </span>
              </div>
              <div className="p-8 bg-white z-20 relative space-y-4">
                <h3 className="hover-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">NutriIntern</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  NutriIntern is an AI-powered clinical dietetics learning platform that uses real patient cases, interactive activities, and personalized feedback to prepare nutrition students for ward-based practice.
                </p>
                <div className="flex gap-2 pt-2">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">React</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">TypeScript</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">Tailwind</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">MongoDB</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="hover-card group relative overflow-hidden rounded-xl border border-border/80 shadow-md hover:shadow-[0_10px_40px_-12px_rgba(196,30,58,0.25)] hover:-translate-y-2 hover:border-primary/40 transition-all duration-300 cursor-pointer">
              <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-300 z-10"></div>
                <img
                  src="/varahiastro.webp"
                  alt="VarahiAstro Trip Planner"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-4 left-4 bg-primary text-white text-[10px] uppercase font-bold tracking-widest px-3 py-1 rounded-full z-20 shadow-md">
                  Web App
                </span>
              </div>
              <div className="p-8 bg-white z-20 relative space-y-4">
                <h3 className="hover-card-title font-playfair text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">VarahiAstro Trip Planner</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  VarahiAstro TripPlanner is an AI-powered pilgrimage planning platform that creates personalized temple pariharam travel itineraries, including temple visits, accommodation, food, transportation, and estimated expenses.
                </p>
                <div className="flex gap-2 pt-2 flex-wrap">
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">React</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">Framer Motion</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 bg-slate-100 rounded text-slate-600">Express API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
        {/* Background glow orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Feedback</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold">
              Where Trust Takes Shape
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Read how we help ambitious businesses achieve structural and brand dominance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="testimonial-card group p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6 cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(196,30,58,0.25)] hover:border-primary/40 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="text-primary transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                  <Quote className="w-10 h-10 opacity-60 fill-primary" />
                </div>
                <p className="text-white/85 text-base italic leading-relaxed text-sm">
                  "Nascraft Digitals brought a rare combination of technical expertise and product thinking to NutriIntern. They quickly grasped the nuances of clinical dietetics education and translated them into a platform that feels intuitive, engaging, and academically sound. The AI-powered evaluation system and case-based learning experience have added tremendous value to our training programs, and the quality of execution exceeded our expectations."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="testimonial-avatar w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm font-playfair border border-primary/45 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/30 group-hover:border-primary/60">
                  SG
                </div>
                <div>
                  <h4 className="testimonial-author font-bold text-sm text-white transition-colors duration-300 group-hover:text-primary">Sruthi G</h4>
                  <p className="text-xs text-white/50">Founder & Clinical Director, NutriIntern</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card group p-8 md:p-10 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-col justify-between space-y-6 cursor-pointer transition-all duration-300 hover:shadow-[0_12px_40px_-12px_rgba(196,30,58,0.25)] hover:border-primary/40 hover:-translate-y-2">
              <div className="space-y-4">
                <div className="text-primary transition-all duration-300 group-hover:scale-105 group-hover:opacity-90">
                  <Quote className="w-10 h-10 opacity-60 fill-primary" />
                </div>
                <p className="text-white/85 text-base italic leading-relaxed text-sm">
                  "Developing VarahiAstro TripPlanner required more than just building software—it required understanding the unique needs of spiritual travelers. Nascraft Digitals delivered a thoughtful and highly reliable solution that seamlessly combines AI-driven planning with practical travel logistics. From itinerary generation to expense estimation and PDF exports, every detail was executed with precision. Their professionalism, responsiveness, and commitment to quality made them an exceptional technology partner."
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="testimonial-avatar w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm font-playfair border border-primary/45 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/30 group-hover:border-primary/60">
                  GK
                </div>
                <div>
                  <h4 className="testimonial-author font-bold text-sm text-white transition-colors duration-300 group-hover:text-primary">Guruji Ganesh Kumar</h4>
                  <p className="text-xs text-white/50">Founder, VarahiAstro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 bg-white border-t border-border">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-bold text-xs uppercase tracking-widest">Questions</span>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Find answers to common questions about our engagement process, technologies, and creative workflows.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-xl px-6 bg-slate-50/50">
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                What core services does Nascraft Digitals offer?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-sm leading-relaxed pb-5 pt-1">
                Nascraft Digitals operates as a multidisciplinary agency providing three core solutions: Custom Software Development (high-performance web/mobile apps, custom learning platforms, APIs, database engineering), Digital Media (cinematic video post-production, motion graphics, branding design, content retouching), and Production Shoots (product photography, event media coverage, and brand storytelling videos).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-xl px-6 bg-slate-50/50">
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                How does your custom software engineering process differ from templates?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-sm leading-relaxed pb-5 pt-1">
                We believe template-based systems generate excessive code bloat, run slowly, and compromise search engine authority. Instead, we engineer custom system architectures using modern, clean stacks like React, TypeScript, Tailwind CSS, Node.js, and MongoDB. Every module is built to perform with near-zero latency, clean semantic grids, and robust security, making sure your platform is ready to scale to millions of hits.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-xl px-6 bg-slate-50/50">
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                Do you provide services for remote or international clients?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-sm leading-relaxed pb-5 pt-1">
                Yes, our engineering and media consulting workflow is built to operate globally. We have served clients across various time zones, utilizing collaborative tools (like Slack, GitHub, and Figma) to provide absolute project transparency. Consultations, check-ins, and milestone updates are conducted via video conferencing to keep stakeholders fully aligned throughout the project timeline.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border rounded-xl px-6 bg-slate-50/50">
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                What is the typical timeline and billing structure for a project?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-sm leading-relaxed pb-5 pt-1">
                Project timelines and rates depend on the scope and complexity. Small-to-medium web projects typically range from 4 to 8 weeks, while enterprise software platforms require longer engagement. We offer milestone-based billing, aligning payments with specific deliverables like architecture planning, initial prototypes, frontend assembly, and final deployment. For creative shoots or monthly content editing, we work on project-based or monthly retainer agreements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border rounded-xl px-6 bg-slate-50/50">
              <AccordionTrigger className="text-base font-bold text-foreground hover:text-primary transition-colors py-5 hover:no-underline">
                How can we get started and book a consultation?
              </AccordionTrigger>
              <AccordionContent className="text-secondary text-sm leading-relaxed pb-5 pt-1">
                Getting started is simple. You can visit our Booking page to select your project category (software, media, or consulting) and specify your goals, timelines, and budgets. Alternatively, reach out directly via email at contatcnas@gmail.com or call our team at +91 63696 18775. We typically reply within 24 business hours to schedule an initial discovery call.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-foreground text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center space-y-8">
          <h2 className="font-playfair text-2xl md:text-4xl lg:text-5xl font-bold max-w-5xl mx-auto leading-tight">
            <span className="text-primary">Behind</span> Every <span className="text-primary">Great Product</span> Is Someone <br /> Who <span className="text-primary">Believed</span> It Could <span className="text-primary">Exist</span>.
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            If you have an idea that keeps you thinking, let's work together to turn it into something real, valuable, and lasting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto inline-flex items-center gap-2 mx-auto transition-all duration-200 hover:shadow-lg active:scale-95">
              <Link href="/contact">
                Let's Build It Together
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
