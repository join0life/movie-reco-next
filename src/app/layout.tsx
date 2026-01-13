import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="m-auto flex min-h-dvh max-w-200 flex-col px-3 py-4 shadow-xl">
        {modal}
        <div id="modal-root"></div>
        <header className="flex items-center gap-5">
          <Link href={"/"} className="text-xl hover:text-amber-200">
            🎬 오늘의 영화
          </Link>
          <Link href={"/movies"} className="text-xl hover:text-blue-200">
            📋 목록
          </Link>
        </header>
        <main className="flex flex-1 flex-col items-center justify-around">
          {children}
        </main>
        <footer className="flex items-center justify-center text-sm text-gray-600">
          @join0life
        </footer>
      </body>
    </html>
  );
}
