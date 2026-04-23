"use client";

import {
  useState,
  useEffect,
  useRef,
  type CSSProperties,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClasses, secondaryCtaClasses } from "@/lib/ctaClasses";

/** Marquee duration (seconds); one full set scrolls by in this time. */
const LOGO_MARQUEE_DURATION_SEC = 42;

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

function slotKey(instanceId: string, index: number) {
  return `${instanceId}:${index}`;
}

function MarqueeLogoCell({
  src,
  alt,
  instanceId,
  index,
  isHighlighted,
}: {
  src: string;
  alt: string;
  instanceId: string;
  index: number;
  isHighlighted: boolean;
}) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        data-slot-id={slotKey(instanceId, index)}
        className={`relative h-8 w-[80px] shrink-0 rounded-sm bg-salt-greige-bg/70 transition-all duration-300 ${
          isHighlighted ? "opacity-100 ring-1 ring-salt-violet/30" : "opacity-40"
        }`}
        aria-hidden
      />
    );
  }

  return (
    <div
      data-slot-id={slotKey(instanceId, index)}
      className={`relative h-8 w-[80px] shrink-0 transition-all duration-300 ${
        isHighlighted ? "grayscale-0 opacity-100" : "grayscale opacity-60"
      }`}
    >
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

function LogoMarqueeItems({
  logos,
  instanceId,
  centerSlotKey,
  highlightEnabled,
}: {
  logos: typeof COMPANY_LOGOS;
  instanceId: string;
  centerSlotKey: string | null;
  highlightEnabled: boolean;
}) {
  return (
    <>
      {logos.map((logo, index) => {
        const isHighlighted =
          highlightEnabled && centerSlotKey === slotKey(instanceId, index);
        return (
          <MarqueeLogoCell
            key={`${logo.src}-${instanceId}`}
            src={logo.src}
            alt={logo.alt}
            instanceId={instanceId}
            index={index}
            isHighlighted={isHighlighted}
          />
        );
      })}
    </>
  );
}

function HeroPortrait() {
  const [srcIndex, setSrcIndex] = useState(0);
  const [failedAll, setFailedAll] = useState(false);

  if (failedAll) {
    return (
      <div
        className="flex max-h-[min(75vh,720px)] min-h-[280px] w-full flex-col items-center justify-end bg-gradient-to-t from-salt-violet-mid/25 to-transparent px-6 pb-10 text-center"
        role="img"
        aria-label="Portrait platzhalter — Bilddatei fehlt unter /public/sabine.jpg oder /public/Sabine.png"
      >
        <p className="font-body max-w-xs text-sm font-normal text-salt-muted">
          Legen Sie das Portrait als{" "}
          <code className="text-salt-violet">public/sabine.jpg</code> oder{" "}
          <code className="text-salt-violet">public/Sabine.png</code> ab.
        </p>
      </div>
    );
  }

  const src = HERO_PORTRAIT_SRCS[srcIndex] ?? HERO_PORTRAIT_SRCS[0];

  return (
    <Image
      src={src}
      alt="Sabine Alter — SALT Energie-Künstlerin"
      width={1200}
      height={1800}
      priority
      className="h-auto max-h-[min(75vh,720px)] w-auto max-w-full object-contain object-bottom"
      sizes="(max-width: 768px) 100vw, 50vw"
      onError={() => {
        if (srcIndex + 1 < HERO_PORTRAIT_SRCS.length) {
          setSrcIndex((i) => i + 1);
        } else {
          setFailedAll(true);
        }
      }}
    />
  );
}

export default function Hero() {
  const marqueeViewportRef = useRef<HTMLDivElement | null>(null);
  const [centerSlotKey, setCenterSlotKey] = useState<string | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCenterSlotKey(null);
      return;
    }

    const viewport = marqueeViewportRef.current;
    if (!viewport) return;

    let rafId = 0;

    const tick = () => {
      const slots = viewport.querySelectorAll<HTMLElement>("[data-slot-id]");
      const viewRect = viewport.getBoundingClientRect();
      const centerX = viewRect.left + viewRect.width / 2;
      const centerY = viewRect.top + viewRect.height / 2;

      let bestKey: string | null = null;
      let bestScore = Infinity;

      slots.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const overlapsX =
          rect.right > viewRect.left && rect.left < viewRect.right;
        const overlapsY =
          rect.bottom > viewRect.top && rect.top < viewRect.bottom;
        if (!overlapsX || !overlapsY) return;

        const slotCenterX = rect.left + rect.width / 2;
        const slotCenterY = rect.top + rect.height / 2;
        const dx = Math.abs(slotCenterX - centerX);
        const dy = Math.abs(slotCenterY - centerY);
        const score = dx + dy * 0.35;

        const key = el.getAttribute("data-slot-id");
        if (!key) return;

        if (score < bestScore) {
          bestScore = score;
          bestKey = key;
        }
      });

      if (bestKey !== null) {
        setCenterSlotKey((prev) => (prev === bestKey ? prev : bestKey));
      }

      rafId = window.requestAnimationFrame(tick);
    };

    rafId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(rafId);
  }, [prefersReducedMotion]);

  const marqueeStyle = {
    "--logo-marquee-duration": `${LOGO_MARQUEE_DURATION_SEC}s`,
  } as CSSProperties;

  return (
    <section
      id="sabine"
      className="grid min-h-screen grid-cols-1 overflow-hidden bg-salt-white pt-[72px] md:grid-cols-2"
    >
      {/* LEFT COLUMN */}
      <div className="flex flex-col justify-center px-6 py-14 md:px-16 md:py-20">
        <p
          className="mb-6 flex items-center gap-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-salt-violet opacity-0 animate-fade-slide-up"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-block w-8 h-px bg-salt-violet shrink-0" />
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
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 opacity-0 animate-fade-slide-up"
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
          <p className="font-body text-[0.68rem] font-medium tracking-[0.16em] uppercase text-salt-greige mb-3">
            Unternehmen, mit denen ich gearbeitet habe
          </p>
          <div
            ref={marqueeViewportRef}
            className="relative w-full overflow-hidden"
            aria-label="Logos von Unternehmen, mit denen Sabine Alter gearbeitet hat"
          >
            <div
              className="company-logo-marquee-track py-1"
              style={marqueeStyle}
            >
              <LogoMarqueeItems
                logos={COMPANY_LOGOS}
                instanceId="a"
                centerSlotKey={centerSlotKey}
                highlightEnabled={!prefersReducedMotion}
              />
              <LogoMarqueeItems
                logos={COMPANY_LOGOS}
                instanceId="b"
                centerSlotKey={centerSlotKey}
                highlightEnabled={!prefersReducedMotion}
              />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div
        className="relative flex items-end justify-center overflow-hidden bg-gradient-to-br from-salt-violet-light to-salt-greige-bg min-h-[500px] md:min-h-0 opacity-0 animate-fade-slide-up"
        style={{ animationDelay: "200ms" }}
      >
        <div className="relative z-0 flex w-full items-end justify-center px-2 min-h-[500px] md:min-h-0 md:h-full">
          <HeroPortrait />
        </div>

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-salt-violet-light/60 to-transparent z-10 pointer-events-none" />

        <div className="absolute top-4 right-4 z-20 rounded-[4px] bg-salt-gold px-4 py-2 font-body text-[0.68rem] font-medium uppercase tracking-[0.12em] text-white md:top-8 md:right-8">
          3Sat · Scobel
        </div>

        <div className="absolute bottom-4 left-4 z-20 border-l-[3px] border-salt-violet bg-salt-white px-5 py-4 shadow-sm md:bottom-8 md:left-8">
          <p className="font-display text-4xl font-bold text-salt-violet leading-none">38+</p>
          <p className="font-body text-[0.7rem] font-normal uppercase tracking-[0.1em] text-salt-muted-light mt-1">
            Einmalige Energie-Bilder
          </p>
        </div>
      </div>
    </section>
  );
}
