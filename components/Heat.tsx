"use client";
import { useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

// Kaydırdıkça oda ısınır: arka plan buz mavisinden şeftali turuncusuna geçer,
// köşedeki sayaç sıcaklığı gösterir. Sayfanın tek "imza" hareketi budur.
const STOPS = [
  [220, 231, 240], // buz
  [243, 233, 224], // ılık
  [255, 196, 150], // sıcak
];
const mix = (p: number) => {
  const x = p * (STOPS.length - 1);
  const i = Math.min(STOPS.length - 2, Math.floor(x));
  const f = x - i;
  return STOPS[i].map((c, k) => Math.round(c + (STOPS[i + 1][k] - c) * f)).join(",");
};

export function Heat() {
  const { scrollYProgress } = useScroll();
  const apply = (p: number) => {
    const v = Math.min(1, Math.max(0, p));
    document.documentElement.style.setProperty("--bg", `rgb(${mix(v)})`);
    const out = document.getElementById("heat-out");
    if (out) out.textContent = `${Math.round(9 + v * 14)}°`;
  };
  useMotionValueEvent(scrollYProgress, "change", apply);
  useEffect(() => apply(scrollYProgress.get()));
  return null;
}
