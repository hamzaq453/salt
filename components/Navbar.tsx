"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { primaryCtaClasses } from "@/lib/ctaClasses";

const navLinks = [
  { label: "Galerie", href: "/galerie", type: "page" as const },
  {
    label: "Transformationen",
    href: "/#transformationen",
    type: "anchor" as const,
  },
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
        className={`fixed top-0 right-0 left-0 z-50 h-[72px] border-b transition-all duration-300 ease-in-out ${
          scrolled
            ? "border-salt-greige/40 bg-salt-white/92 backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="grid h-full grid-cols-3 items-center px-6 md:px-16">
          <div className="flex justify-start">
            <Link href="/" className="flex shrink-0 items-center">
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
                  className="h-12 max-w-[140px] w-auto object-contain object-left"
                  priority
                  onError={() => setBrandLogoBroken(true)}
                />
              )}
            </Link>
          </div>

          <ul className="m-0 hidden list-none items-center justify-center gap-10 p-0 md:flex">
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

          <div className="flex items-center justify-end gap-2">
            <a
              href="/#kontakt"
              className={`hidden items-center justify-center sm:inline-flex ${primaryCtaClasses}`}
            >
              Gespräch vereinbaren
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="flex cursor-pointer flex-col gap-1.5 border-none bg-transparent p-2 outline-none md:hidden"
              aria-label="Menü öffnen"
            >
              <span className="block h-0.5 w-6 bg-salt-black" />
              <span className="block h-0.5 w-6 bg-salt-black" />
              <span className="block h-0.5 w-6 bg-salt-black" />
            </button>
          </div>
        </div>
      </nav>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-salt-white">
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 right-6 cursor-pointer border-none bg-transparent p-2 text-2xl leading-none text-salt-black outline-none"
            aria-label="Menü schließen"
          >
            ✕
          </button>

          <nav className="flex flex-col items-center gap-8">
            {navLinks.map(({ label, href, type }) =>
              type === "page" ? (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-3xl font-bold text-salt-black no-underline transition-colors hover:text-salt-violet"
                >
                  {label}
                </Link>
              ) : (
                <a
                  key={label}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-sans text-3xl font-bold text-salt-black no-underline transition-colors hover:text-salt-violet"
                >
                  {label}
                </a>
              ),
            )}
          </nav>

          <a
            href="https://calendly.com/salt-art/30min"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="mt-4 rounded-[4px] bg-salt-crimson px-10 py-4 font-sans text-sm font-semibold text-white transition-colors hover:bg-[#b8002a]"
          >
            Gespräch vereinbaren
          </a>
        </div>
      ) : null}
    </>
  );
}
