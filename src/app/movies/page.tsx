import { MovieItem } from "@/types";
import { Suspense } from "react";
import MovieListSkeleton from "../components/movie-list-skeleton";
import MovieList from "../components/movie-list";

async function GetInitialMovies() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=1`,
    { next: { revalidate: 60 * 60 * 24 } },
  );

  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  const movieList: MovieItem[] = data.results;

  return <MovieList initialMovies={movieList} />;
}

export default async function Page() {
  return (
    <section>
      <Suspense fallback={<MovieListSkeleton />}>
        <GetInitialMovies />
      </Suspense>
    </section>
  );
}
