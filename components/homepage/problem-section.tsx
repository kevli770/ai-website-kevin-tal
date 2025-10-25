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
    <SectionContainer spacing="xl" variant="glass">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                האם זה <span className="text-primary">מוכר לכם</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                אתגרים נפוצים שארגונים מתמודדים איתם בדרך ל-AI
              </p>
            </div>

            {/* Problems list */}
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-destructive/5 border border-destructive/20 hover:border-destructive/40 transition-colors"
                >
                  <AlertCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{problem}</p>
                </div>
              ))}
            </div>

            {/* Challenging question */}
            <div className="pt-4">
              <p className="text-2xl md:text-3xl font-bold text-foreground">
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
