"use client";

import { SectionContainer } from "@/components/shared/section-container";
import Image from "next/image";
import { Bot, Zap, BarChart3, Sparkles, Target, Users } from "lucide-react";

export function AboutSection() {
  return (
    <SectionContainer spacing="xl" id="about">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            מי אנחנו? <span className="text-primary">הצוות שיוביל אתכם למהפכת ה-AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            שילוב ייחודי של יישום מעשי ואסטרטגיה ארגונית
          </p>
        </div>

        {/* Kevin Leaks Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <Image
                src="/kevin.webp"
                alt="קווין ליאקס - מומחה AI ו-BI"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">קווין ליאקס</h3>
              <p className="text-xl text-primary font-semibold">מומחה AI ו-BI לארגונים</p>
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed">
              קווין הוא מומחה בעל ניסיון עשיר ביישום מעשי של פתרונות AI ו-BI בארגונים גדולים ובינוניים.
              הוא מתמחה בהפיכת רעיונות AI מורכבים לפתרונות מעשיים שחוסכים זמן וכסף.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              קווין מוביל את תחום ה-AI וה-BI בארגון Enterprise גדול, שם הוא אחראי על פיתוח ויישום
              אסטרטגיות AI מתקדמות שמשפרות את תהליכי העבודה ומגדילות את היעילות הארגונית.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">תחומי התמחות:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Bot className="w-4 h-4 text-primary" />
                  <span className="text-sm">פתרונות GenAI</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm">אוטומציות AI</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm">BI & אנליטיקה</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">פתרונות AI SaaS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tal Hakooki Card */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-2">טל חקוקי</h3>
              <p className="text-xl text-primary font-semibold">מנהיג AI אסטרטגי</p>
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed">
              טל הוא מנהיג אסטרטגי בתחום ה-AI שעוזר לארגונים לנווט במרחב המורכב של אימוץ טכנולוגיות AI.
              כראש תחום GenAI במרכז כנרת לחדשנות, טל ליווה עשרות חברות בתהליכי שינוי AI מוצלחים.
            </p>

            <p className="text-lg text-foreground/90 leading-relaxed">
              הגישה שלו משלבת חזון אסטרטגי עם יישום מעשי, ומבטיחה שיוזמות AI מתאימות למטרות העסקיות
              ומספקות ROI מדיד. טל מצטיין בהשגת תמיכה מבעלי עניין וביצירת יכולות AI בנות קיימא בתוך הארגון.
            </p>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-foreground">תחומי התמחות:</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-foreground/80">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-sm">אסטרטגיית AI</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-sm">ניהול שינוי ארגוני</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">מנהיגות GenAI</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <BarChart3 className="w-4 h-4 text-primary" />
                  <span className="text-sm">תכנון תוכניות חדשנות</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-square">
              <Image
                src="/tal.jpg"
                alt="טל חקוקי - מנהיג AI אסטרטגי"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
