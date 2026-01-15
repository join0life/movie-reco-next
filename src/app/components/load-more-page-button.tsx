import MovieListSkeleton from "./movie-list-skeleton";

export default function LoadMorePageButton({
  onClick,
  isLoading,
}: {
  onClick: () => void;
  isLoading: boolean;
}) {
  if (isLoading) {
    return <MovieListSkeleton />;
  } else {
    return (
      <button
        onClick={onClick}
        className="w-fit cursor-pointer border px-2 py-1 text-indigo-800"
        disabled={isLoading}
      >
        더보기
      </button>
    );
  }
}
