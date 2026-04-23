"use client";

import { useState, useEffect, type CSSProperties } from "react";
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

const LOGO_STRIP = COMPANY_LOGOS.slice(0, 6);

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
        className="relative h-8 w-[80px] shrink-0 rounded-sm bg-salt-greige-bg/70 opacity-60"
        aria-hidden
      />
    );
  }

  return (
    <div className="relative h-8 w-[80px] shrink-0 grayscale opacity-70 transition-opacity hover:opacity-100">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain object-left"
        sizes="80px"
        onError={() => setBroken(true)}
      />
    </div>
  );
}

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [portraitFailed, setPortraitFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const portraitSrc =
    HERO_PORTRAIT_SRCS[portraitIndex] ?? HERO_PORTRAIT_SRCS[0];

  return (
    <section
      id="hero"
      className="grid min-h-screen grid-cols-1 overflow-hidden bg-salt-white pt-[72px] md:grid-cols-2"
    >
      {/* LEFT COLUMN */}
      <div
        id="sabine"
        className="flex min-h-[calc(100vh-72px)] flex-col justify-center px-8 py-16 md:min-h-0 md:px-16 md:py-20"
      >
        <p
          className="mb-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          Energie-Kunst für Führungspersönlichkeiten
        </p>

        <h1
          className="mb-6 font-display text-5xl font-extrabold leading-[1.1] text-salt-black opacity-0 animate-fade-slide-up md:text-6xl"
          style={{ animationDelay: "100ms" }}
        >
          Dein Unterbewusstsein
          <br />
          <em className="text-salt-violet italic">kennt den Weg.</em>
        </h1>

        <p
          className="mb-10 max-w-[440px] font-body text-base font-normal leading-[1.75] text-salt-muted opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "200ms" }}
        >
          Persönliche Energie-Bilder für Menschen, die an der Spitze stehen —
          und spüren, dass noch mehr möglich ist.
        </p>

        <div
          className="mb-12 flex flex-col gap-3 opacity-0 animate-fade-slide-up sm:flex-row sm:gap-4"
          style={{ animationDelay: "320ms" }}
        >
          <a
            href="/#kontakt"
            className={`inline-flex items-center justify-center text-center no-underline ${primaryCtaClasses}`}
          >
            Gespräch vereinbaren →
          </a>
          <Link
            href="/galerie"
            className={`inline-flex items-center justify-center text-center no-underline ${secondaryCtaClasses}`}
          >
            Galerie entdecken
          </Link>
        </div>

        <div
          className="opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "440ms" }}
        >
          <p className="mb-3 font-body text-[0.68rem] font-medium tracking-[0.16em] text-salt-greige uppercase">
            Unternehmen, mit denen ich gearbeitet habe
          </p>
          <div
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
            aria-label="Auswahl von Unternehmenslogos, mit denen Sabine Alter gearbeitet hat"
          >
            {LOGO_STRIP.map((logo) => (
              <LogoStripCell key={logo.src} src={logo.src} alt={logo.alt} />
            ))}
            <span className="font-sans text-[0.72rem] tracking-[0.06em] text-salt-muted-light">
              +12 weitere
            </span>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN — full-height image; gradient behind full column */}
      <div
        className={`relative min-h-[min(65vh,620px)] overflow-hidden bg-gradient-to-b from-salt-violet-light to-salt-greige-bg md:min-h-[calc(100vh-72px)] ${
          prefersReducedMotion ? "" : "opacity-0 animate-fade-slide-up"
        }`}
        style={prefersReducedMotion ? undefined : { animationDelay: "200ms" }}
      >
        {!portraitFailed ? (
          <div className="absolute inset-0">
            <Image
              src={portraitSrc}
              alt="Sabine Alter — SALT Energie-Künstlerin"
              fill
              priority
              className="object-cover object-top"
              sizes="50vw"
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

        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-40 bg-gradient-to-b from-salt-violet-light/50 to-transparent" />

        <div className="absolute top-6 right-6 z-20 rounded-[2px] bg-salt-gold px-4 py-2 font-sans text-[0.68rem] font-semibold tracking-[0.12em] text-white uppercase">
          3Sat · Scobel
        </div>

        <div className="absolute bottom-8 left-8 z-20 border-l-[3px] border-salt-violet bg-white px-5 py-4">
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
