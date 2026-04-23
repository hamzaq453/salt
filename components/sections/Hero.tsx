"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClasses, secondaryCtaClasses } from "@/lib/ctaClasses";

/** Tried in order until one loads (place files in `/public`). */
const HERO_PORTRAIT_SRCS = ["/sabine.jpg", "/Sabine.png"] as const;

const COMPANY_LOGOS = [
  { src: "/companies/Logo HiQ breit.png", alt: "HiQ" },
  { src: "/companies/Bundeswehr.png", alt: "Bundeswehr" },
  { src: "/companies/YNS.png", alt: "YNS" },
  { src: "/companies/PER Medien.png", alt: "PER Medien" },
  { src: "/companies/Tolle Immobilien Logo.png", alt: "Tolle Immobilien" },
  { src: "/companies/Northwind.png", alt: "Northwind" },
  { src: "/companies/illuminati-logo-2016.png", alt: "Illuminati" },
  { src: "/companies/christiani_storymarketing_black_72dpi.png", alt: "Christiani" },
  { src: "/companies/Constellaris Logo.png", alt: "Constellaris" },
  { src: "/companies/Logo_REWE.svg_.png", alt: "REWE" },
  { src: "/companies/TÜV Rheinland.png", alt: "TÜV Rheinland" },
  { src: "/companies/Steuerengel-frei.png", alt: "Steuerengel" },
  { src: "/companies/InnerWise.png", alt: "InnerWise" },
  { src: "/companies/Kundengewinnungslabor_logo_web_400.png", alt: "Kundengewinnungslabor" },
  { src: "/companies/Grit Kriegel.jpg", alt: "Grit Kriegel" },
  { src: "/companies/deutsche bank transparent.png", alt: "Deutsche Bank" },
  { src: "/companies/wayv_logo.png", alt: "wayv" },
  { src: "/companies/Atlas_Logo.svg", alt: "Atlas" },
] as const;

function LogoStripCell({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className="relative h-10 w-[90px] shrink-0 rounded-sm bg-salt-greige-bg/70 opacity-60"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative h-10 w-[90px] shrink-0 grayscale opacity-60 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-left"
        sizes="90px"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function Hero() {
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [portraitFailed, setPortraitFailed] = useState(false);

  const portraitSrc =
    HERO_PORTRAIT_SRCS[portraitIndex] ?? HERO_PORTRAIT_SRCS[0];

  return (
    <section
      id="hero"
      className="grid min-h-screen grid-cols-1 overflow-hidden bg-salt-white pt-[72px] md:grid-cols-2"
    >
      {/* LEFT COLUMN — below image on mobile, left on desktop */}
      <div
        id="sabine"
        className="order-2 flex flex-col justify-center px-6 py-10 md:order-1 md:min-h-[calc(100vh-72px)] md:px-16 md:py-20"
      >
        <p
          className="mb-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          Energie-Kunst für Führungspersönlichkeiten
        </p>

        <h1
          className="mb-6 font-sans font-extrabold leading-[1.1] tracking-[-0.03em] text-salt-black opacity-0 animate-fade-slide-up"
          style={{
            animationDelay: "100ms",
            fontSize: "clamp(2.2rem, 7vw, 4.5rem)",
          }}
        >
          Dein Unterbewusstsein
          <br />
          <em className="text-salt-violet italic">kennt den Weg.</em>
        </h1>

        <p
          className="mb-8 max-w-[440px] font-body text-base leading-[1.75] font-light text-salt-muted opacity-0 animate-fade-slide-up md:mb-10 md:text-lg"
          style={{ animationDelay: "200ms" }}
        >
          Persönliche Energie-Bilder für Menschen, die an der Spitze stehen —
          und spüren, dass noch mehr möglich ist.
        </p>

        <div
          className="mb-8 flex flex-col gap-3 opacity-0 animate-fade-slide-up sm:flex-row sm:gap-4 md:mb-12"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="/#kontakt"
            className={`inline-flex w-full items-center justify-center text-center no-underline sm:w-auto ${primaryCtaClasses}`}
          >
            Gespräch vereinbaren →
          </a>
          <Link
            href="/galerie"
            className={`inline-flex w-full items-center justify-center text-center no-underline sm:w-auto ${secondaryCtaClasses}`}
          >
            Galerie entdecken
          </Link>
        </div>

        <div
          className="opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "440ms" }}
        >
          <p className="mb-3 hidden font-body text-[0.65rem] font-medium tracking-[0.16em] text-salt-greige uppercase sm:block">
            Unternehmen, mit denen ich gearbeitet habe
          </p>
          <div
            className="flex flex-wrap items-center gap-2"
            aria-label="Auswahl von Unternehmenslogos, mit denen Sabine Alter gearbeitet hat"
          >
            {COMPANY_LOGOS.slice(0, 4).map((logo) => (
              <LogoStripCell key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
            {COMPANY_LOGOS.slice(4, 6).map((logo) => (
              <div key={logo.src} className="hidden sm:block">
                <LogoStripCell src={logo.src} alt={logo.alt} />
              </div>
            ))}
            <span className="font-sans text-[0.72rem] tracking-[0.06em] text-salt-muted-light sm:hidden">
              +14 weitere
            </span>
            <span className="hidden font-sans text-[0.72rem] tracking-[0.06em] text-salt-muted-light sm:inline">
              +12 weitere
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — top on mobile, right on desktop */}
      <div
        className="relative order-1 h-[55vw] max-h-[420px] min-h-[280px] overflow-hidden bg-gradient-to-b from-salt-violet-light to-salt-greige-bg md:order-2 md:h-auto md:max-h-none md:min-h-0"
      >
        {!portraitFailed ? (
          <div className="absolute inset-0">
            <Image
              src={portraitSrc}
              alt="Sabine Alter — SALT Energie-Künstlerin"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={() => {
                if (portraitIndex + 1 < HERO_PORTRAIT_SRCS.length) {
                  setPortraitIndex((i) => i + 1);
                } else {
                  setPortraitFailed(true);
                }
              }}
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-salt-violet-light/80 to-salt-greige-bg px-6 text-center"
            role="img"
            aria-label="Portrait platzhalter"
          >
            <p className="font-body max-w-xs text-sm font-normal text-salt-muted">
              Legen Sie das Portrait als{" "}
              <code className="text-salt-violet">public/sabine.jpg</code> oder{" "}
              <code className="text-salt-violet">public/Sabine.png</code> ab.
            </p>
          </div>
        )}

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 hidden h-40 bg-gradient-to-b from-salt-violet-light/50 to-transparent md:block" />

        <div className="absolute top-6 right-6 z-20 hidden rounded-[2px] bg-salt-gold px-4 py-2 font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-white uppercase md:block">
          3Sat · Scobel
        </div>

        <div className="absolute bottom-8 left-8 z-20 hidden border-l-[3px] border-salt-violet bg-white px-5 py-4 md:block">
          <p className="font-sans text-4xl leading-none font-extrabold text-salt-violet">
            38+
          </p>
          <p className="mt-1 font-sans text-[0.7rem] font-medium uppercase tracking-[0.1em] text-salt-muted-light">
            Einmalige Energie-Bilder
          </p>
        </div>
      </div>
    </section>
  );
}
