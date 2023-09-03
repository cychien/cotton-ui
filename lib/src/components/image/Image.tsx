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
        class="${cn(className, "absolute inset-0 opacity-0")}"
        onload="document.getElementById('${imageId}').classList.remove('opacity-0')"
      />
    `;

    const switchToNativeModeIfWaitingTooLongScript = `
      <script>
        setTimeout(function() {
          document.getElementById('${imageId}').classList.remove('opacity-0');
        }, ${maxJSWaitTime * 1000});
      </script>
    `;

    return (
      <div className="relative">
        {placeholder && (
          <img
            alt={props.alt}
            src={placeholder}
            width={props.width}
            height={props.height}
            className={className}
          />
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: imgElementForDetectingLoaded,
          }}
        />
        <img
          ref={imageRef}
          id={imageId}
          alt={props.alt}
          className={cn(
            className,
            "absolute inset-0 opacity-0 transition-opacity"
          )}
          suppressHydrationWarning
          {...props}
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
            className={cn(className, "absolute inset-0 transition-opacity")}
            {...props}
          />
        </noscript>
      </div>
    );
  }
);
ImagePrimitive.displayName = "ImagePrimitive";

export { ImagePrimitive };
