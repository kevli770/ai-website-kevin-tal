import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CTAButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "default" | "lg" | "xl";
  className?: string;
  showIcon?: boolean;
}

const sizeClasses = {
  default: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-10 py-5 text-xl",
};

export function CTAButton({
  children,
  href,
  onClick,
  variant = "primary",
  size = "default",
  className,
  showIcon = true,
}: CTAButtonProps) {
  const buttonVariant = variant === "outline" ? "outline" : "default";

  const buttonContent = (
    <>
      {children}
      {showIcon && <ArrowLeft className="mr-2 h-5 w-5 rotate-180" />}
    </>
  );

  const buttonClasses = cn(
    sizeClasses[size],
    "gap-2 font-semibold transition-all hover:scale-105",
    variant === "primary" && "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/50",
    variant === "secondary" && "bg-secondary text-secondary-foreground hover:bg-secondary/90",
    className
  );

  if (href) {
    return (
      <Button
        asChild
        variant={buttonVariant}
        className={buttonClasses}
      >
        <Link href={href}>
          {buttonContent}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      onClick={onClick}
      variant={buttonVariant}
      className={buttonClasses}
    >
      {buttonContent}
    </Button>
  );
}
