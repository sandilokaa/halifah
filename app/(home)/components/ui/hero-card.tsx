import * as React from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

/* =======================
  Base Card Variants
======================= */
const heroCardVariants = cva("p-4 rounded-2xl drop-shadow-sm flex flex-col", {
  variants: {
    variant: {
      default: "bg-white text-[#1E1E1E]",
      dark: "bg-[#1E1E1E] text-white",
      soft: "bg-[#F6F6F6] text-[#1E1E1E]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/* =======================
  Variant Style Mapping
======================= */
const variantStyles = {
  default: {
    icon: "bg-[#1E1E1E] text-white",
    badge: "bg-[#1E1E1E] text-white",
    description: "text-[#6B6B6B]",
  },
  dark: {
    icon: "bg-white text-[#1E1E1E]",
    badge: "bg-white text-[#1E1E1E]",
    description: "text-white/80",
  },
  soft: {
    icon: "bg-[#1E1E1E] text-white",
    badge: "bg-[#1E1E1E] text-white",
    description: "text-[#6B6B6B]",
  },
} as const;

/* =======================
  Props
======================= */
type HeroCardVariant = "default" | "dark" | "soft";

type HeroCardProps = {
  icon?: React.ReactNode;
  title: string;
  value: string | number;
  badge?: string;
  description?: string;
  variant?: HeroCardVariant;
  className?: string;
};

/* =======================
  Component
======================= */
export function HeroCard({
  icon,
  title,
  value,
  badge,
  description,
  variant = "default",
  className,
}: HeroCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn(heroCardVariants({ variant, className }))}>
      {icon && (
        <div className={cn("p-2 w-fit rounded-full", styles.icon)}>{icon}</div>
      )}

      <p className="mt-3 font-medium">{title}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="font-semibold text-[32px]">{value}</p>

        {badge && (
          <div
            className={cn(
              "py-0.5 px-1 rounded-sm text-sm font-medium",
              styles.badge
            )}
          >
            {badge}
          </div>
        )}
      </div>

      {description && (
        <p className={cn("mt-3 text-sm font-medium", styles.description)}>
          {description}
        </p>
      )}
    </div>
  );
}
