import { createContext, useLocalStorage } from "~/utils";

type TabsContextType = {
  hasHydrationToggle: boolean;
  isHydrated: boolean;
  setIsHydrated: (isHydrated: boolean) => void;
};

const [ComponentDemoContextProvider, useComponentDemoContext] =
  createContext<TabsContextType>({
    name: "ComponentDemoContext",
  });

type ComponentIntroProps = {
  hasHydrationToggle?: boolean;
  children: React.ReactNode;
};

function ComponentIntro({
  hasHydrationToggle = false,
  children,
}: ComponentIntroProps) {
  const [isHydrated, setIsHydrated] = useLocalStorage<boolean>(
    "simulate-is-hydrated",
    true
  );

  return (
    <ComponentDemoContextProvider
      value={{ hasHydrationToggle, isHydrated, setIsHydrated }}
    >
      <div children={children} />
    </ComponentDemoContextProvider>
  );
}

export { ComponentIntro, useComponentDemoContext };
