import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({ icon, className, type, ...props }, ref) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 pr-3 rounded border border-input bg-background focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 overflow-hidden",
        className
      )}
    >
      <input
        type="text"
        className={cn(
          "flex h-[calc(2.5rem-0.125rem)] w-full px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
        )}
        ref={ref}
        {...props}
      />

      {icon}
    </div>
  );
});
FormInput.displayName = "Input";

export { FormInput };
