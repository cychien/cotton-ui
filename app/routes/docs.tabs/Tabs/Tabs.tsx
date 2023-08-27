import { useLocation } from "@remix-run/react";
import * as React from "react";

import { useComponentDemoContext } from "~/routes/docs/mdx";
import { cn } from "~/utils";

import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
  useTabs,
} from "../../../../lib/src/components/tabs";

function TabsComponent() {
  const { pathname, search } = useLocation();
  const tabsProps = useTabs({
    id: "tabs-demo",
    url: pathname + search,
    defaultValue: "cotton",
  });

  return (
    <Tabs {...tabsProps}>
      <TabsList>
        <TabsTrigger value="cotton">Cotton</TabsTrigger>
        <TabsTrigger value="linen">Linen</TabsTrigger>
        <TabsTrigger value="jute">Jute</TabsTrigger>
        <TabsTrigger value="sisal">Sisal</TabsTrigger>
        <TabsTrigger value="coir">Coir</TabsTrigger>
      </TabsList>
      <TabsContent value="cotton">Cotton content</TabsContent>
      <TabsContent value="linen">Linen content</TabsContent>
      <TabsContent value="jute">Jute content</TabsContent>
      <TabsContent value="sisal">Sisal content</TabsContent>
      <TabsContent value="coir">Coir content</TabsContent>
    </Tabs>
  );
}

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive> {}
type TabsRef = React.ElementRef<typeof TabsPrimitive>;

const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ className, ...props }, ref) => {
    const { isHydrated } = useComponentDemoContext();
    return (
      <TabsPrimitive
        ref={ref}
        className={className}
        isHydrtionDisabled={!isHydrated}
        {...props}
      />
    );
  }
);
Tabs.displayName = "Tabs";

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive> {}
type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsListPrimitive
        ref={ref}
        className={cn(
          "relative flex items-center space-x-2 after:absolute after:bottom-0 after:left-0 after:block after:h-[3px] after:w-full after:bg-slate-100 after:content-['']",
          className
        )}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive> {}
type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ className, ...props }, ref) => {
    const { isHydrated } = useComponentDemoContext();
    return (
      <TabsTriggerPrimitive
        ref={ref}
        className={cn(
          "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded p-3 text-sm font-medium text-slate-500 transition-all hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-slate-900 data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:block data-[state=active]:after:h-[3px] data-[state=active]:after:w-full data-[state=active]:after:bg-slate-900 data-[state=active]:after:content-['']",
          className
        )}
        isHydrtionDisabled={!isHydrated}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsContentPrimitive> {}
type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <TabsContentPrimitive
        ref={ref}
        className={cn(
          "mt-6 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

const tabsCode = `\
  import {
    TabsContentPrimitive,
    TabsListPrimitive,
    TabsPrimitive,
    TabsTriggerPrimitive,
    useTabs,
  } from "@cychien/cotton-ui";

  function TabsComponent() {
    const { pathname, search } = useLocation();
    const tabsProps = useTabs({
      id: "tabs-demo",
      url: pathname + search,
      defaultValue: "cotton",
    });

    return (
      <Tabs {...tabsProps}>
        <TabsList>
          <TabsTrigger value="cotton">Cotton</TabsTrigger>
          <TabsTrigger value="linen">Linen</TabsTrigger>
          <TabsTrigger value="jute">Jute</TabsTrigger>
          <TabsTrigger value="sisal">Sisal</TabsTrigger>
          <TabsTrigger value="coir">Coir</TabsTrigger>
        </TabsList>
        <TabsContent value="cotton">Cotton content</TabsContent>
        <TabsContent value="linen">Linen content</TabsContent>
        <TabsContent value="jute">Jute content</TabsContent>
        <TabsContent value="sisal">Sisal content</TabsContent>
        <TabsContent value="coir">Coir content</TabsContent>
      </Tabs>
    );
  }

  interface TabsProps
    extends React.ComponentPropsWithoutRef<typeof TabsPrimitive> {}
  type TabsRef = React.ElementRef<typeof TabsPrimitive>;

  const Tabs = React.forwardRef<TabsRef, TabsProps>(
    ({ className, ...props }, ref) => {
      return <TabsPrimitive ref={ref} className={className} {...props} />;
    }
  );
  Tabs.displayName = "Tabs";

  interface TabsListProps
    extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive> {}
  type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;

  const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
    ({ className, ...props }, ref) => {
      return (
        <TabsListPrimitive
          ref={ref}
          className={cn(
            "relative flex items-center space-x-2 after:absolute after:bottom-0 after:left-0 after:block after:h-[3px] after:w-full after:bg-slate-100 after:content-['']",
            className
          )}
          {...props}
        />
      );
    }
  );
  TabsList.displayName = "TabsList";

  interface TabsTriggerProps
    extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive> {}
  type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;

  const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
    ({ className, ...props }, ref) => {
      return (
        <TabsTriggerPrimitive
          ref={ref}
          className={cn(
            "relative z-10 inline-flex items-center justify-center whitespace-nowrap rounded p-3 text-sm font-medium text-slate-500 transition-all hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-slate-900 data-[state=active]:after:absolute data-[state=active]:after:bottom-0 data-[state=active]:after:left-0 data-[state=active]:after:block data-[state=active]:after:h-[3px] data-[state=active]:after:w-full data-[state=active]:after:bg-slate-900 data-[state=active]:after:content-['']",
            className
          )}
          {...props}
        />
      );
    }
  );
  TabsTrigger.displayName = "TabsTrigger";

  interface TabsContentProps
    extends React.ComponentPropsWithoutRef<typeof TabsContentPrimitive> {}
  type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;

  const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
    ({ className, ...props }, ref) => {
      return (
        <TabsContentPrimitive
          ref={ref}
          className={cn(
            "mt-6 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2",
            className
          )}
          {...props}
        />
      );
    }
  );
  TabsContent.displayName = "TabsContent";
`;

const tabsAnatomy = `\
  function Tabs() {
    const { pathname, search } = useLocation(); // Get current url. It should also be available on the server side
    const tabsProps = useTabs({
      id: "tabs-id",
      url: pathname + search,
      defaultValue: "a",
    });

    return (
      <Tabs {...tabsProps}>
        <TabsList>
          <TabsTrigger value="a">A</TabsTrigger>
          <TabsTrigger value="b">B</TabsTrigger>
          <TabsTrigger value="c">C</TabsTrigger>
        </TabsList>
        <TabsContent value="a">
          A
        </TabsContent>
        <TabsContent value="b">
          B
        </TabsContent>
        <TabsContent value="c">
          C
        </TabsContent>
      </Tabs>
    )
  }
`;

export { TabsComponent as Tabs, tabsAnatomy, tabsCode };
