// components/Badge.tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export type BadgeVariant = 
  | "gray"
  | "info"
  | "success"
  | "warning"
  | "danger"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Visual style (maps to .ig-tag--${variant})
   * @default "gray"
   */
  variant?: BadgeVariant
  /**
   * Render as a child slot (to wrap an <a>, etc.)
   */
  asChild?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "gray", asChild = false, className = "", ...props }, ref) => {
    const Comp = asChild ? Slot : "span"
    const base = "ig-tag"
    const variantClass = `ig-tag--${variant}`
    return (
      <Comp
        ref={ref}
        className={`${base} ${variantClass} ${className}`.trim()}
        {...props}
      />
    )
  }
)

Badge.displayName = "Badge"