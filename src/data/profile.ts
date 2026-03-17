export const profile = {
  name: "Jeremias Santos",
  role: "Full Stack Developer",
  location: "Brazil",
  availableForWork: true,
  heroImage: "/images/profile/hero-placeholder.svg",
  aboutImage: "/images/profile/about-placeholder.svg",
  contacts: [
    {
      type: "location",
      icon: "map-pin",
      accentColor: "green",
      value: "Brazil",
      href: null,
    },
    {
      type: "email",
      icon: "mail",
      accentColor: "cyan",
      value: "hello@jeremias.dev",
      href: "mailto:hello@jeremias.dev",
    },
    {
      type: "github",
      icon: "github",
      accentColor: "amber",
      value: "@jeremiassantos",
      href: "https://github.com/jeremiassantos",
    },
    {
      type: "linkedin",
      icon: "linkedin",
      accentColor: "purple",
      value: "/in/jeremiassantos",
      href: "https://linkedin.com/in/jeremiassantos",
    },
  ],
} as const;
