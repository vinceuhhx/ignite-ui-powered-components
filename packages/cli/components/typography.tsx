"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import type { JSX } from "react/jsx-runtime"

export interface TypographyProps extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: "bold" | "medium" | "regular"
  color?:
    | "default"
    | "bold"
    | "medium"
    | "soft"
    | "primary"
    | "secondary"
    | "tertiary"
    | "success"
    | "warning"
    | "danger"
    | "inverse"
  align?: "left" | "center" | "right"
  truncate?: boolean
  asChild?: boolean
}

const Typography = React.forwardRef<HTMLHeadingElement, TypographyProps>(
  (
    {
      level = 3,
      weight = "bold",
      color = "default",
      align = "left",
      truncate = false,
      asChild = false,
      style,
      ...props
    },
    ref,
  ) => {
    const HeadingTag = asChild ? Slot : (`h${level}` as keyof JSX.IntrinsicElements)

    const getTypographyFont = () => {
      const weightSuffix = weight === "bold" ? "bold" : weight === "medium" ? "medium" : "regular"

      switch (level) {
        case 1:
          return `var(--ig-typography-heading-xxlarge-${weightSuffix})`
        case 2:
          return `var(--ig-typography-heading-xlarge-${weightSuffix})`
        case 3:
          return `var(--ig-typography-heading-large-${weightSuffix})`
        case 4:
          return `var(--ig-typography-heading-medium-${weightSuffix})`
        case 5:
          return `var(--ig-typography-heading-small-${weightSuffix})`
        case 6:
          return `var(--ig-typography-heading-xsmall-${weightSuffix})`
        default:
          return `var(--ig-typography-heading-large-${weightSuffix})`
      }
    }

    const getTextColor = () => {
      switch (color) {
        case "bold":
          return "var(--ig-text-bold)"
        case "medium":
          return "var(--ig-text-medium)"
        case "soft":
          return "var(--ig-text-soft)"
        case "primary":
          return "var(--ig-text-primary)"
        case "secondary":
          return "var(--ig-text-secondary)"
        case "tertiary":
          return "var(--ig-text-tertiary)"
        case "success":
          return "var(--ig-text-success)"
        case "warning":
          return "var(--ig-text-warning)"
        case "danger":
          return "var(--ig-text-danger)"
        case "inverse":
          return "var(--ig-text-bold-inverse)"
        default:
          return "var(--ig-text-bold)"
      }
    }

    const getTextAlign = () => {
      switch (align) {
        case "center":
          return "center"
        case "right":
          return "right"
        default:
          return "left"
      }
    }

    const headingStyles: React.CSSProperties = {
      font: getTypographyFont(),
      color: getTextColor(),
      textAlign: getTextAlign(),
      margin: "0",
      ...(truncate && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      ...style,
    }

    return React.createElement(HeadingTag, {
      ref,
      style: headingStyles,
      ...props,
    })
  },
)

Typography.displayName = "Typography"

export { Typography }