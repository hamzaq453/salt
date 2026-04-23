"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function DiFrage() {
  useScrollReveal();

  return (
    <section id="die-frage" className="bg-salt-white px-6 py-28">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div
          className="reveal-on-scroll mb-8 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet">
            Du bist hier, weil...
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
        </div>

        <h2
          className="reveal-on-scroll mb-8 font-display text-3xl font-bold leading-[1.2] text-salt-black md:text-4xl"
          style={{ transitionDelay: "100ms" }}
        >
          Du hast alles erreicht.
          <br />
          Und spürst dennoch —
          <br />
          <em className="italic text-salt-violet">da ist noch etwas.</em>
        </h2>

        <p
          className="reveal-on-scroll mb-12 max-w-[560px] font-body text-base font-normal leading-[1.85] text-salt-muted"
          style={{ transitionDelay: "200ms" }}
        >
          Erfolg, Ansehen, Ergebnisse. Von außen stimmt alles.
          <br />
          Doch ein leises Gefühl lässt sich nicht wegdenken.
          <br />
          Dein Verstand hat dich weit gebracht —
          <br />
          aber hier kommt er nicht weiter.
        </p>

        <div
          className="reveal-on-scroll mb-12 flex w-full max-w-[400px] items-center gap-4"
          style={{ transitionDelay: "300ms" }}
        >
          <div className="h-px flex-1 bg-salt-greige" />
          <div className="h-2 w-2 shrink-0 rotate-45 bg-salt-crimson" />
          <div className="h-px flex-1 bg-salt-greige" />
        </div>

        <blockquote
          className="reveal-on-scroll mb-10 max-w-[540px] font-display text-xl font-medium italic leading-[1.5] text-salt-violet"
          style={{ transitionDelay: "400ms" }}
        >
          „An der Spitze ist es einsam.
          <br />
          Vielleicht ist es Zeit, Rat aus
          <br />
          Deinem Innern anzunehmen.“
        </blockquote>

        <div
          className="reveal-on-scroll h-0.5 w-12 bg-salt-crimson"
          style={{ transitionDelay: "500ms" }}
        />
      </div>
    </section>
  );
}
