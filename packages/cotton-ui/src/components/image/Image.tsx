import * as React from "react";

import { cn } from "../../utils";

type ImageRef = React.ElementRef<"img">;
interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {
  width: number;
  height: number;
  placeholder?: string;
  maxJSWaitTime?: number; // in seconds
}

const ImagePrimitive = React.forwardRef<ImageRef, ImageProps>(
  ({ className, placeholder, maxJSWaitTime = 5, ...props }, ref) => {
    const imageId = React.useId();
    const emptyRef = React.useRef<HTMLImageElement>(null);
    const imageRef = (ref || emptyRef) as React.RefObject<HTMLImageElement>;

    const imgElementForDetectingLoaded = `
      <img
        alt=""
        src="${props.src}"
        width="${props.width}"
        height="${props.height}"
        ${props.srcSet ? `srcSet="${props.srcSet}"` : ""}
        ${props.sizes ? `sizes="${props.sizes}"` : ""}
        ${props.decoding ? `decoding="${props.decoding}"` : ""}
        ${props.loading ? `loading="${props.loading}"` : ""}
        style="position:absolute; inset: 0;"
        class="${cn(className, "cotton-opacity-0")}"
        onload="setTimeout(function(){document.getElementById('${imageId}').classList.remove('cotton-opacity-0')}, 0)"
      />
    `;

    const switchToNativeModeIfWaitingTooLongScript = `
      <script>
        setTimeout(function() {
          document.getElementById('${imageId}').classList.remove('cotton-opacity-0');
        }, ${maxJSWaitTime * 1000});
      </script>
    `;

    return (
      <div>
        <style>{`.cotton-opacity-0 {opacity: 0;}`}</style>
        <div style={{ position: "relative" }}>
          {placeholder && (
            <img
              alt={props.alt}
              src={placeholder}
              width={props.width}
              height={props.height}
              className={className}
            />
          )}
          <img
            ref={imageRef}
            id={imageId}
            alt={props.alt}
            style={{
              position: "absolute",
              inset: 0,
              transitionProperty: "opacity",
              transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
              transitionDuration: "150ms",
            }}
            className={cn(className, "cotton-opacity-0")}
            suppressHydrationWarning
            {...props}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: imgElementForDetectingLoaded,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: switchToNativeModeIfWaitingTooLongScript,
            }}
          />
          <noscript>
            <img
              ref={imageRef}
              alt={props.alt}
              style={{
                position: "absolute",
                inset: 0,
              }}
              className={className}
              {...props}
            />
          </noscript>
        </div>
      </div>
    );
  }
);
ImagePrimitive.displayName = "ImagePrimitive";

export { ImagePrimitive };
