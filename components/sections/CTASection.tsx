"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function CTASection() {
  useScrollReveal();

  const pills = [
    "30 Minuten · kostenlos",
    "Per Telefon oder Video",
    "Kein Verkaufsgespräch",
  ];

  return (
    <section
      id="kontakt"
      className="relative overflow-hidden bg-salt-white px-6 py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-20 w-20"
        style={{
          borderTop: "1px solid rgba(212, 0, 0, 0.2)",
          borderLeft: "1px solid rgba(212, 0, 0, 0.2)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-20 w-20"
        style={{
          borderRight: "1px solid rgba(106, 11, 207, 0.2)",
          borderBottom: "1px solid rgba(106, 11, 207, 0.2)",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center gap-8 text-center">
        <div
          className="reveal-on-scroll flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.24em] text-salt-crimson uppercase">
            Bereit?
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll font-sans font-extrabold tracking-[-0.03em] text-salt-black leading-[1.05]"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            transitionDelay: "100ms",
          }}
        >
          Dein Bild wartet
          <br />
          auf{" "}
          <span className="text-salt-crimson">Dich.</span>
        </h2>

        <p
          className="reveal-on-scroll max-w-[480px] font-sans text-lg leading-[1.85] font-normal text-salt-muted"
          style={{ transitionDelay: "180ms" }}
        >
          Beginne mit einem 30-minütigen Gespräch. Ich brauche nur Deinen Namen
          und Dein Geburtsdatum.
        </p>

        <div
          className="reveal-on-scroll flex flex-wrap items-center justify-center gap-3"
          style={{ transitionDelay: "240ms" }}
        >
          {pills.map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-[4px] bg-salt-violet-light px-4 py-2"
            >
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-salt-violet" />
              <p className="font-sans text-xs font-medium tracking-[0.04em] text-salt-violet">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-on-scroll" style={{ transitionDelay: "320ms" }}>
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-[4px] bg-salt-crimson px-12 py-5 font-sans text-base font-semibold tracking-[0.06em] text-salt-white uppercase transition-colors duration-200 hover:bg-[#b8002a] hover:text-salt-white"
          >
            Termin vereinbaren →
          </a>
        </div>

        <div
          className="reveal-on-scroll flex flex-col items-center gap-2"
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-sans text-xs font-normal tracking-[0.06em] text-salt-muted-light">
            Oder schreibe direkt:
          </p>
          <a
            href="mailto:salt@artwithenergy.com"
            className="border-b border-salt-violet pb-0.5 font-sans text-sm font-medium text-salt-violet transition-colors duration-200 hover:border-salt-black hover:text-salt-black"
          >
            salt@artwithenergy.com
          </a>
        </div>
      </div>
    </section>
  );
}
