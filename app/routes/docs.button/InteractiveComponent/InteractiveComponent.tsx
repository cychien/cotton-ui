import * as React from "react";

import type { ButtonPropsType } from "~/components/cotton/button";
import { Button } from "~/components/cotton/button";
import { ComponentPropSection, ComponentShowcase } from "~/routes/docs/mdx";

function InteractiveComponent() {
  const [variant, setVariant] = React.useState<ButtonPropsType["variant"]>();
  const [size, setSize] = React.useState<ButtonPropsType["size"]>();

  return (
    <div className="not-prose">
      <ComponentShowcase
        code={`\
  import { Button } from "~/components/cotton/button"
 
  function ButtonDemo() {
    return <Button>Button</Button>
  }
`}
      >
        <Button variant={variant} size={size}>
          Button
        </Button>
      </ComponentShowcase>

      <div className="-mb-6 mt-6">
        <div id="props" className="text-sm font-medium text-basic-pale-main">
          Props
        </div>
        <div className="divide-y">
          <ComponentPropSection
            name="variant"
            type={`"default" | "outline" | "secondary" | "ghost" | "link"`}
          >
            <select
              className="form-select block w-[180px] rounded-md border-gray-300 text-sm shadow-sm focus:border-basic-border focus:ring focus:ring-basic-ring focus:ring-opacity-50"
              onChange={(e) => {
                setVariant(e.target.value as ButtonPropsType["variant"]);
              }}
            >
              <option>default</option>
              <option>outline</option>
              <option>secondary</option>
              <option>ghost</option>
              <option>link</option>
            </select>
          </ComponentPropSection>
          <ComponentPropSection name="size" type={`"default" | "sm" | "lg"`}>
            <select
              className="form-select block w-[180px] rounded-md border-gray-300 text-sm shadow-sm focus:border-basic-border focus:ring focus:ring-basic-ring focus:ring-opacity-50"
              onChange={(e) => {
                setSize(e.target.value as ButtonPropsType["size"]);
              }}
            >
              <option>default</option>
              <option>sm</option>
              <option>lg</option>
            </select>
          </ComponentPropSection>
        </div>
        {/* <div className="mt-2">
          <div className="flex items-center justify-center rounded-md bg-basic-pale-accent py-2.5">
            <ElementsPlusMono className="h-4 w-4 flex-shrink-0" />
            <span className="ml-2 text-sm font-medium text-basic-mild-main">
              Plus all props from Radix UI Button
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export { InteractiveComponent };
