import MovieDetail from "@/app/components/movie-detail";
import MovieItemSkeleton from "@/app/components/movie-item-skeleton";
import { MovieItem } from "@/types";
import { Suspense } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`,
  );
  if (!res.ok) throw new Error(res.statusText);

  const movie: MovieItem = await res.json();
  return {
    title: `${movie.title} - Today's Pick`,
    description: `"${movie.title}" 영화 상세 정보 페이지입니다.}`,
    openGraph: {
      title: `${movie.title} - Today's Pick`,
      description: `"${movie.title}" 영화 상세 정보 페이지입니다.`,
      images: [
        movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : "/images/defaultPoster.png",
      ],
    },
  };
}

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
