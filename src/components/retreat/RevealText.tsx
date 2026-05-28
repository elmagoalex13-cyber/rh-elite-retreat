import { useEffect, useRef, useState, type ReactNode } from "react";

export function RevealText({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); io.disconnect(); }
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <span ref={ref} className={`reveal-mask ${className}`}>
      <span
        className="reveal-inner"
        style={{
          transform: visible ? "translateY(0)" : "translateY(110%)",
          transition: `transform 1s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
          display: "inline-block",
        }}
      >
        {children}
      </span>
    </span>
  );
}
