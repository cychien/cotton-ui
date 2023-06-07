import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { Outlet } from "@remix-run/react";

import { Layout } from "./Layout";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
