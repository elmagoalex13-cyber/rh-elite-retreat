import { useEffect, useRef, useState } from "react";

export function TrailingCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let curX = mouseX;
    let curY = mouseY;
    let raf = 0;

    const onMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    const loop = () => {
      curX += (mouseX - curX) * 0.18;
      curY += (mouseY - curY) * 0.18;
      if (ref.current) ref.current.style.transform = `translate3d(${curX - 5}px, ${curY - 5}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  if (!enabled) return null;
  return (
    <div
      ref={ref}
      aria-hidden
      className="fixed top-0 left-0 w-[10px] h-[10px] rounded-full bg-gold pointer-events-none z-[100] mix-blend-multiply"
      style={{ willChange: "transform" }}
    />
  );
}
