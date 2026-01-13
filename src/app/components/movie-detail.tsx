import Image from "next/image";

export default function MovieDetail() {
  return (
    <div>
      <Image src="" width={120} height={300} alt="movie-detail-image" />
      <h1>Movie Title</h1>
      <p>
        Movie description goes here. This is a detailed overview of the movie
        plot, characters, and other interesting information.
      </p>
      <p>2024-01-22</p>
      <p>평점: 3.4</p>
    </div>
  );
}
