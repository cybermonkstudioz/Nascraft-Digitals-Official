import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Calendar, ArrowRight, ArrowLeft, Check, Code, Palette, Camera, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Booking Page
 * Interactive project planner wizard
 * Design: Stepper wizard, card selections, spring animations, and native mailto trigger.
 */

export default function Booking() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("Software Development");
  const [selectedTimeline, setSelectedTimeline] = useState("1 - 3 months");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const services = [
    {
      id: "Software Development",
      title: "Software Development",
      description: "Custom web systems, backend APIs, and native mobile apps.",
      icon: Code,
    },
    {
      id: "Digital Design & Media",
      title: "Digital Design & Media",
      description: "Premium graphics, branding assets, and cinematic video edits.",
      icon: Palette,
    },
    {
      id: "Production Shoots",
      title: "Production Shoots",
      description: "High-end product photography and corporate video shoots.",
      icon: Camera,
    },
  ];

  const timelines = [
    "Urgent (< 1 month)",
    "1 - 3 months",
    "3 - 6 months",
    "Flexible / Not sure",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Generate mailto link
    const mailtoSubject = encodeURIComponent(`Project Booking Inquiry - ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hi Nascraft Digitals,\n\n` +
      `I would like to book a project with you. Here are my project specifications:\n\n` +
      `------------------------------------------\n` +
      `1. CLIENT DETAILS\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || "N/A"}\n` +
      `Company: ${formData.company || "N/A"}\n\n` +
      `2. PROJECT DETAILS\n` +
      `Service Type: ${selectedService}\n` +
      `Estimated Timeline: ${selectedTimeline}\n\n` +
      `3. PROJECT SPECIFICATIONS / DESCRIPTION:\n` +
      `${formData.message}\n` +
      `------------------------------------------\n\n` +
      `Looking forward to discussing further!`
    );

    // Trigger local mail app opening
    window.location.href = `mailto:contatcnas@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    
    toast.success("Opening your email client to send details...");
    setIsSuccess(true);
  };

  // Stepper Header
  const steps = [
    { num: 1, label: "Services" },
    { num: 2, label: "Timeline" },
    { num: 3, label: "Details" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Have Something You've Been Wanting to Build?
          </h1>
          <p className="text-lg text-secondary max-w-2xl mx-auto mb-6 leading-relaxed">
            Whether it's a product, a brand, or a story, every great outcome begins with a simple conversation. We'd love to hear yours.
          </p>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full border border-primary/10">
            Let's Connect
          </span>
        </div>
      </section>

      {/* Stepper Progress bar */}
      <section className="pt-12 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="flex justify-between items-center relative">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-muted -translate-y-1/2 z-0"></div>
            {/* Active Progress line */}
            <div 
              className="absolute top-1/2 left-0 h-0.5 bg-primary -translate-y-1/2 z-0 transition-all duration-300"
              style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
            ></div>

            {steps.map((s) => (
              <div key={s.num} className="flex flex-col items-center relative z-10">
                <div 
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all duration-300 ${
                    step >= s.num 
                      ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105" 
                      : "bg-white border-muted text-secondary"
                  }`}
                >
                  {step > s.num ? <Check className="w-5 h-5" /> : s.num}
                </div>
                <span className={`text-xs mt-2 font-semibold tracking-wider uppercase ${
                  step >= s.num ? "text-primary" : "text-secondary"
                }`}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Wizard */}
      <section className="pt-12 pb-20 md:pb-32 bg-white">
        <div className="container max-w-3xl mx-auto px-4">
          
          <div className="bg-card border border-border/80 rounded-2xl p-6 md:p-10 shadow-sm relative min-h-[400px] flex flex-col justify-between">
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                // Success screen
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-10 space-y-6 flex flex-col items-center justify-center my-auto"
                >
                  <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-4 animate-[pulse_2s_infinite]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                    Booking Initialized!
                  </h2>
                  <p className="text-secondary max-w-md leading-relaxed text-sm">
                    We've opened your default email app with a structured booking inquiry. Simply click "Send" in your mail client to forward the details to us!
                  </p>
                  <p className="text-xs text-primary font-semibold italic bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
                    Direct recipient: contatcnas@gmail.com
                  </p>
                  <div className="pt-4 flex gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        setIsSuccess(false);
                        setStep(1);
                      }}
                      className="border-2 border-primary text-primary hover:bg-primary/5 font-semibold px-6 py-2.5 active:scale-95"
                    >
                      Book Another Project
                    </Button>
                    <Button 
                      onClick={() => window.location.href = "/"}
                      className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 hover:shadow-lg active:scale-95"
                    >
                      Back to Home
                    </Button>
                  </div>
                </motion.div>
              ) : (
                // Multi-step Forms
                <div className="flex-1">
                  
                  {/* Step 1: Select Service */}
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">Select the service you need</h3>
                        <p className="text-sm text-secondary">Choose the primary capability needed for your project.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-4 pt-2">
                        {services.map((item) => {
                          const IconComponent = item.icon;
                          const isSelected = selectedService === item.id;
                          return (
                            <div
                              key={item.id}
                              onClick={() => setSelectedService(item.id)}
                              className={`group p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 cursor-pointer active:scale-[0.99] ${
                                isSelected
                                  ? "bg-primary/5 border-primary shadow-[0_10px_30px_-15px_rgba(196,30,58,0.2)]"
                                  : "bg-white border-border hover:border-primary/45 hover:shadow-sm"
                              }`}
                            >
                              <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                                isSelected
                                  ? "bg-primary text-white scale-105"
                                  : "bg-primary/10 text-primary group-hover:bg-primary/20"
                              }`}>
                                <IconComponent className="w-6 h-6" />
                              </div>
                              <div className="flex-1 space-y-1">
                                <div className="flex items-center justify-between">
                                  <h4 className={`font-bold text-base transition-colors ${
                                    isSelected ? "text-primary" : "text-foreground"
                                  }`}>
                                    {item.title}
                                  </h4>
                                  {isSelected && (
                                    <span className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-white">
                                      <Check className="w-3.5 h-3.5" />
                                    </span>
                                  )}
                                </div>
                                <p className="text-secondary text-sm leading-relaxed">{item.description}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Select Timeline */}
                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">Select your project timeline</h3>
                        <p className="text-sm text-secondary">When are you looking to launch or kick off the build?</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        {timelines.map((timeline) => {
                          const isSelected = selectedTimeline === timeline;
                          return (
                            <div
                              key={timeline}
                              onClick={() => setSelectedTimeline(timeline)}
                              className={`p-6 rounded-xl border text-center font-semibold text-base transition-all duration-300 cursor-pointer active:scale-95 ${
                                isSelected
                                  ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105"
                                  : "bg-white border-border text-foreground hover:border-primary/45 hover:text-primary"
                              }`}
                            >
                              {timeline}
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Info and Submit */}
                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <div>
                        <h3 className="font-playfair text-2xl font-bold text-foreground mb-1">Enter your details</h3>
                        <p className="text-sm text-secondary">Provide contact details and a description of your project to finalize the booking.</p>
                      </div>

                      <form id="booking-submit-form" onSubmit={handleSubmit} className="space-y-5 pt-2">
                        
                        {/* Name and Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-foreground">Name *</label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Your Name"
                              required
                              className="w-full h-11 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-foreground">Email *</label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="your@email.com"
                              required
                              className="w-full h-11 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                            />
                          </div>
                        </div>

                        {/* Phone and Company */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-foreground">Phone Number</label>
                            <Input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="e.g. +91 98765 43210"
                              className="w-full h-11 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="block text-xs font-bold uppercase tracking-wider text-foreground">Company Name</label>
                            <Input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              placeholder="Your Company (Optional)"
                              className="w-full h-11 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                            />
                          </div>
                        </div>

                        {/* Project Description */}
                        <div className="space-y-1.5">
                          <label className="block text-xs font-bold uppercase tracking-wider text-foreground">Project Details *</label>
                          <Textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us what you're building, key requirements, goals, or reference websites..."
                            required
                            rows={4}
                            className="w-full resize-none bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                          />
                        </div>

                      </form>
                    </motion.div>
                  )}

                </div>
              )}
            </AnimatePresence>

            {/* Stepper Buttons Footer */}
            {!isSuccess && (
              <div className="flex justify-between items-center pt-8 border-t border-border/60 mt-8">
                <Button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 1}
                  variant="outline"
                  className="border border-border text-foreground hover:bg-slate-50 font-semibold px-6 py-2 h-auto flex items-center gap-2 transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </Button>

                {step < 3 ? (
                  <Button
                    type="button"
                    onClick={handleNext}
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    Next Step
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    form="booking-submit-form"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95 cursor-pointer"
                  >
                    Submit Booking
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            )}

          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
