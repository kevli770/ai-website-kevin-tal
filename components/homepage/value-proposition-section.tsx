import { SectionContainer } from "@/components/shared/section-container";
import { CTAButton } from "@/components/shared/cta-button";
import { Search, Zap, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "זיהוי ערך",
    icon: Search,
    points: [
      "מיפוי אי יעילות עם ההנהלה והצוותים הקריטיים",
      "זיהוי נקודות עומס, כפילויות וצווארי בקבוק",
      "רשימת מקרי שימוש ספציפיים לארגון שלך",
    ],
    deliverable: "מסמך מיפוי + רשימת מקרי שימוש מותאמים",
  },
  {
    number: "02",
    title: "הפעלה",
    icon: Zap,
    points: [
      "עבודה עם האנשים שלך על הנתונים האמיתיים",
      "בניית זרימות עבודה חדשות עם כלי AI",
      "פיתוח פרומפטים, תיעוד ידע, יצירת תוצרים חוזרים",
    ],
    deliverable: "צוותים שמייצרים בפועל: דוחות, סיכומים, תוכן, מצגות",
  },
  {
    number: "03",
    title: "העברה לבעלות פנימית",
    icon: CheckCircle2,
    points: [
      "ניסוח מדיניות שימוש בטוח ב-AI",
      "הגדרת קווי אחריות וכלים מאושרים",
      "תכנית המשך ל-90 הימים הבאים",
    ],
    deliverable: "יכולת פנימית - אתה לא תלוי ביועץ חיצוני",
  },
];

export function ValuePropositionSection() {
  return (
    <SectionContainer spacing="lg">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold">
            מה אני עושה{" "}
            <span className="gradient-text">בפועל</span>
            {" "}בארגונים
          </h2>
          <p className="text-xl text-muted-foreground">
            אני נכנס לארגון שלך לכשלושה חודשים.
            <br />
            יחד אנחנו ממפים, מיישמים ומעבירים לבעלות פנימית.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group"
              >
                {/* Connector line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 right-0 w-full h-0.5 bg-gradient-to-l from-primary/50 to-transparent -z-10" />
                )}

                <div className="h-full p-8 rounded-xl glass border-2 border-border hover:border-primary/50 transition-all space-y-6">
                  {/* Step number */}
                  <div className="flex items-center gap-4">
                    <div className="text-6xl font-bold text-primary/20">
                      {step.number}
                    </div>
                    <Icon className="h-12 w-12 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold">{step.title}</h3>

                  {/* Points */}
                  <ul className="space-y-3 text-muted-foreground">
                    {step.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Deliverable */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">
                      מה אתה מקבל:
                    </p>
                    <p className="text-sm text-foreground/90 mt-2">
                      {step.deliverable}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <CTAButton href="#contact" size="xl">
            אני רוצה שיחה על יישום AI בארגון שלי
          </CTAButton>
        </div>
      </div>
    </SectionContainer>
  );
}
