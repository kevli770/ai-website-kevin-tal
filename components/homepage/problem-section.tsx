import { SectionContainer } from "@/components/shared/section-container";
import { AlertCircle } from "lucide-react";

const problems = [
  "עובדים משחיקים זמן על הכנת דוחות",
  "מנהלים כותבים שוב ושוב את אותה המצגת",
  "שיווק מייצר תוכן לא עקבי",
  "ישיבות נסגרות בלי תיעוד",
  "ידע שווה כסף הולך לאיבוד",
];

export function ProblemSection() {
  return (
    <SectionContainer spacing="lg" variant="gradient">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold">
          אתה כבר{" "}
          <span className="text-destructive">שילמת ביוקר</span>
          {" "}על חוסר יעילות
        </h2>

        <p className="text-xl text-muted-foreground">
          זה קורה בכל ארגון.
        </p>

        {/* Problems list */}
        <div className="space-y-4 text-right max-w-2xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-lg bg-destructive/10 border border-destructive/20 hover:border-destructive/40 transition-colors"
            >
              <AlertCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-1" />
              <p className="text-lg text-foreground">{problem}</p>
            </div>
          ))}
        </div>

        {/* Challenging question */}
        <div className="pt-8">
          <p className="text-2xl md:text-3xl font-bold text-primary">
            כמה שעות עבודה שילמת החודש
            <br />
            על משימות שאפשר{" "}
            <span className="gradient-text">להוריד ל-10 דקות</span>?
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
