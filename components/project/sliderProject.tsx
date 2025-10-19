"use client";

import { CldImage, CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";

/**
 * @param {Object} props
 * @param {'image' | 'video'} props.type
 * @param {string} props.source
 */
export function ProjectSlider({ type, source }: any) {
  return (
    <div
      className="relative w-1/4 rounded flex justify-center items-center"
      style={{
        minWidth: "150px",
        height: "20vw",
      }}
    >
      <Image src={source} alt="hero" fill />
    </div>
  );
}
