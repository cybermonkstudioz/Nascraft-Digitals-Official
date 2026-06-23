import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Users, Target, Zap, Utensils, Lightbulb, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

/**
 * About Page
 * Company story, values, and team information
 * Design: Narrative-driven with values section and team showcase
 */

import { useSEO } from "@/hooks/useSEO";

export default function About() {
  useSEO(
    "Nascraft Digitals | Our Philosophy & Team",
    "Learn about our agency philosophy of craftsmanship, growth, and partnership. Meet our core team driving digital innovation."
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
            About Nascraft Digitals
          </h1>
          <p className="text-lg text-primary font-medium max-w-3xl mx-auto">
            Every great product, brand, and story starts with a vision. At Nascraft Digitals, we bring together creativity, technology, and strategy to transform those visions into reality.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="pt-12 pb-20 md:pt-16 md:pb-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground">
                Our Story
              </h2>
              <p className="text-lg text-secondary leading-relaxed">
                Founded in 2024, Nascraft Digitals began its journey as CyberMonk Studioz, driven by a passion for creating meaningful digital experiences and helping ideas evolve into impactful products. As our vision expanded, so did our identity, leading to the transformation of CyberMonk Studioz into Nascraft Digitals—a brand built on innovation, creativity, and digital craftsmanship.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Founded by Srihariharan Ganesh Kumar, alongside co-founders Aaruhya Kumar and Nishanth Ravikumar, Nascraft Digitals has grown into a multidisciplinary digital agency specializing in Software Development, Digital Design & Media, and Production Shoots. Together, we combine technology, creativity, and strategic thinking to deliver solutions that create real value for businesses and individuals alike.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                Today, we are proud to have successfully delivered 20+ projects for 20+ clients across diverse industries. Our work is guided by a commitment to quality, attention to detail, and the belief that every project deserves a thoughtful and personalized approach.
              </p>
              <p className="text-lg text-secondary leading-relaxed">
                At Nascraft Digitals, we believe great digital experiences are created where strategy, design, technology, and storytelling come together. Every project is an opportunity to build something meaningful, solve real challenges, and leave a lasting impact.
              </p>
            </div>

            <div className="relative max-w-lg mx-auto w-full lg:max-w-none mt-10 lg:mt-0">
              <div className="absolute -inset-2 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl blur-lg pointer-events-none opacity-50"></div>
              <img
                src="/about-our-story.webp"
                alt="Our Story"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] object-cover object-center rounded-xl shadow-2xl border border-border relative z-10"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Red Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary to-transparent"></div>

      {/* Why Nascraft Exists Section */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Nascraft Exists?
            </h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-2xl font-playfair font-medium text-primary max-w-3xl mx-auto leading-relaxed">
              We've seen great businesses go unnoticed.
            </p>
            <p className="text-lg text-primary max-w-2xl mx-auto mt-4 leading-relaxed font-medium">
              Not because their products were bad, and not because their services weren't good enough. But because the way they were presented didn't reflect the value they truly offered.
            </p>
          </div>

          {/* Three Examples Grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {[
              {
                icon: <Utensils className="exists-icon w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />,
                text: "A restaurant serving incredible food with poor online visibility."
              },
              {
                icon: <Lightbulb className="exists-icon w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />,
                text: "A startup with a powerful idea but no digital presence."
              },
              {
                icon: <TrendingUp className="exists-icon w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />,
                text: "A business owner working tirelessly every day while potential customers scroll past without noticing."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 80, damping: 15 }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.025,
                  boxShadow: "0 20px 40px -15px rgba(196,30,58,0.15)",
                  borderColor: "rgba(196,30,58,0.3)"
                }}
                whileTap={{
                  scale: 0.98,
                  y: -2,
                  boxShadow: "0 10px 20px -10px rgba(196,30,58,0.1)"
                }}
                className="exists-card group bg-white p-8 rounded-2xl border border-border shadow-sm transition-all duration-300 cursor-pointer"
              >
                <div className="exists-icon-container w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* The Realization / Insight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{
              y: [0, -8, 0]
            }}
            transition={{
              y: {
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 }
            }}
            whileHover={{ 
              scale: 1.025,
              boxShadow: "0 25px 50px -12px rgba(196,30,58,0.18)",
              borderColor: "rgba(196,30,58,0.35)",
              transition: { duration: 0.3 }
            }}
            whileTap={{
              scale: 0.98
            }}
            className="realization-card bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto text-center mb-20 shadow-inner cursor-pointer"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">The Realization</p>
            <blockquote className="font-playfair text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
              "People can't trust what they don't understand. And they can't choose what they never notice."
            </blockquote>
          </motion.div>

          {/* Why We Built & What We Do */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-foreground">
                That's why we built Nascraft Digitals.
              </h3>
              <p className="text-lg text-secondary leading-relaxed">
                We believe that excellence in business should be matched by excellence in digital presentation. We exist to close the gap between how good you are and how good you look.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-border shadow-sm space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">Not just to design websites.</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">Not just to create brands.</span>
                </div>
                <div className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="font-medium">Not just to produce content.</span>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-lg font-bold text-primary leading-relaxed">
                  But to help businesses present themselves with the same quality, passion, and professionalism they put into their work every single day.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Competitor / Present Better Quote */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto py-10 border-y border-border mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Our Core Philosophy</p>
            <blockquote className="font-playfair text-3xl md:text-5xl font-bold text-foreground leading-normal italic">
              "Because your competitors aren't always better. <span className="text-primary">Sometimes, they're just presented better.</span>"
            </blockquote>
          </motion.div>

          {/* Final Call to Action / Belief */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-medium text-foreground leading-relaxed font-playfair">
              And we believe every great business deserves the chance to be <span className="underline decoration-primary decoration-2 underline-offset-4 font-bold">seen</span>, <span className="underline decoration-primary decoration-2 underline-offset-4 font-bold">trusted</span>, and <span className="underline decoration-primary decoration-2 underline-offset-4 font-bold">remembered</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Red Accent Line */}
      <div className="h-1 bg-gradient-to-r from-primary via-primary to-transparent"></div>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-primary font-medium max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(196,30,58,0.22)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <Target className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Craftsmanship
              </h3>
              <p className="text-secondary leading-relaxed">
                Great work isn't accidental. We approach every project with care, attention to detail, and a commitment to quality that stands the test of time.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(196,30,58,0.22)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <Zap className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Growth
              </h3>
              <p className="text-secondary leading-relaxed">
                We believe learning never stops. By embracing new ideas, technologies, and perspectives, we continue to create solutions that move businesses forward.
              </p>
            </div>

            <div className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 hover:shadow-[0_12px_40px_-12px_rgba(196,30,58,0.22)] hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <Users className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                Partnership
              </h3>
              <p className="text-secondary leading-relaxed">
                Success is built together. We value trust, transparency, and collaboration, ensuring every client feels heard, supported, and involved throughout the journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-foreground text-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4 text-primary">
              Where Great Ideas Take Shape
            </h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              It takes people who care deeply about the outcome, the process, and the impact it creates.
            </p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
          >
            {[
              {
                initials: "SG",
                name: "Srihariharan Ganesh Kumar",
                role: "Founder & Creative Lead",
                image: "/srihariharan.webp",
                objectPosition: "center 18%",
                zoom: 1.1,
                bio: "Believes that every brand has a story worth telling. By blending creativity, strategy, and design, he transforms ideas into meaningful digital experiences that inspire trust, spark engagement, and leave a lasting impression on audiences.",
              },
              {
                initials: "AK",
                name: "Aaruhya Kumar",
                role: "Co-Founder & Technical Lead",
                image: "/aaruhya.webp",
                objectPosition: "center 22%",
                zoom: 1.05,
                bio: "Passionate about turning ambitious ideas into powerful digital products. With a focus on innovation, scalability, and user experience, he ensures every solution is built not only to perform flawlessly today but to grow with businesses tomorrow.",
              },
              {
                initials: "NK",
                name: "Nishanth Ravikumar",
                role: "Co-Founder & Business Strategy Consultant",
                subRole: "CA Foundation Qualified • Pursuing Chartered Accountancy",
                image: "/nishanth.webp",
                objectPosition: "center 22%",
                zoom: 1.15,
                bio: "Driven by the belief that sustainable growth begins with informed decisions. He combines business insight, financial understanding, and strategic thinking to help clients navigate challenges, uncover opportunities, and build a stronger future with confidence.",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { type: "spring", stiffness: 80, damping: 15 }
                  }
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.025,
                  boxShadow: "0 20px 40px -15px rgba(196,30,58,0.25)",
                  borderColor: "rgba(196,30,58,0.4)"
                }}
                whileTap={{
                  scale: 0.98,
                  y: -4
                }}
                className="text-center group p-6 rounded-2xl bg-white/[0.02] border border-white/5 transition-all duration-300 cursor-pointer"
              >
                {member.image ? (
                  <div className="w-24 h-24 rounded-full border border-white/10 mx-auto mb-6 overflow-hidden group-hover:scale-105 group-hover:border-primary/45 transition-all duration-300 shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{
                        objectPosition: member.objectPosition || "center",
                        transform: member.zoom ? `scale(${member.zoom})` : undefined,
                      }}
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="text-3xl font-bold text-primary tracking-wider font-playfair">
                      {member.initials}
                    </div>
                  </div>
                )}
                <h3 className="font-semibold text-xl mb-1.5 text-white group-hover:text-primary transition-colors duration-300">{member.name}</h3>
                <p className="text-primary font-semibold text-sm mb-1">{member.role}</p>
                {member.subRole && (
                  <p className="text-white/50 text-xs mb-3 italic">{member.subRole}</p>
                )}
                <p className="text-white/70 text-sm leading-relaxed mt-4">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 md:gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-secondary font-semibold">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">20+</div>
              <p className="text-secondary font-semibold">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">2+</div>
              <p className="text-secondary font-semibold">Years in Business</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5+</div>
              <p className="text-secondary font-semibold">Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Trust Section */}
      <section className="py-16 bg-slate-50 border-y border-border">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="flex-shrink-0">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MSME_Logo_India.svg/500px-MSME_Logo_India.svg.png"
                alt="MSME India Logo"
                className="h-24 w-auto bg-white rounded-xl shadow-md p-1.5 border border-border"
              />
            </div>
            <div className="text-left max-w-lg space-y-2">
              <h3 className="font-playfair text-2xl font-bold text-foreground">
                Government Certified MSME Agency
              </h3>
              <p className="text-secondary leading-relaxed text-sm">
                Nascraft Digitals is officially registered under the **Ministry of Micro, Small & Medium Enterprises (MSME), Government of India**. This certification validates our credentials, standardizes our business operations, and ensures maximum trust for our clients.
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                Udyam Registered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Designer Red Line Divider */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-65 max-w-4xl mx-auto"></div>

      {/* CTA Section */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-32 bg-white">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="text-primary">Every</span> Great <span className="text-primary">Journey</span> Starts With a <span className="text-primary">Conversation</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
            Tell us what you're building, what challenge you're solving, or what future you're envisioning. Together, we'll craft something that creates real value and lasting impact.
          </p>
          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 h-auto inline-flex items-center gap-2 mx-auto transition-all duration-200 hover:shadow-lg active:scale-95">
            <Link href="/contact">
              Let's Connect
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
