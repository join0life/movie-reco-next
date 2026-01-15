import { MovieItem } from "@/types";
import { Suspense } from "react";
import MovieListSkeleton from "../components/movie-list-skeleton";
import MovieList from "../components/movie-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "인기 영화 목록",
  description: "지금 인기있는 영화를 살펴보세요.",
  openGraph: {
    title: "인기 영화 목록",
    description: "지금 인기있는 영화를 살펴보세요.",
    images: ["/thumbnail.png"],
  },
};

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
