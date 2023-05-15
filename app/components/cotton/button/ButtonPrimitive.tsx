import * as React from "react";

const ButtonPrimitive = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<"button">
>((props, ref) => {
  return <button ref={ref} {...props} />;
});
ButtonPrimitive.displayName = "ButtonPrimitive";

export { ButtonPrimitive };
