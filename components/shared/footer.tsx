"use client";

import Link from "next/link";
import { Mail, Phone, Linkedin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">
              קווין טל וטל חקוקי
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              מומחי AI ארגוני המסייעים לחברות להפוך AI מתיאוריה למציאות מדידה
            </p>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">שירותים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/workshops"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  סדנאות AI
                </Link>
              </li>
              <li>
                <Link
                  href="/consulting"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ייעוץ ארגוני
                </Link>
              </li>
              <li>
                <Link
                  href="/accelerator"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  מאיץ AI
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  קורסים פרטניים
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">משאבים</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#faq"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/guides"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  מדריכים
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  כלי AI מומלצים
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">צור קשר</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="mailto:contact@kevintal.ai"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@kevintal.ai</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:054-123-4567"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>054-123-4567</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/kevintal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn (Kevin)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/talhakooki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn (Tal)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="max-w-md mx-auto text-center space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              קבלו טיפים שבועיים על AI
            </h3>
            <p className="text-sm text-muted-foreground">
              מדריכים מעשיים, חדשות מעולם ה-AI, וטיפים בלעדיים לשימוש בכלים
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="email"
                placeholder="Email שלכם"
                className="flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90">
                הצטרפו
              </Button>
            </form>
            <p className="text-xs text-muted-foreground">
              הצטרפו ל-5,000+ אנשי מקצוע שכבר מנויים
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2025 Kevin Tal & Tal Hakooki. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
