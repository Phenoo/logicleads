"use client";

import { Fragment } from "react";

import { motion } from "framer-motion";

import { useParallaxSlider } from "@/hooks/use-parallex";

interface ParallaxProps {
  baseVelocity: number;
  children: any;
  repeat: number;
}

/** @param {import('react').PropsWithChildren<unknown> & {repeat: number; baseVelocity: number;}} */
export function ParallaxSlider({
  children,
  repeat = 2,
  baseVelocity,
}: ParallaxProps) {
  const x = useParallaxSlider(baseVelocity);
  function randomId() {
    return crypto.randomUUID();
  }
  return (
    <div className="flex flex-nowrap w-full overflow-hidden whitespace-nowrap">
      <motion.div className="w-full" style={{ x }}>
        {Array.from({ length: repeat }, () => {
          const id = randomId();
          return (
            <Fragment key={id}>
              {children}
              {children}
            </Fragment>
          );
        })}
      </motion.div>
    </div>
  );
}
