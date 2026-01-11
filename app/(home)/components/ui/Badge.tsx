"use client";

import * as React from "react";
import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 px-3 py-2 font-medium whitespace-nowrap transition-all rounded-full text-md border border-[#D8D8D8] w-fit h-fit",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-white text-[#1E1E1E]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type BadgeProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof badgeVariants> & {
    text?: React.ReactNode;
    icon?: React.ReactNode;
    load?: boolean;
    asChild?: boolean;
    iconPosition?: "left" | "right";
  };

const Badge = React.forwardRef<HTMLButtonElement, BadgeProps>(
  (
    {
      text,
      icon,
      className,
      children,
      asChild = false,
      variant,
      load = false,
      iconPosition = "left",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        type="button"
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      >
        {load ? (
          <Loader2 className="size-4 animate-spin" />
        ) : children ? (
          children
        ) : (
          <>
            {iconPosition === "left" && icon}
            {text}
            {iconPosition === "right" && icon}
          </>
        )}
      </Comp>
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
