import { Link, useLocation } from "@remix-run/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { buttonVariant } from "~/components/cotton/button";
import { useTheme } from "~/components/cotton/helpers/theme";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/cotton/tabs";
import { cn } from "~/components/cotton/utils";

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
      className="flex min-h-full min-w-0 max-w-2xl flex-auto flex-col py-9 pt-16 md:px-4 lg:max-w-none lg:pl-8 lg:pr-0 xl:px-16"
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
        "prose-lead:text-basic-pale-main",
        // links
        "prose-a:font-medium",
        // link underline
        "prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,theme(colors.basic.secondary))] hover:prose-a:[--tw-prose-underline-size:6px]",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-basic-main prose-pre:shadow-lg",
        className
      )}
      children={children}
    />
  );
}

type ArticleLayoutProps = {
  section: string;
  title: string;
  forComponent?: boolean;
  children: React.ReactNode;
};

function ArticleLayout({
  section,
  title,
  forComponent = false,
  children,
}: ArticleLayoutProps) {
  return (
    <article>
      <header className="mb-9 space-y-1">
        <p className="font-lexend text-sm font-medium text-basic-pale-main">
          {section}
        </p>

        <h1 className="font-lexend text-3xl tracking-tight text-basic-main">
          {title}
        </h1>
      </header>
      <Prose
        className={cn({
          "prose-h2:mt-16 prose-hr:first-of-type:mb-6 prose-hr:first-of-type:mt-8":
            forComponent,
        })}
      >
        {children}
      </Prose>
    </article>
  );
}

type PreviousNextContentProps = {
  previous?: { title: string; href: string };
  next?: { title: string; href: string };
};

function PreviousNextContent({ previous, next }: PreviousNextContentProps) {
  const themeStyles = useTheme();

  return (
    <div className="mt-auto">
      <hr className="my-[2em] h-0 border-t-[1px] border-basic-border" />
      <div className="flex">
        {previous && (
          <Link
            to={previous.href}
            prefetch="intent"
            className={cn(
              buttonVariant({ variant: "outline" }),
              "flex items-center hover:bg-basic-pale-accent hover:text-basic-main"
            )}
            style={themeStyles}
          >
            <ChevronLeft className="mr-1.5 h-4 w-4" />
            {previous.title}
          </Link>
        )}
        {next && (
          <Link
            to={next.href}
            prefetch="intent"
            className={cn(
              buttonVariant({ variant: "outline" }),
              "ml-auto flex items-center hover:bg-basic-pale-accent hover:text-basic-main"
            )}
            style={themeStyles}
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
              className="text-basic-main-900 font-lexend text-sm font-medium"
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
                          ? "text-basic-mild-main"
                          : "font-normal text-basic-pale-main hover:text-basic-mild-main"
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

type ComponentShowcaseProps = {
  code: string;
  children: React.ReactNode;
};

function ComponentShowcase({ code, children }: ComponentShowcaseProps) {
  const { pathname, search } = useLocation();

  return (
    <div className="not-prose">
      <Tabs id="showcase" url={pathname + search} defaultValue="preview">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview">
          <div className="flex min-h-[180px] items-center justify-center rounded-md border border-basic-border bg-[url('/assets/dots-bg.svg')] p-4">
            {children}
          </div>
        </TabsContent>
        <TabsContent value="code">
          <div className="w-full overflow-x-auto rounded-md border border-basic-border py-4">
            <pre>
              <code className="block text-sm">{code}</code>
            </pre>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

type CodeBlockProps = {
  children: React.ReactNode;
};

function CodeBlock({ children }: CodeBlockProps) {
  return (
    <div className="not-prose mt-3 w-full overflow-x-auto rounded-md border border-basic-border py-4">
      <pre>
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
          <span className="ml-3 font-mono text-[13px] tracking-tighter text-basic-pale-main">
            {type}
          </span>
          {required && (
            <span className="relative -top-0.5 ml-2 rounded-full border border-basic-border bg-basic-mild-accent px-2 py-0.5 text-xs font-medium text-basic-mild-main">
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
  ComponentShowcase,
  ContentLayout,
  MainContentLayout,
  PreviousNextContent,
  TableOfContents,
};
