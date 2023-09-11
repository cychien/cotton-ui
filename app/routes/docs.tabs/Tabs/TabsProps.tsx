import { useLocation } from "@remix-run/react";

import { ComponentProp } from "~/routes/docs/mdx";

function TabsProps() {
  const { pathname, search } = useLocation();

  return (
    <>
      <ComponentProp
        name="id"
        type="string"
        description="A unique id for the tabs. Used as the key of the query parameter of the redirect url before hydration."
        required
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="tabs-demo"
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="url"
        type="string"
        description="The url of the current page. Used to redirect users before hydration. It should also be available on the server side."
        required
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value={pathname + search}
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="value"
        type="string"
        description="The selected tab. Used when you want controlled tabs"
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="cotton"
          readOnly
        />
      </ComponentProp>
      <ComponentProp
        name="defaultValue"
        type="string"
        description="The default selected tab."
      >
        <input
          type="text"
          className="form-input block w-[180px] cursor-not-allowed rounded-md border-slate-300 text-sm shadow-sm read-only:bg-slate-50 focus:border-slate-200 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
          value="cotton"
          readOnly
        />
      </ComponentProp>
    </>
  );
}

export { TabsProps };
