type Link = {
  title: string;
  href: string;
};

type Section = {
  title: string;
  links: Array<Link>;
};

type Navigation = Array<Section>;

export const navigation: Navigation = [
  {
    title: "Getting Started",
    links: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Installation", href: "/docs/installation" },
      { title: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Button", href: "/docs/button" },
      { title: "Tabs", href: "/docs/tabs" },
    ],
  },
];
