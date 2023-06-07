import * as RadixTabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { composeURL, createContext, useHydrated } from "../utils";

type TabsContextType = {
  id: string;
  currentURL: string;
  currentValue: string | undefined;
};

const [TabsContextProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
});

type TabsRef = React.ElementRef<typeof RadixTabsPrimitive.Root>;
interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Root> {
  id: string;
  url: string;
  defaultValue: string;
}

const TabsPrimitive = React.forwardRef<TabsRef, TabsProps>(
  ({ id, url, defaultValue, ...props }, ref) => {
    const search = url.split("?")[1];
    const searchParams = new URLSearchParams(search);
    const currentValue = searchParams.get(id) || defaultValue;

    return (
      <TabsContextProvider value={{ id, currentURL: url, currentValue }}>
        <RadixTabsPrimitive.Root
          ref={ref}
          id={id}
          defaultValue={currentValue}
          {...props}
        />
      </TabsContextProvider>
    );
  }
);
TabsPrimitive.displayName = RadixTabsPrimitive.Root.displayName;

const TabsListPrimitive = RadixTabsPrimitive.List;

type TabsTriggerRef =
  | React.ElementRef<typeof RadixTabsPrimitive.Trigger>
  | React.ElementRef<"a">;
interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Trigger> {}

const TabsTriggerPrimitive = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ value, className, children, ...props }, ref) => {
    const hydrated = useHydrated();
    const tabsContext = useTabsContext();
    const url = composeURL({
      url: tabsContext.currentURL,
      searchParams: { [tabsContext.id]: value },
      hash: tabsContext.id,
    });

    return !hydrated ? (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={url}
        className={className}
        data-state={tabsContext.currentValue === value ? "active" : "inactive"}
      >
        {children}
      </a>
    ) : (
      <RadixTabsPrimitive.Trigger
        ref={ref as React.Ref<HTMLButtonElement>}
        className={className}
        value={value}
        {...props}
      >
        {children}
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
