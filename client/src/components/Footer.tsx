import { Link } from "wouter";
import { Instagram, MessageCircle } from "lucide-react";

/**
 * Footer Component
 * Premium footer with branding and links
 * Design: Clean, minimal footer with red accent lines
 */

export default function Footer() {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container max-w-7xl mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img
                  src="/favicon.png"
                  alt="Nascraft Digitals"
                  className="w-6 h-6"
                />
                <span className="font-bold text-lg">Nascraft Digitals</span>
              </div>
              <p className="text-sm font-semibold">
                <span className="text-white">Crafting Experiences.</span>{" "}
                <span className="text-primary footer-logo-shadow">Driving Results.</span>
              </p>
            </div>

            {/* MSME Trust Badge */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 max-w-[240px] transition-all duration-300 hover:bg-white/10 hover:border-white/20">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/MSME_Logo_India.svg/500px-MSME_Logo_India.svg.png"
                alt="Government of India MSME"
                className="h-12 w-auto bg-white rounded p-0.5 flex-shrink-0"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">MSME Certified</span>
                <span className="text-xs font-bold text-white leading-tight">Registered Agency</span>
                <span className="text-[9px] text-white/50 leading-none">Government of India</span>
              </div>
            </div>

            {/* Google Business QR Badge */}
            <a 
              href="https://www.google.com/search?q=Nascraft+Digitals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg p-3 max-w-[240px] transition-all duration-300 hover:bg-white/10 hover:border-white/20 mt-4 block"
            >
              <img
                src="/google-business-qr.webp"
                alt="Nascraft Digitals Google Business Profile"
                className="h-12 w-12 rounded bg-white p-0.5 flex-shrink-0 object-contain"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider">Review Us</span>
                <span className="text-xs font-bold text-white leading-tight">Google Profile</span>
                <span className="text-[9px] text-white/50 leading-none">Scan or click to visit</span>
              </div>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services#software-development" className="text-white/70 hover:text-primary transition-colors">
                  Software Development
                </a>
              </li>
              <li>
                <a href="/services#digital-media" className="text-white/70 hover:text-primary transition-colors">
                  Digital Media
                </a>
              </li>
              <li>
                <a href="/services#production-shoots" className="text-white/70 hover:text-primary transition-colors">
                  Production Shoots
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/70 hover:text-primary transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/academy" className="text-white/70 hover:text-primary transition-colors">
                  Academy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: <a href="mailto:contatcnas@gmail.com" className="hover:text-primary transition-colors">contatcnas@gmail.com</a></li>
              <li>Phone: <a href="tel:+916369618775" className="hover:text-primary transition-colors">+91 6369618775</a></li>
              <li className="pt-3 flex items-center gap-3">
                <a 
                  href="https://www.instagram.com/nascraftdigitals_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://wa.me/916369618775" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>&copy; 2026 Nascraft Digitals. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
