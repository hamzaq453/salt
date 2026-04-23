"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LightboxModal from "@/components/gallery/LightboxModal";
import { paintings } from "@/data/paintings";

function PaintingCard({
  painting,
  onClick,
}: {
  painting: (typeof paintings)[number];
  onClick: () => void;
}) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="group relative mb-3 cursor-pointer break-inside-avoid overflow-hidden"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Image
        src={painting.src}
        alt={painting.title}
        width={800}
        height={600}
        className="block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
      />
      <div
        className="
          absolute inset-0 flex flex-col justify-end bg-salt-violet/0 p-4
          transition-all duration-300 ease-out group-hover:bg-salt-violet/75
        "
      >
        <div
          className="
            translate-y-3 transform opacity-0 transition-all duration-300 ease-out
            group-hover:translate-y-0 group-hover:opacity-100
          "
        >
          <p className="mb-1 font-sans text-sm leading-tight font-semibold text-white">
            {painting.title}
          </p>
          <p className="font-sans text-[0.65rem] font-medium tracking-[0.1em] text-white/70 uppercase">
            Zum Vergrößern klicken
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GaleriePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goNext = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i + 1) % paintings.length,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((i) =>
      i === null ? null : (i - 1 + paintings.length) % paintings.length,
    );
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, closeLightbox, goNext, goPrev]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-salt-white">
        <div className="mx-auto max-w-[1200px] px-6 pt-32 pb-12">
          <div className="mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-8 shrink-0 bg-salt-violet" />
            <p className="font-sans text-[0.7rem] font-semibold tracking-[0.22em] text-salt-violet uppercase">
              {paintings.length} Originale
            </p>
          </div>
          <h1
            className="mb-4 font-sans font-extrabold leading-[1.05] tracking-[-0.02em] text-salt-black"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Die Energie-Bilder
          </h1>
          <div className="mb-6 h-0.5 w-12 bg-salt-crimson" />
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <p className="max-w-[520px] font-sans text-base font-normal leading-[1.8] text-salt-muted">
              Jedes Werk ist einmalig — entstanden aus der Energie des Empfängers.
              Kein Bild gleicht dem anderen. Klicke auf ein Bild, um es vollständig zu
              sehen.
            </p>
            <Link
              href="/"
              className="shrink-0 whitespace-nowrap border-b border-salt-violet pb-0.5 font-sans text-sm font-medium text-salt-violet transition-colors duration-200 hover:border-salt-black hover:text-salt-black"
            >
              ← Zur Startseite
            </Link>
          </div>
        </div>

        <div className="mx-auto max-w-[1200px] px-6 pb-24">
          <div className="columns-1 gap-3 sm:columns-2 md:columns-3 lg:columns-4">
            {paintings.map((painting, index) => (
              <PaintingCard
                key={painting.filename}
                painting={painting}
                onClick={() => openLightbox(index)}
              />
            ))}
          </div>
        </div>

        <div className="border-t border-salt-greige/30 bg-salt-greige-bg px-6 py-16 text-center">
          <p className="mb-2 font-sans text-base font-normal text-salt-muted">
            Möchtest Du ein eigenes Energie-Bild?
          </p>
          <h2
            className="mb-8 font-sans font-extrabold tracking-[-0.02em] text-salt-black"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            Jedes Bild entsteht nur einmal —{" "}
            <span className="text-salt-crimson">für Dich.</span>
          </h2>
          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-[4px] bg-salt-crimson px-10 py-4 font-sans text-sm font-semibold tracking-[0.06em] text-white uppercase transition-colors duration-200 hover:bg-[#b8002a]"
          >
            Gespräch vereinbaren →
          </a>
        </div>
      </main>

      <Footer />

      {lightboxIndex !== null ? (
        <LightboxModal
          painting={paintings[lightboxIndex]}
          currentIndex={lightboxIndex}
          total={paintings.length}
          onClose={closeLightbox}
          onNext={goNext}
          onPrev={goPrev}
        />
      ) : null}
    </>
  );
}
