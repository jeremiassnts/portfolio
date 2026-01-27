export function SectionLoader() {
  return (
    <div className="container mx-auto px-4 py-24 md:py-28">
      <div className="max-w-5xl mx-auto animate-pulse">
        {/* Section title skeleton */}
        <div className="text-center mb-16">
          <div className="h-10 bg-muted rounded-lg w-64 mx-auto mb-4" />
          <div className="w-20 h-1 bg-muted mx-auto rounded-full mb-6" />
          <div className="h-6 bg-muted rounded-lg w-96 mx-auto" />
        </div>
        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-xl p-6 border">
              <div className="h-48 bg-muted rounded-lg mb-4" />
              <div className="h-4 bg-muted rounded w-3/4 mb-2" />
              <div className="h-4 bg-muted rounded w-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
