"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  [
    "1",
    "Anlatın",
    "WhatsApp'tan yazın ya da formu doldurun. Belirtiyi, ilçenizi ve markayı söylemeniz yeter.",
  ],
  [
    "2",
    "Biz eşleştirelim",
    "İşin türüne ve ilçenize göre uygun bağımsız servis sağlayıcıyı belirler, adresi ve talebi ona iletiriz.",
  ],
  [
    "3",
    "Usta sizi arasın",
    "Servis sağlayıcı sizinle iletişime geçer, ne zaman gelebileceğini söyler. Fiyat ve kapsam onunla netleşir.",
  ],
] as const;

export function Steps() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.666%"]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      ref={ref}
      aria-label="Nasıl çalışır"
      className="relative h-[320vh]"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300%]">
          {steps.map(([n, t, d]) => (
            <div
              key={n}
              className="flex w-screen shrink-0 items-center justify-center px-6 md:px-14"
            >
              <div className="grid w-fit md:min-w-[44rem] max-w-6xl items-center gap-4 md:grid-cols-[auto_1fr] md:gap-16">
                <span
                  aria-hidden
                  className="d outline-text text-[clamp(6rem,min(40vw,50vh),25rem)] leading-[.8] text-navy md:text-center"
                >
                  {n}
                </span>
                <div>
                  <h2 className="d text-[clamp(3rem,min(10vw,16vh),9rem)]">
                    {t}
                  </h2>
                  <p className="lead mt-5 text-navy/75">{d}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="absolute inset-x-5 bottom-10 h-1 rounded-full bg-navy/15 md:inset-x-14">
          <motion.div
            style={{ width: bar }}
            className="h-full rounded-full bg-ember"
          />
        </div>
      </div>
    </section>
  );
}
