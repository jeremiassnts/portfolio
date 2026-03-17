const sectionIds = ["projects", "about", "technologies", "contact"] as const;

export default function Home() {
  return (
    <main>
      <section className="min-h-[60vh] flex items-center justify-center">
        <p className="text-foreground-secondary">Hero — coming next</p>
      </section>
      {sectionIds.map((id) => (
        <section
          key={id}
          id={id}
          className="min-h-[40vh] flex items-center justify-center border-t border-border"
        >
          <p className="text-foreground-tertiary font-mono text-sm">{id}</p>
        </section>
      ))}
    </main>
  );
}
