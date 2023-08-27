import { type ClassValue, clsx } from "clsx";
import * as React from "react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let hydrating = true;

export function useHydrated() {
  const [hydrated, setHydrated] = React.useState(() => !hydrating);

  React.useEffect(() => {
    hydrating = false;
    setHydrated(true);
  }, []);

  return hydrated;
}

type CreateContextArgs<T> = {
  name: string;
  defaultValue?: T;
};

export function createContext<T>({ name, defaultValue }: CreateContextArgs<T>) {
  const Context = React.createContext<T | undefined>(defaultValue);

  function useContext() {
    const context = React.useContext(Context);

    if (!context) {
      const consumerName = `use${name}`;
      const providerName = `<${name}.Provider>`;
      const errorMessage = `${consumerName} has to be used within ${providerName}`;
      throw new Error(errorMessage);
    }

    return context;
  }

  return [Context.Provider, useContext] as const;
}

export function useToggle(initialValue = false): [boolean, () => void] {
  const [value, setValue] = React.useState(initialValue);

  const toggle = () => {
    setValue((prev) => !prev);
  };

  return [value, toggle];
}

export function useLocalStorage<T>(key: string, initialValue: T) {
  const isClient = typeof window !== "undefined";

  // Get from local storage then use that to set our initial state
  const storedValue = isClient ? window.localStorage.getItem(key) : null;
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  // State to store our value
  const [value, setValue] = useState<T>(initial);

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setStoredValue = (newValue: T | ((prevValue: T) => T)) => {
    try {
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      // Save state
      setValue(valueToStore);

      // Only save to local storage if we're on the client side
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(
        `Failed to set value in localStorage for key: ${key}`,
        error
      );
    }
  };

  return [value, setStoredValue] as const;
}
