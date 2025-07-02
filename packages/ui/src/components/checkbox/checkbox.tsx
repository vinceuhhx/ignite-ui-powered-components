import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "../../utils/cn";
import { loadCss } from "../../utils/load-css";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => {
  // Load component CSS when component mounts
  React.useEffect(() => {
    loadCss("checkbox");
  }, []);

  return (
    <CheckboxPrimitive.Root
      ref={ref}
      className={cn("ignite-checkbox", className)}
      {...props}
    >
      <CheckboxPrimitive.Indicator className="ignite-checkbox__indicator">
        <svg
          className="ignite-checkbox__check"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20,6 9,17 4,12" />
        </svg>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
});

Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };