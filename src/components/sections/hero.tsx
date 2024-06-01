import Image from "next/image";
import React from "react";
import Overflow from "../overflow";
import { ParallaxReveal } from "@/app/providers/reveal";

const Hero = () => {
  const phrase =
    "With a blend of creativity, technology, and strategic thinking, we provide innovative solutions that drive growth and elevate your brand. Our data-driven approach delivers measurable results, helping you achieve your business goals.";
  return (
    <div className="max-w-7xl mx-auto text-white w-full p-4">
      <div className="flex gap-4 my-8 items-center">
        <div className="w-10 h-0.5 bg-primary" />
        <h4>Era Defining Digital Agency</h4>
      </div>
      <div>
        <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl capitalize">
          Where Innovation meets
        </h1>
        <h1
          className="font-medium text-5xl md:text-6xl lg:text-8xl capitalize text-primary"
          data-aos="zoom-in-left"
          data-aos-duration={1800}
        >
          digital excellence
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        <div className="flex gap-y-2 flex-wrap">
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Mobile Application Development
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Graphic Design & Branding
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Website Development
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            UX/UI Design
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Digital Marketing
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Copywriting
          </span>
          <span className="border-x rounded-3xl border-x-white px-4 text-lg">
            Business Analysis
          </span>
        </div>
        <div>
          <ParallaxReveal paragraph={phrase} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-9">
          <Image
            src={
              "https://images.pexels.com/photos/6248966/pexels-photo-6248966.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="HERO-IMAGE"
            width={600}
            height={320}
            className="w-full h-80 rounded-xl object-cover grayscale"
          />
        </div>
        <div className="bg-primary/50 p-4 capitalize flex flex-col gap-8 justify-between rounded-xl md:col-span-3 ">
          <Image
            src={"/Untitled.svg"}
            alt="herobarcode"
            width={300}
            height={300}
            className="animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
