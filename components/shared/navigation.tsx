"use client";

import { useState } from "react";
import Link from "next/link";
import { CTAButton } from "@/components/shared/cta-button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "בית" },
  { href: "#services", label: "שירותים" },
  { href: "#about", label: "אודות" },
  { href: "#workshops", label: "סדנאות" },
  { href: "#faq", label: "שאלות נפוצות" },
  { href: "#contact", label: "צור קשר" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-primary transition-colors text-center"
          >
            קווין & טל <span className="text-primary">AI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}

            <CTAButton href="#contact" variant="primary" size="default">
              קבעו פגישת ייעוץ
            </CTAButton>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-white hover:text-primary hover:bg-muted/50 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-border/50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium text-right"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3">
              <CTAButton
                href="#contact"
                variant="primary"
                size="default"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                קבעו פגישת ייעוץ
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
