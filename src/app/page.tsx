import { MovieItem } from "@/types";
import Image from "next/image";

async function getMovieToday(): Promise<MovieItem> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&language=ko-KR`,
    { next: { revalidate: 60 * 60 * 24 } },
  );
  if (!res.ok) throw new Error(res.statusText);
  const data = await res.json();
  return data.results[0];
}

export default async function Home() {
  const movie = await getMovieToday();
  const { id, title, overview, poster_path, release_date, vote_average } =
    movie;
  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ position: "relative", width: "200px", height: "300px" }}>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_BASE_URL}/original${poster_path}`}
          alt={`${title}-poster`}
          fill
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-400">{title}</h1>
        <p className="text-sm">{overview}</p>
        <p className="text-sm">{release_date}</p>
        <p className="text-sm">{vote_average}</p>
      </div>
    </div>
  );
}
