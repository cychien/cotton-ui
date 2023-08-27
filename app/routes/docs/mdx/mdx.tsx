import { Link, useLocation } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "~/utils";

type ContentLayoutProps = {
  children: React.ReactNode;
};

function ContentLayout(props: ContentLayoutProps) {
  return <div className="flex w-full" {...props} />;
}

type MainContentLayoutProps = {
  children: React.ReactNode;
};

function MainContentLayout(props: MainContentLayoutProps) {
  return (
    <div
      className="flex min-h-full min-w-0 max-w-2xl flex-auto flex-col py-9 pt-12 md:px-4 lg:max-w-none lg:pl-8 lg:pr-0 lg:pt-16 xl:px-16"
      {...props}
    />
  );
}

type ProseProps = {
  className?: string;
  children: React.ReactNode;
};

function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-slate max-w-none",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-lexend prose-headings:font-normal prose-h2:text-xl lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-500",
        // links
        "prose-a:font-medium",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.slate.300))] hover:prose-a:[--tw-prose-underline-size:6px]",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg",
        className
      )}
      children={children}
    />
  );
}

type ArticleLayoutProps = {
  section: string;
  title: string;
  description: string;
  forComponent?: boolean;
  children: React.ReactNode;
};

function ArticleLayout({
  section,
  title,
  description,
  forComponent = false,
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <header className="mb-9 space-y-1">
        <p className="font-lexend text-sm font-medium text-slate-500">
          {section}
        </p>

        <h1 className="font-lexend text-3xl tracking-tight text-slate-900">
          {title}
        </h1>
      </header>
      <div className={cn({ "mt-9 divide-y divide-slate-200": description })}>
        {description && <p className="mb-12 text-slate-700">{description}</p>}
        <Prose
          className={cn({
            "prose-h2:mt-16 prose-li:my-0 prose-hr:first-of-type:mb-6 prose-hr:first-of-type:mt-8":
              forComponent,
            "pt-8": !!description,
          })}
        >
          {children}
        </Prose>
      </div>
    </article>
  );
}

type PreviousNextContentProps = {
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
};

function PreviousNextContent({ previous, next }: PreviousNextContentProps) {
  return (
    <div className="mt-auto">
      <hr className="my-[2em] h-0 border-t-[1px] border-slate-200" />
      <div className="flex justify-between">
        {previous && (
          <Link
            to={previous.href}
            prefetch="intent"
            className="flex h-10 items-center justify-center rounded-md border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-200 focus-visible:ring-offset-2 hover:enabled:bg-slate-100 hover:enabled:text-slate-900 disabled:pointer-events-none disabled:opacity-50"
          >
            <ChevronLeft className="mr-1.5 h-4 w-4" />
            {previous.title}
          </Link>
        )}
        {next && (
          <Link
            to={next.href}
            prefetch="intent"
            className="ml-auto flex h-10 items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-none focus-visible:ring focus-visible:ring-slate-200 focus-visible:ring-offset-2 hover:enabled:bg-slate-100 hover:enabled:text-slate-900 disabled:pointer-events-none disabled:opacity-50"
          >
            {next.title}
            <ChevronRight className="ml-1.5 h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

type TableOfContentProps = {
  headings: Array<{ title: string; id: string }>;
};

function TableOfContents({ headings }: TableOfContentProps) {
  const { hash } = useLocation();

  return (
    <div className="top-0 hidden xl:sticky xl:-mr-6 xl:block xl:h-[calc(100vh-4.5rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
      <nav aria-labelledby="on-this-page-title" className="w-56">
        {headings.length > 0 && (
          <>
            <h2
              id="on-this-page-title"
              className="font-lexend text-sm font-medium text-slate-900"
            >
              On this page
            </h2>
            <ol className="mt-4 space-y-3 text-sm">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <h3>
                    <Link
                      to={`#${heading.id}`}
                      className={cn(
                        hash === heading.id
                          ? "text-slate-700"
                          : "font-normal text-slate-500 hover:text-slate-700"
                      )}
                    >
                      {heading.title}
                    </Link>
                  </h3>
                </li>
              ))}
            </ol>
          </>
        )}
      </nav>
    </div>
  );
}

type CodeBlockProps = {
  children: React.ReactNode;
};

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="not-prose mt-3 max-h-[500px] w-full overflow-x-auto rounded-md border border-slate-200 py-4">
      <pre className="whitespace-pre-wrap">
        <code className="block text-sm">{children}</code>
      </pre>
    </div>
  );
}

type ComponentPropSectionProps = {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  children?: React.ReactNode;
};

function ComponentPropSection({
  name,
  type,
  description,
  required = false,
  children,
}: ComponentPropSectionProps) {
  return (
    <div className="flex items-start justify-between space-x-12 py-6 first:pt-4">
      <div>
        <div className="flex items-baseline">
          <span className="text-sm font-bold">{name}</span>
          <span className="ml-3 font-mono text-[13px] tracking-tighter text-slate-500">
            {type}
          </span>
          {required && (
            <span className="relative -top-0.5 ml-2 rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">
              Required
            </span>
          )}
        </div>
        {description && <div className="mt-3 text-sm">{description}</div>}
      </div>
      {children}
    </div>
  );
}

export {
  ArticleLayout,
  CodeBlock,
  ComponentPropSection,
  ContentLayout,
  MainContentLayout,
  PreviousNextContent,
  TableOfContents,
};
