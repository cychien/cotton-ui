import { Link } from "@remix-run/react";

import { GithubFilled } from "~/components/icons";

function Header() {
  return (
    <header className="border-b border-basic-border py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex">
            <span className="h-8 w-8 flex-shrink-0 rounded-full bg-basic-main" />
          </Link>
          <span className="font-medium text-basic-main">Cotton UI</span>
        </div>
        <a href="/" className="text-basic-pale-main hover:text-basic-mild-main">
          <GithubFilled />
        </a>
      </div>
    </header>
  );
}

export { Header };
