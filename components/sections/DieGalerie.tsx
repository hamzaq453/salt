"use client";

import Image from "next/image";
import Link from "next/link";
import { paintings, type Painting } from "@/data/paintings";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { primaryCtaClasses } from "@/lib/ctaClasses";

/** Masonry spans for md+ grid (8 teaser items). */
const TEASER_COL_SPANS = [1, 1, 1, 1, 2, 1, 1, 1] as const;
const TEASER_ROW_SPANS = [2, 1, 1, 2, 1, 1, 1, 1] as const;

type TeaserPainting = Painting & { colSpan: number; rowSpan: number };

function teaserMdSpanClasses(colSpan: number, rowSpan: number): string {
  if (colSpan === 2 && rowSpan === 2) return "md:col-span-2 md:row-span-2";
  if (colSpan === 2 && rowSpan === 1) return "md:col-span-2 md:row-span-1";
  if (colSpan === 1 && rowSpan === 2) return "md:col-span-1 md:row-span-2";
  return "md:col-span-1 md:row-span-1";
}

export default function DieGalerie() {
  useScrollReveal();

  const teaserPaintings: TeaserPainting[] = paintings.slice(0, 8).map((p, index) => ({
    ...p,
    colSpan: TEASER_COL_SPANS[index] ?? 1,
    rowSpan: TEASER_ROW_SPANS[index] ?? 1,
  }));

  return (
    <section id="galerie" className="bg-salt-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <div
          className="reveal-on-scroll mb-12 flex items-end justify-between"
          style={{ transitionDelay: "0ms" }}
        >
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
              <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet">
                38 Originale
              </p>
            </div>

            <h2 className="font-display text-3xl font-bold leading-[1.15] text-salt-black md:text-4xl">
              Die Energie-Bilder
            </h2>

            <div className="h-0.5 w-12 bg-salt-crimson" />

            <p className="max-w-[440px] font-body text-base font-normal leading-[1.75] text-salt-muted">
              Jedes Werk ist einmalig. Entstanden aus der Energie des Empfängers.
              Kein Bild gleicht dem anderen.
            </p>
          </div>

          <Link
            href="/galerie"
            className="mb-1 hidden border-salt-violet border-b pb-0.5 font-body text-sm font-medium tracking-[0.08em] whitespace-nowrap text-salt-violet transition-all duration-300 hover:tracking-[0.14em] md:block"
          >
            Alle Bilder ansehen →
          </Link>
        </div>

        <div className="grid auto-rows-[160px] grid-cols-2 gap-2 md:auto-rows-[200px] md:grid-cols-4 md:gap-4">
          {teaserPaintings.map((painting, index) => (
            <Link
              key={painting.filename}
              href="/galerie"
              className={[
                "reveal-on-scroll group relative block min-h-0 cursor-pointer overflow-hidden",
                "col-span-1 row-span-1",
                teaserMdSpanClasses(painting.colSpan, painting.rowSpan),
              ].join(" ")}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              <Image
                src={painting.src}
                alt={painting.title}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />

              <div className="absolute inset-0 z-10 flex flex-col justify-end bg-salt-violet/0 p-5 transition-all duration-[400ms] ease-out group-hover:bg-salt-violet/80">
                <div className="translate-y-4 opacity-0 transition-all duration-[350ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="mb-1 font-display text-xl font-semibold leading-tight text-white italic">
                    {painting.title}
                  </p>
                  <p className="font-body text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white/70">
                    Zum Erlebnis →
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div
          className="reveal-on-scroll mt-10 flex flex-col items-center justify-between gap-6 border-salt-greige/40 border-t pt-8 sm:flex-row sm:items-center"
          style={{ transitionDelay: "700ms" }}
        >
          <p className="mb-0 text-center font-body text-sm font-normal tracking-[0.04em] text-salt-muted-light sm:mb-0 sm:text-left">
            <span className="mr-2 font-display text-2xl font-bold text-salt-violet">
              38
            </span>
            einmalige Energie-Bilder
          </p>

          <Link
            href="/galerie"
            className={`inline-flex items-center justify-center uppercase tracking-[0.06em] no-underline ${primaryCtaClasses}`}
          >
            Alle Bilder in der Galerie →
          </Link>
        </div>
      </div>
    </section>
  );
}
