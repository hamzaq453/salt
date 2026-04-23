"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Das Gespräch",
    description:
      "Ein persönliches 30-minütiges Telefonat. Du schilderst Deine Situation und Dein Ziel. Sabine hört zu — ohne Verkaufsdruck.",
    detail: "30 Minuten · kostenlos · per Telefon oder Video",
    cta: "Termin vereinbaren →",
    href: "https://calendly.com/salt-art/30min",
  },
  {
    number: "02",
    title: "Die Erschaffung",
    description:
      "Sabine stimmt sich auf Deine Energie ein — mit nur Deinem Namen und Geburtsdatum. Sie malt Dein persönliches Energie-Bild in Handarbeit.",
    detail: "Lieferzeit nach Absprache · mehr als 1 Quadratmeter",
    cta: null,
    href: null,
  },
  {
    number: "03",
    title: "Die Wirkung",
    description:
      "Dein Bild kommt an. Du findest seinen Platz — am besten dort, wo Du es täglich siehst. Du lässt es wirken. Flow beginnt.",
    detail: "Täglich auf Dein Unterbewusstsein · wie Coaching ohne Coach",
    cta: null,
    href: null,
  },
] as const;

export default function DieSchritte() {
  useScrollReveal();

  return (
    <section id="prozess" className="bg-salt-black px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <div
            className="reveal-on-scroll mb-6 flex items-center gap-3"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
            <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-crimson uppercase">
              Der Prozess
            </p>
            <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          </div>

          <h2
            className="reveal-on-scroll mb-4 font-sans font-extrabold leading-[1.05] tracking-[-0.02em] text-salt-white"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              transitionDelay: "100ms",
            }}
          >
            Dein Weg zum Energie-Bild
          </h2>

          <div
            className="reveal-on-scroll h-0.5 w-12 bg-salt-crimson"
            style={{ transitionDelay: "160ms" }}
          />
        </div>

        <div className="relative grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-0">
          <div className="absolute top-[5.5rem] bottom-[5.5rem] left-[2.75rem] z-0 w-px bg-salt-violet/20 md:hidden" />

          <div className="absolute top-[2.75rem] right-[16.67%] left-[16.67%] z-0 hidden h-px bg-salt-violet/30 md:block" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="reveal-on-scroll relative flex flex-col items-start py-8 pl-24 pr-6 text-left md:items-center md:px-8 md:py-0 md:text-center"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 left-0 z-10 flex h-[3.5rem] w-[3.5rem] shrink-0 items-center justify-center rounded-full border border-salt-violet/40 bg-salt-black md:relative md:top-auto md:mb-6 md:h-[5.5rem] md:w-[5.5rem]">
                <span className="font-sans text-lg leading-none font-extrabold text-salt-violet md:text-2xl">
                  {step.number}
                </span>
              </div>

              <h3 className="font-sans text-xl leading-tight font-bold text-white md:mb-3">
                {step.title}
              </h3>

              <div className="mb-4 h-0.5 w-8 bg-salt-violet md:mx-auto" />

              <p className="mb-4 max-w-[260px] font-sans text-sm leading-[1.8] font-normal text-[#9a9188]">
                {step.description}
              </p>

              <p className="mb-5 font-sans text-[0.62rem] font-medium tracking-[0.1em] text-salt-violet/60 uppercase">
                {step.detail}
              </p>

              {step.cta && step.href ? (
                <a
                  href={step.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-[4px] bg-salt-crimson px-6 py-3 font-sans text-xs font-semibold tracking-[0.08em] text-white uppercase transition-colors duration-200 hover:bg-[#b8002a]"
                >
                  {step.cta}
                </a>
              ) : null}
            </div>
          ))}
        </div>

        <div
          className="reveal-on-scroll mt-16 border-t border-white/5 pt-12 text-center"
          style={{ transitionDelay: "500ms" }}
        >
          <p className="font-sans text-sm leading-[1.8] font-normal italic text-[#5a5452]">
            „Ich brauche nur Deinen Namen und Dein Geburtsdatum —
            den Rest übernimmt die Energie.“
          </p>
          <p className="mt-2 font-sans text-xs font-semibold tracking-[0.1em] text-salt-violet uppercase">
            — Sabine Alter
          </p>
        </div>
      </div>
    </section>
  );
}
