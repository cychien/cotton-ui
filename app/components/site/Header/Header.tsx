import { Link } from "@remix-run/react";

import { GithubFilled } from "~/components/icons";

function Header() {
  return (
    <header className="border-b border-basic-border py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" prefetch="intent" className="flex items-center space-x-2">
          <span className="h-8 w-8 flex-shrink-0 rounded-full bg-basic-main" />
          <span className="font-medium text-basic-main">Cotton UI</span>
        </Link>
        <a
          href="https://github.com/cychien/cotton-ui"
          target="_blank"
          rel="noreferrer"
          className="text-basic-secondary hover:text-basic-pale-main"
        >
          <GithubFilled />
        </a>
      </div>
    </header>
  );
}

export { Header };
