"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Cta } from "@/components/Cta";

const Flame = dynamic(() => import("@/components/Flame"), { ssr: false });
const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, i }: { children: React.ReactNode; i: number }) {
  return (
    <span className="block overflow-hidden pb-[.06em]">
      <motion.span
        className="block"
        initial={{ y: "108%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease, delay: 0.15 + i * 0.14 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-night px-5 pb-28 pt-28 text-white md:px-10 md:pb-14 lg:px-14">
      <Flame />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-night/70 via-transparent to-night/50" />
      <h1 className="d relative text-[clamp(4.2rem,15.2vw,16rem)]">
        <Line i={0}>Kombin</Line>
        <Line i={1}>
          çalışmıyor <span className="text-ember">mu?</span>
        </Line>
      </h1>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease, delay: 0.9 }}
        className="relative mt-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
      >
        <p className="lead text-white/90">
          Eskişehir&apos;de kombi arızası, bakım ve montaj için sorununuzu bir kez anlatın. Uygun ustayı biz bulalım,
          o sizi arasın.
        </p>
        <Cta dark />
      </motion.div>
    </section>
  );
}
