import * as React from "react";

import { createContext } from "~/utils";

type TabsContextType = {};

const [TabsContextProvider, useTabsContext] = createContext<TabsContextType>({
  name: "TabsDemoContext",
});

type TabsProviderProps = {
  children: React.ReactNode;
};

function TabsProvider({ children }: TabsProviderProps) {
  return <TabsContextProvider value={{}}>{children}</TabsContextProvider>;
}

export { TabsProvider, useTabsContext };
