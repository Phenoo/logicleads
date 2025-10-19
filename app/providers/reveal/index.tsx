"use client";

import { motion } from "framer-motion";
import { reveal } from "./variants";

/** @param {{paragraph: string}}  */
export function ParallaxReveal({ paragraph }: any) {
  const words = paragraph
    .split(" ")
    .map((word: any, index: number) => ({ id: index, word }));

  const text = words.map(({ id, word }: any) => (
    <span key={id} className="me-2 inline-flex overflow-hidden">
      <motion.p
        custom={id}
        variants={reveal}
        initial="initial"
        whileInView="open"
      >
        {word}
      </motion.p>
    </span>
  ));

  return <>{text}</>;
}
