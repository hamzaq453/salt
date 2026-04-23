"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const chapters = [
  {
    label: "Das frühere Leben",
    headline: "Erfolgreich. Intelligent. Und dennoch unglücklich.",
    body: "Von außen stimmte alles: Mit Mitte Dreißig war Sabine selbständiger Financial Planner für VIP-Kunden der Deutschen Bank — erfolgreich, intelligent, attraktiv. Doch innen fühlte sie sich unsicher und unglücklich. Was sie störte, konnte sie selbst nicht bestimmen.",
  },
  {
    label: "Der Wendepunkt",
    headline: "Eine Begegnung verändert alles.",
    body: "Anstoß zur Veränderung war eine Behandlung von Lothar Kuch, einem Heiler in Berlin. Sabine erlebte so Unglaubliches, dass ihr damaliges Weltbild völlig auf den Kopf gestellt wurde. Plötzlich war ihr bewusst: Es gibt viel mehr zwischen Himmel und Erde, als wir uns vorstellen können.",
  },
  {
    label: "Das Lernen",
    headline: "Schamanen, Systeme und Stille.",
    body: "Danach widmete sich Sabine Dingen, die sie früher als Spinnerei abgetan hätte. Sie lernte von Schamanen im Peruanischen Regenwald, absolvierte Ausbildungen in InnerWise® und Systemischen Strukturaufstellungen (SySt®). Ein intensiver Lernprozess über Menschen, Heilung, Energien, Raum und Zeit.",
  },
  {
    label: "Die Gabe",
    headline: "Die Bilder zeigten, was sie nicht wissen konnte.",
    body: "Nach einem Workshop bei der japanischen Künstlerin Meera begann Sabine, für Freunde und Familienangehörige Bilder zu malen. Erstaunlich war, dass sich auf diesen Bildern oft etwas ganz anderes zeigte, als sie von ihnen wusste. Doch die Rückmeldungen waren klar: Die Bilder brachten kraftvolle Wirkung in Gang.",
  },
  {
    label: "SALT entsteht",
    headline: "Heute folge ich meinem inneren Ruf.",
    body: "Es hat Sabine Jahre gekostet, offen darüber reden zu können. Heute folgt sie ihrem inneren Ruf, geht ihren Weg — und möchte möglichst vielen Menschen helfen, auch ihren Weg zu gehen. SALT = Sabine Alter.",
  },
] as const;

export default function UeberSabine() {
  useScrollReveal();

  return (
    <section id="sabine" className="overflow-hidden bg-salt-white px-6 py-20">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-16 flex flex-col items-center text-center">
          <div
            className="reveal-on-scroll mb-6 flex items-center gap-3"
            style={{ transitionDelay: "0ms" }}
          >
            <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
            <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-violet uppercase">
              Die Künstlerin
            </p>
            <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          </div>

          <h2
            className="reveal-on-scroll mb-4 font-sans font-extrabold leading-[1.05] tracking-[-0.02em] text-salt-black"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              transitionDelay: "100ms",
            }}
          >
            Über Sabine
          </h2>

          <div
            className="reveal-on-scroll h-0.5 w-12 bg-salt-crimson"
            style={{ transitionDelay: "160ms" }}
          />
        </div>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-20">
          <div className="flex flex-col gap-6 md:sticky md:top-28">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-salt-violet-light">
              <Image
                src="/sabine.jpg"
                alt="Sabine Alter — SALT Energie-Künstlerin"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute top-4 right-4 rounded-[2px] bg-salt-gold px-3 py-1.5 font-sans text-[0.65rem] font-semibold tracking-[0.12em] text-white uppercase">
                3Sat · Scobel
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {(
                [
                  { value: "38+", label: "Energie-Bilder" },
                  { value: "15+", label: "Jahre Erfahrung" },
                  { value: "100+", label: "Aufstellungen" },
                ] as const
              ).map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center rounded-[4px] bg-salt-greige-bg p-4 text-center"
                >
                  <p className="mb-1 font-sans text-2xl leading-none font-extrabold text-salt-violet">
                    {stat.value}
                  </p>
                  <p className="font-sans text-[0.6rem] font-medium tracking-[0.1em] text-salt-muted-light uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            {chapters.map((chapter, index) => (
              <div
                key={chapter.label}
                className="reveal-on-scroll border-l-2 border-salt-greige pl-6 md:pl-8"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <p className="mb-2 font-sans text-[0.65rem] font-semibold tracking-[0.18em] text-salt-crimson uppercase">
                  {chapter.label}
                </p>

                <h3 className="mb-3 font-sans text-lg leading-[1.2] font-bold text-salt-black md:text-xl">
                  {chapter.headline}
                </h3>

                <p className="font-sans text-sm leading-[1.85] font-normal text-salt-muted">
                  {chapter.body}
                </p>
              </div>
            ))}

            <div
              className="reveal-on-scroll border-t border-salt-greige/40 pt-8"
              style={{ transitionDelay: "600ms" }}
            >
              <p className="mb-4 font-sans text-sm leading-[1.8] font-normal text-salt-muted">
                Möchtest Du Sabines vollständige Geschichte lesen?
                Oder direkt ein Gespräch vereinbaren?
              </p>
              <a
                href="https://calendly.com/salt-art/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-[4px] bg-salt-crimson px-8 py-3 font-sans text-sm font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:bg-[#b8002a]"
              >
                Gespräch vereinbaren →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
