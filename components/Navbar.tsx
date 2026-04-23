"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClasses, primaryCtaCoreClasses } from "@/lib/ctaClasses";

const navLinks = [
  { label: "Galerie", href: "/galerie", type: "page" as const },
  { label: "Transformationen", href: "/#transformationen", type: "anchor" as const },
  { label: "Prozess", href: "/#prozess", type: "anchor" as const },
  { label: "Über Sabine", href: "/#sabine", type: "anchor" as const },
  { label: "Kontakt", href: "/#kontakt", type: "anchor" as const },
];

const linkClass =
  "font-body text-sm font-medium tracking-[0.08em] uppercase text-salt-black hover:text-salt-violet transition-colors duration-200 no-underline";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [brandLogoBroken, setBrandLogoBroken] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] border-b transition-all duration-300 ease-in-out ${
          scrolled
            ? "bg-salt-white/92 backdrop-blur-md border-salt-greige/40"
            : "bg-transparent border-transparent"
        }`}
      >
        <div className="grid grid-cols-3 items-center h-full px-6 md:px-16">
          <div className="flex justify-start">
            <Link href="/" className="flex items-center shrink-0">
              {brandLogoBroken ? (
                <span className="font-display text-2xl font-bold tracking-[0.12em] text-salt-black">
                  S<span className="text-salt-violet">A</span>LT
                </span>
              ) : (
                <Image
                  src="/Logo1.png"
                  alt="SALT — art with energy"
                  width={140}
                  height={56}
                  className="h-12 w-auto max-w-[140px] object-contain object-left"
                  priority
                  onError={() => setBrandLogoBroken(true)}
                />
              )}
            </Link>
          </div>

          <ul className="hidden md:flex items-center justify-center gap-10 list-none m-0 p-0">
            {navLinks.map(({ label, href, type }) => (
              <li key={label}>
                {type === "page" ? (
                  <Link href={href} className={linkClass}>
                    {label}
                  </Link>
                ) : (
                  <a href={href} className={linkClass}>
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          <div className="flex justify-end items-center gap-2">
            <a
              href="/#kontakt"
              className={`hidden sm:inline-flex items-center justify-center ${primaryCtaClasses}`}
            >
              Gespräch vereinbaren
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-salt-black cursor-pointer border-none outline-none bg-transparent"
              aria-label="Menü öffnen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="stroke-current text-salt-black"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-salt-white transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-6 right-6 cursor-pointer border-none bg-transparent p-2 text-salt-black outline-none"
          aria-label="Menü schließen"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="stroke-current text-salt-black"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <ul className="m-0 flex list-none flex-col items-center gap-8 p-0">
          {navLinks.map(({ label, href, type }) => (
            <li key={label}>
              {type === "page" ? (
                <Link
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-3xl font-semibold text-salt-black no-underline transition-colors duration-200 hover:text-salt-violet"
                >
                  {label}
                </Link>
              ) : (
                <a
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-3xl font-semibold text-salt-black no-underline transition-colors duration-200 hover:text-salt-violet"
                >
                  {label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <a
          href="/#kontakt"
          onClick={() => setIsMenuOpen(false)}
          className={`mt-4 inline-flex w-full max-w-[280px] items-center justify-center px-10 py-4 text-center no-underline ${primaryCtaCoreClasses}`}
        >
          Gespräch vereinbaren
        </a>
      </div>
    </>
  );
}
