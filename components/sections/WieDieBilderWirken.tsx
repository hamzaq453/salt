"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

function QuantumAnimation() {
  return (
    <div className="relative h-[180px] w-[180px]">
      <div className="absolute inset-0 animate-[spin_3s_linear_infinite] rounded-full border border-salt-violet/30">
        <div className="absolute -top-[4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-salt-violet" />
      </div>
      <div className="absolute inset-[24px] animate-[spin_5s_linear_infinite_reverse] rounded-full border border-salt-crimson/30">
        <div className="absolute -top-[4px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-salt-crimson" />
      </div>
      <div className="absolute inset-[48px] animate-[spin_8s_linear_infinite] rounded-full border border-salt-violet/20">
        <div className="absolute -top-[3px] left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-salt-violet/60" />
      </div>
      <div className="absolute inset-[72px] animate-[saltSciencePulse_2s_ease-in-out_infinite] rounded-full bg-gradient-to-br from-salt-violet to-salt-crimson opacity-90" />
    </div>
  );
}

function EyeAnimation() {
  return (
    <div className="relative flex h-[200px] w-[200px] items-center justify-center">
      <div
        className="absolute inset-0 animate-[aurora_4s_ease-in-out_infinite_alternate] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #6A0BCF, #D40000, transparent)",
        }}
      />
      <div
        className="relative h-[80px] w-[140px] animate-[blink_4s_ease-in-out_infinite]"
        style={{ overflow: "hidden" }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "#F7F5F3",
            borderRadius: "50%",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 animate-[aurora_3s_ease-in-out_infinite_alternate] rounded-full"
          style={{
            background: "radial-gradient(circle, #6A0BCF, #4a0891)",
          }}
        />
        <div className="absolute top-1/2 left-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#141414]" />
        <div className="absolute top-[30%] left-[54%] h-2 w-2 rounded-full bg-white/60" />
      </div>
    </div>
  );
}

function MorphogeneticAnimation() {
  const rings = [
    { inset: "0px", delay: "0.6s" },
    { inset: "16px", delay: "0.4s" },
    { inset: "32px", delay: "0.2s" },
    { inset: "48px", delay: "0s" },
  ];

  return (
    <div className="relative h-[180px] w-[180px]">
      {rings.map((ring, i) => (
        <div
          key={i}
          className="absolute animate-[morphPulse_3s_ease-in-out_infinite] rounded-full border border-salt-violet"
          style={{
            inset: ring.inset,
            animationDelay: ring.delay,
          }}
        />
      ))}
      <div className="absolute inset-[72px] animate-[saltSciencePulse_2s_ease-in-out_infinite] rounded-full bg-salt-violet" />
      <div className="absolute inset-[60px] animate-[morphPulse_3s_ease-in-out_infinite] rounded-full border-2 border-salt-violet/40" />
    </div>
  );
}

export default function WieDieBilderWirken() {
  useScrollReveal();

  return (
    <section id="wie-es-wirkt" className="bg-salt-white pb-0">
      <div className="flex flex-col items-center bg-salt-white px-6 py-14 text-center md:py-20">
        <div className="mx-auto flex max-w-[700px] flex-col items-center">
          <div
            className="reveal-on-scroll mb-6 flex items-center gap-3"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
            <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-violet uppercase">
              Die Wissenschaft
            </p>
            <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          </div>
          <h2
            className="reveal-on-scroll mb-4 text-center font-sans font-extrabold tracking-[-0.02em] text-salt-black leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              transitionDelay: "100ms",
            }}
          >
            Wie die Bilder wirken
          </h2>
          <div
            className="reveal-on-scroll mb-6 h-0.5 w-12 bg-salt-crimson"
            style={{ transitionDelay: "160ms" }}
          />
          <p
            className="reveal-on-scroll max-w-[480px] font-sans text-base leading-[1.8] font-normal text-salt-muted"
            style={{ transitionDelay: "220ms" }}
          >
            Nicht Mystik — Physik. Drei wissenschaftliche Grundlagen erklären,
            warum Energie-Bilder wirken und wie sie Dein Unterbewusstsein
            erreichen.
          </p>
        </div>
      </div>

      {/* Row 1 — Quantenphysik: text left, visual right */}
      <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-2">
        <div className="reveal-on-scroll flex flex-col justify-center gap-5 bg-salt-white px-6 py-10 md:px-16 md:py-16">
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-salt-crimson uppercase">
            01 — Quantenphysik
          </p>
          <h3 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-salt-black leading-[1.1] md:text-3xl">
            Alles ist Energie.
            <br />
            Auch Dein Bild.
          </h3>
          <div className="h-0.5 w-10 bg-salt-violet" />
          <p className="max-w-[400px] font-sans text-base leading-[1.8] font-normal text-salt-muted">
            Quantenphysik zeigt: Materie und Bewusstsein sind nicht getrennt.
            Ein Energie-Bild ist kein Zufall — es entsteht in Resonanz mit Deiner
            einzigartigen Schwingung. Jeder Mensch hat eine eigene Frequenz.
            Sabine stimmt das Bild auf genau diese Frequenz ab.
          </p>
        </div>
        <div className="reveal-on-scroll relative flex min-h-[240px] items-center justify-center overflow-hidden bg-salt-violet-light md:min-h-0">
          <QuantumAnimation />
        </div>
      </div>

      {/* Row 2 — Farbe & Auge: visual left, text right */}
      <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-2">
        <div className="reveal-on-scroll relative flex min-h-[240px] items-center justify-center overflow-hidden bg-[#141414] md:min-h-0">
          <EyeAnimation />
        </div>
        <div className="reveal-on-scroll flex flex-col justify-center gap-5 bg-salt-greige-bg px-6 py-10 md:px-16 md:py-16">
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-salt-crimson uppercase">
            02 — Farbe & Auge
          </p>
          <h3 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-salt-black leading-[1.1] md:text-3xl">
            Farben sprechen
            <br />
            direkt zum Gehirn.
          </h3>
          <div className="h-0.5 w-10 bg-salt-violet" />
          <p className="max-w-[400px] font-sans text-base leading-[1.8] font-normal text-salt-muted">
            Jede Farbe sendet eine spezifische Wellenlänge. Das Auge empfängt sie
            — das Gehirn verarbeitet sie unbewusst, bevor der Verstand eingreifen
            kann. Sabine wählt jede Farbe in Deinem Energie-Bild gezielt auf
            Deine persönliche Energie ab. Das Ergebnis wirkt täglich auf Dich
            ein.
          </p>
        </div>
      </div>

      {/* Row 3 — Morphogenetisches Feld: text left, visual right */}
      <div className="grid min-h-[380px] grid-cols-1 md:grid-cols-2">
        <div className="reveal-on-scroll flex flex-col justify-center gap-5 bg-salt-white px-6 py-10 md:px-16 md:py-16">
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.2em] text-salt-crimson uppercase">
            03 — Morphogenetisches Feld
          </p>
          <h3 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-salt-black leading-[1.1] md:text-3xl">
            Das Feld kennt
            <br />
            Deine Geschichte.
          </h3>
          <div className="h-0.5 w-10 bg-salt-violet" />
          <p className="max-w-[400px] font-sans text-base leading-[1.8] font-normal text-salt-muted">
            Dr. Rupert Sheldrake zeigt: Alle Lebewesen sind durch ein unsichtbares
            morphogenetisches Feld verbunden. Informationen werden darin
            gespeichert und weitergegeben — unabhängig von Zeit und Raum. Sabine
            nutzt dieses Feld, um ein Bild zu erschaffen, das auf Deine
            einzigartige Energie eingestimmt ist. Nur Dein Name und Geburtsdatum
            genügen.
          </p>
        </div>
        <div className="reveal-on-scroll relative flex min-h-[240px] items-center justify-center overflow-hidden bg-salt-greige-bg md:min-h-0">
          <MorphogeneticAnimation />
        </div>
      </div>
    </section>
  );
}
