"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import Image from "next/image";
import { Check, Users, Building2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="lg"
      className="min-h-[85vh] flex items-center justify-center relative overflow-hidden pt-20"
      id="hero"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Text Content - At Top */}
        <div className="max-w-3xl mx-auto space-y-6 text-center mb-10">
          {/* Trust badge with glow effect */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
            <Check className="h-3 w-3 text-primary animate-pulse" />
            <span className="font-medium bg-gradient-to-r from-white to-white/80 bg-clip-text">
              ניסיון מוכח עם 10,000+ תלמידים ו-100+ ארגונים
            </span>
          </div>

          {/* Headline with gradient accent */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">הטמיעו AI בארגון </span>
            <span className="bg-gradient-to-r from-primary via-blue-400 to-primary bg-clip-text text-transparent animate-gradient bg-300%">
              תוך 90 יום
            </span>
            <br />
            <span className="text-white">בלי צוות טכני ובלי לבזבז </span>
            <span className="text-white/90">מיליונים</span>
          </h1>

          {/* Subtitle with subtle color */}
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            <span className="text-white/90">סדנאות </span>
            <span className="text-primary font-semibold">AI מעשיות</span>
            <span className="text-white/90">, ייעוץ </span>
            <span className="text-primary font-semibold">אסטרטגי</span>
            <span className="text-white/90"> ותוכנית </span>
            <span className="text-primary font-semibold">מאיץ ל-90 יום</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center pt-2">
            <CTAButton
              href="#contact"
              variant="primary"
              size="lg"
            >
              קבעו פגישת אסטרטגיה חינם
            </CTAButton>

            <CTAButton
              href="#services"
              variant="outline"
              size="lg"
              showIcon={false}
            >
              גלו את השירותים שלנו
            </CTAButton>
          </div>
        </div>

        {/* Images Below Headline with hover effect */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-32 h-32 md:w-36 md:h-36 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 group">
            <Image
              src="/kevin.webp"
              alt="קווין ליאקס - מומחה AI ו-BI"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-32 h-32 md:w-36 md:h-36 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 group">
            <Image
              src="/tal.jpg"
              alt="טל חקוקי - מנהיג AI אסטרטגי"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Names Below Images */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="text-center w-32 md:w-36">
            <p className="text-white font-bold text-base">קווין ליאקס</p>
            <p className="text-primary/80 text-xs font-medium">מומחה AI ו-BI</p>
          </div>
          <div className="text-center w-32 md:w-36">
            <p className="text-white font-bold text-base">טל חקוקי</p>
            <p className="text-primary/80 text-xs font-medium">מנהיג AI אסטרטגי</p>
          </div>
        </div>

        {/* Stats - With hover effects and color accents */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-4 text-center border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <div className="flex items-center justify-center gap-1 text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">10,000+</div>
            <div className="text-xs text-white/70 group-hover:text-primary/70 transition-colors duration-300">תלמידים</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <div className="flex items-center justify-center gap-1 text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">100+</div>
            <div className="text-xs text-white/70 group-hover:text-primary/70 transition-colors duration-300">ארגונים</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group">
            <div className="flex items-center justify-center gap-1 text-primary mb-1 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">500+</div>
            <div className="text-xs text-white/70 group-hover:text-primary/70 transition-colors duration-300">פרויקטים</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
