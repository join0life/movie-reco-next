import MovieDetail from "@/app/components/movie-detail";
import MovieItemSkeleton from "@/app/components/movie-item-skeleton";
import { MovieItem } from "@/types";
import { Suspense } from "react";

async function GetMovieItemWithId({ id }: { id: string }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`,
    { cache: "force-cache" },
  );
  if (!res.ok) throw new Error(res.statusText);
  const movie: MovieItem = await res.json();

  return <MovieDetail {...movie} />;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <section>
      <Suspense fallback={<MovieItemSkeleton />}>
        <GetMovieItemWithId id={id} />
      </Suspense>
    </section>
  );
}
