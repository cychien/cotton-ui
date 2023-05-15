import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { useLocation } from "@remix-run/react";

import { Button } from "~/components/cotton/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/cotton/tabs";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const location = useLocation();

  return (
    <div className="p-8">
      <div className="grid grid-cols-3">
        <div>
          <div className="flex items-start space-x-4">
            <Button size="sm">Add Title</Button>
            <Button>Add Title</Button>
            <Button size="md">Add Title</Button>
          </div>
          <div className="mt-4 flex items-start space-x-4">
            <Button variant="outline" size="sm">
              Add Title
            </Button>
            <Button variant="outline">Add Title</Button>
            <Button variant="outline" size="md">
              Add Title
            </Button>
          </div>
          <div className="mt-4 flex items-start space-x-4">
            <Button variant="secondary" size="sm">
              Add Title
            </Button>
            <Button variant="secondary">Add Title</Button>
            <Button variant="secondary" size="md">
              Add Title
            </Button>
          </div>
          <div className="mt-4 flex items-start space-x-4">
            <Button variant="ghost" size="sm">
              Add Title
            </Button>
            <Button variant="ghost">Add Title</Button>
            <Button variant="ghost" size="md">
              Add Title
            </Button>
          </div>
          <div className="mt-4 flex items-start space-x-4">
            <Button variant="link" size="sm">
              Add Title
            </Button>
            <Button variant="link">Add Title</Button>
            <Button variant="link" size="md">
              Add Title
            </Button>
          </div>
        </div>
        <div>
          <Tabs
            defaultValue="account"
            url={location.pathname + location.search}
            id="hey"
          >
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">1</TabsContent>
            <TabsContent value="password">2</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
