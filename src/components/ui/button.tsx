import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

const buttonVariants = cva("btn", {
  variants: {
    variant: {
      default: "btn-primary",
      primary: "btn-primary",
      secondary: "btn-secondary",
      tertiary: "btn-tertiary",
      danger: "btn-danger",
      destructive: "btn-danger",
      success: "btn-success",
      warning: "btn-warning",
      info: "btn-info",
      outline: "btn-outline",
      ghost: "btn-ghost",
      link: "btn-link",
    },
    size: {
      xs: "btn-xs",
      sm: "btn-sm",
      default: "",
      lg: "btn-lg",
      xl: "btn-xl",
      "2xl": "btn-2xl",
      icon: "btn-icon",
      "icon-sm": "btn-icon-sm",
      "icon-lg": "btn-icon-lg",
    },
    shape: {
      default: "",
      rounded: "btn-rounded",
      square: "btn-square",
    },
    fullWidth: {
      true: "btn-fullwidth",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    shape: "default",
    fullWidth: false,
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  pressed?: boolean
  loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, shape, fullWidth, asChild = false, loading = false, pressed = false, loadingText, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    
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

    const baseClasses = buttonVariants({ variant, size, shape, fullWidth });
    const pressedClass = pressed ? "btn-pressed" : "";
    const loadingClass = loading ? "btn-loading" : "";
    const finalClassName = [baseClasses, pressedClass, loadingClass, className].filter(Boolean).join(" ");
    
    return (
      <Comp
        className={finalClassName}
        ref={ref}
        disabled={disabled || loading}
        aria-pressed={pressed}
        {...props}
      >
        {loading && <Loader2 className="loader-icon" />}
        {loading && loadingText ? loadingText : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
