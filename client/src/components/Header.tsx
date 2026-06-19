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
          <Link href="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <img
              src="/favicon.png"
              alt="Nascraft Digitals"
              className="w-8 h-8 transition-transform group-hover:scale-110"
            />
            <span className="font-bold text-lg text-foreground">
              Nascraft Digitals
            </span>
          </Link>

          {/* Navigation (Desktop) */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/academy" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Academy
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden sm:inline-block bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2 h-auto transition-all duration-200 hover:shadow-lg active:scale-95"
            >
              <Link href="/booking">
                Hire Us
              </Link>
            </Button>

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
            <Link href="/"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              Home
            </Link>
            <Link href="/services"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              Services
            </Link>
            <Link href="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              Portfolio
            </Link>
            <Link href="/about"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              About
            </Link>
            <Link href="/academy"
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-foreground hover:text-primary transition-colors py-2 border-b border-slate-100"
            >
              Academy
            </Link>
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-3 transition-all duration-200 sm:hidden mt-2"
            >
              <Link href="/booking" onClick={() => setIsOpen(false)}>
                Hire Us
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
