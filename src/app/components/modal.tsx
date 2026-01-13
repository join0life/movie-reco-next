import { ReactNode } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }: { children: ReactNode }) {
  return createPortal(
    <div>
      <div>{children}</div>
    </div>,
    document.getElementById("modal-root")!,
  );
}
