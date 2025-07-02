import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { loadCss, loadBaseCss } from "../../utils/load-css";

const buttonVariants = cva("ig-btn", {
  variants: {
    variant: {
      default: "ig-btn--primary",
      destructive: "ig-btn--danger",
      outline: "ig-btn--secondary",
      secondary: "ig-btn--secondary", 
      ghost: "ig-btn--tertiary",
      link: "ig-btn--text",
    },
    size: {
      default: "",
      sm: "ig-btn--sm",
      lg: "ig-btn--lg", 
      icon: "ig-btn--icon",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    // Load component CSS and base tokens when component mounts
    React.useEffect(() => {
      loadCss("button");
      loadBaseCss();
    }, []);

    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };