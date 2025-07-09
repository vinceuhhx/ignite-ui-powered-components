import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

const buttonVariants = cva("ig-btn", {
  variants: {
    variant: {
      filled: "",
      outlined: "",
      soft: "",
      plain: "",
    },
    color: {
      primary: "",
      danger: "",
      success: "",
    },
    size: {
      sm: "ig-btn--sm",
      md: "",
      lg: "ig-btn--lg",
      icon: "ig-btn--icon",
    },
  },
  compoundVariants: [
    { variant: "filled",  color: "primary", class: "ig-btn--filled" },
    { variant: "outlined", color: "primary", class: "ig-btn--outlined" },
    { variant: "soft",     color: "primary", class: "ig-btn--soft" },
    { variant: "plain",    color: "primary", class: "ig-btn--plain" },

    { variant: "filled",  color: "danger", class: "ig-btn--danger-filled" },
    { variant: "outlined", color: "danger", class: "ig-btn--danger-outlined" },
    { variant: "soft",     color: "danger", class: "ig-btn--danger-soft" },
    { variant: "plain",    color: "danger", class: "ig-btn--danger-plain" },

    { variant: "filled",  color: "success", class: "ig-btn--success-filled" },
    { variant: "outlined", color: "success", class: "ig-btn--success-outlined" },
    { variant: "soft",     color: "success", class: "ig-btn--success-soft" },
    { variant: "plain",    color: "success", class: "ig-btn--success-plain" },
  ],
  defaultVariants: {
    variant: "filled",
    color: "primary",
    size: "md",
  },
})

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  loadingText?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      asChild = false,
      loading = false,
      loadingText,
      variant,
      color,
      size,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const variantClasses = buttonVariants({ variant, color, size })
    const classes = [variantClasses, className].filter(Boolean).join(" ")

    return (
      <Comp
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading && <Loader2 className="ig-btn__icon" />}
        {loading ? (loadingText ?? children) : children}
      </Comp>
    )
  }
)

Button.displayName = "Button"