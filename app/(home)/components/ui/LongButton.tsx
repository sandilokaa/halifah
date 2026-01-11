import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const longButtonVariants = cva(
  [
    "cursor-pointer inline-flex justify-center items-center gap-2 font-medium whitespace-nowrap transition-all rounded-full h-fit w-fit text-md",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-[#1E1E1E] text-white",
        secondary: "bg-[#F6F6F6] text-[#1E1E1E]",
        plain: "bg-transparent text-[#1E1E1E] border border-[#1E1E1E]",
        ghost: "bg-transparent text-[#1E1E1E]",
      },
      size: {
        default: "py-3 px-6",
        sm: "py-[10px] px-4",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type LongButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof longButtonVariants> & {
    text?: React.ReactNode;
    icon?: React.ReactNode;
    href?: string;
    load?: boolean;
    asChild?: boolean;
    iconPosition?: "left" | "right";
    onClick?: () => void;
  };

const LongButton = ({
  text,
  icon,
  size,
  className,
  children,
  asChild = false,
  variant,
  load = false,
  iconPosition = "left",
  href,
  ...props
}: LongButtonProps) => {
  let Comp: React.ElementType;

  if (href) {
    Comp = Link;
  } else if (asChild) {
    Comp = Slot;
  } else {
    Comp = "button";
  }

  const linkProps = href ? { to: href } : {};

  return (
    <Comp
      data-slot="button"
      className={cn(longButtonVariants({ size, variant, className }))}
      {...linkProps}
      {...props}
    >
      {load ? (
        <Loader2 className="w-6 h-4 animate-spin text-white" />
      ) : children ? (
        children
      ) : iconPosition === "right" ? (
        <>
          {text}
          {icon}
        </>
      ) : (
        <>
          {icon}
          {text}
        </>
      )}
    </Comp>
  );
};

export { LongButton, longButtonVariants };
