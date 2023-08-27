import { createContext, useLocalStorage } from "~/utils";

type TabsContextType = {
  isHydrated: boolean;
  setIsHydrated: (isHydrated: boolean) => void;
};

const [ComponentDemoContextProvider, useComponentDemoContext] =
  createContext<TabsContextType>({
    name: "ComponentDemoContext",
  });

type ComponentIntroProps = {
  children: React.ReactNode;
};

function ComponentIntro({ children }: ComponentIntroProps) {
  const [isHydrated, setIsHydrated] = useLocalStorage<boolean>(
    "simulate-is-hydrated",
    true
  );

  return (
    <ComponentDemoContextProvider value={{ isHydrated, setIsHydrated }}>
      <div children={children} />
    </ComponentDemoContextProvider>
  );
}

export { ComponentIntro, useComponentDemoContext };
