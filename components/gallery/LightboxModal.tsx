"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Painting } from "@/data/paintings";

interface LightboxModalProps {
  painting: Painting;
  currentIndex: number;
  total: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function LightboxModal({
  painting,
  currentIndex,
  total,
  onClose,
  onNext,
  onPrev,
}: LightboxModalProps) {
  const [zoom, setZoom] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const zoomIn = () => setZoom((z) => Math.min(z + 0.5, 3));
  const zoomOut = () =>
    setZoom((z) => Math.max(z - 0.5, 1));

  useEffect(() => {
    if (zoom === 1) setPosition({ x: 0, y: 0 });
  }, [zoom]);

  const resetZoom = () => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleNext = () => {
    resetZoom();
    onNext();
  };

  const handlePrev = () => {
    resetZoom();
    onPrev();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={painting.title}
      className="fixed inset-0 z-50 flex flex-col bg-black/95"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="z-10 flex shrink-0 items-center justify-between px-6 py-4">
        <div className="flex flex-col gap-0.5">
          <p className="font-sans text-sm font-semibold text-white">
            {painting.title}
          </p>
          <p className="font-sans text-xs font-normal tracking-[0.06em] text-white/40">
            {currentIndex + 1} / {total}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              zoomOut();
            }}
            disabled={zoom <= 1}
            className="
              flex h-9 w-9 items-center justify-center rounded-[4px]
              border border-white/20 bg-white/5
              text-lg font-light text-white
              transition-all duration-150
              hover:border-white/40 hover:bg-white/15
              disabled:cursor-not-allowed disabled:opacity-30
            "
            aria-label="Verkleinern"
          >
            −
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              resetZoom();
            }}
            className="
              flex h-9 min-w-[48px] items-center justify-center rounded-[4px]
              border border-white/20 bg-white/5 px-3
              font-sans text-xs font-medium text-white/70
              transition-all duration-150
              hover:bg-white/15 hover:text-white
            "
            aria-label="Zoom zurücksetzen"
          >
            {Math.round(zoom * 100)}%
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              zoomIn();
            }}
            disabled={zoom >= 3}
            className="
              flex h-9 w-9 items-center justify-center rounded-[4px]
              border border-white/20 bg-white/5
              text-lg font-light text-white
              transition-all duration-150
              hover:border-white/40 hover:bg-white/15
              disabled:cursor-not-allowed disabled:opacity-30
            "
            aria-label="Vergrößern"
          >
            +
          </button>

          <div className="mx-1 h-6 w-px bg-white/20" />

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="
              flex h-9 w-9 items-center justify-center rounded-[4px]
              border border-white/20 bg-white/5
              text-xl font-light text-white/70
              transition-all duration-150
              hover:border-salt-crimson hover:bg-salt-crimson/80 hover:text-white
            "
            aria-label="Schließen"
          >
            ✕
          </button>
        </div>
      </div>

      <div
        className="relative flex flex-1 items-center justify-center overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          cursor: zoom > 1 ? (isDragging ? "grabbing" : "grab") : "default",
        }}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${zoom})`,
            transition: isDragging ? "none" : "transform 0.3s ease",
          }}
        >
          <Image
            src={painting.src}
            alt={painting.title}
            width={1200}
            height={900}
            className="max-h-[80vh] max-w-[90vw] object-contain select-none"
            draggable={false}
            sizes="90vw"
            priority
          />
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="
            flex items-center gap-2 rounded-[4px] border border-white/10 px-4 py-2
            font-sans text-sm font-medium text-white/60
            transition-colors duration-200
            hover:border-white/30 hover:text-white
          "
          aria-label="Vorheriges Bild"
        >
          ← Vorheriges
        </button>

        <div className="flex flex-1 justify-center px-2">
          <div className="hidden items-center gap-1.5 md:flex">
            {Array.from({ length: total }, (_, i) => (
              <div
                key={i}
                className={`rounded-full transition-all duration-200 ${
                  i === currentIndex
                    ? "h-[3px] w-4 bg-salt-violet"
                    : "h-[3px] w-[3px] bg-white/20"
                }`}
              />
            ))}
          </div>
          <span className="font-sans text-xs text-white/40 md:hidden">
            {currentIndex + 1} / {total}
          </span>
        </div>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="
            flex items-center gap-2 rounded-[4px] border border-white/10 px-4 py-2
            font-sans text-sm font-medium text-white/60
            transition-colors duration-200
            hover:border-white/30 hover:text-white
          "
          aria-label="Nächstes Bild"
        >
          Nächstes →
        </button>
      </div>
    </div>
  );
}
