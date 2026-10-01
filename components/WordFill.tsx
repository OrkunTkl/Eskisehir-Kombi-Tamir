"use client";
import { Fragment, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

function Word({
  w,
  range,
  p,
}: {
  w: string;
  range: [number, number];
  p: MotionValue<number>;
}) {
  const o = useTransform(p, range, [0.14, 1]);
  return (
    <motion.span style={{ opacity: o }} className="inline-block">
      {w}
    </motion.span>
  );
}

// Kaydırdıkça cümle kelime kelime belirginleşir.
export function WordFill({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });
  const words = text.split(" ");
  return (
    <p
      ref={ref}
      className="d d-lg mx-auto max-w-6xl text-center"
      style={{ fontStretch: "70%", lineHeight: 0.98 }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <Word
            w={w}
            p={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        </Fragment>
      ))}
    </p>
  );
}
