import Modal from "@/app/components/modal";
import MovieItemSkeleton from "@/app/components/movie-item-skeleton";
import MoviePage from "@/app/movies/[id]/page";
import { Suspense } from "react";

export default function Page(props: any) {
  return (
    <Modal>
      <Suspense fallback={<MovieItemSkeleton />}>
        <MoviePage {...props} />
      </Suspense>
    </Modal>
  );
}
