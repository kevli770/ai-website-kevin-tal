import { SectionContainer } from "@/components/shared/section-container";
import { ImagePlaceholder } from "@/components/shared/image-placeholder";
import { AlertCircle } from "lucide-react";

const problems = [
  "צוותים שרוצים להשתמש ב-AI אבל לא יודעים מאיפה להתחיל",
  "תקציב שהושקע בכלים ללא תוצאות מוחשיות",
  "חשש מפיטורים או שינוי תפקידים בגלל אוטומציה",
  "ניסיונות כושלים ליישום AI שנגמרו בהרפתקאות מיותרות",
  "הרגשה שהארגון נשאר מאחור בזמן שהמתחרים כבר משתמשים ב-AI",
];

export function ProblemSection() {
  return (
    <SectionContainer spacing="md" variant="dark">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                האם זה <span className="text-primary">מוכר לכם</span>?
              </h2>
              <p className="text-base md:text-lg text-muted-foreground">
                אתגרים נפוצים שארגונים מתמודדים איתם בדרך ל-AI
              </p>
            </div>

            {/* Problems list */}
            <div className="space-y-2.5">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-foreground">{problem}</p>
                </div>
              ))}
            </div>

            {/* Challenging question */}
            <div className="pt-2">
              <p className="text-xl md:text-2xl font-bold text-foreground">
                כמה שעות עבודה שילמת החודש על משימות שאפשר{" "}
                <span className="text-primary">להוריד ל-10 דקות</span>?
              </p>
            </div>
          </div>

          <div>
            <ImagePlaceholder
              aspectRatio="portrait"
              label="צוות מתוסכל / משרד עם אתגרים"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
