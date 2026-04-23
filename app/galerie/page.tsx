import Link from "next/link";

export default function GaleriePage() {
  return (
    <main className="min-h-screen bg-salt-white px-6 py-24">
      <div className="mx-auto max-w-[1200px]">
        <Link
          href="/"
          className="font-body text-sm font-medium text-salt-violet transition-colors hover:text-salt-black"
        >
          ← Zur Startseite
        </Link>
        <h1 className="mt-8 font-display text-5xl font-extrabold text-salt-black md:text-6xl">
          Galerie
        </h1>
        <p className="mt-4 max-w-xl font-body text-base font-normal text-salt-muted">
          Hier erscheinen demnächst alle 38 Energie-Bilder in voller Übersicht.
        </p>
      </div>
    </main>
  );
}
