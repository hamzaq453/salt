"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Review {
  id: string;
  initials: string;
  name: string;
  role: string;
  company: string;
  logoSrc: string;
  logoAlt: string;
  stars: number;
  quote: string;
  paintingTitle?: string;
}

const reviews: Review[] = [
  {
    id: "ackermann",
    initials: "JA",
    name: "Dr. Josef Ackermann",
    role: "ehem. CEO Deutsche Bank",
    company: "Deutsche Bank, Frankfurt a.M.",
    logoSrc: "/companies/deutsche bank transparent.png",
    logoAlt: "Deutsche Bank",
    stars: 5,
    quote:
      "Ich möchte es nicht versäumen, Ihnen für das speziell für mich geschaffene Kunstwerk zu danken! Ihr vor Energie sprühendes Bild hat bereits einen sehr schönen Platz in meinem Büro gefunden.",
    paintingTitle: "universelle Reinigung",
  },
  {
    id: "corvin-tolle",
    initials: "CT",
    name: "Corvin Tolle",
    role: "GGF Tolle Immobilien GmbH",
    company: "Tolle Immobilien GmbH, Berlin",
    logoSrc: "/companies/Tolle Immobilien Logo.png",
    logoAlt: "Tolle Immobilien",
    stars: 5,
    quote:
      "Kein Arbeitstag ohne mein Wirkungs-Bild™: Ich wurde den schädlichen Geschäftspartner los und konnte das finanzielle Desaster abwenden. Das Bild hat seitdem für immer einen Ehrenplatz in meinem Büro.",
    paintingTitle: "sorglos geborgen",
  },
  {
    id: "barbara-engel",
    initials: "BE",
    name: "Barbara Engel",
    role: "Steuerberaterin für Pferdebetriebe",
    company: "Winsheim",
    logoSrc: "/companies/Steuerengel-frei.png",
    logoAlt: "Steuerengel",
    stars: 5,
    quote:
      "Ich habe dem Tod ins Auge geblickt. Durch Sabine und mein Wirkungs-Bild™ habe ich hingesehen, tief in mein Inneres. Kein leichter Weg, aber befreiend. Rückbildung von Metastasen schon mehr als 40% in 2 Monaten!",
  },
  {
    id: "francesco-illuminati",
    initials: "FI",
    name: "Francesco Illuminati",
    role: "Managing Director",
    company: "Illuminati Frutta, Toskana/Italien",
    logoSrc: "/companies/illuminati-logo-2016.png",
    logoAlt: "Illuminati Frutta",
    stars: 5,
    quote:
      'Ob das wirklich funktioniert?, fragte ich mich nach meiner spontanen Bestellung, aber dann erinnerte ich mich mein Bild sofort an "the circle of life". Im Außen war alles schon da — nun bin ich auch bei mir innen angekommen. Friedlich. Eine super Investition!',
  },
  {
    id: "grit-kriegel",
    initials: "GK",
    name: "Grit Kriegel",
    role: "Inhaberin Zentrum für Osteopathie",
    company: "Physiotherapie & Hypnose, Bitterfeld",
    logoSrc: "/companies/Grit Kriegel.jpg",
    logoAlt: "Grit Kriegel",
    stars: 5,
    quote:
      "Mein Wirkungs-Bild™ hilft mir, mich abzugrenzen und meine eigene Kraft zu spüren. Ich gehe offensiver mit geschäftlichen Herausforderungen um und habe eine strategische Entscheidung getroffen, die die Mitarbeitergewinnung erleichtert.",
  },
  {
    id: "holm-von-egidy",
    initials: "HE",
    name: "Dr. phil. Holm von Egidy",
    role: "Systemischer Berater und Coach",
    company: "München",
    logoSrc: "/companies/Constellaris Logo.png",
    logoAlt: "Constellaris",
    stars: 5,
    quote:
      "Es ist ein sehr faszinierender Spiegel, dieses Bild. Magisch. Tief. Vielschichtig. Nicht auslotbar. Schon etwas sehr Kostbares, was Du da machst, oder Dich als Aufgabe ergriffen hat!",
  },
  {
    id: "louise-van-loon",
    initials: "LL",
    name: "Louise van Loon",
    role: "Expertin für gesunde Schönheit",
    company: "Praxis in Göppingen",
    logoSrc: "/companies/Northwind.png",
    logoAlt: "Northwind",
    stars: 5,
    quote:
      "Danke, liebe Sabine, für mein persönliches Wirkungs-Bild, das für mich eine schöne Leichtigkeit ausstrahlt! Der ganze Raum wirkte gleich größer — das passt schon gut zu meinen neuen Plänen!",
  },
  {
    id: "martin-lerchner",
    initials: "ML",
    name: "Dr. Martin F. Lerchner",
    role: "CEO Synedrion Global Group",
    company: "Berlin, Dubai & Singapur",
    logoSrc: "/companies/wayv_logo.png",
    logoAlt: "wayv",
    stars: 5,
    quote:
      "Das Gemälde ist einfach großartig! Es schafft eine Atmosphäre, die den Geist beruhigt und gleichzeitig die Sinne belebt. Ich bin sehr dankbar, dieses besondere Kunstwerk bei mir zu haben!",
  },
  {
    id: "sabine-schwierzke",
    initials: "SS",
    name: "Sabine Schwierzke",
    role: "Dentalhygienikerin",
    company: "Berlin",
    logoSrc: "/companies/InnerWise.png",
    logoAlt: "InnerWise",
    stars: 5,
    quote:
      "Das Wirkungs-Bild™ sprach mich sofort an und kam direkt an die Wand vor meinen Zahnarztstuhl. Seit 2 Jahren begleitet mich nun jeden Tag die Energie durch meinen Arbeitsalltag, die ich mir gewünscht habe.",
  },
  {
    id: "daniel-ledesma",
    initials: "DL",
    name: "Daniel Ledesma",
    role: "Generalmajor und Militärpilot",
    company: "Quito, Ecuador",
    logoSrc: "/companies/Bundeswehr.png",
    logoAlt: "Bundeswehr",
    stars: 5,
    quote:
      "Eine schwierige Entscheidung: Vielfaches Einkommen oder sichere Pension? Ich weiß nicht wie, aber durch mein Bild änderte ich die Frage und orientierte ich an meinen Werten. Dann fiel die Entscheidung leicht. Großen Dank, Sabine!",
  },
  {
    id: "petra-koeck",
    initials: "PK",
    name: "Petra Köck",
    role: "Inhaberin Atlas-Zentrum",
    company: "Hettenshausen",
    logoSrc: "/companies/Atlas_Logo.svg",
    logoAlt: "Atlas",
    stars: 5,
    quote:
      "Ständige Sorgen wegen schlechten Nachrichten aus der Schule meines Sohnes lähmten mich. Doch sein Wirkungs-Bild™ änderte die Dynamik. Seine Lehrerin meinte, ich hätte gezaubert. Wir sind glücklich und ich habe wieder Konzentration.",
  },
  {
    id: "alexander-christiani",
    initials: "AC",
    name: "Alexander Christiani",
    role: "GF Christiani Consulting AG",
    company: "Engelberg",
    logoSrc: "/companies/christiani_storymarketing_black_72dpi.png",
    logoAlt: "Christiani",
    stars: 5,
    quote:
      "Ich kann meine Begeisterung nur so zusammenfassen: Für mich strahlt dieses Bild warmen, beschützenden Sonnenschein aus, der die weitere Entfaltung vorantreibt. Noch einmal ganz herzlich danke!",
  },
  {
    id: "daniela-ankenbrand",
    initials: "DA",
    name: "Daniela Thekla Ankenbrand",
    role: "Designerin & Geomantin",
    company: "Potsdam",
    logoSrc: "/companies/PER Medien.png",
    logoAlt: "PER Medien",
    stars: 5,
    quote:
      "Die Energie traf mich sofort. Und die Farben repräsentieren mein Lebensziel. Jetzt arbeite ich in einem Beruf, der mein Herz höher schlagen lässt und in dem ich wirklich glücklich bin.",
  },
  {
    id: "thorsten-schmidt-bader",
    initials: "TS",
    name: "Dr. Thorsten Schmidt-Bader",
    role: "Inhaber movepro TEC",
    company: "Bad Homburg",
    logoSrc: "/companies/Logo HiQ breit.png",
    logoAlt: "HiQ",
    stars: 5,
    quote:
      "WOW - ästhetisch! Noch viel beeindruckender ist für mich die Wirkung. Ich fühle mich beschwingter, energetischer, getragen. Und geschäftlich wird gerade alles, was ich anfasse, zu Gold.",
  },
];

function useIsMd() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsMd(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return isMd;
}

function ReviewCard({
  review,
  isActive,
  onClick,
}: {
  review: Review;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        relative flex min-h-0 shrink-0 flex-col gap-4 border-l-[3px] bg-salt-white p-7 text-left
        transition-all duration-500 ease-out
        ${isActive
          ? "z-10 w-[380px] scale-100 cursor-pointer border-l-salt-violet opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.08)] md:w-[440px]"
          : "z-0 w-[280px] scale-[0.93] cursor-pointer border-l-transparent opacity-40 blur-[1px] md:w-[320px]"
        }
      `}
    >
      <div className="pointer-events-none absolute top-5 right-5">
        <div className="relative h-6 w-[70px] grayscale opacity-40">
          <Image
            src={review.logoSrc}
            alt={review.logoAlt}
            fill
            className="object-contain object-right"
            sizes="70px"
          />
        </div>
      </div>

      <div className="flex gap-0.5">
        {Array.from({ length: review.stars }).map((_, i) => (
          <span key={i} className="text-sm text-salt-crimson">
            ★
          </span>
        ))}
      </div>

      <blockquote className="flex-1 font-sans text-sm leading-[1.7] font-normal italic text-salt-black md:text-base">
        <span className="mr-0.5 align-[-3px] font-sans text-xl leading-none font-extrabold text-salt-violet">
          „
        </span>
        {review.quote}
        <span className="ml-0.5 align-[-3px] font-sans text-xl leading-none font-extrabold text-salt-violet">
          &rdquo;
        </span>
      </blockquote>

      {review.paintingTitle ? (
        <div className="inline-flex w-fit items-center gap-2 rounded-[2px] bg-salt-violet-light px-2.5 py-1">
          <div className="h-1 w-1 shrink-0 rounded-full bg-salt-violet" />
          <p className="font-sans text-[0.6rem] font-medium tracking-[0.1em] text-salt-violet uppercase">
            {review.paintingTitle}
          </p>
        </div>
      ) : null}

      <div className="h-px w-full bg-salt-greige/50" />

      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-salt-violet-mid">
          <span className="font-sans text-xs font-bold text-salt-violet">
            {review.initials}
          </span>
        </div>

        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-sm leading-none font-semibold text-salt-black">
            {review.name}
          </p>
          <p className="font-sans text-xs font-normal text-salt-muted-light">
            {review.role} · {review.company}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function ReviewsSlider() {
  useScrollReveal();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMd = useIsMd();

  const goTo = useCallback((index: number) => {
    setActiveIndex(((index % reviews.length) + reviews.length) % reviews.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % reviews.length);
  }, []);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goNext, 5000);
    return () => clearInterval(id);
  }, [activeIndex, isPaused, goNext]);

  const visibleSlides = reviews
    .map((review, index) => ({ review, index }))
    .filter(({ index }) => {
      if (!isMd) return index === activeIndex;
      return Math.abs(index - activeIndex) <= 1;
    })
    .sort((a, b) => a.index - b.index);

  return (
    <section id="kundenstimmen" className="overflow-hidden bg-salt-greige-bg py-20">
      <div className="mx-auto mb-14 max-w-[700px] px-6 text-center">
        <div
          className="reveal-on-scroll mb-6 flex items-center justify-center gap-3"
          style={{ transitionDelay: "0ms" }}
        >
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
          <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-violet uppercase">
            15 Bewertungen
          </p>
          <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
        </div>

        <h2
          className="reveal-on-scroll mb-4 font-sans font-extrabold tracking-[-0.02em] text-salt-black leading-[1.05]"
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            transitionDelay: "100ms",
          }}
        >
          Was meine Kunden sagen
        </h2>

        <div
          className="reveal-on-scroll mx-auto h-0.5 w-12 bg-salt-crimson"
          style={{ transitionDelay: "160ms" }}
        />
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-20 w-24 bg-gradient-to-r from-salt-greige-bg to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-20 w-24 bg-gradient-to-l from-salt-greige-bg to-transparent" />

        <div className="flex items-center justify-center gap-5 px-6">
          {visibleSlides.map(({ review, index }) => (
            <ReviewCard
              key={`${review.name}-${index}`}
              review={review}
              isActive={index === activeIndex}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-center gap-6 px-6">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[4px] border border-salt-greige bg-salt-white font-sans text-sm font-semibold text-salt-violet transition-all duration-200 hover:border-salt-violet hover:bg-salt-violet hover:text-white"
          aria-label="Vorherige Bewertung"
        >
          ←
        </button>

        <div className="flex items-center gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              className={`
                h-[4px] cursor-pointer rounded-full transition-all duration-300
                ${index === activeIndex
                  ? "w-4 bg-salt-violet"
                  : "w-[4px] bg-salt-greige hover:bg-salt-violet/40"
                }
              `}
              aria-label={`Gehe zu Bewertung ${index + 1}`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-[4px] border border-salt-greige bg-salt-white font-sans text-sm font-semibold text-salt-violet transition-all duration-200 hover:border-salt-violet hover:bg-salt-violet hover:text-white"
          aria-label="Nächste Bewertung"
        >
          →
        </button>
      </div>
    </section>
  );
}
