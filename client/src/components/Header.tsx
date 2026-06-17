import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

/**
 * Header Component
 * Premium navigation with Nascraft Digitals branding
 * Design: Clean, minimal header with red accent on CTA and responsive mobile menu
 */

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663763520414/JCxr8VHhzxx3kpJMBiaRi6/nas-logo-icon-K3sNhyrzVyvjoANdkSsvhW.webp"
                alt="Nascraft Digitals"
                className="w-8 h-8 transition-transform group-hover:scale-110"
              />
              <span className="font-bold text-lg text-foreground">
                Nascraft Digitals
              </span>
            </a>
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Home
              </a>
            </Link>
            <Link href="/services">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                About
              </a>
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link href="/booking">
              <a className="hidden sm:inline-block">
                <Button
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 h-auto transition-all duration-200 hover:shadow-lg active:scale-95"
                >
                  Hire Us
                </Button>
              </a>
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <nav className="md:hidden flex flex-col gap-3 pt-4 pb-2 border-t border-border mt-4 animate-in fade-in slide-in-from-top-5 duration-200">
            <Link href="/">
              <a
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
              >
                Home
              </a>
            </Link>
            <Link href="/services">
              <a
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
              >
                Services
              </a>
            </Link>
            <Link href="/portfolio">
              <a
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
              >
                Portfolio
              </a>
            </Link>
            <Link href="/about">
              <a
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
              >
                About
              </a>
            </Link>
            <Link href="/booking">
              <a onClick={() => setIsOpen(false)} className="pt-2 sm:hidden">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-200"
                >
                  Hire Us
                </Button>
              </a>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
