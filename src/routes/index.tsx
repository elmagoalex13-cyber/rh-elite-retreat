import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/components/retreat/Navbar";
import { Reveal } from "@/components/retreat/Reveal";
import { RevealText } from "@/components/retreat/RevealText";
import { Counter } from "@/components/retreat/Counter";
import { BackToTop } from "@/components/retreat/BackToTop";
import { TrailingCursor } from "@/components/retreat/TrailingCursor";
import { ParallaxImage } from "@/components/retreat/ParallaxImage";
import { ClipReveal } from "@/components/retreat/ClipReveal";
import { StickyMethod } from "@/components/retreat/StickyMethod";
import heroImg from "@/assets/hero-hacienda.jpg";
import includesImg from "@/assets/includes-portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RH Elite Longevity Retreat · México · Julio 2025" },
      { name: "description", content: "Retiro privado de 3 días para líderes y empresarios. México, 10-12 julio. 10 plazas. 6.500€. Selección por entrevista." },
    ],
  }),
  component: Index,
});

const methodCards = [
  { n: "01", title: "Onyx RH", text: "La sombra, los patrones, la autoexigencia. El trabajo silencioso que pocos están dispuestos a hacer." },
  { n: "02", title: "Origen RH", text: "Identidad real y verdad personal. El contraste entre el yo que proyectas y el que realmente sientes." },
  { n: "03", title: "Longevidad RH", text: "Salud, energía y rendimiento sostenible. Un plan real para alguien con agenda de líder." },
];

const program = [
  { n: "01", day: "Viernes", title: "Llegada", items: [["16:00","Check-in privado"],["18:00","Bienvenida RH ELITE"],["19:00","Sesión Onyx RH"],["20:30","Cena privada · Chef RH·Origen"]] },
  { n: "02", day: "Sábado", title: "Profundidad", items: [["07:30","Activación física"],["09:00","Onyx RH profundo"],["12:00","Origen RH · apertura"],["15:30","Actividad experiencial"],["17:00","Origen RH · identidad"],["19:30","Cena gastronómica RH"]] },
  { n: "03", day: "Domingo", title: "Integración", items: [["08:00","Activación suave"],["09:30","Integración Onyx + Origen"],["12:00","Plan Longevidad RH"],["13:30","Brunch de cierre"],["15:00","Check-out"]] },
];

const includes = [
  ["I","Alojamiento","Villa o hacienda privada · 2 noches · habitación individual"],
  ["II","Chef RH·Origen","Alta gastronomía funcional. Todos los desayunos, almuerzos y cenas antiinflamatorios."],
  ["III","Facilitación completa","Onyx RH, Origen RH y Longevidad RH. Confidencialidad absoluta."],
  ["IV","Físico experiencial","Caminatas, movilidad funcional, piscina. Sin yoga."],
  ["V","Plan Longevidad RH","Diseñado contigo el último día, personal y aplicable."],
  ["VI","Grupo selecto","Máximo 10 personas · seleccionadas por perfil."],
];

const steps = [
  ["01","Solicitud","Rellenas el formulario con tu perfil y motivación."],
  ["02","Revisión","Evaluamos tu solicitud en un máximo de 48h."],
  ["03","Confirmación","Confirmas con el primer pago vía enlace seguro (3.250€)."],
  ["04","Cierre","Segundo pago antes del 3 de julio (3.250€)."],
];

const testimonials = [
  { quote: "Tres días que reconfiguraron mi manera de liderar. Volví distinto, más claro, más sereno.", name: "Alejandro M.", role: "CEO · Grupo industrial", country: "España" },
  { quote: "El nivel de cuidado y la profundidad del trabajo no se parecen a nada que haya hecho antes.", name: "Carolina V.", role: "Founder · Tech", country: "México" },
  { quote: "Una experiencia silenciosa y demoledora. Recomendable solo si estás listo para mirar de verdad.", name: "Iván R.", role: "Family Office", country: "Suiza" },
];

function Index() {
  return (
    <div className="bg-cream text-ink" style={{ overflowX: "clip" }}>
      <TrailingCursor />
      <Navbar />
      <Hero />
      <Method />
      <Program />
      <QuoteBand />
      <Includes />
      <StickyMethod />
      <Testimonials />
      <Investment />
      <Application />
      <Footer />
      <BackToTop />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1.0]);

  return (
    <section ref={ref} id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={heroImg}
          alt="Hacienda en México"
          style={{ y: imgY, scale: imgScale }}
          className="w-full h-full object-cover will-change-transform"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <Reveal>
          <div className="eyebrow mb-10">México · Julio 2025</div>
        </Reveal>
        <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[1.02] tracking-tight max-w-5xl">
          <RevealText delay={100}>RH Elite</RevealText>
          <br />
          <RevealText delay={300}><span className="serif-italic">Longevity Retreat</span></RevealText>
        </h1>
        <Reveal delay={500}>
          <p className="mt-10 max-w-xl text-base text-ink/80 leading-relaxed font-light">
            Un retiro privado de 3 días para líderes y empresarios que quieren ir al fondo — sin poses, sin yoga, sin ruido.
          </p>
        </Reveal>
        <Reveal delay={650}>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-ink/80">
            {[["3 días","2 noches"],["10","plazas"],["6.500 €","por persona"]].map(([a, b], i) => (
              <div key={i} className="flex items-center gap-10">
                <div>
                  <div className="font-serif text-2xl text-ink">{a}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm mt-1">{b}</div>
                </div>
                {i < 2 && <div className="w-px h-12 bg-gold/40" />}
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={800}>
          <div className="mt-14 flex flex-wrap gap-4">
            <a href="#retiro" className="btn-outline-gold">Descubrir el retiro</a>
            <a href="#solicitud" className="btn-gold">Solicitar plaza →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Method() {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-dark-earth relative overflow-hidden">
      <div className="grain-overlay" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div id="retiro" className="grid lg:grid-cols-12 gap-12 mb-20 text-cream">
          <div className="lg:col-span-5">
            <Reveal><div className="eyebrow mb-8" style={{ color: "var(--gold-soft)" }}>El Método</div></Reveal>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              <RevealText>Tres ejes.</RevealText>
              <br />
              <RevealText delay={150}><span className="serif-italic">Un proceso.</span></RevealText>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={250}>
              <p className="text-base text-cream/75 leading-relaxed max-w-lg">
                No es un curso. No es un evento de networking. Es un proceso diseñado para líderes que han llegado lejos y necesitan parar, ver con claridad y decidir desde quiénes son hoy.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {methodCards.map((c, i) => (
            <Reveal key={c.n} delay={i * 150}>
              <div className="method-card bg-[#221710] text-cream p-10 lg:p-14 h-full min-h-[420px] flex flex-col border border-gold/15">
                <span className="watermark-number">{c.n}</span>
                <div className="text-gold text-[11px] tracking-[0.28em] mb-12 relative z-10">— {c.n}</div>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight relative z-10">{c.title}</h3>
                <p className="text-sm text-cream/70 leading-relaxed mt-auto relative z-10">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgramHeader() {
  return (
    <div className="mb-10 lg:mb-12">
      <div className="grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7">
          <Reveal><div className="eyebrow mb-6">El Programa</div></Reveal>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
            <RevealText>3 días</RevealText><br />
            <RevealText delay={150}><span className="serif-italic">de profundidad.</span></RevealText>
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9 flex items-end">
          <Reveal delay={250}>
            <p className="text-sm text-ink/70 leading-relaxed border-l border-gold/40 pl-5">
              Cada bloque tiene un propósito. No se satura. El tiempo libre es parte del método.
            </p>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ d, i }: { d: typeof program[number]; i: number }) {
  return (
    <Reveal delay={i * 120}>
      <div className="bg-cream card-top-gold p-8 relative overflow-hidden h-full">
        <span className="watermark-number">{d.n}</span>
        <div className="text-gold text-[11px] tracking-[0.28em] mb-6 relative z-10">— {d.n}</div>
        <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm relative z-10">Día · {d.day}</div>
        <h3 className="font-serif text-2xl mt-2 mb-6 relative z-10">{d.title}</h3>
        <ul className="space-y-3 relative z-10">
          {d.items.map(([t, label]) => (
            <li key={t} className="flex gap-4 text-sm">
              <span className="text-gold tabular-nums w-12 shrink-0">{t}</span>
              <span className="text-ink/80">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

function Program() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="programa" className="bg-sand">
      {/* ── Mobile: vertical cards ── */}
      <div className="lg:hidden px-6 py-20">
        <ProgramHeader />
        <div className="flex flex-col gap-6">
          {program.map((d, i) => <ProgramCard key={d.n} d={d} i={i} />)}
        </div>
      </div>

      {/* ── Desktop: sticky horizontal scroll ── */}
      <div ref={containerRef} className="hidden lg:block relative" style={{ height: "280vh" }}>
        <div className="sticky top-0 h-screen overflow-hidden bg-sand">
          <motion.div className="absolute top-0 left-0 h-[2px] bg-gold z-20" style={{ width: barWidth }} />
          <div className="max-w-7xl mx-auto px-12 pt-20 pb-6">
            <ProgramHeader />
          </div>
          <div className="overflow-hidden px-12">
            <motion.div className="flex gap-8" style={{ x, width: "300%" }}>
              {program.map((d, i) => (
                <div key={d.n} className="bg-cream card-top-gold p-10 relative overflow-hidden flex-1 min-h-[380px]">
                  <span className="watermark-number">{d.n}</span>
                  <div className="text-gold text-[11px] tracking-[0.28em] mb-8 relative z-10">— {d.n}</div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm relative z-10">Día · {d.day}</div>
                  <h3 className="font-serif text-3xl mt-2 mb-8 relative z-10">{d.title}</h3>
                  <ul className="space-y-4 relative z-10">
                    {d.items.map(([t, label]) => (
                      <li key={t} className="flex gap-5 text-sm">
                        <span className="text-gold tabular-nums w-12 shrink-0">{t}</span>
                        <span className="text-ink/80">{label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </div>
          <div className="flex justify-center mt-6 gap-6">
            {program.map((_, i) => (
              <div key={i} className="text-[10px] uppercase tracking-widest text-muted-warm">
                {i === 0 ? "← " : ""}{["Viernes","Sábado","Domingo"][i]}{i === 2 ? " →" : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section ref={ref} className="bg-dark-green text-cream py-28 lg:py-36 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY, backgroundImage: "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1400&q=60')", backgroundSize: "cover", backgroundPosition: "center", opacity: 0.15 }}
      />
      <div className="grain-overlay" aria-hidden />
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center relative">
        <Reveal>
          <div className="w-16 h-px bg-gold mx-auto mb-10" />
          <p className="font-serif italic text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.35] text-cream/95">
            "Las plazas son limitadas y se asignan tras entrevista y confirmación de perfil. No todo el mundo encaja — y eso es parte del diseño."
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-10" />
        </Reveal>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className="bg-cream relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-0 lg:min-h-[800px]">
        <div className="lg:col-span-5 relative overflow-hidden lg:sticky lg:top-0 lg:h-screen">
          <ParallaxImage
            src={includesImg}
            alt=""
            factor={0.2}
            className="absolute inset-0 w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gold/15 via-transparent to-dark-earth/20 pointer-events-none" />
        </div>
        <div className="lg:col-span-7 py-24 lg:py-36 px-6 lg:px-16">
          <Reveal><div className="eyebrow mb-8">Incluye</div></Reveal>
          <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05] mb-14">
            <RevealText>Lo que forma</RevealText>
            <br />
            <RevealText delay={150}><span className="serif-italic">parte del retiro.</span></RevealText>
          </h2>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {includes.map(([n, title, text], i) => (
              <Reveal key={n} delay={Math.floor(i / 2) * 180}>
                <div>
                  <div className="text-gold font-serif text-2xl mb-3">{n}</div>
                  <div className="w-8 h-px bg-gold mb-4" />
                  <h4 className="font-serif text-xl mb-3">{title}</h4>
                  <p className="text-sm text-ink/70 leading-relaxed">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-7">
            <Reveal><div className="eyebrow mb-8">Voces del retiro</div></Reveal>
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1]">
              <RevealText>Lo que dicen</RevealText>{" "}
              <RevealText delay={120}><span className="serif-italic">quienes ya han pasado</span></RevealText>{" "}
              <RevealText delay={240}>por el proceso.</RevealText>
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 150}>
              <ClipReveal delay={i * 150}>
                <figure className="bg-sand/60 p-10 lg:p-12 h-full relative border border-gold/15">
                  <div className="font-serif text-gold text-[6rem] leading-none absolute top-4 left-6 opacity-90">"</div>
                  <blockquote className="font-serif italic text-lg leading-relaxed text-ink/90 pt-10 relative">
                    {t.quote}
                  </blockquote>
                  <div className="w-8 h-px bg-gold mt-8 mb-4" />
                  <figcaption>
                    <div className="font-serif text-base">{t.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm mt-1">
                      {t.role} · {t.country}
                    </div>
                  </figcaption>
                </figure>
              </ClipReveal>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section id="inversion" className="py-20 lg:py-28 bg-dark-green text-cream relative overflow-hidden">
      <div className="grain-overlay" aria-hidden />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow mb-8" style={{ color: "var(--gold-soft)" }}>Inversión</div>
            </Reveal>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              <RevealText>Una decisión</RevealText>
              <br />
              <RevealText delay={150}><span className="serif-italic">clara.</span></RevealText>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={250}>
              <p className="text-base text-cream/75 leading-relaxed">
                El precio incluye alojamiento, manutención completa, facilitación y materiales. Pago en dos fases.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal delay={150}>
          <div className="border border-gold/60 p-10 lg:p-16 max-w-3xl mx-auto bg-dark-earth/40">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold-soft mb-6">Retiro completo</div>
            <div className="font-serif text-[clamp(4rem,10vw,8rem)] text-gold leading-none tabular-nums">
              <Counter to={6500} /> €
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-cream/60 mt-4">Por persona · todo incluido</div>
            <div className="mt-12 border-t border-cream/15 divide-y divide-cream/10">
              {[["Reserva de plaza","Al confirmar","3.250 €"],["Segundo pago","Antes del 3 de julio","3.250 €"]].map(([t, sub, amt]) => (
                <div key={t} className="flex items-center justify-between py-6">
                  <div>
                    <div className="text-sm">{t}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-cream/50 mt-1">{sub}</div>
                  </div>
                  <div className="font-serif text-2xl text-gold-soft">{amt}</div>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 justify-between">
              <a href="#solicitud" className="btn-gold">Solicitar plaza →</a>
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-cream/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-gold opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                </span>
                Plazas muy limitadas · selección por entrevista
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Application() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="solicitud" className="py-20 lg:py-28 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal><div className="eyebrow mb-8">Solicitud</div></Reveal>
            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
              <RevealText>El proceso</RevealText>
              <br />
              <RevealText delay={150}><span className="serif-italic">de selección.</span></RevealText>
            </h2>
            <Reveal delay={250}>
              <p className="mt-8 text-base text-ink/75 leading-relaxed max-w-md">
                Las plazas no son de libre compra. Se evalúa cada solicitud para asegurar que el grupo sea el adecuado.
              </p>
            </Reveal>
            <ol className="mt-14 space-y-10 relative">
              <div className="absolute left-[18px] top-3 bottom-3 w-px bg-gold/40" />
              {steps.map(([n, title, text], i) => (
                <Reveal key={n} delay={i * 120}>
                  <li className="flex gap-6 relative timeline-step">
                    <div className="timeline-circle">{n}</div>
                    <div className="pt-1">
                      <h4 className="font-serif text-xl mb-1">{title}</h4>
                      <p className="text-sm text-ink/70 leading-relaxed">{text}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={150}>
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-cream card-top-gold p-8 lg:p-12">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="text-gold font-serif text-5xl mb-4">✓</div>
                    <h3 className="font-serif text-2xl mb-3">Solicitud recibida</h3>
                    <p className="text-sm text-ink/70 max-w-sm mx-auto">Revisaremos tu perfil en las próximas 48 horas y te contactaremos por email.</p>
                  </div>
                ) : (
                  <>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm mb-8">Formulario · confidencial</div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Nombre" name="nombre" />
                      <Field label="Apellidos" name="apellidos" />
                    </div>
                    <Field label="Email" name="email" type="email" />
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field label="Empresa" name="empresa" />
                      <Field label="Rol" name="rol" />
                    </div>
                    <Field label="País" name="pais" />
                    <div className="mt-5">
                      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-warm mb-2">¿Por qué quieres venir a este retiro?</label>
                      <textarea rows={5} required className="w-full bg-transparent border-b border-ink/15 focus:border-gold outline-none py-3 text-sm resize-none transition-colors" />
                    </div>
                    <button type="submit" className="btn-dark mt-10 w-full justify-center">Enviar solicitud →</button>
                    <p className="text-[11px] text-muted-warm mt-6 leading-relaxed">Confidencialidad total garantizada. Las plazas se asignan por orden y adecuación de perfil.</p>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div className="mt-5">
      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-warm mb-2">{label}</label>
      <input name={name} type={type} required className="w-full bg-transparent border-b border-ink/15 focus:border-gold outline-none py-3 text-sm transition-colors" />
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-dark-earth text-cream py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="font-serif text-3xl">
              <span className="text-gold">RH</span>·Elite
              <span className="serif-italic ml-3">Longevity Retreat</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.28em] text-cream/50 mt-4">México · Julio 2025 · 10 plazas</div>
          </div>
          <div className="md:text-right text-[11px] uppercase tracking-[0.22em] text-cream/40">
            © {new Date().getFullYear()} RH Elite · Confidencialidad absoluta
          </div>
        </div>
        <div className="mt-12 h-px bg-cream/10" />
        <div className="mt-8 text-xs text-cream/40 max-w-2xl">Un proceso privado para líderes y empresarios. Selección por entrevista.</div>
      </div>
    </footer>
  );
}
