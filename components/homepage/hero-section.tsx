"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import Image from "next/image";
import { Check, Users, Building2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="sm"
      className="min-h-[70vh] flex items-center justify-center relative overflow-hidden pt-20"
      id="hero"
    >
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,128,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,128,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Text Content - At Top */}
        <div className="max-w-3xl mx-auto space-y-3 text-center mb-6">
          {/* Trust badge with glow effect */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-xs text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300">
            <Check className="h-3 w-3 text-primary" />
            <span className="font-medium text-white">
              ניסיון מוכח עם 10,000+ תלמידים ו-100+ ארגונים
            </span>
          </div>

          {/* Headline with gradient accent - lighter colors for visibility */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-white">הטמיעו AI בארגון </span>
            <span className="bg-gradient-to-r from-cyan-300 via-primary to-blue-300 bg-clip-text text-transparent animate-gradient bg-300%">
              תוך 90 יום
            </span>
            <br />
            <span className="text-white">בלי צוות טכני ובלי לבזבז מיליונים</span>
          </h1>

          {/* Subtitle - all white text with primary highlights */}
          <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-white/90">
            סדנאות <span className="text-cyan-300 font-semibold">AI מעשיות</span>, ייעוץ <span className="text-cyan-300 font-semibold">אסטרטגי</span> ותוכנית <span className="text-cyan-300 font-semibold">מאיץ ל-90 יום</span>
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

        {/* Images Below Headline - Responsive sizing */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-6">
          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 group">
            <Image
              src="/kevin.webp"
              alt="קווין ליאקס - מומחה AI ו-BI"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 hover:scale-105 hover:shadow-primary/40 transition-all duration-300 group">
            <Image
              src="/tal.jpg"
              alt="טל חקוקי - מנהיג AI אסטרטגי"
              fill
              sizes="(max-width: 640px) 96px, (max-width: 768px) 112px, 128px"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        {/* Names Below Images - Responsive */}
        <div className="flex justify-center items-center gap-3 sm:gap-4 mb-8">
          <div className="text-center w-24 sm:w-28 md:w-32">
            <p className="text-white font-bold text-sm sm:text-base">קווין ליאקס</p>
            <p className="text-cyan-300 text-xs font-medium">מומחה AI ו-BI</p>
          </div>
          <div className="text-center w-24 sm:w-28 md:w-32">
            <p className="text-white font-bold text-sm sm:text-base">טל חקוקי</p>
            <p className="text-cyan-300 text-xs font-medium">מנהיג AI אסטרטגי</p>
          </div>
        </div>

        {/* Stats - Compact and responsive */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-3 sm:p-4 text-center border border-primary/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 transition-all duration-500 group">
            <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-primary bg-clip-text text-transparent">10,000+</div>
            <div className="text-[10px] sm:text-xs text-white/70 group-hover:text-cyan-300 transition-colors duration-300">תלמידים</div>
          </div>
          <div className="glass rounded-lg p-3 sm:p-4 text-center border border-primary/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 transition-all duration-500 group">
            <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              <Building2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-primary bg-clip-text text-transparent">100+</div>
            <div className="text-[10px] sm:text-xs text-white/70 group-hover:text-cyan-300 transition-colors duration-300">ארגונים</div>
          </div>
          <div className="glass rounded-lg p-3 sm:p-4 text-center border border-primary/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 transition-all duration-500 group">
            <div className="flex items-center justify-center gap-1 text-cyan-400 mb-1 group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-primary bg-clip-text text-transparent">500+</div>
            <div className="text-[10px] sm:text-xs text-white/70 group-hover:text-cyan-300 transition-colors duration-300">פרויקטים</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
