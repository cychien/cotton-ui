import * as RadixTabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import { composeURL, createContext } from "../../utils";

type UseTabsArgs = {
  id: string;
  url: string;
  defaultValue: string;
};

function useTabs({ id, url, defaultValue }: UseTabsArgs) {
  const search = url.split("?")[1];
  const searchParams = new URLSearchParams(search);

  const [value, setValue] = React.useState(
    () => searchParams.get(id) || defaultValue
  );

  return { id, url, value, onValueChange: setValue };
}

type TabsContextType = {
  id: string;
  url: string;
  value: string;
};

const [TabsContextProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsContext",
});

type TabsRef = React.ElementRef<typeof RadixTabsPrimitive.Root>;
interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Root> {
  id: string;
  url: string;
  value: string;
}

const TabsPrimitive = React.forwardRef<TabsRef, TabsProps>(
  ({ id, url, value, ...props }, ref) => {
    return (
      <TabsContextProvider value={{ id, url, value }}>
        <RadixTabsPrimitive.Root ref={ref} id={id} value={value} {...props} />
      </TabsContextProvider>
    );
  }
);
TabsPrimitive.displayName = RadixTabsPrimitive.Root.displayName;

const TabsListPrimitive = RadixTabsPrimitive.List;

type TabsTriggerRef = React.ElementRef<"a">;
interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof RadixTabsPrimitive.Trigger> {}

const TabsTriggerPrimitive = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ value, className, children, ...props }, ref) => {
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
            e.preventDefault();
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
  useTabs,
};
