import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "gradient" | "glass";
  spacing?: "sm" | "md" | "lg" | "xl";
  fullWidth?: boolean;
  id?: string;
}

const spacingClasses = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
};

const variantClasses = {
  default: "",
  gradient: "gradient-bg",
  glass: "glass",
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
      <div className={cn(!fullWidth && "container mx-auto px-4 md:px-6")}>
        {children}
      </div>
    </section>
  );
}
