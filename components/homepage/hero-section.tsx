"use client";

import { CTAButton } from "@/components/shared/cta-button";
import { SectionContainer } from "@/components/shared/section-container";
import Image from "next/image";
import { Check, Users, Building2, Rocket } from "lucide-react";

export function HeroSection() {
  return (
    <SectionContainer
      variant="gradient"
      spacing="xl"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24"
      id="hero"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 gradient-radial opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Text Content - At Top */}
        <div className="max-w-4xl mx-auto space-y-8 text-center mb-12">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-white">
            <Check className="h-4 w-4 text-primary" />
            <span className="font-medium">ניסיון מוכח עם 10,000+ תלמידים ו-100+ ארגונים</span>
          </div>

          {/* Direct Response Headline - Bright and Visible */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            הטמיעו AI בארגון{" "}
            <span className="text-primary">תוך 90 יום</span>
            <br />
            בלי צוות טכני ובלי לבזבז מיליונים
          </h1>

          {/* Subtitle - Bright White */}
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto font-medium">
            סדנאות, ייעוץ ומאיץ AI ארגוני - מתיאוריה ליישום מעשי עם ROI מדיד
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <CTAButton
              href="#contact"
              variant="primary"
              size="xl"
            >
              קבעו פגישת אסטרטגיה חינם
            </CTAButton>

            <CTAButton
              href="#services"
              variant="outline"
              size="xl"
              showIcon={false}
            >
              גלו את השירותים שלנו
            </CTAButton>
          </div>
        </div>

        {/* Images Below Headline - Side by Side */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/20 border-2 border-primary/20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
            <Image
              src="/kevin.webp"
              alt="קווין ליאקס - מומחה AI ו-BI"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/20 border-2 border-primary/20 w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
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
        <div className="flex justify-center items-center gap-6 mb-16">
          <div className="text-center w-40 md:w-48 lg:w-56">
            <p className="text-white font-bold text-lg">קווין ליאקס</p>
            <p className="text-white/80 text-sm">מומחה AI ו-BI</p>
          </div>
          <div className="text-center w-40 md:w-48 lg:w-56">
            <p className="text-white font-bold text-lg">טל חקוקי</p>
            <p className="text-white/80 text-sm">מנהיג AI אסטרטגי</p>
          </div>
        </div>

        {/* Bottom Section - Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="glass rounded-lg p-6 text-center border border-white/10">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white">10,000+</div>
            <div className="text-sm text-white/70">תלמידים הוכשרו</div>
          </div>
          <div className="glass rounded-lg p-6 text-center border border-white/10">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Building2 className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white">100+</div>
            <div className="text-sm text-white/70">ארגונים</div>
          </div>
          <div className="glass rounded-lg p-6 text-center border border-white/10">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Rocket className="w-6 h-6" />
            </div>
            <div className="text-3xl font-bold text-white">500+</div>
            <div className="text-sm text-white/70">פרויקטים מוצלחים</div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
