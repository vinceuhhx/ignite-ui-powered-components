"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

export interface BodyProps extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  size?: "small" | "medium" | "large"
  weight?: "regular" | "medium" | "bold"
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
  align?: "left" | "center" | "right" | "justify"
  truncate?: boolean
  lines?: 1 | 2 | 3 | 4 | "none"
  asChild?: boolean
  as?: "p" | "span" | "div"
}

const Body = React.forwardRef<HTMLElement, BodyProps>(
  (
    {
      size = "medium",
      weight = "regular",
      color = "default",
      align = "left",
      truncate = false,
      lines = "none",
      asChild = false,
      as = "p",
      style,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : as

    const getTypographyFont = () => {
      const weightSuffix = weight === "bold" ? "bold" : weight === "medium" ? "medium" : "regular"

      switch (size) {
        case "small":
          return `var(--ig-typography-body-small-${weightSuffix})`
        case "large":
          return `var(--ig-typography-body-large-${weightSuffix})`
        default:
          return `var(--ig-typography-body-medium-${weightSuffix})`
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
          return "var(--ig-text-medium-inverse)"
        default:
          return "var(--ig-text-medium)"
      }
    }

    const getTextAlign = () => {
      switch (align) {
        case "center":
          return "center"
        case "right":
          return "right"
        case "justify":
          return "justify"
        default:
          return "left"
      }
    }

    const getLineClampStyles = () => {
      if (lines === "none" || !lines) return {}

      return {
        display: "-webkit-box",
        WebkitLineClamp: Number.parseInt(lines.toString()),
        WebkitBoxOrient: "vertical" as const,
        overflow: "hidden",
      }
    }

    const bodyStyles: React.CSSProperties = {
      font: getTypographyFont(),
      color: getTextColor(),
      textAlign: getTextAlign(),
      margin: "0",
      ...(truncate && {
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }),
      ...getLineClampStyles(),
      ...style,
    }

    return React.createElement(Component, {
      ref,
      style: bodyStyles,
      ...props,
    })
  },
)

Body.displayName = "Body"

export { Body }
