import { clsx, type ClassValue } from "clsx";

/**
 * Utility function for composing CSS classes.
 * Wraps clsx for compatibility with shadcn/ui patterns.
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}