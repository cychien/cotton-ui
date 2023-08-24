import { Navigation } from "./Navigation";

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="container mx-auto flex justify-center">
      <div className="hidden lg:relative lg:block lg:flex-none">
        <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50" />
        <div className="sticky top-0 -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto overflow-x-hidden py-16 pl-0.5">
          <Navigation />
        </div>
      </div>
      {children}
    </div>
  );
}

export { Layout };
