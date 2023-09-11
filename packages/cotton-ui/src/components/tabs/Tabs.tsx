import * as RadixTabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { composeURL, createContext } from "../../utils";

type TabsContextType = {
  id: string;
  url: string;
};

const [TabsContextProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
});

type TabsRef = React.ElementRef<typeof RadixTabsPrimitive.Root>;
interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Root> {
  id: string;
  url: string;
  isHydrtionDisabled?: boolean;
}

const TabsPrimitive = React.forwardRef<TabsRef, TabsProps>(
  (
    {
      id,
      url,
      value: valueProps,
      defaultValue: defaultValueProps,
      isHydrtionDisabled,
      ...props
    },
    ref
  ) => {
    const search = url.split("?")[1];
    const searchParams = new URLSearchParams(search);
    const defaultValue = valueProps
      ? undefined
      : searchParams.get(id) || defaultValueProps;
    const value = valueProps ? valueProps : undefined;

    return (
      <TabsContextProvider value={{ id, url }}>
        <RadixTabsPrimitive.Root
          ref={ref}
          id={id}
          value={value}
          defaultValue={defaultValue}
          {...props}
        />
      </TabsContextProvider>
    );
  }
);
TabsPrimitive.displayName = RadixTabsPrimitive.Root.displayName;

const TabsListPrimitive = RadixTabsPrimitive.List;

type TabsTriggerRef = React.ElementRef<"a">;
interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Trigger> {
  isHydrtionDisabled?: boolean;
}

const TabsTriggerPrimitive = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ value, className, children, isHydrtionDisabled, ...props }, ref) => {
    const tabsContext = useTabsContext();

    const url = composeURL({
      url: tabsContext.url,
      searchParams: { [tabsContext.id]: value },
      hash: tabsContext.id,
    });

    return (
      <RadixTabsPrimitive.Trigger asChild={true} value={value} {...props}>
        <a
          ref={ref}
          href={url}
          className={className}
          onClick={(e) => {
            if (!isHydrtionDisabled) {
              e.preventDefault();
            }
          }}
        >
          {children}
        </a>
      </RadixTabsPrimitive.Trigger>
    );
  }
);
TabsTriggerPrimitive.displayName = RadixTabsPrimitive.Trigger.displayName;

const TabsContentPrimitive = RadixTabsPrimitive.Content;

export {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
};
