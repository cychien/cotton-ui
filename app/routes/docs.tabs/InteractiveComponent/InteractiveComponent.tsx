import { useLocation } from "@remix-run/react";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/cotton/tabs";
import { ComponentPropSection, ComponentShowcase } from "~/routes/docs/mdx";

function InteractiveComponent() {
  const { pathname, search } = useLocation();

  return (
    <div className="not-prose">
      <ComponentShowcase
        code={`\
  import { Tabs } from "~/components/cotton/button"
  import { useLocation } from "@remix-run/react";
 
  function TabsDemo() {
    const { pathname, search } = useLocation();

    return (
      <Tabs id="demo" url={pathname + search} defaultValue="todo">
        <TabsList>
          <TabsTrigger value="todo">Todo</TabsTrigger>
          <TabsTrigger value="in-progress">In Progress</TabsTrigger>
          <TabsTrigger value="done">Done</TabsTrigger>
        </TabsList>
        <TabsContent value="todo">
          Todo
        </TabsContent>
        <TabsContent value="in-progress">
          In Progress
        </TabsContent>
        <TabsContent value="done">
          Done
        </TabsContent>
      </Tabs>
    )
  }
`}
      >
        <Tabs id="tabs-demo" url={pathname + search} defaultValue="todo">
          <TabsList>
            <TabsTrigger value="todo">Todo</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress</TabsTrigger>
            <TabsTrigger value="done">Done</TabsTrigger>
          </TabsList>
          <TabsContent value="todo">Todo</TabsContent>
          <TabsContent value="in-progress">In Progress</TabsContent>
          <TabsContent value="done">Done</TabsContent>
        </Tabs>
      </ComponentShowcase>

      <div className="-mb-6 mt-6">
        <div id="props" className="text-sm font-medium text-basic-pale-main">
          Props
        </div>
        <div className="divide-y">
          <ComponentPropSection
            name="id"
            type="string"
            description="A unique id for the tabs. Used as the key of the query parameter of the redirect url before hydration."
            required
          />
          <ComponentPropSection
            name="url"
            type="string"
            description="The url of the current page. Used to redirect users before hydration."
            required
          />
          <ComponentPropSection
            name="defaultValue"
            type="string"
            description="The default selected tab."
          />
        </div>
        {/* <div className="mt-2">
          <div className="flex items-center justify-center rounded-md bg-basic-pale-accent py-2.5">
            <ElementsPlusMono className="h-4 w-4 flex-shrink-0" />
            <span className="ml-2 text-sm font-medium text-basic-mild-main">
              Plus all props from Radix UI Button
            </span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export { InteractiveComponent };
