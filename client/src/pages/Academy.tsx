import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GraduationCap, Award, BookOpen, Briefcase, Calendar, Sparkles, Bell, ArrowRight, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

/**
 * Academy Page
 * Coming Soon page for internships, courses, and workshops
 * Design: High-end hero, program cards, certification trust section, and an interactive launch email subscription form.
 */

export default function Academy() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate local storage list or direct trigger
    toast.success("Thank you! You've been added to our early access list.");
    setSubscribed(true);
    setEmail("");
  };

  const programs = [
    {
      icon: Briefcase,
      title: "Internship Programs",
      tag: "Hybrid / Remote",
      desc: "Gain agency experience through flexible hybrid and remote programs under the guidance of our team. Build real-world capabilities and work on active portfolios.",
      actionText: "Curriculum En Route",
    },
    {
      icon: BookOpen,
      title: "Premium Courses",
      tag: "Self-Paced & Cohort",
      desc: "Structured paths covering Frontend Development, UI/UX Design, Cinematic Video Editing, and Business Strategy. Engineered to build modern competencies.",
      actionText: "Curriculum En Route",
    },
    {
      icon: Calendar,
      title: "Masterclass Workshops",
      tag: "Live Interactive",
      desc: "Immersive, specialized single-day virtual bootcamps covering advanced technologies, creative tools, and workflow systems to rapidly expand your skillset.",
      actionText: "Agendas Vary by Topic",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-white border-b border-border">
        {/* Abstract Background Design Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#C41E3A_1.5px,transparent_1.5px)] [background-size:24px_24px]"></div>
        
        <div className="container max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center">
          {/* Launching Soon High-Visibility Block */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3.5 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border-2 border-primary/25 rounded-2xl px-6 py-3.5 mb-8 shadow-[0_10px_35px_rgba(196,30,58,0.08)] backdrop-blur-sm mx-auto"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            <span className="font-playfair text-lg md:text-xl font-black text-primary tracking-wider uppercase">
              Academy Launching Soon
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight max-w-5xl mx-auto"
          >
            Elevate Your Skills With <span className="text-primary">Nascraft Academy</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Empowering the next generation of creators, developers, and strategists. Gain access to practical training programs, real-world internships, and workshops designed to launch your career.
          </motion.p>

          {/* Email Subscription Form */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-md mx-auto"
          >
            {subscribed ? (
              <div className="flex items-center justify-center gap-2.5 bg-primary/5 border border-primary/10 text-primary font-semibold py-4 px-6 rounded-xl animate-in zoom-in-95 duration-200">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>You're on the early-access list! We'll keep you posted.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="h-12 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200 rounded-xl flex-1"
                />
                <Button 
                  type="submit" 
                  className="h-12 bg-primary hover:bg-primary/90 text-white font-semibold px-6 rounded-xl hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center gap-2 justify-center"
                >
                  Notify Me
                  <Bell className="w-4 h-4" />
                </Button>
              </form>
            )}
            <p className="text-xs text-secondary/60 mt-3 font-medium">Join 200+ students and professionals waiting for early access.</p>
          </motion.div>
        </div>
      </section>

      {/* Trust & Certifications Callout */}
      <section className="py-12 bg-slate-50 border-b border-border">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {/* Government logos container */}
            <div className="flex items-center gap-6 bg-white shadow-sm border border-border/80 rounded-2xl p-4 flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MSME_Logo_India.svg/500px-MSME_Logo_India.svg.png"
                alt="MSME India Logo"
                className="h-16 w-auto object-contain"
              />
              <div className="w-[1px] h-12 bg-slate-200"></div>
              {/* Skill India Simplified Logo Vector Text */}
              <div className="flex flex-col items-start leading-none font-bold">
                <span className="text-orange-500 text-sm tracking-wider uppercase font-black">SKILL</span>
                <span className="text-blue-900 text-lg tracking-widest uppercase font-black">INDIA</span>
                <span className="text-green-600 text-[8px] tracking-wide uppercase font-semibold mt-0.5">Govt. Association</span>
              </div>
            </div>

            <div className="text-left max-w-md space-y-2">
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Globally Recognized Certifications
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                Every course, internship, and workshop comes with an official certificate of completion from **Nascraft Digitals**. Backed by our official affiliations with **Skill India** and **MSME**, our certificates carry global weight and build immediate trust with hiring managers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Programs Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Programs We're Building
            </h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto">
              Curriculums optimized for modern agency environments and creative roles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, idx) => {
              const IconComp = program.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-[0_15px_40px_-15px_rgba(196,30,58,0.18)] hover:-translate-y-2.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Meta */}
                    <div className="space-y-2">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                        {program.tag}
                      </span>
                      <h3 className="font-playfair text-2xl font-bold text-foreground pt-1.5">
                        {program.title}
                      </h3>
                      <p className="text-secondary leading-relaxed text-sm pt-1">
                        {program.desc}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                    <span>{program.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Highlight */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container max-w-5xl mx-auto px-4 text-center space-y-12">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary">
              Why Invest Your Time With Nascraft?
            </h2>
            <p className="text-white/80 text-lg leading-relaxed">
              Many people learn. Few gain the experience needed to stand out. Our courses, internships, and workshops are built to help you apply knowledge, work on real-world challenges, strengthen your portfolio, and develop skills that employers actively look for. Because in today's world, what you can do often matters more than what you can claim.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-4">
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg">Skill India Standards</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Training structures and certification metrics aligned directly with the National Skill Development Corporation guidelines.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg">Govt. MSME Validation</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                As a registered MSME entity, our organizational operations and certificates carry formal government registration credit.
              </p>
            </div>

            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-xl text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mx-auto">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-lg">Agency Endorsed</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Build a portfolio with actual client projects, proving you have both knowledge and deployment capability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
