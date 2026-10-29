import Image, { type StaticImageData } from "next/image";
import Navbar from "./components/Navbar";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";

import heroImg from "../public/images/hero.jpg";
import teamImg from "../public/images/team.jpg";
import officeImg from "../public/images/office.jpg";
import digitalTeamImg from "../public/images/digital-team.jpg";
import digitalDashboardImg from "../public/images/digital-dashboard.jpg";
import digitalDevsImg from "../public/images/digital-devs.jpg";
import agroFieldImg from "../public/images/agro-field.jpg";
import agroTanksImg from "../public/images/agro-tanks.jpg";
import agroProduceImg from "../public/images/agro-produce.jpg";
import agroSproutsImg from "../public/images/agro-sprouts.jpg";
import champVineyardImg from "../public/images/champ-vineyard.jpg";
import champCellarImg from "../public/images/champ-cellar.jpg";
import champPourImg from "../public/images/champ-pour.jpg";
import champGiftsImg from "../public/images/champ-gifts.jpg";

const poles: { id: string; n: string; name: string; tag: string; text: string; img: StaticImageData }[] = [
  {
    id: "b-intelligence",
    n: "01",
    name: "B Intelligence",
    tag: "Transformation numérique",
    text: "Sites, plateformes et outils digitaux sur mesure pour moderniser les organisations.",
    img: digitalTeamImg,
  },
  {
    id: "bv-para",
    n: "02",
    name: "BV Para",
    tag: "Transformation agro-alimentaire",
    text: "Valoriser les ressources agricoles, de la matière première au produit fini.",
    img: agroFieldImg,
  },
  {
    id: "bv-champs",
    n: "03",
    name: "BV Champ's",
    tag: "Vente de champagne",
    text: "Des cuvées sélectionnées pour les particuliers, les entreprises et les événements.",
    img: champVineyardImg,
  },
];

const realisations = [
  {
    name: "B-LINKS",
    kind: "Plateforme numérique",
    text: "Une plateforme qui connecte les personnes, les services et les opportunités en un seul endroit.",
    img: digitalDashboardImg,
  },
  {
    name: "Eduka",
    kind: "Solution éducative",
    text: "Un outil digital au service de l'éducation : apprendre, suivre et progresser plus simplement.",
    img: digitalDevsImg,
  },
  {
    name: "Site du COMEC",
    kind: "Site institutionnel",
    text: "Une vitrine web claire pour présenter l'organisation, ses missions et ses actualités.",
    img: officeImg,
  },
];

const services = [
  { t: "Conception web", d: "Sites vitrines et institutionnels, rapides et administrables." },
  { t: "Plateformes & applications", d: "Outils métier, espaces membres, solutions sur mesure." },
  { t: "Conseil digital", d: "Diagnostic, feuille de route et accompagnement au changement." },
  { t: "Maintenance & hébergement", d: "Suivi technique, sécurité et évolutions dans la durée." },
];

const paraSteps = [
  { n: "01", title: "Sélection", text: "Des matières premières choisies auprès de producteurs locaux." },
  { n: "02", title: "Transformation", text: "Des procédés maîtrisés qui préservent goût et qualité." },
  { n: "03", title: "Conditionnement", text: "Un emballage soigné, conforme aux normes d'hygiène." },
  { n: "04", title: "Distribution", text: "Des produits accessibles aux particuliers et aux professionnels." },
];

function Eyebrow({ n, children, light = false }: { n?: string; children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-4 text-[12px] font-semibold uppercase tracking-[0.24em] ${light ? "text-white/70" : "text-blue"}`}>
      {n && <span className={light ? "text-white" : "text-ink"}>{n}</span>}
      <span className={`h-px w-10 ${light ? "bg-white/40" : "bg-blue/40"}`} />
      {children}
    </p>
  );
}

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={`h-5 w-5 ${className}`}>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="square" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* ================= HERO ================= */}
        <section className="relative isolate flex min-h-svh flex-col overflow-hidden bg-navy text-white">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image src={heroImg} alt="" fill preload placeholder="blur" sizes="100vw" className="kenburns object-cover" />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy via-navy/85 to-navy/30" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-navy/90 via-transparent to-transparent" />

          <div className="mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-center px-5 pt-32 pb-16 md:px-10">
            <p className="fade-in text-[12px] font-semibold uppercase tracking-[0.3em] text-blue-soft" style={{ animationDelay: "200ms" }}>
              Numérique · Agro-alimentaire · Champagne
            </p>
            <h1 className="mt-8 max-w-5xl text-[44px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-[96px]">
              <span className="line-mask"><span style={{ animationDelay: "300ms" }}>Trois métiers,</span></span>
              <span className="line-mask">
                <span style={{ animationDelay: "450ms" }}>
                  une seule <em className="font-serif font-normal italic text-blue-soft">exigence.</em>
                </span>
              </span>
            </h1>
            <p className="fade-in mt-8 max-w-xl text-lg leading-relaxed text-white/75" style={{ animationDelay: "800ms" }}>
              BV Groupe accompagne la transformation numérique des organisations, valorise les produits
              agricoles et distribue des champagnes d&apos;exception.
            </p>
            <div className="fade-in mt-12 flex flex-wrap items-center gap-8" style={{ animationDelay: "1000ms" }}>
              <a href="#groupe" className="group inline-flex h-14 items-center gap-4 bg-white px-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-blue hover:text-white">
                Découvrir le groupe
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="link-line pb-1 text-[13px] font-semibold uppercase tracking-[0.14em]">
                Nous contacter
              </a>
            </div>
          </div>

          {/* barre des pôles */}
          <div className="fade-in border-t border-white/15" style={{ animationDelay: "1200ms" }}>
            <div className="mx-auto grid max-w-[1320px] md:grid-cols-3">
              {poles.map((p, i) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className={`group flex items-center justify-between gap-6 px-5 py-6 transition-colors hover:bg-white/5 md:px-10 ${
                    i > 0 ? "border-t border-white/15 md:border-t-0 md:border-l" : ""
                  }`}
                >
                  <span>
                    <span className="block text-[12px] text-white/50">{p.n}</span>
                    <span className="mt-1 block text-lg font-medium">{p.name}</span>
                    <span className="block text-sm text-white/60">{p.tag}</span>
                  </span>
                  <Arrow className="text-white/50 transition-all group-hover:translate-x-1 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ================= LE GROUPE ================= */}
        <section id="groupe" className="scroll-mt-20 py-24 md:py-36">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <Eyebrow>Le Groupe</Eyebrow>
              </Reveal>
              <div className="lg:col-span-8">
                <Reveal>
                  <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.02em] sm:text-5xl">
                    Un groupe aux activités complémentaires, réunies par une même{" "}
                    <em className="font-serif font-normal italic text-blue">vision</em> : créer une valeur
                    durable, ici et maintenant.
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted">
                    Du code aux champs, des champs aux caves : BV Groupe s&apos;appuie sur des équipes
                    spécialisées dans chaque métier, et sur des valeurs communes de qualité, de
                    proximité et de confiance avec ses clients et partenaires.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-20 grid gap-6 lg:grid-cols-12">
              <Reveal variant="clip" className="zoom-img relative aspect-[4/3] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[520px]">
                <Image src={teamImg} alt="Équipe BV Groupe en réunion" fill placeholder="blur" sizes="(min-width: 1024px) 58vw, 100vw" className="object-cover" />
              </Reveal>
              <div className="grid grid-cols-2 border-t border-l border-line lg:col-span-5">
                {[
                  { to: 3, s: "", l: "Pôles d'activité" },
                  { to: 3, s: "", l: "Réalisations numériques majeures" },
                  { to: 100, s: "%", l: "Engagement qualité" },
                  { to: 1, s: "", l: "Interlocuteur unique pour vos projets" },
                ].map((s, i) => (
                  <Reveal key={s.l} delay={i * 100} className="flex flex-col justify-between border-r border-b border-line p-6 sm:p-8">
                    <div className="text-5xl font-medium tracking-[-0.03em] text-ink sm:text-6xl">
                      <Counter to={s.to} suffix={s.s} />
                    </div>
                    <p className="mt-8 text-sm leading-snug text-muted">{s.l}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= NOS PÔLES ================= */}
        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <Eyebrow>Nos pôles</Eyebrow>
                <h2 className="mt-6 text-3xl font-medium tracking-[-0.02em] sm:text-5xl">Trois expertises.</h2>
              </Reveal>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {poles.map((p, i) => (
                <Reveal key={p.id} delay={i * 120}>
                  <a href={`#${p.id}`} className="zoom-img group relative block aspect-[3/4] overflow-hidden bg-navy text-white">
                    <Image src={p.img} alt={p.name} fill placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="object-cover opacity-90" />
                    <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-7">
                      <span className="text-[12px] text-white/60">{p.n}</span>
                      <h3 className="mt-2 text-3xl font-medium tracking-[-0.02em]">{p.name}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.14em] text-blue-soft">{p.tag}</p>
                      <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 group-hover:grid-rows-[1fr]">
                        <p className="overflow-hidden text-white/75">
                          <span className="block pt-4">{p.text}</span>
                        </p>
                      </div>
                      <span className="mt-6 flex h-11 w-11 items-center justify-center border border-white/40 transition-colors group-hover:border-white group-hover:bg-white group-hover:text-navy">
                        <Arrow />
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= B INTELLIGENCE ================= */}
        <section id="b-intelligence" className="scroll-mt-20 py-24 md:py-36">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal variant="clip" className="relative aspect-[4/5] overflow-hidden">
                <Image src={digitalTeamImg} alt="Équipe B Intelligence au travail" fill placeholder="blur" sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </Reveal>
              <div>
                <Reveal>
                  <Eyebrow n="01">Pôle numérique</Eyebrow>
                  <h2 className="mt-6 text-5xl font-medium tracking-[-0.03em] sm:text-7xl">B Intelligence</h2>
                  <p className="mt-8 text-lg leading-relaxed text-muted">
                    La branche numérique de BV Groupe, dédiée à la transformation digitale. Nous
                    concevons des sites, des plateformes et des outils qui simplifient le quotidien
                    des organisations et accélèrent leur développement.
                  </p>
                </Reveal>
                <div className="mt-12 border-t border-line">
                  {services.map((s, i) => (
                    <Reveal key={s.t} delay={i * 90}>
                      <div className="grid gap-1 border-b border-line py-5 sm:grid-cols-[220px_1fr] sm:gap-6">
                        <h3 className="font-medium text-ink">{s.t}</h3>
                        <p className="text-muted">{s.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            {/* Réalisations */}
            <div className="mt-28 md:mt-36">
              <Reveal className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <Eyebrow>Réalisations</Eyebrow>
                  <h3 className="mt-6 text-3xl font-medium tracking-[-0.02em] sm:text-5xl">
                    Ce que nous avons <em className="font-serif font-normal italic text-blue">construit.</em>
                  </h3>
                </div>
              </Reveal>
              <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-3">
                {realisations.map((r, i) => (
                  <Reveal key={r.name} delay={i * 120}>
                    <article className="zoom-img group">
                      <div className="relative aspect-[4/3] overflow-hidden bg-paper">
                        <Image src={r.img} alt={r.name} fill placeholder="blur" sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                        <span className="absolute left-4 top-4 bg-white px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                          {r.kind}
                        </span>
                      </div>
                      <div className="flex items-start justify-between gap-6 border-b border-line py-6">
                        <div>
                          <h4 className="text-2xl font-medium tracking-[-0.02em]">{r.name}</h4>
                          <p className="mt-3 leading-relaxed text-muted">{r.text}</p>
                        </div>
                        <Arrow className="mt-1 shrink-0 text-blue transition-transform group-hover:translate-x-1" />
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= BV PARA ================= */}
        <section id="bv-para" className="scroll-mt-20 bg-paper py-24 md:py-36">
          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5 lg:pt-16">
                <Reveal>
                  <Eyebrow n="02">Pôle agro-alimentaire</Eyebrow>
                  <h2 className="mt-6 text-5xl font-medium tracking-[-0.03em] sm:text-7xl">BV Para</h2>
                  <p className="mt-8 text-lg leading-relaxed text-muted">
                    Tout ce qui touche à la transformation agro-alimentaire. BV Para valorise les
                    ressources agricoles et les transforme en produits sains, savoureux et
                    accessibles, dans le respect des normes et des producteurs.
                  </p>
                </Reveal>
                <Reveal delay={150} variant="clip" className="relative mt-12 aspect-[4/3] overflow-hidden">
                  <Image src={agroProduceImg} alt="Produits agricoles frais" fill placeholder="blur" sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
                </Reveal>
              </div>
              <div className="grid grid-cols-2 gap-6 lg:col-span-7">
                <Reveal variant="clip" className="relative col-span-2 aspect-[16/10] overflow-hidden">
                  <Image src={agroTanksImg} alt="Unité de transformation" fill placeholder="blur" sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
                </Reveal>
                <Reveal variant="clip" delay={150} className="relative aspect-square overflow-hidden">
                  <Image src={agroFieldImg} alt="Champ de blé" fill placeholder="blur" sizes="(min-width: 1024px) 27vw, 50vw" className="object-cover" />
                </Reveal>
                <Reveal variant="clip" delay={300} className="relative aspect-square overflow-hidden">
                  <Image src={agroSproutsImg} alt="Jeunes cultures" fill placeholder="blur" sizes="(min-width: 1024px) 27vw, 50vw" className="object-cover" />
                </Reveal>
              </div>
            </div>

            <div className="mt-24 grid border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
              {paraSteps.map((s, i) => (
                <Reveal key={s.n} delay={i * 110} className={`py-10 sm:pr-8 ${i > 0 ? "lg:border-l lg:border-ink/15 lg:pl-8" : ""}`}>
                  <span className="font-serif text-5xl italic text-blue">{s.n}</span>
                  <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{s.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ================= BV CHAMP'S ================= */}
        <section id="bv-champs" className="relative isolate scroll-mt-20 overflow-hidden bg-navy py-24 text-white md:py-36">
          <div className="absolute inset-0 -z-10">
            <Image src={champVineyardImg} alt="" fill placeholder="blur" sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/80 to-navy" />
          </div>

          <div className="mx-auto max-w-[1320px] px-5 md:px-10">
            <div className="grid gap-14 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-5">
                <Reveal>
                  <Eyebrow n="03" light>Art de vivre</Eyebrow>
                  <h2 className="mt-6 text-5xl font-medium tracking-[-0.03em] sm:text-7xl">BV Champ&apos;s</h2>
                  <p className="mt-8 text-lg leading-relaxed text-white/70">
                    La vente de champagne, avec élégance. BV Champ&apos;s sélectionne des cuvées
                    d&apos;exception pour sublimer vos moments : mariages, anniversaires, réceptions
                    d&apos;entreprise ou plaisirs partagés.
                  </p>
                </Reveal>
                <div className="mt-12 border-t border-white/15">
                  {[
                    { t: "Cuvées sélectionnées", d: "Des maisons reconnues et des pépites à découvrir." },
                    { t: "Coffrets & cadeaux", d: "Pour vos clients, collaborateurs et proches." },
                    { t: "Événements", d: "Conseil et volumes adaptés à vos réceptions." },
                  ].map((o, i) => (
                    <Reveal key={o.t} delay={i * 100}>
                      <div className="flex gap-6 border-b border-white/15 py-5">
                        <span className="font-serif text-xl italic text-blue-soft">0{i + 1}</span>
                        <div>
                          <h3 className="font-medium">{o.t}</h3>
                          <p className="mt-1 text-white/60">{o.d}</p>
                        </div>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={300}>
                  <a href="#contact" className="group mt-12 inline-flex h-14 items-center gap-4 bg-white px-8 text-[13px] font-semibold uppercase tracking-[0.14em] text-navy transition-colors hover:bg-blue hover:text-white">
                    Commander / Se renseigner
                    <Arrow className="transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>
              </div>

              <div className="grid grid-cols-2 gap-6 lg:col-span-7">
                <Reveal variant="clip" className="relative row-span-2 min-h-[420px] overflow-hidden">
                  <Image src={champCellarImg} alt="Bouteilles en cave" fill placeholder="blur" sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
                </Reveal>
                <Reveal variant="clip" delay={150} className="relative aspect-[4/5] overflow-hidden">
                  <Image src={champPourImg} alt="Service d'une coupe" fill placeholder="blur" sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
                </Reveal>
                <Reveal variant="clip" delay={300} className="relative aspect-[4/5] overflow-hidden">
                  <Image src={champGiftsImg} alt="Coffrets cadeaux" fill placeholder="blur" sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="scroll-mt-20 py-24 md:py-36">
          <div className="mx-auto grid max-w-[1320px] gap-16 px-5 md:px-10 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-6 text-4xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-6xl">
                Parlons de votre <em className="font-serif font-normal italic text-blue">projet.</em>
              </h2>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
                Un site web, un partenariat agro-alimentaire ou une commande de champagne ? Notre équipe
                vous répond rapidement.
              </p>
              <dl className="mt-12 border-t border-line">
                {[
                  { k: "Email", v: "contact@bvgroupe.com" },
                  { k: "Téléphone", v: "+00 000 000 000" },
                  { k: "Adresse", v: "Siège BV Groupe" },
                ].map((c) => (
                  <div key={c.k} className="grid grid-cols-[120px_1fr] border-b border-line py-5">
                    <dt className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">{c.k}</dt>
                    <dd className="font-medium">{c.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
              <form action="mailto:contact@bvgroupe.com" method="post" encType="text/plain" className="bg-paper p-6 sm:p-12">
                <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
                  {[
                    { n: "nom", l: "Nom complet", t: "text" },
                    { n: "email", l: "Email", t: "email" },
                  ].map((f) => (
                    <label key={f.n} className="block">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">{f.l}</span>
                      <input name={f.n} type={f.t} required className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 outline-none transition-colors focus:border-blue" />
                    </label>
                  ))}
                  <label className="block sm:col-span-2">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Pôle concerné</span>
                    <select name="pole" className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 outline-none transition-colors focus:border-blue">
                      <option>B Intelligence — Numérique</option>
                      <option>BV Para — Agro-alimentaire</option>
                      <option>BV Champ&apos;s — Champagne</option>
                      <option>Autre demande</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">Message</span>
                    <textarea name="message" required rows={4} className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-3 outline-none transition-colors focus:border-blue" />
                  </label>
                </div>
                <button className="group mt-10 inline-flex h-14 w-full items-center justify-center gap-4 bg-navy text-[13px] font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-blue sm:w-auto sm:px-10">
                  Envoyer le message
                  <Arrow className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="bg-navy text-white/60">
        <div className="mx-auto max-w-[1320px] px-5 md:px-10">
          <div className="border-b border-white/10 py-16 md:py-24">
            <p className="max-w-4xl text-3xl font-medium leading-tight tracking-[-0.02em] text-white sm:text-5xl">
              Numérique, agro-alimentaire et champagne :{" "}
              <em className="font-serif font-normal italic text-blue-soft">trois univers, une exigence.</em>
            </p>
          </div>
          <div className="grid gap-10 py-14 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 text-white">
                <span className="grid h-9 w-9 place-items-center bg-white text-[13px] font-bold text-navy">BV</span>
                <span className="text-[13px] font-semibold uppercase tracking-[0.28em]">BV Groupe</span>
              </div>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">Nos pôles</h4>
              <ul className="mt-5 space-y-3">
                {poles.map((p) => (
                  <li key={p.id}>
                    <a href={`#${p.id}`} className="link-line pb-0.5 hover:text-white">{p.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white">Réalisations</h4>
              <ul className="mt-5 space-y-3">
                {realisations.map((r) => (
                  <li key={r.name}>
                    <a href="#b-intelligence" className="link-line pb-0.5 hover:text-white">{r.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap justify-between gap-4 border-t border-white/10 py-8 text-sm">
            <span>© 2026 BV Groupe. Tous droits réservés.</span>
            <span>Photos : Unsplash</span>
          </div>
        </div>
      </footer>
    </>
  );
}
