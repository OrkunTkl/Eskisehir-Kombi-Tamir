"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import { Phone } from "lucide-react"; // telefon gizlendi
// import { telLink } from "@/lib/contact";
import { TrackLink } from "@/components/TrackLink";

const links = [
  ["/hizmetler", "Hizmetler"],
  ["/ariza-merkezi", "Arıza merkezi"],
  ["/eskisehir", "Hizmet bölgesi"],
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex h-[4.5rem] items-center justify-between px-5 text-white mix-blend-difference md:px-10 lg:px-14">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="d pointer-events-auto text-3xl md:text-4xl"
          style={{ fontStretch: "75%" }}
        >
          Eskişehir Kombi
        </Link>
        <nav
          aria-label="Ana menü"
          className="pointer-events-auto hidden gap-8 md:flex"
        >
          {links.map(([h, l]) => (
            <Link
              key={h}
              href={h}
              className="font-medium underline-offset-8 hover:underline"
            >
              {l}
            </Link>
          ))}
        </nav>
        <p aria-hidden className="mr-28 hidden w-32 text-right lg:block">
          <span className="text-xs opacity-80">Oda </span>
          <span
            id="heat-out"
            className="d align-middle text-3xl"
            style={{ fontStretch: "80%" }}
          >
            9°
          </span>
        </p>
      </header>
      <div className="fixed right-5 top-0 z-50 flex h-[4.5rem] items-center gap-2 md:right-10 lg:right-14">
        {/* Telefon ile arama gizlendi
        <TrackLink
          event="phone_click"
          href={telLink()}
          className="hidden items-center gap-2 rounded-full bg-ember px-5 py-2.5 font-semibold text-white transition-colors hover:bg-flame sm:inline-flex"
        >
          <Phone size={16} aria-hidden /> Ara
        </TrackLink>
        */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full bg-white px-5 py-2.5 font-semibold text-night md:hidden"
        >
          {open ? "Kapat" : "Menü"}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="menu"
            initial={{ clipPath: "circle(0% at 90% 4%)" }}
            animate={{ clipPath: "circle(150% at 90% 4%)" }}
            exit={{ clipPath: "circle(0% at 90% 4%)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-night px-6 md:hidden"
          >
            {[["/", "Ana sayfa"], ...links].map(([h, l]) => (
              <Link
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="d text-[18vw] text-white hover:text-ember"
              >
                {l}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
