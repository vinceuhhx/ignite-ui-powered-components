
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";
import { loadBaseCss } from "../../utils/load-css";

const cardVariants = cva("card", {
  variants: {
    variant: {
      default: "",
      outlined: "card-outlined",
      elevated: "card-elevated",
    },
    size: {
      default: "",
      sm: "card-sm",
      lg: "card-lg",
      xl: "card-xl",
    },
    padding: {
      default: "",
      none: "card-no-padding",
      sm: "card-padding-sm",
      lg: "card-padding-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    padding: "default",
  },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  shadow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, padding, shadow, ...props }, ref) => {
    // Load base CSS with legacy styles when component mounts
    React.useEffect(() => {
      loadBaseCss();
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, size, padding }),
          shadow && "shadow",
          className
        )}
        {...props}
      />
    );
  }
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("card-header", className)}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("card-title", className)}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("card-description", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("card-body", className)} 
    {...props} 
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("card-footer", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  cardVariants
};
export type { CardProps };
