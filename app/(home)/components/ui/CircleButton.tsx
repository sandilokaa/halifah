import { cn } from "@/utils/cn";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { Loader2 } from "lucide-react";

const circleButtonVariants = cva(
  [
    "cursor-pointer inline-flex justify-center items-center font-medium whitespace-nowrap transition-all rounded-full h-fit w-fit p-2",
    "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-6 shrink-0 [&_svg]:shrink-0",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "bg-[#F6F6F6] text-[#1E1E1E]",
        secondary: "bg-[#FFFFFF] text-[#1E1E1E]",
        ghost: "bg-transparent text-[#1E1E1E]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

type CircleButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof circleButtonVariants> & {
    icon?: React.ReactNode;
    href?: string;
    load?: boolean;
    asChild?: boolean;
    onClick?: () => void;
  };

const CircleButton = ({
  icon,
  className,
  asChild = false,
  variant,
  load = false,
  href,
  ...props
}: CircleButtonProps) => {
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
      className={cn(circleButtonVariants({ variant, className }))}
      {...linkProps}
      {...props}
    >
      {load ? (
        <Loader2 className="w-6 h-4 animate-spin text-white" />
      ) : icon ? (
        icon
      ) : null}
    </Comp>
  );
};

export { CircleButton, circleButtonVariants };
