export default function MovieListSkeleton() {
  return (
    <div className="my-5 grid grid-cols-2 gap-3 md:grid-cols-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <div
          key={`skeleton-${idx}`}
          className="relative h-65 w-45 animate-pulse rounded bg-gray-300"
        />
      ))}
    </div>
  );
}
