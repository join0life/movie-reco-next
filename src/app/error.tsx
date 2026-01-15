"use client";

interface Props {
  error: Error & { digest?: string };
}

export default function Error({ error }: Props) {
  console.log(error);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>에러가 발생했습니다.</h1>
      <div>잠시 후 다시 시도해주세요.</div>
    </div>
  );
}
