import { MovieItem } from "@/types";
import MovieDetail from "./components/movie-detail";
import { Suspense } from "react";
import MovieItemSkeleton from "./components/movie-item-skeleton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "오늘의 영화",
  description: "매일매일 새로운 영화를 추천해드립니다.",
  openGraph: {
    title: "오늘의 영화",
    description: "매일매일 새로운 영화를 추천해드립니다.",
    images: ["/thumbnail.png"],
  },
};

async function GetMovieToday() {
  const today = new Date().toISOString().split("T")[0];

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&date=${today}`,
    { next: { revalidate: 60 * 60 * 24, tags: [`daily-movie-${today}`] } },
  );
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  const movie: MovieItem = data.results[0];

  return <MovieDetail {...movie} />;
}

export default async function Home() {
  return (
    <section>
      <Suspense fallback={<MovieItemSkeleton />}>
        <GetMovieToday />
      </Suspense>
    </section>
  );
}
