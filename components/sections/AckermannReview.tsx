"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AckermannReview() {
  useScrollReveal();

  return (
    <section id="ackermann" className="bg-salt-white px-6 py-20">
      <div className="mx-auto mb-14 flex max-w-[1100px] flex-col items-center text-center">
        <div
          className="reveal-on-scroll mb-6 flex items-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-crimson uppercase">
            Echte Erlebnisse
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-crimson" />
        </div>

        <h2
          className="reveal-on-scroll mb-4 font-sans font-extrabold tracking-[-0.02em] text-salt-black leading-[1.05]"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            transitionDelay: "100ms",
          }}
        >
          Transformationen
        </h2>

        <div
          className="reveal-on-scroll mb-5 h-0.5 w-12 bg-salt-crimson"
          style={{ transitionDelay: "160ms" }}
        />

        <p
          className="reveal-on-scroll max-w-[480px] font-sans text-base leading-[1.8] font-normal text-salt-muted"
          style={{ transitionDelay: "220ms" }}
        >
          Was Menschen mit ihren Energie-Bildern erlebt haben — in ihren eigenen
          Worten.
        </p>
      </div>

      <div className="mx-auto max-w-[1100px]">
        <div
          className="reveal-on-scroll grid min-h-[560px] grid-cols-1 md:grid-cols-2"
          style={{ transitionDelay: "300ms" }}
        >
          {/* Painting column */}
          <div className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-salt-violet-light p-12">
            <div className="relative aspect-[4/5] w-full max-w-[320px]">
              <Image
                src="/paintings/6 universelle Reinigung.jpg"
                alt="universelle Reinigung — Energie-Bild für Dr. Josef Ackermann"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            <div className="absolute bottom-6 left-6 border-l-[3px] border-salt-crimson bg-salt-white px-4 py-2.5">
              <p className="mb-0.5 font-sans text-[0.65rem] font-semibold tracking-[0.1em] text-salt-muted-light uppercase">
                Das Energie-Bild
              </p>
              <p className="font-sans text-sm font-medium italic text-salt-black">
                universelle Reinigung
              </p>
            </div>
          </div>

          {/* Content column */}
          <div className="flex flex-col justify-center gap-6 bg-salt-white px-10 py-14 md:px-14">
            <div className="inline-flex w-fit items-center gap-2 rounded-[2px] bg-salt-gold px-3 py-1.5">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
              <p className="font-sans text-[0.62rem] font-semibold tracking-[0.14em] text-white uppercase">
                Referenz · Deutsche Bank
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <h3 className="font-sans text-2xl font-extrabold tracking-[-0.02em] text-salt-black leading-[1.1] md:text-3xl">
                Dr. Josef Ackermann
              </h3>
              <p className="font-sans text-sm font-medium tracking-[0.04em] text-salt-muted-light">
                Ehem. Vorstandsvorsitzender · Deutsche Bank
              </p>
            </div>

            <div className="h-0.5 w-10 bg-salt-crimson" />

            <blockquote className="font-sans text-lg leading-[1.6] font-normal italic text-salt-black md:text-xl">
              <span className="mr-1 align-[-6px] font-sans text-3xl leading-none font-extrabold text-salt-violet">
                „
              </span>
              Ihr vor Energie sprühendes Bild hat bereits einen sehr schönen Platz
              in meinem Büro gefunden.
              <span className="ml-1 align-[-6px] font-sans text-3xl leading-none font-extrabold text-salt-violet">
                &rdquo;
              </span>
            </blockquote>

            <p className="max-w-[420px] font-sans text-sm leading-[1.85] font-normal text-salt-muted">
              Das Bild „universelle Reinigung“ wurde für Dr. Josef Ackermann, den
              damaligen Vorstandsvorsitzenden der Deutschen Bank angefertigt. Über
              das persönliche Dankschreiben hat sich Sabine besonders gefreut — es
              drückt höchste persönliche Wertschätzung aus.
            </p>

            <div className="flex items-center gap-4 border-t border-salt-greige/40 pt-2">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-salt-gold/40 bg-salt-gold/20">
                <span className="font-sans text-sm font-bold text-salt-gold">
                  JA
                </span>
              </div>

              <div className="flex flex-col gap-0.5">
                <p className="font-sans text-sm font-semibold text-salt-black">
                  Dr. Josef Ackermann
                </p>
                <p className="font-sans text-xs font-normal text-salt-muted-light">
                  Vorstandsvorsitzender · Deutsche Bank
                </p>
              </div>

              <div className="ml-auto">
                <div className="relative h-7 w-[90px] grayscale opacity-50">
                  <Image
                    src="/companies/deutsche bank transparent.png"
                    alt="Deutsche Bank"
                    fill
                    className="object-contain object-right"
                    sizes="90px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
