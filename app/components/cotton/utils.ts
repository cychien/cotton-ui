import { type ClassValue, clsx } from "clsx";
import * as React from "react";
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

type appendSearchParamsArgs = {
  url: string;
  searchParams?: Record<string, string>;
  hash?: string;
};

// Acquiring the complete url can be challenging within certain frameworks (ex. Remix),
// hence we must accept urls starting with pathname
export function composeURL({
  url,
  searchParams,
  hash,
}: appendSearchParamsArgs) {
  const dummyUrl = new URL(url, "http://dummy.com");
  const query = dummyUrl.searchParams;
  const hashString = hash ? `#${hash}` : "";

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      query.set(key, value);
    });
  }

  return dummyUrl.pathname + dummyUrl.search + hashString;
}
