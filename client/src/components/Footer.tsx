import { Link } from "wouter";

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
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663763520414/JCxr8VHhzxx3kpJMBiaRi6/nas-logo-icon-7AuYjKbupQemu9ZY7VFDfD.png"
                alt="Nascraft Digitals"
                className="w-6 h-6"
              />
              <span className="font-bold text-lg">Nascraft Digitals</span>
            </div>
            <p className="text-sm font-semibold">
              <span className="text-white">Crafting Experiences.</span>{" "}
              <span className="text-primary" style={{ textShadow: "0 1px 4px rgba(255, 255, 255, 0.25)" }}>Driving Results.</span>
            </p>
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
                <Link href="/about">
                  <a className="text-white/70 hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio">
                  <a className="text-white/70 hover:text-primary transition-colors">
                    Portfolio
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-white/70 hover:text-primary transition-colors">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Email: contatcnas@gmail.com</li>
              <li>Phone: +91 6369618775</li>
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
