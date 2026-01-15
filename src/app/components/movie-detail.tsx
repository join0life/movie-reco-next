import { MovieItem } from "@/types";
import Image from "next/image";

export default function MovieDetail({
  id,
  poster_path,
  title,
  overview,
  release_date,
  vote_average,
}: MovieItem) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="relative h-75 w-50 border-2 border-purple-300">
        <Image
          className="object-cover"
          src={
            poster_path
              ? `${process.env.NEXT_PUBLIC_IMG_BASE_URL}/w500${poster_path}`
              : "/images/defaultPoster.png"
          }
          alt={`${title}-poster`}
          sizes="(max-width: 768px) 100vw, 50vw"
          fill
        />
      </div>

      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-400">{title}</h1>
        <p className="text-sm">{overview}</p>
        <p className="text-sm">개봉일: {release_date}</p>
        <p className="text-sm">평점: {vote_average} / 10</p>
      </div>
    </div>
  );
}
