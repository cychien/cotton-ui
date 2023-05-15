import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";

import { useTheme } from "../helpers/theme";
import type { ThemeComponent } from "../types";
import { cn } from "../utils";
import { ButtonPrimitive } from "./ButtonPrimitive";

const buttonVariant = cva(
  "inline-flex justify-center text-sm rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-color-ring disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "border border-color-main bg-color-main text-color-contrast shadow-sm shadow-color-shadow/5 hover:enabled:opacity-80",
        outline:
          "border border-color-border text-color-mild-main shadow-sm shadow-color-shadow/5 hover:enabled:bg-color-accent hover:enabled:text-color-main",
        secondary:
          "border border-color-secondary bg-color-secondary text-color-main hover:enabled:opacity-80",
        ghost:
          "border border-transparent text-color-mild-main hover:enabled:bg-color-accent hover:enabled:text-color-main",
        link: "border border-transparent text-color-mild-main underline-offset-4 hover:enabled:underline hover:enabled:text-color-main",
      },
      size: {
        sm: "py-1 px-2",
        default: "py-2 px-3",
        md: "py-2.5 px-4",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ComponentPropsWithoutRef<typeof ButtonPrimitive>,
    VariantProps<typeof buttonVariant>,
    ThemeComponent {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, theme, className, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <ButtonPrimitive
        ref={ref}
        className={cn(
          buttonVariant({
            variant,
            size,
            className,
          })
        )}
        style={themeStyles}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
