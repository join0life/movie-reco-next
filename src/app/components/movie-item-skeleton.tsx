export default function MovieItemSkeleton() {
  return (
    <div className="flex animate-pulse flex-col items-center gap-4">
      {/* 포스터 */}
      <div className="relative h-75 w-50 rounded-md bg-gray-300" />

      {/* 텍스트들 */}
      <div className="flex w-full flex-col items-center gap-2">
        {/* 제목 */}
        <div className="h-5 w-2/3 rounded bg-gray-300" />

        {/* Overview */}
        <div className="h-8 w-5/6 rounded bg-gray-200" />
        {/* 개봉일 */}
        <div className="h-4 w-1/2 rounded bg-gray-200" />

        {/* 별점 */}
        <div className="mt-1 h-4 w-1/3 rounded bg-gray-200" />
      </div>
    </div>
  );
}
