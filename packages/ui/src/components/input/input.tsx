import * as React from "react";
import { cn } from "../../utils/cn";
import { loadCss } from "../../utils/load-css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    // Load component CSS when component mounts
    React.useEffect(() => {
      loadCss("input");
    }, []);

    return (
      <input
        type={type}
        className={cn("ignite-input", className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };