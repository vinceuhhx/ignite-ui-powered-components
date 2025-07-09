// src/components/Banner.tsx
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export type BannerVariant = "info" | "danger" | "success" | "warning";
export type BannerSize = "md" | "lg";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style: info, danger, success, warning */
  variant?: BannerVariant;
  /** Size of the banner: md or lg */
  size?: BannerSize;
  /** Icon React node, e.g. <i className="illustrative-info" /> */
  icon?: React.ReactNode;
  /** Actions region: buttons or links */
  actions?: React.ReactNode;
  /** Show a close button (calls onClose if provided) */
  onClose?: () => void;
  /** Render as child slot if wrapping another element */
  asChild?: boolean;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  (
    {
      variant = "info",
      size = "md",
      icon,
      actions,
      onClose,
      asChild = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const base = "ig-banner";
    const variantClass = `ig-banner--${variant}`;
    const sizeClass = `ig-banner--${size}`;

    return (
      <Comp
        ref={ref}
        role="alert"
        className={[base, variantClass, sizeClass, className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        {icon && <div className="ig-banner__icon">{icon}</div>}
        <div className="ig-banner__content">
          {/** children should include heading and description markup */}
          {children}
        </div>
        {actions && <div className="ig-banner__actions">{actions}</div>}
        {onClose && (
          <button
            type="button"
            aria-label="Remove"
            className="ig-btn-close"
            onClick={onClose}
          />
        )}
      </Comp>
    );
  }
);

Banner.displayName = "Banner";
