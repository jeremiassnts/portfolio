export const profile = {
  name: "Jeremias Santos",
  role: "Full Stack Developer",
  location: "Brazil",
  availableForWork: true,
  heroImage: "/images/profile/hero-placeholder.svg",
  aboutImage: "/images/profile/profile_picture.webp",
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
      value: "jeremiassnts3@gmail.com",
      href: "mailto:jeremiassnts3@gmail.com",
    },
    {
      type: "github",
      icon: "github",
      accentColor: "amber",
      value: "jeremiassnts",
      href: "https://github.com/jeremiassnts",
    },
    {
      type: "linkedin",
      icon: "linkedin",
      accentColor: "purple",
      value: "in/jeremias-santos-b98674119",
      href: "https://linkedin.com/in/jeremias-santos-b98674119",
    },
  ],
} as const;
