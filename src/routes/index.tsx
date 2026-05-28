import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/retreat/Navbar";
import { Reveal } from "@/components/retreat/Reveal";
import heroImg from "@/assets/hero-hacienda.jpg";
import textureImg from "@/assets/texture-warm.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RH Elite Longevity Retreat · México · Julio 2025" },
      { name: "description", content: "Retiro privado de 3 días para líderes y empresarios. México, 10-12 julio. 10 plazas. 6.500€. Selección por entrevista." },
      { property: "og:title", content: "RH Elite Longevity Retreat" },
      { property: "og:description", content: "Un retiro privado de 3 días para líderes que quieren ir al fondo — sin poses, sin yoga, sin ruido." },
      { property: "og:image", content: heroImg },
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
  {
    n: "01", day: "Viernes", title: "Llegada", items: [
      ["16:00", "Check-in privado"],
      ["18:00", "Bienvenida RH ELITE"],
      ["19:00", "Sesión Onyx RH"],
      ["20:30", "Cena privada · Chef RH·Origen"],
    ],
  },
  {
    n: "02", day: "Sábado", title: "Profundidad", items: [
      ["07:30", "Activación física"],
      ["09:00", "Onyx RH profundo"],
      ["12:00", "Origen RH · apertura"],
      ["15:30", "Actividad experiencial"],
      ["17:00", "Origen RH · identidad"],
      ["19:30", "Cena gastronómica RH"],
    ],
  },
  {
    n: "03", day: "Domingo", title: "Integración", items: [
      ["08:00", "Activación suave"],
      ["09:30", "Integración Onyx + Origen"],
      ["12:00", "Plan Longevidad RH"],
      ["13:30", "Brunch de cierre"],
      ["15:00", "Check-out"],
    ],
  },
];

const includes = [
  ["I", "Alojamiento", "Villa o hacienda privada · 2 noches · habitación individual"],
  ["II", "Chef RH·Origen", "Alta gastronomía funcional. Todos los desayunos, almuerzos y cenas antiinflamatorios."],
  ["III", "Facilitación completa", "Onyx RH, Origen RH y Longevidad RH. Confidencialidad absoluta."],
  ["IV", "Físico experiencial", "Caminatas, movilidad funcional, piscina. Sin yoga."],
  ["V", "Plan Longevidad RH", "Diseñado contigo el último día, personal y aplicable."],
  ["VI", "Grupo selecto", "Máximo 10 personas · seleccionadas por perfil."],
];

const steps = [
  ["01", "Solicitud", "Rellenas el formulario con tu perfil y motivación."],
  ["02", "Revisión", "Evaluamos tu solicitud en un máximo de 48h."],
  ["03", "Confirmación", "Confirmas con el primer pago vía enlace seguro (3.250€)."],
  ["04", "Cierre", "Segundo pago antes del 3 de julio (3.250€)."],
];

function Index() {
  return (
    <div className="bg-cream text-ink overflow-x-hidden">
      <Navbar />
      <Hero />
      <Method />
      <Program />
      <Includes />
      <Investment />
      <Application />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-32 pb-20">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Hacienda en México" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/30 to-cream" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <Reveal>
          <div className="eyebrow mb-10">México · Julio 2025</div>
        </Reveal>
        <Reveal delay={150}>
          <h1 className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[1.02] tracking-tight max-w-5xl">
            RH Elite
            <br />
            <span className="serif-italic">Longevity Retreat</span>
          </h1>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-10 max-w-xl text-base text-ink/80 leading-relaxed font-light">
            Un retiro privado de 3 días para líderes y empresarios que quieren ir al fondo — sin poses, sin yoga, sin ruido.
          </p>
        </Reveal>
        <Reveal delay={450}>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-ink/80">
            {[
              ["3 días", "2 noches"],
              ["10", "plazas"],
              ["6.500 €", "por persona"],
            ].map(([a, b], i) => (
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
        <Reveal delay={600}>
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
    <section id="metodo" className="py-32 lg:py-44 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div id="retiro" className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-5">
            <Reveal><div className="eyebrow mb-8">El Método</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                Tres ejes.
                <br />
                <span className="serif-italic">Un proceso.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 flex items-end">
            <Reveal delay={200}>
              <p className="text-base text-ink/75 leading-relaxed max-w-lg">
                No es un curso. No es un evento de networking. Es un proceso diseñado para líderes que han llegado lejos y necesitan parar, ver con claridad y decidir desde quiénes son hoy.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/20">
          {methodCards.map((c, i) => (
            <Reveal key={c.n} delay={i * 120}>
              <div className="bg-dark-earth text-cream p-10 lg:p-14 h-full min-h-[420px] flex flex-col">
                <div className="text-gold text-[11px] tracking-[0.28em] mb-12">— {c.n}</div>
                <h3 className="font-serif text-3xl lg:text-4xl mb-6 leading-tight">{c.title}</h3>
                <p className="text-sm text-cream/70 leading-relaxed mt-auto">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Program() {
  return (
    <section id="programa" className="py-32 lg:py-44 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7">
            <Reveal><div className="eyebrow mb-8">El Programa</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                3 días
                <br />
                <span className="serif-italic">de profundidad.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 flex items-end">
            <Reveal delay={200}>
              <p className="text-sm text-ink/70 leading-relaxed border-l border-gold/40 pl-5">
                Cada bloque tiene un propósito. No se satura. El tiempo libre es parte del método.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {program.map((d, i) => (
            <Reveal key={d.n} delay={i * 120}>
              <div className="bg-cream card-top-gold p-8 lg:p-10 h-full">
                <div className="text-gold text-[11px] tracking-[0.28em] mb-8">— {d.n}</div>
                <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm">Día · {d.day}</div>
                <h3 className="font-serif text-3xl mt-2 mb-8">{d.title}</h3>
                <ul className="space-y-4">
                  {d.items.map(([t, label]) => (
                    <li key={t} className="flex gap-5 text-sm">
                      <span className="text-gold tabular-nums w-12 shrink-0">{t}</span>
                      <span className="text-ink/80">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Includes() {
  return (
    <section className="py-32 lg:py-44 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><div className="eyebrow mb-8">Incluye</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[clamp(2.5rem,4.5vw,4rem)] leading-[1.05]">
                Lo que forma
                <br />
                <span className="serif-italic">parte del retiro.</span>
              </h2>
            </Reveal>
            <Reveal delay={250}>
              <div className="mt-12 hidden lg:block">
                <img src={textureImg} alt="" className="w-full aspect-[3/4] object-cover" loading="lazy" width={1200} height={1500} />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
              {includes.map(([n, title, text], i) => (
                <Reveal key={n} delay={i * 80}>
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
      </div>
    </section>
  );
}

function Investment() {
  return (
    <section id="inversion" className="py-32 lg:py-44 bg-dark-green text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-6">
            <Reveal>
              <div className="eyebrow mb-8" style={{ color: "var(--gold-soft)" }}>
                Inversión
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                Una decisión
                <br />
                <span className="serif-italic">clara.</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <Reveal delay={200}>
              <p className="text-base text-cream/75 leading-relaxed">
                El precio incluye alojamiento, manutención completa, facilitación y materiales. Pago en dos fases.
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal delay={150}>
          <div className="border border-gold/60 p-10 lg:p-16 max-w-3xl mx-auto bg-dark-earth/40">
            <div className="text-[11px] uppercase tracking-[0.28em] text-gold-soft mb-6">Retiro completo</div>
            <div className="font-serif text-[clamp(4rem,10vw,8rem)] text-gold leading-none">6.500 €</div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-cream/60 mt-4">Por persona · todo incluido</div>

            <div className="mt-12 border-t border-cream/15 divide-y divide-cream/10">
              {[
                ["Reserva de plaza", "Al confirmar", "3.250 €"],
                ["Segundo pago", "Antes del 3 de julio", "3.250 €"],
              ].map(([t, sub, amt]) => (
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
    <section id="solicitud" className="py-32 lg:py-44 bg-sand">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <Reveal><div className="eyebrow mb-8">Solicitud</div></Reveal>
            <Reveal delay={100}>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05]">
                El proceso
                <br />
                <span className="serif-italic">de selección.</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 text-base text-ink/75 leading-relaxed max-w-md">
                Las plazas no son de libre compra. Se evalúa cada solicitud para asegurar que el grupo sea el adecuado.
              </p>
            </Reveal>

            <ol className="mt-14 space-y-10 relative">
              <div className="absolute left-[22px] top-3 bottom-3 w-px bg-gold/30" />
              {steps.map(([n, title, text], i) => (
                <Reveal key={n} delay={i * 100}>
                  <li className="flex gap-6 relative">
                    <div className="w-11 h-11 rounded-full border border-gold flex items-center justify-center bg-sand text-gold font-serif text-sm shrink-0 relative z-10">
                      {n}
                    </div>
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
              <form
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                className="bg-cream card-top-gold p-8 lg:p-12"
              >
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="text-gold font-serif text-5xl mb-4">✓</div>
                    <h3 className="font-serif text-2xl mb-3">Solicitud recibida</h3>
                    <p className="text-sm text-ink/70 max-w-sm mx-auto">
                      Revisaremos tu perfil en las próximas 48 horas y te contactaremos por email.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-muted-warm mb-8">
                      Formulario · confidencial
                    </div>
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
                      <label className="block text-[11px] uppercase tracking-[0.22em] text-muted-warm mb-2">
                        ¿Por qué quieres venir a este retiro?
                      </label>
                      <textarea
                        rows={5}
                        required
                        className="w-full bg-transparent border-b border-ink/15 focus:border-gold outline-none py-3 text-sm resize-none transition-colors"
                      />
                    </div>

                    <button type="submit" className="btn-dark mt-10 w-full justify-center">
                      Enviar solicitud →
                    </button>

                    <p className="text-[11px] text-muted-warm mt-6 leading-relaxed">
                      Confidencialidad total garantizada. Las plazas se asignan por orden y adecuación de perfil.
                    </p>
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
      <input
        name={name}
        type={type}
        required
        className="w-full bg-transparent border-b border-ink/15 focus:border-gold outline-none py-3 text-sm transition-colors"
      />
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
            <div className="text-[11px] uppercase tracking-[0.28em] text-cream/50 mt-4">
              México · Julio 2025 · 10 plazas
            </div>
          </div>
          <div className="md:text-right text-[11px] uppercase tracking-[0.22em] text-cream/40">
            © {new Date().getFullYear()} RH Elite · Confidencialidad absoluta
          </div>
        </div>
        <div className="mt-12 h-px bg-cream/10" />
        <div className="mt-8 text-xs text-cream/40 max-w-2xl">
          Un proceso privado para líderes y empresarios. Selección por entrevista.
        </div>
      </div>
    </footer>
  );
}
