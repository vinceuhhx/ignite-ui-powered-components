
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground", // Base Tailwind styles as fallback
  {
    variants: {
      variant: {
        default: "card border-border",
        outlined: "card-outlined border-2",
        elevated: "card-elevated shadow-lg",
      },
      size: {
        default: "",
        sm: "card-sm",
        lg: "card-lg", 
        xl: "card-xl",
      },
      padding: {
        default: "",
        none: "card-no-padding p-0",
        sm: "card-padding-sm p-3",
        lg: "card-padding-lg p-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default", 
      padding: "default",
    },
  }
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  shadow?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, padding, shadow, ...props }, ref) => {
    // Load legacy CSS when component mounts
    React.useEffect(() => {
      const cssUrl = "https://cdn.sdworx.com/ignite/styling/legacy/webkit-7.6.2.css";
      const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssUrl;
        link.onload = () => console.log("SD Worx card styles loaded");
        link.onerror = () => console.warn("Failed to load SD Worx card styles - using fallback styles");
        document.head.appendChild(link);
      }
    }, []);

    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, size, padding }),
          shadow && "shadow-lg",
          // Fallback Tailwind styles to ensure card is visible
          "min-h-[100px] w-full",
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
    className={cn("card-header flex flex-col space-y-1.5 p-6", className)}
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
    className={cn("card-title text-2xl font-semibold leading-none tracking-tight", className)}
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
    className={cn("card-description text-sm text-muted-foreground", className)}
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
    className={cn("card-body p-6 pt-0", className)} 
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
    className={cn("card-footer flex items-center p-6 pt-0", className)}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
