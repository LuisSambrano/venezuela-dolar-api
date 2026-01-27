import * as React from "react";
import { HTMLMotionProps, motion, Transition } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const glassCardVariants = cva(
  "relative overflow-hidden transition-all duration-300",
  {
    variants: {
      intent: {
        glass:
          "bg-surface-1/80 border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl backdrop-saturate-150",
        neo: "bg-surface-2 border border-white/10 shadow-lg",
        ghost: "bg-transparent border-transparent hover:bg-white/5",
      },
      paddings: {
        none: "p-0",
        sm: "p-4",
        md: "p-6", // Luxury Standard
        lg: "p-8",
      },
      rounding: {
        md: "rounded-xl",
        lg: "rounded-2xl",
        full: "rounded-[2rem]", // Apple Style
      },
    },
    defaultVariants: {
      intent: "glass",
      paddings: "md",
      rounding: "lg",
    },
  },
);

const SPRING_TRANSITION: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1,
};

export interface GlassCardProps
  extends HTMLMotionProps<"div">, VariantProps<typeof glassCardVariants> {
  children?: React.ReactNode;
  /**
   * If true, enables the magnetic lift effect on hover.
   */
  hoverEffect?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  (
    { className, intent, paddings, rounding, hoverEffect, children, ...props },
    ref,
  ) => {
    return (
      <motion.div
        ref={ref}
        initial={false}
        whileHover={hoverEffect ? { y: -4, scale: 1.01 } : undefined}
        transition={SPRING_TRANSITION}
        className={cn(
          glassCardVariants({ intent, paddings, rounding }),
          className,
        )}
        {...props}
      >
        {/* Noise Texture Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-noise-pattern opacity-[0.02] mix-blend-overlay" />

        {/* Content */}
        <div className="relative z-10">{children}</div>
      </motion.div>
    );
  },
);

GlassCard.displayName = "GlassCard";

export { GlassCard, glassCardVariants };
