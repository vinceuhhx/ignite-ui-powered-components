import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { loadCss } from "../../utils/load-css";

const buttonVariants = cva("ignite-button", {
  variants: {
    variant: {
      default: "ignite-button--default",
      destructive: "ignite-button--destructive",
      outline: "ignite-button--outline",
      secondary: "ignite-button--secondary",
      ghost: "ignite-button--ghost",
      link: "ignite-button--link",
    },
    size: {
      default: "ignite-button--size-default",
      sm: "ignite-button--size-sm",
      lg: "ignite-button--size-lg",
      icon: "ignite-button--size-icon",
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
    // Load component CSS when component mounts
    React.useEffect(() => {
      loadCss("button");
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