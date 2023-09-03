import { useLocation } from "@remix-run/react";
import * as React from "react";

import { Switch } from "~/components/site/Switch";
import { cn, useHydrated } from "~/utils";

import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
  useTabs,
} from "../../../../lib/src/components/tabs";
import { useComponentDemoContext } from "./ComponentIntro";

type ComponentDemoProps = {
  code: string;
  children: React.ReactNode;
};

function ComponentDemo({ code, children }: ComponentDemoProps) {
  const { pathname, search } = useLocation();
  const tabsProps = useTabs({
    id: "demo",
    url: pathname + search,
    defaultValue: "preview",
  });
  const { hasHydrationToggle, isHydrated, setIsHydrated } =
    useComponentDemoContext();
  const hydrated = useHydrated();

  return (
    <div className="not-prose">
      <Tabs {...tabsProps}>
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="relative flex min-h-[180px] items-center justify-center overflow-x-auto rounded-md border border-slate-200 bg-[url('/assets/dots-bg.svg')] px-4 py-20">
            {hasHydrationToggle && hydrated && (
              <div className="absolute right-4 top-4 flex items-center space-x-2">
                <label
                  htmlFor="isHydrated-switch"
                  className="text-sm font-medium"
                >
                  {isHydrated ? "Hydrated" : "Unhydrated"}
                </label>
                <Switch
                  id="isHydrated-switch"
                  checked={isHydrated}
                  onCheckedChange={(v) => {
                    setIsHydrated(v);
                  }}
                />
              </div>
            )}
            {children}
          </div>
          {hasHydrationToggle && (
            <div className="mt-1 text-sm font-medium text-slate-500">
              (After flipping the toggle, interact with the component to see the
              changes)
            </div>
          )}
        </TabsContent>
        <TabsContent value="code">
          <div className="max-h-[500px] w-full max-w-[718px] overflow-x-auto rounded-md border border-slate-200 py-4 2xl:max-w-[776px]">
            <pre>
              <code className="block text-sm">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
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
          "inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500",
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
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm",
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
          "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200 focus-visible:ring-offset-2",
          className
        )}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { ComponentDemo };
