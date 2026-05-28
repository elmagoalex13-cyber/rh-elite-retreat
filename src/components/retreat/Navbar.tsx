import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#retiro", label: "El Retiro" },
  { href: "#metodo", label: "El Método" },
  { href: "#programa", label: "Programa" },
  { href: "#inversion", label: "Inversión" },
  { href: "#solicitud", label: "Solicitar Plaza" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md py-3 shadow-[0_4px_24px_rgba(28,20,9,0.06)]"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="#inicio" className="font-serif text-xl tracking-tight">
          <span className="text-gold">RH</span>
          <span className="text-ink">·ELITE</span>
        </a>
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">{l.label}</a>
          ))}
        </nav>
        <a href="#solicitud" className="btn-gold hidden md:inline-flex">Solicitar Plaza</a>
      </div>
    </header>
  );
}
