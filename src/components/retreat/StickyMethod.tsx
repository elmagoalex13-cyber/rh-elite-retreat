import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion } from "framer-motion";

const slides = [
  {
    key: "onyx",
    tag: "01 · ONYX RH",
    title: "La sombra y los patrones",
    body: "Identificamos el 'guion interno' que ha dirigido tus decisiones. La voz crítica, el patrón de control, el miedo que sostiene tu hiper-rendimiento. Lo que te llevó donde estás — y lo que hoy ya te cuesta demasiado.",
    quote: "¿Qué parte de ti has tenido que endurecer para poder sostener lo que sostienes hoy?",
    bg: "#1F1510",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    key: "origen",
    tag: "02 · ORIGEN RH",
    title: "Identidad real y verdad personal",
    body: "Quién eres hoy frente a quién creías que debías ser. El contraste entre el yo que proyectas al mundo y el que realmente sientes. Decisiones internas — no acciones — que cambian la dirección.",
    quote: "¿Qué parte de tu vida sigue diseñada para una versión antigua de ti?",
    bg: "#1A2B1E",
    img: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
  },
  {
    key: "longevidad",
    tag: "03 · LONGEVIDAD RH",
    title: "Rendimiento sostenible",
    body: "Un plan de longevidad funcional adaptado a la vida real de un líder. Mínimo no negociable de cuidado físico, pautas de descanso, alimentación y regulación emocional. Realista, no ideal.",
    quote: "¿Qué vas a empezar a permitirte desde ahora?",
    bg: "#221A0F",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
  },
];

export function StickyMethod() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(slides.length - 1, Math.floor(v * slides.length));
    setActive(idx);
  });

  return (
    <>
      {/* ── Desktop: sticky split-screen ── */}
      <section
        ref={containerRef}
        className="relative hidden lg:block"
        style={{ height: `${slides.length * 100}vh`, backgroundColor: slides[0].bg }}
      >
        <div className="sticky top-0 h-screen grid grid-cols-2 overflow-hidden" style={{ backgroundColor: slides[active].bg }}>

          {/* LEFT — images stacked, fade in/out */}
          <div className="relative overflow-hidden h-full">
            {slides.map((s, i) => (
              <motion.img
                key={s.key}
                src={s.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: i === 0 ? 1 : 0 }}
                animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.04 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
              />
            ))}
            <div className="absolute inset-0 bg-black/45 pointer-events-none" />
            <div className="absolute bottom-10 left-10 z-10">
              <div className="text-[11px] uppercase tracking-[0.28em] text-amber-400 mb-4">El Método en Detalle</div>
              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <div
                    key={i}
                    className={`h-px transition-all duration-500 ${i === active ? "w-10 bg-amber-400" : "w-4 bg-white/30"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — text panels stacked, fade in/out */}
          <div className="relative overflow-hidden h-full">
            {slides.map((s, i) => (
              <motion.div
                key={s.key}
                className="absolute inset-0 flex items-center px-16"
                style={{ backgroundColor: s.bg }}
                initial={{ opacity: i === 0 ? 1 : 0 }}
                animate={{ opacity: active === i ? 1 : 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <motion.div
                  initial={{ y: i === 0 ? 0 : 24, opacity: i === 0 ? 1 : 0 }}
                  animate={{ y: active === i ? 0 : 24, opacity: active === i ? 1 : 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: active === i ? 0.1 : 0 }}
                  className="w-full"
                >
                  <div className="text-[11px] uppercase tracking-[0.28em] text-amber-400 mb-8">{s.tag}</div>
                  <h3 className="font-serif text-[clamp(2rem,3.5vw,3rem)] text-white leading-[1.05] mb-8">{s.title}</h3>
                  <p className="text-sm text-white/70 leading-relaxed max-w-md mb-10">{s.body}</p>
                  <blockquote className="border-l-2 border-amber-400 pl-6 font-serif italic text-lg text-amber-200 leading-relaxed max-w-sm">
                    "{s.quote}"
                  </blockquote>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mobile: vertical cards ── */}
      <section className="lg:hidden py-16 px-5 space-y-10" style={{ backgroundColor: "#1A1208" }}>
        <div className="text-[11px] uppercase tracking-[0.28em] text-amber-400 mb-2">El Método en Detalle</div>
        {slides.map((s, i) => (
          <div key={s.key} className="rounded-sm overflow-hidden" style={{ backgroundColor: s.bg }}>
            <img src={s.img} alt="" className="w-full h-52 object-cover" />
            <div className="p-6">
              <div className="text-[11px] uppercase tracking-[0.22em] text-amber-400 mb-3">{s.tag}</div>
              <h3 className="font-serif text-2xl text-white mb-4 leading-tight">{s.title}</h3>
              <p className="text-sm text-white/70 leading-relaxed mb-5">{s.body}</p>
              <blockquote className="border-l-2 border-amber-400 pl-4 font-serif italic text-base text-amber-200 leading-relaxed">
                "{s.quote}"
              </blockquote>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
