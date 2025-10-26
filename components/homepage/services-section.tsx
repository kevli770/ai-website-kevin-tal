"use client";

import { SectionContainer } from "@/components/shared/section-container";
import { CTAButton } from "@/components/shared/cta-button";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { GraduationCap, Briefcase, Rocket, Check } from "lucide-react";
import Image from "next/image";

export function ServicesSection() {
  return (
    <SectionContainer spacing="md" variant="darker" id="services">
      <div className="max-w-5xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            השירותים שלנו
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            מהדרכה מעשית ועד שינוי ארגוני מלא - בחרו את המסלול המתאים לכם
          </p>
        </div>

        {/* Service 1: Workshops */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/ai-workshop-training.png"
              alt="סדנת AI - אולם הדרכה עם משתתפים"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">סדנאות AI וקורסים ארגוניים</h3>
            </div>

            <p className="text-base text-foreground/80 leading-relaxed">
              הכשרה מעשית לצוותים בכל הרמות - ממנהלים לעובדי קו ראשון
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-foreground text-sm">מה תלמדו:</p>
              <div className="space-y-1.5">
                {[
                  "שימוש מעשי בכלי GenAI למשימות יומיומיות",
                  "יצירת תכנים ויזואליים עם AI",
                  "בניית אוטומציות ללא קוד (No-Code)",
                  "פיתוח אפליקציות AI מותאמות אישית",
                  "יישום מיידי במקום העבודה",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-foreground">פורמטים זמינים:</p>
              <div className="flex flex-wrap gap-2">
                {["סדנאות של יום אחד", "קורסים רב-שבועיים", "הכשרות מותאמות אישית"].map((format, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                  >
                    {format}
                  </span>
                ))}
              </div>
            </div>

            <CTAButton href="/workshops" variant="primary" size="default">
              הזמינו סדנה לארגון
            </CTAButton>
          </div>
        </div>

        {/* Service 2: Consulting */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">ייעוץ AI ארגוני</h3>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              ליווי אסטרטגי מקצה לקצה - מאסטרטגיה ועד יישום מוצלח
            </p>

            <div className="space-y-3">
              <p className="font-semibold text-foreground">מה כלול:</p>
              <div className="space-y-2">
                {[
                  "הערכת בשלות AI ארגונית",
                  "בניית אסטרטגיית AI ייעודית",
                  "זיהוי use cases עם ROI גבוה",
                  "ליווי יישום וניהול שינוי",
                  "מדידה ואופטימיזציה מתמשכת",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-lg p-4 space-y-2">
              <p className="font-semibold text-foreground">אידיאלי עבור:</p>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>• חברות שרוצות להוביל בתחום ה-AI</li>
                <li>• ארגונים שחוו כישלונות ביישום AI</li>
                <li>• צוותי חדשנות ומנכ״לים חזוניים</li>
              </ul>
            </div>

            <CTAButton href="#contact" variant="primary" size="default">
              קבעו פגישת ייעוץ חינם
            </CTAButton>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/executive-strategy-meeting.png"
                alt="ייעוץ אסטרטגי - פגישת הנהלה"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Service 3: Accelerator */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/ai-transformation-rocket.png"
              alt="מאיץ AI - ויזואליזציה של שיגור רקטה/שינוי"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground">מאיץ AI ארגוני - תוכנית 90 יום</h3>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              תוכנית מקיפה המשלבת אסטרטגיה, יישום והדרכה
            </p>

            <div className="space-y-4">
              <p className="font-semibold text-foreground">4 שלבים:</p>

              <div className="space-y-3">
                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">שבועות 1-2: Discovery & Strategy</p>
                  <p className="text-sm text-foreground/80">
                    מיפוי מעמיק של תהליכים, זיהוי 5-10 use cases בעלי ROI גבוה, בניית roadmap ל-90 יום
                  </p>
                </div>

                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">שבועות 3-6: Quick Wins</p>
                  <p className="text-sm text-foreground/80">
                    יישום 2-3 פרויקטי AI קטנים, הוכחת ערך מהירה, בניית תמיכה פנימית
                  </p>
                </div>

                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">שבועות 7-10: Scale Up</p>
                  <p className="text-sm text-foreground/80">
                    הרחבת פתרונות מוצלחים, יישום use cases מורכבים יותר, אינטגרציה עם מערכות קיימות
                  </p>
                </div>

                <div className="glass rounded-lg p-4">
                  <p className="font-semibold text-primary mb-2">שבועות 11-13: Enablement & Handoff</p>
                  <p className="text-sm text-foreground/80">
                    הכשרת צוות פנימי, העברת בעלות, תוכנית המשכיות
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-lg p-4 space-y-2 bg-primary/5">
              <p className="font-semibold text-foreground">תוצאות:</p>
              <ul className="text-sm text-foreground/80 space-y-1">
                <li>✓ חיסכון מדיד בזמן ועלויות</li>
                <li>✓ צוות פנימי מוסמך</li>
                <li>✓ תרבות AI חיה בארגון</li>
              </ul>
            </div>

            <CTAButton href="/accelerator" variant="primary" size="default">
              התחילו את המסע
            </CTAButton>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
