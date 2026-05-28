import { useEffect, useRef, useState, type ReactNode } from "react";

export function Parallax({ children, factor = 0.3, className = "" }: { children: ReactNode; factor?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - window.innerHeight / 2) * -factor;
      setY(offset);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [factor]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={{ transform: `translate3d(0, ${y}px, 0)`, willChange: "transform" }} className="h-full w-full">
        {children}
      </div>
    </div>
  );
}
