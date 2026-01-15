"use client";

import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return createPortal(
    <div
      className="fixed inset-0 z-999 flex h-screen w-screen items-end justify-center bg-black/70 p-0"
      onClick={(e) => {
        if (e.target === e.currentTarget) router.back();
      }}
    >
      <div className="max-h-90dvh rouned-sm relative z-1000 h-full w-full max-w-150 overflow-y-auto bg-white p-5">
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
