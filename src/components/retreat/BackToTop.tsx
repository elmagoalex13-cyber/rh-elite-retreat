import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const on = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <button
      aria-label="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center shadow-[0_10px_30px_rgba(184,146,74,0.4)] hover:bg-[#a3803d] transition-all"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity .4s ease, transform .4s ease, background .25s ease",
      }}
    >
      <span className="text-lg leading-none">↑</span>
    </button>
  );
}
