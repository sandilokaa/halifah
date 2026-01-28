import * as React from "react";
import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const solutionCardVariants = cva("pb-8 border-b flex flex-col", {
  variants: {
    variant: {
      default: "bg-white text-[#1E1E1E]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const variantStyles = {
  default: {
    icon: "bg-[#F6F6F6] text-[#1E1E1E]",
    description: "text-[#1E1E1E]",
  },
} as const;

type SolutionCardVariant = "default";

type SolutionCardProps = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  variant?: SolutionCardVariant;
  className?: string;
};

export function SolutionCard({
  icon,
  title,
  description,
  variant = "default",
  className,
}: SolutionCardProps) {
  const styles = variantStyles[variant];

  return (
    <div className={cn(solutionCardVariants({ variant, className }))}>
      {icon && (
        <div className={cn("p-3 w-fit rounded-full", styles.icon)}>{icon}</div>
      )}

      <p className="mt-4 font-semibold text-[22px]">{title}</p>

      {description && (
        <p className={cn("mt-2.5 font-medium", styles.description)}>
          {description}
        </p>
      )}
    </div>
  );
}
