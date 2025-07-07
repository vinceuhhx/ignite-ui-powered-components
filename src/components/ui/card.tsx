
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

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
    // Load base CSS when component mounts
    React.useEffect(() => {
      const cssUrl = "https://cdn.sdworx.com/ignite/styling/legacy/webkit-7.6.2.css";
      const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
      if (!existingLink) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = cssUrl;
        document.head.appendChild(link);
      }
    }, []);

    const baseClasses = cardVariants({ variant, size, padding });
    const shadowClass = shadow ? "shadow" : "";
    const finalClassName = [baseClasses, shadowClass, className].filter(Boolean).join(" ");

    return (
      <div
        ref={ref}
        className={finalClassName}
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
    className={["card-header", className].filter(Boolean).join(" ")}
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
    className={["card-title", className].filter(Boolean).join(" ")}
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
    className={["card-description", className].filter(Boolean).join(" ")}
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
    className={["card-body", className].filter(Boolean).join(" ")}
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
    className={["card-footer", className].filter(Boolean).join(" ")}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants };
