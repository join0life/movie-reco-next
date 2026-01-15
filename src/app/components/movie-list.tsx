"use client";

import { MovieItem } from "@/types";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LoadMorePageButton from "./load-more-page-button";

export default function MovieList({
  initialMovies,
}: {
  initialMovies: MovieItem[];
}) {
  const [movies, setMovies] = useState(initialMovies);
  const [page, setPage] = useState(1);
  const [isLoading, setisLoading] = useState(false);

  const loadMore = async () => {
    if (isLoading) return;

    setisLoading(true);
    const nextPage = page + 1;

    const res = await fetch(`/api/movies?page=${nextPage}`);
    const data = await res.json();

    setMovies((prevMovies) => {
      const movieMap = new Map(
        [...prevMovies, ...data.results].map((movie) => [movie.id, movie]),
      );
      return Array.from(movieMap.values());
    });

    setPage(nextPage);
    setisLoading(false);
  };

  return (
    <div className="grid grid-cols-2 gap-3 px-4 py-5 md:grid-cols-4">
      {movies.map((movie) => (
        <Link key={`movie-${movie.id}`} href={`/movies/${movie.id}`}>
          <div className="relative h-65 w-45 border-2 border-lime-400">
            <Image
              className="object-cover"
              src={
                movie.poster_path
                  ? `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/w500${movie.poster_path}`
                  : "/images/defaultPoster.png"
              }
              alt={`${movie.title}-poster`}
              sizes="(max-width: 768px) 100vw, 50vw"
              fill
            />
          </div>
        </Link>
      ))}
      <div className="col-span-2 mt-4 flex justify-center md:col-span-4">
        <LoadMorePageButton onClick={loadMore} isLoading={isLoading} />
      </div>
    </div>
  );
}
