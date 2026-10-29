"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#groupe", label: "Le Groupe" },
  { href: "#b-intelligence", label: "B Intelligence" },
  { href: "#bv-para", label: "BV Para" },
  { href: "#bv-champs", label: "BV Champ's" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,color] duration-500 ${
        solid ? "border-b border-line bg-white text-ink" : "border-b border-white/15 bg-transparent text-white"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-[1320px] items-center justify-between px-5 md:px-10">
        <a href="#" className="flex items-center gap-3" aria-label="BV Groupe, accueil">
          <span
            className={`grid h-9 w-9 place-items-center text-[13px] font-bold tracking-tight transition-colors ${
              solid ? "bg-navy text-white" : "bg-white text-navy"
            }`}
          >
            BV
          </span>
          <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">BV Groupe</span>
        </a>

        <ul className="hidden items-center gap-10 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="link-line pb-1 text-[14px] font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden h-11 items-center px-6 text-[13px] font-semibold uppercase tracking-[0.14em] transition-colors lg:inline-flex ${
            solid ? "bg-blue text-white hover:bg-navy" : "bg-white text-navy hover:bg-blue hover:text-white"
          }`}
        >
          Contact
        </a>

        <button
          aria-label="Ouvrir le menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 flex-col items-end justify-center gap-[7px] lg:hidden"
        >
          <span className={`h-px w-7 bg-current transition ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-px bg-current transition-all ${open ? "w-7 -translate-y-1 -rotate-45" : "w-5"}`} />
        </button>
      </nav>

      <div className={`grid transition-[grid-template-rows] duration-500 lg:hidden ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
        <ul className="overflow-hidden px-5">
          {[...links, { href: "#contact", label: "Contact" }].map((l) => (
            <li key={l.href} className="border-t border-line">
              <a href={l.href} onClick={() => setOpen(false)} className="block py-4 text-lg font-medium">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
