import * as React from "react";

import { useTheme } from "../helpers/theme";
import type { ThemeComponent } from "../types";
import { cn } from "../utils";
import {
  TabsContentPrimitive,
  TabsListPrimitive,
  TabsPrimitive,
  TabsTriggerPrimitive,
} from "./TabsPrimitive";

interface TabsProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive>,
    ThemeComponent {}
type TabsRef = React.ElementRef<typeof TabsPrimitive>;

const Tabs = React.forwardRef<TabsRef, TabsProps>(
  ({ theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return <TabsPrimitive ref={ref} style={themeStyles} {...props} />;
  }
);
Tabs.displayName = "Tabs";

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsListPrimitive>,
    ThemeComponent {}
type TabsListRef = React.ElementRef<typeof TabsListPrimitive>;

const TabsList = React.forwardRef<TabsListRef, TabsListProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsListPrimitive
        ref={ref}
        className={cn("flex space-x-2", className)}
        style={themeStyles}
        {...props}
      />
    );
  }
);
TabsList.displayName = "TabsList";

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsTriggerPrimitive>,
    ThemeComponent {}
type TabsTriggerRef = React.ElementRef<typeof TabsTriggerPrimitive>;

const TabsTrigger = React.forwardRef<TabsTriggerRef, TabsTriggerProps>(
  ({ className, theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsTriggerPrimitive
        ref={ref}
        className={cn(
          "inline-flex rounded-md px-3 py-2 text-sm font-medium text-basic-pale-main transition-all focus-visible:outline-none focus-visible:ring focus-visible:ring-color-ring disabled:opacity-50 data-[state=active]:bg-color-accent data-[state=active]:text-color-main data-[state=inactive]:hover:enabled:text-basic-main",
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
    ThemeComponent {}
type TabsContentRef = React.ElementRef<typeof TabsContentPrimitive>;

const TabsContent = React.forwardRef<TabsContentRef, TabsContentProps>(
  ({ theme, ...props }, ref) => {
    const themeStyles = useTheme(theme);

    return (
      <TabsContentPrimitive
        ref={ref}
        className={cn(
          "mt-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-basic-ring"
        )}
        style={themeStyles}
        {...props}
      />
    );
  }
);
TabsContent.displayName = "TabsContent";

export { Tabs, TabsContent, TabsList, TabsTrigger };
