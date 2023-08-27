function Recipes() {
  return (
    <div className="not-prose mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
      <a
        href="https://justincy.com/articles/anitabs"
        target="_blank"
        rel="noreferrer"
        className="block cursor-pointer divide-y-2 divide-slate-100 overflow-hidden rounded-lg border border-slate-200 shadow transition-all hover:border-slate-300 hover:shadow-md"
      >
        <div className="flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/dgppby8lr/image/upload/v1692788682/blog/animated-tabs_r0ghgf.png"
            alt="animated tabs"
            className="max-h-[150px] object-cover object-center"
          />
        </div>
        <div className="bg-slate-50 px-4 py-3">
          <div className="text-sm font-medium">Animated Tabs</div>
          <p className="mt-2 text-xs text-slate-500">
            In this tabs, when a tab becomes active, the pill indicator slides
            to it, and only the text on the pill changes color.
          </p>
        </div>
      </a>
    </div>
  );
}

export { Recipes };
