import * as React from "react";

import { useTheme } from "../helpers/theme";
import type { CottonComponent } from "../types";
import { cn } from "../utils";
import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
} from "./TabsPrimitive";

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive>,
    CottonComponent {}
type TabsRef = React.ElementRef<typeof TabsPrimitive>;

const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsPrimitive
        ref={ref}
        className={className}
        style={themeStyles}
        {...props}
      />
    );
  }
);
Tabs.displayName = "Tabs";

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive>,
    CottonComponent {}
type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsListPrimitive
        ref={ref}
        className={cn(
          "inline-flex h-10 items-center justify-center rounded-md bg-color-secondary p-1 text-color-pale-main",
          className
        )}
        style={themeStyles}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>,
    CottonComponent {}
type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsTriggerPrimitive
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-color-contrast data-[state=active]:text-color-main data-[state=active]:shadow-sm",
          className
        )}
        style={themeStyles}
        {...props}
      />
    );
  }
);
TabsTrigger.displayName = "TabsTrigger";

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsContentPrimitive>,
    CottonComponent {}
type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsContentPrimitive
        ref={ref}
        className={cn(
          "mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-color-ring focus-visible:ring-offset-2",
          className
        )}
        style={themeStyles}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
