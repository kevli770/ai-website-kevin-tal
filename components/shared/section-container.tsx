import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "glass" | "dark" | "darker" | "accent";
  spacing?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  id?: string;
}

const spacingClasses = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-16",
  lg: "py-12 md:py-20",
  xl: "py-16 md:py-24",
};

const variantClasses = {
  default: "",
  gradient: "gradient-bg",
  glass: "glass",
  dark: "section-dark",
  darker: "section-darker",
  accent: "section-accent",
};

export function SectionContainer({
  children,
  className,
  variant = "default",
  spacing = "lg",
  fullWidth = false,
  id,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        variantClasses[variant],
        "relative",
        className
      )}
    >
      <div className={cn(!fullWidth && "container mx-auto px-4 md:px-6", "relative z-10")}>
        {children}
      </div>
    </section>
  );
}
