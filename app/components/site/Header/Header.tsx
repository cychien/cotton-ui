import { Link } from "@remix-run/react";

import { GithubFilled } from "~/components/icons";

function Header() {
  return (
    <header className="border-b border-slate-200 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" prefetch="intent" className="flex items-center space-x-2">
          <span className="h-8 w-8 flex-shrink-0 rounded-full bg-slate-900" />
          <span className="font-medium text-slate-900">Cotton UI</span>
        </Link>
        <a
          href="https://github.com/cychien/cotton-ui"
          target="_blank"
          rel="noreferrer"
          className="text-slate-300 transition-colors hover:text-slate-400"
        >
          <GithubFilled />
        </a>
      </div>
    </header>
  );
}

export { Header };
