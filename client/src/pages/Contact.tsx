import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, Clock, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

/**
 * Contact Page
 * Redesigned interactive contact form and company contact credentials.
 * Design: Two-column grid, glassmorphic contact cards, input animations, and project type selection tags.
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [selectedService, setSelectedService] = useState("Software Development");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    "Software Development",
    "Digital Design & Media",
    "Production Shoots",
    "Other"
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success(`Message sent successfully! We'll get back to you regarding ${selectedService} soon.`);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
      setSelectedService("Software Development");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-16 pb-10 md:pt-20 md:pb-12 bg-white border-b border-border">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Have an Idea That Keeps You Thinking?
          </h1>
          <p className="text-lg text-primary font-medium max-w-3xl mx-auto mb-6">
            Every meaningful product, brand, and story begins with a vision. If there's something you've been wanting to build, grow, or bring to life, we'd love to be part of the journey.
          </p>
          <Link href="/booking">
            <a className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-bold transition-all duration-200 group active:scale-95 text-base">
              → Let's Build It Together
            </a>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Contact Information Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 lg:sticky lg:top-24"
            >
              <div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-2">
                  Contact Information
                </h3>
                <p className="text-sm text-secondary">
                  Reach out through any of these channels or use the contact form.
                </p>
              </div>

              {/* Email Card */}
              <motion.a 
                href="mailto:contatcnas@gmail.com"
                whileHover={{ y: -4 }}
                className="group block p-6 rounded-xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-[0_12px_30px_-12px_rgba(196,30,58,0.18)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Email Us</h4>
                    <p className="text-secondary text-base font-medium break-all">contatcnas@gmail.com</p>
                    <span className="inline-flex items-center text-xs text-primary font-bold group-hover:gap-1.5 transition-all pt-1">
                      Send an email <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Phone Card */}
              <motion.a 
                href="tel:+916369618775"
                whileHover={{ y: -4 }}
                className="group block p-6 rounded-xl bg-card border border-border/80 hover:border-primary/40 hover:shadow-[0_12px_30px_-12px_rgba(196,30,58,0.18)] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors text-sm uppercase tracking-wider">Call Us</h4>
                    <p className="text-secondary text-base font-medium">+91 6369618775</p>
                    <span className="inline-flex items-center text-xs text-primary font-bold group-hover:gap-1.5 transition-all pt-1">
                      Call our team <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>
                </div>
              </motion.a>

              {/* Business Hours Card */}
              <div className="p-6 rounded-xl bg-card border border-border/80 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-foreground text-sm uppercase tracking-wider">Business Hours</h4>
                </div>
                <div className="pt-2 border-t border-border/60">
                  <ul className="space-y-2 text-secondary text-sm">
                    <li className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between text-primary font-semibold">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Contact Form Card */}
            <motion.div 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="lg:col-span-2 bg-card border border-border/80 rounded-2xl p-6 md:p-10 shadow-sm"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Custom Interactive Tag Selector */}
                <div className="space-y-3">
                  <label className="block text-sm font-semibold text-foreground">
                    What is your project about? *
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 active:scale-95 cursor-pointer ${
                          selectedService === service
                            ? "bg-primary border-primary text-white shadow-md shadow-primary/20 scale-105"
                            : "border-border bg-white text-secondary hover:border-primary/40 hover:text-primary"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full h-12 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full h-12 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full h-12 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-foreground">
                      Company Name
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company (Optional)"
                      className="w-full h-12 bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-foreground">
                    Project details *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your goals, timelines, and requirements..."
                    required
                    rows={5}
                    className="w-full resize-none bg-white border-border focus-visible:ring-primary focus-visible:border-primary focus-visible:ring-1 hover:border-primary/45 transition-all duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto flex items-center gap-2 transition-all duration-200 hover:shadow-lg active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
