import { Link, useLocation } from "@remix-run/react";

import { navigation } from "~/data/navigation";
import { cn } from "~/utils";

function Navigation() {
  const { pathname } = useLocation();

  return (
    <nav className="w-52 pr-8 text-base lg:text-sm xl:pr-16">
      <ul className="space-y-9">
        {navigation.map((section) => (
          <li key={section.title}>
            <h2 className="font-lexend font-medium text-slate-900">
              {section.title}
            </h2>
            <ul className="mt-2 space-y-2 border-l-2 border-slate-200/50 lg:mt-4 lg:space-y-4 lg:border-slate-200">
              {section.links.map((link) => (
                <li key={link.href} className="relative">
                  <Link
                    to={link.href}
                    prefetch="intent"
                    className={cn(
                      "block w-full pl-3.5 text-slate-500 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:hidden before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full before:bg-slate-300 hover:text-slate-700 hover:before:block",
                      {
                        "font-medium text-slate-900 before:block before:bg-slate-700":
                          link.href === pathname,
                      }
                    )}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { Navigation };
