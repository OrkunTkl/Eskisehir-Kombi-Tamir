"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { problems } from "@/data/problems";
import { externalProps, waLink } from "@/lib/contact";
import { track } from "@/lib/analytics";
import { TrackLink } from "@/components/TrackLink";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const PICK = [
  "kombi-isitmiyor",
  "kombi-sicak-su-vermiyor",
  "kombi-basinc-dusuyor",
  "kombi-hata-kodu",
  "kombi-su-damliyor",
  "kombi-ses-yapiyor",
  "kombi-ates-almiyor",
];
const list = PICK.map((s) => problems.find((p) => p.slug === s)!).filter(Boolean);

export function ProblemPicker() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section aria-labelledby="belirti" className="px-5 py-24 md:px-10 md:py-40 lg:px-14">
      <h2 id="belirti" className="d d-xl">
        Ne oluyor?
      </h2>
      <p className="lead mt-6 text-navy/70">
        Belirtiyi seçin. Önce güvenle deneyebileceklerinizi, sonra ne zaman usta gerektiğini görün.
      </p>

      <div className="mt-12 rounded-3xl bg-ember p-6 text-white md:mt-16 md:p-10">
        <h3 className="d d-md">Gaz kokusu alıyorsanız bekleme yok.</h3>
        <ol className="mt-6 grid gap-5 text-lg md:grid-cols-4 md:gap-10">
          <li><b>1.</b> Işığı, düğmeyi, ateşi kullanmayın.</li>
          <li><b>2.</b> Pencereleri açın, gaz vanasını kapatın.</li>
          <li><b>3.</b> Binadan çıkın.</li>
          <li><b>4.</b> Dışarıdan 187 Doğalgaz Acil&apos;i arayın. Rahatsızlık varsa 112.</li>
        </ol>
      </div>

      <ul className="mt-10 border-b border-navy/20 md:mt-14">
        {list.map((p) => {
          const isOpen = open === p.slug;
          return (
            <li key={p.slug} className="border-t border-navy/20">
              <h3>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${p.slug}`}
                  onClick={() => {
                    setOpen(isOpen ? null : p.slug);
                    if (!isOpen) track("problem_selected", { problem: p.title });
                  }}
                  className="group flex w-full items-center justify-between gap-6 py-5 text-left md:py-7"
                >
                  <span className="d stretch text-[clamp(2.4rem,7.5vw,6.5rem)] group-hover:text-flame">{p.title}</span>
                  <span
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-navy transition-all duration-500 md:h-16 md:w-16 ${isOpen ? "rotate-45 bg-navy text-white" : "group-hover:bg-flame group-hover:text-white group-hover:border-flame"}`}
                  >
                    <Plus aria-hidden />
                  </span>
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`panel-${p.slug}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="grid gap-8 pb-10 md:grid-cols-2 md:gap-14">
                      <div>
                        <p className="font-semibold">Önce bunları deneyin</p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-navy/80">
                          {p.safe.slice(0, 3).map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Usta gerekir</p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-navy/80">
                          {p.call.slice(0, 2).map((x) => (
                            <li key={x}>{x}</li>
                          ))}
                        </ul>
                        <div className="mt-6 flex flex-wrap gap-3">
                          <TrackLink
                            event="whatsapp_click"
                            params={{ problem: p.title }}
                            href={waLink(p.title)}
                            {...externalProps}
                            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 font-semibold text-white transition-colors hover:bg-flame"
                          >
                            <WhatsAppIcon size={18} /> Usta çağır
                          </TrackLink>
                          <Link
                            href={`/ariza-merkezi/${p.slug}`}
                            className="inline-flex items-center rounded-full border-2 border-navy/30 px-6 py-3 font-semibold transition-colors hover:bg-navy hover:text-white"
                          >
                            Rehberi oku
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
