import { ElementsPlusMono } from "~/components/icons";

type ComponentPropsProps = {
  radixName: string;
  children: React.ReactNode;
};

function ComponentProps({ radixName, children }: ComponentPropsProps) {
  return (
    <div className="mb-6 mt-6">
      <div id="props" className="text-sm font-medium text-slate-500">
        Props
      </div>
      <div className="divide-y">{children}</div>
      <div className="mt-2">
        <div className="flex items-center justify-center rounded-md bg-slate-50 py-2.5">
          <ElementsPlusMono className="h-4 w-4 flex-shrink-0" />
          <span className="ml-2 text-sm font-medium text-slate-700">
            Plus all props from{" "}
            <a
              href={`https://www.radix-ui.com/primitives/docs/components/${radixName}`}
              target="_blank"
              rel="noreferrer"
            >
              Radix UI {radixName}
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

type ComponentPropProps = {
  name: string;
  type: string;
  description?: string;
  required?: boolean;
  children?: React.ReactNode;
};

function ComponentProp({
  name,
  type,
  description,
  required = false,
  children,
}: ComponentPropProps) {
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

export { ComponentProp, ComponentProps };
