import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Galerie", href: "/galerie" },
  { label: "Transformationen", href: "/#transformationen" },
  { label: "Wie es wirkt", href: "/#wie-es-wirkt" },
  { label: "Über Sabine", href: "/#sabine" },
  { label: "Kontakt", href: "/#kontakt" },
] as const;

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/saltartwithenergy",
    icon: (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sabine.alter/",
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-salt-black px-5 py-4 sm:px-6">
      <div className="mx-auto flex max-w-[1100px] flex-col gap-3">
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:items-start md:gap-8 md:text-left">
          <Link href="/" className="shrink-0">
            <div className="relative h-7 w-[76px]">
              <Image
                src="/Logo1.png"
                alt="SALT — art with energy"
                fill
                className="object-contain object-left brightness-0 invert opacity-70"
                sizes="76px"
              />
            </div>
          </Link>

          <nav className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-xs font-medium tracking-[0.1em] text-[#5a5452] uppercase transition-colors duration-200 hover:text-salt-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-7 w-7 items-center justify-center rounded-[4px] border border-[#2a2a2a] bg-transparent text-[#5a5452] transition-all duration-200 hover:border-salt-violet hover:text-salt-violet"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="h-px w-full bg-[#1e1e1e]" />

        <div className="flex flex-col items-center justify-between gap-1.5 sm:flex-row sm:gap-3">
          <p className="font-sans text-[0.65rem] font-normal leading-tight tracking-[0.06em] text-[#3a3a3a]">
            © {year} SALT — Sabine Alter. Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-4">
            <Link
              href="/impressum"
              className="font-sans text-[0.65rem] font-normal leading-tight tracking-[0.06em] text-[#3a3a3a] transition-colors duration-200 hover:text-[#5a5452]"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="font-sans text-[0.65rem] font-normal leading-tight tracking-[0.06em] text-[#3a3a3a] transition-colors duration-200 hover:text-[#5a5452]"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
