"use client";

import type { CSSProperties } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const ghostTextStyle: CSSProperties = {
  color: "transparent",
  WebkitTextStroke: "1px rgba(106, 11, 207, 0.03)",
  fontSize: "clamp(120px, 22vw, 220px)",
};

const headlineStyle: CSSProperties = {
  fontSize: "clamp(2.8rem, 7vw, 5rem)",
  transitionDelay: "100ms",
};

export default function ChangeYourLife() {
  useScrollReveal();

  return (
    <section
      id="change-your-life"
      className="relative overflow-hidden bg-salt-white px-6 py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center justify-center overflow-hidden"
      >
        <span
          className="whitespace-nowrap font-sans font-extrabold leading-none tracking-[-0.04em]"
          style={ghostTextStyle}
        >
          SALT
        </span>
      </div>

      <div className="relative z-10 mx-auto flex max-w-[700px] flex-col items-center text-center">
        <div
          className="reveal-on-scroll mb-10 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-salt-crimson">
            Sabine Alter · SALT
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll mb-8 text-center font-sans font-extrabold leading-[1.0] tracking-[-0.03em]"
          style={headlineStyle}
        >
          <span className="block text-salt-black">Sie sieht,</span>
          <span className="block text-salt-crimson">was Du nicht siehst.</span>
          <span className="block text-salt-violet">Verändere Dein Leben.</span>
        </h2>

        <p
          className="reveal-on-scroll mb-10 max-w-[440px] font-sans text-base font-normal leading-[1.85] text-salt-muted md:text-lg"
          style={{ transitionDelay: "200ms" }}
        >
          Erfolgreiche Menschen spüren es — da ist noch mehr. Sabine erschafft ein
          Bild, das Dein Unterbewusstsein aktiviert und Transformation in Gang setzt.
        </p>

        <div className="reveal-on-scroll mb-16" style={{ transitionDelay: "300ms" }}>
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block cursor-pointer rounded-[4px] bg-salt-crimson px-10 py-4 font-sans text-sm font-semibold uppercase tracking-[0.08em] text-salt-white transition-colors duration-200 hover:bg-[#b8002a] hover:text-salt-white"
          >
            Gespräch vereinbaren →
          </a>
        </div>

        <div
          className="reveal-on-scroll mb-16 flex flex-wrap items-center justify-center gap-8 md:gap-12"
          style={{ transitionDelay: "400ms" }}
        >
          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-3xl font-extrabold leading-none text-salt-black md:text-4xl">
              38<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-salt-muted-light">
              Energie-Bilder
            </p>
          </div>

          <div className="h-10 w-px shrink-0 bg-salt-greige" />

          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-3xl font-extrabold leading-none text-salt-black md:text-4xl">
              16<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-salt-muted-light">
              Transformationen
            </p>
          </div>

          <div className="h-10 w-px shrink-0 bg-salt-greige" />

          <div className="flex flex-col items-center gap-1">
            <p className="font-sans text-3xl font-extrabold leading-none text-salt-black md:text-4xl">
              21<span className="text-salt-crimson">+</span>
            </p>
            <p className="font-sans text-[0.65rem] font-medium uppercase tracking-[0.12em] text-salt-muted-light">
              Unternehmen
            </p>
          </div>
        </div>

        <div
          className="reveal-on-scroll w-full max-w-[520px] border-t border-salt-greige/50 pt-8"
          style={{ transitionDelay: "500ms" }}
        >
          <p className="text-center font-sans text-sm font-normal italic leading-[1.75] text-salt-muted-light">
            „Das Wertvollste im Leben ist die Entfaltung der Persönlichkeit und
            ihrer schöpferischen Kräfte.“
          </p>
          <p className="mt-2 text-center font-sans text-xs font-semibold uppercase tracking-[0.1em] text-salt-violet">
            — Albert Einstein
          </p>
        </div>
      </div>
    </section>
  );
}
