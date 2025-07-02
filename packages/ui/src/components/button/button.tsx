import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { loadCss, loadBaseCss } from "../../utils/load-css";

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      primary: "btn-primary",
      secondary: "btn-secondary", 
      tertiary: "btn-tertiary",
      danger: "btn-danger",
      destructive: "btn-danger",
      link: "btn-link",
      // Legacy mappings for compatibility
      outline: "btn-secondary",
      ghost: "btn-tertiary",
    },
    size: {
      default: "",
      sm: "btn-sm",
      lg: "btn-lg",
      xl: "btn-xl", 
      icon: "",
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
    // Load base CSS with legacy styles when component mounts
    React.useEffect(() => {
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