import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95",
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/95",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/85",
        tertiary: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        danger: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/95",
        success: "bg-green-600 text-white hover:bg-green-700 active:bg-green-800",
        warning: "bg-yellow-600 text-white hover:bg-yellow-700 active:bg-yellow-800",
        info: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80",
        link: "text-primary underline-offset-4 hover:underline active:text-primary/80",
      },
      size: {
        xs: "h-7 rounded px-2 text-xs",
        sm: "h-9 rounded-md px-3",
        default: "h-10 px-4 py-2",
        lg: "h-11 rounded-md px-8",
        xl: "h-12 rounded-md px-10",
        "2xl": "h-14 rounded-lg px-12 text-base",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
        "icon-lg": "h-12 w-12",
      },
      shape: {
        default: "",
        rounded: "rounded-full",
        square: "rounded-none",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
      fullWidth: false,
    },
  }
)

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
    
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, shape, fullWidth, className }),
          pressed && "bg-accent text-accent-foreground",
          loading && "cursor-not-allowed"
        )}
        ref={ref}
        disabled={disabled || loading}
        aria-pressed={pressed}
        {...props}
      >
        {loading && <Loader2 className="h-4 w-4 animate-spin" />}
        {loading && loadingText ? loadingText : children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
