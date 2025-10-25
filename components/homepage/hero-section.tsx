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
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs text-white">
            <Check className="h-3 w-3 text-primary" />
            <span className="font-medium">ניסיון מוכח עם 10,000+ תלמידים ו-100+ ארגונים</span>
          </div>

          {/* Smaller Headline */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
            הטמיעו AI בארגון{" "}
            <span className="text-primary">תוך 90 יום</span>
            <br />
            בלי צוות טכני ובלי לבזבז מיליונים
          </h1>

          {/* Better Subtitle */}
          <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
            סדנאות AI מעשיות, ייעוץ אסטרטגי ותוכנית מאיץ ל-90 יום
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

        {/* Images Below Headline - Smaller */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-32 h-32 md:w-36 md:h-36">
            <Image
              src="/kevin.webp"
              alt="קווין ליאקס - מומחה AI ו-BI"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-lg shadow-primary/20 border-2 border-primary/20 w-32 h-32 md:w-36 md:h-36">
            <Image
              src="/tal.jpg"
              alt="טל חקוקי - מנהיג AI אסטרטגי"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Names Below Images */}
        <div className="flex justify-center items-center gap-4 mb-10">
          <div className="text-center w-32 md:w-36">
            <p className="text-white font-bold text-base">קווין ליאקס</p>
            <p className="text-white/70 text-xs">מומחה AI ו-BI</p>
          </div>
          <div className="text-center w-32 md:w-36">
            <p className="text-white font-bold text-base">טל חקוקי</p>
            <p className="text-white/70 text-xs">מנהיג AI אסטרטגי</p>
          </div>
        </div>

        {/* Stats - Smaller and More Compact */}
        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="glass rounded-lg p-4 text-center border border-white/10">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white">10,000+</div>
            <div className="text-xs text-white/70">תלמידים</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-white/10">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Building2 className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white">100+</div>
            <div className="text-xs text-white/70">ארגונים</div>
          </div>
          <div className="glass rounded-lg p-4 text-center border border-white/10">
            <div className="flex items-center justify-center gap-1 text-primary mb-1">
              <Rocket className="w-5 h-5" />
            </div>
            <div className="text-2xl font-bold text-white">500+</div>
            <div className="text-xs text-white/70">פרויקטים</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
