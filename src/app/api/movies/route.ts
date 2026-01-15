import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ko-KR&page=${page}`,
  );

  const data = await res.json();
  return NextResponse.json(data);
}
