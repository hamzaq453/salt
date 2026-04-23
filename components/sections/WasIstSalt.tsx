"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { secondaryCtaClasses } from "@/lib/ctaClasses";

export default function WasIstSalt() {
  useScrollReveal();

  const cards = [
    {
      number: "01",
      title: "Das Bild",
      body: "Mehr als ein Quadratmeter. Handgemalt. Nur für Dich. Entstanden aus Deiner Energie — mit nur Deinem Namen und Geburtsdatum.",
      link: "Mehr erfahren",
    },
    {
      number: "02",
      title: "Die Energie",
      body: "Morphogenetisches Feld. Quantenphysik. Keine Mystik — Physik. Wissenschaftlich erklärbar, spirituell erfahrbar.",
      link: "Mehr erfahren",
    },
    {
      number: "03",
      title: "Die Wirkung",
      body: "Täglich auf Dein Unterbewusstsein. Wie tiefgreifendes Coaching — ohne Coach. Du gewinnst Klarheit, Sicherheit, Flow.",
      link: "Mehr erfahren",
    },
  ];

  return (
    <section id="was-ist-salt" className="bg-salt-violet-light px-6 py-24">
      <div className="mx-auto flex max-w-[1100px] flex-col items-center">
        <div
          className="reveal-on-scroll mb-6 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet">
            Was SALT ist
          </p>
        </div>

        <h2
          className="reveal-on-scroll mb-4 text-center font-display text-3xl font-bold leading-[1.15] text-salt-black md:text-4xl"
          style={{ transitionDelay: "80ms" }}
        >
          Das Energie-Bild
        </h2>

        <div
          className="reveal-on-scroll mb-6 h-0.5 w-12 bg-salt-crimson"
          style={{ transitionDelay: "140ms" }}
        />

        <p
          className="reveal-on-scroll mb-16 max-w-[520px] text-center font-body text-base font-normal leading-[1.75] text-salt-muted"
          style={{ transitionDelay: "200ms" }}
        >
          Ein einzigartiges, handgemaltes Kunstwerk — ausschließlich auf Deine
          Energie abgestimmt.
        </p>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={card.number}
              className="reveal-on-scroll salt-card group relative flex flex-col gap-4 bg-salt-white p-10"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="card-top-bar absolute left-0 right-0 top-0 h-[3px] bg-salt-violet" />

              <div className="flex items-center gap-3">
                <div className="flex h-7 w-7 shrink-0 rotate-45 items-center justify-center border border-salt-violet">
                  <div className="h-2 w-2 bg-salt-violet" />
                </div>
                <span className="font-body text-[0.7rem] font-medium uppercase tracking-[0.16em] text-salt-violet">
                  {card.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-semibold leading-[1.2] text-salt-black">
                {card.title}
              </h3>

              <p className="flex-1 font-body text-sm font-normal leading-[1.75] text-salt-muted">
                {card.body}
              </p>

              <div className="mt-2 h-px w-full bg-salt-greige/50" />

              <Link
                href="/galerie"
                className={`!text-xs inline-flex max-w-fit items-center justify-center uppercase tracking-[0.1em] no-underline transition-all duration-300 group-hover:tracking-[0.16em] ${secondaryCtaClasses}`}
              >
                {card.link} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
