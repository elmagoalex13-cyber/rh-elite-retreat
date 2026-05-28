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
  },
  {
    key: "origen",
    tag: "02 · ORIGEN RH",
    title: "Identidad real y verdad personal",
    body: "Quién eres hoy frente a quién creías que debías ser. El contraste entre el yo que proyectas al mundo y el que realmente sientes. Decisiones internas — no acciones — que cambian la dirección.",
    quote: "¿Qué parte de tu vida sigue diseñada para una versión antigua de ti?",
    bg: "#1A2B1E",
  },
  {
    key: "longevidad",
    tag: "03 · LONGEVIDAD RH",
    title: "Rendimiento sostenible",
    body: "Un plan de longevidad funcional adaptado a la vida real de un líder. Mínimo no negociable de cuidado físico, pautas de descanso, alimentación y una práctica sencilla de regulación emocional. Realista, no ideal.",
    quote: "¿Qué vas a empezar a permitirte desde ahora?",
    bg: "#221A0F",
  },
];

const imgs = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
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
    <section ref={containerRef} className="relative" style={{ height: `${slides.length * 100}vh` }}>
      <div className="sticky top-0 h-screen grid lg:grid-cols-2 overflow-hidden">
        {/* LEFT — sticky image */}
        <div className="relative overflow-hidden">
          {imgs.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: active === i ? 1 : 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          ))}
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute bottom-12 left-10 text-cream z-10">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-3">El Método en Detalle</div>
            <div className="flex gap-2 mt-4">
              {slides.map((_, i) => (
                <div key={i} className={`h-px transition-all duration-500 ${i === active ? "w-10 bg-gold" : "w-4 bg-cream/30"}`} />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — text */}
        <div className="flex items-center px-10 lg:px-16 overflow-hidden"
          style={{ backgroundColor: slides[active].bg, transition: "background-color 0.7s ease" }}>
          <div>
            {slides.map((s, i) => (
              <motion.div
                key={s.key}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : 40 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="absolute"
                style={{ pointerEvents: active === i ? "auto" : "none" }}
              >
                <div className="text-[11px] uppercase tracking-[0.28em] text-gold mb-8">{s.tag}</div>
                <h3 className="font-serif text-[clamp(2rem,4vw,3.5rem)] text-cream leading-[1.05] mb-8">{s.title}</h3>
                <p className="text-base text-cream/70 leading-relaxed max-w-md mb-10">{s.body}</p>
                <blockquote className="border-l-2 border-gold pl-6 font-serif italic text-xl text-gold-soft leading-relaxed max-w-sm">
                  "{s.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
