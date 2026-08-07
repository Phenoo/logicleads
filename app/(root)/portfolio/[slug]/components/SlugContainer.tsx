"use client";
import SectionQuoteSlug from "../../../../../components/quote/section-quoteslug";
import { Button } from "../../../../../components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiFastArrow } from "react-icons/gi";
import { PORTFOLIO_FALLBACK_IMAGE } from "../../../../../lib/site";

const SlugContainer = ({ data, items }: any) => {
  const [isLoading, setLoading] = useState(true);
  const galleryImages = [data?.designImage, data?.planImage, data?.constructImage]
    .filter(Boolean);
  const heroImage = data?.mainImage || PORTFOLIO_FALLBACK_IMAGE;

  return (
    <div className="max-w-7xl w-full mx-auto p-4 pb-10 ">
      <div className="">
        <div>
          <Image
            src={heroImage}
            alt={data?.title}
            width={1600}
            height={1000}
            sizes="100vw"
            className={`object-contain rounded-xl w-full h-full hover:opacity-90  transition
                  duration-300 ease-in-out group-hover:opacity-75
                  ${
                    isLoading
                      ? "scale-110 blur-2xl grayscale"
                      : "scale-100 blur-0 grayscale-0"
                  })`}
            onLoad={() => setLoading(false)}
            loading="lazy"
          />
        </div>
      </div>
      <br />
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-medium">
          {data?.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-4">
          <div className="md:col-span-8 text-lg md:text-xl">
            {data?.description}
          </div>
          <div className="p-4 md:col-span-4  bg-primary text-white rounded-xl flex flex-col justify-between gap-6 ">
            <div>
              <p className="text-lg md:text-xl">Project Category</p>
              <strong>
                <small className="tracking-wider">{data?.category}</small>
              </strong>
            </div>
            <div>
              <p className="text-lg md:text-xl">Duration</p>
              <strong>
                <small className="tracking-wider">{data?.duration}</small>
              </strong>
            </div>
            <div>
              <p className="text-lg md:text-xl">Location</p>
              <strong>
                <small className="tracking-wider">
                  {data?.location || "Remote"}
                </small>
              </strong>
            </div>
          </div>
        </div>
        <div>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-medium">
            The Challenge
          </h4>
          <p className="text-xl">{data?.problem}</p>
        </div>
        <br />
        <div>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-medium">
            The Solution
          </h4>
          <p className="text-xl">{data?.solution}</p>
        </div>
        <br />
        {galleryImages.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {galleryImages.map((image: string, index: number) => (
                <div key={`${image}-${index}`}>
                  <Image
                    src={image}
                    alt={`${data?.title} project gallery image ${index + 1}`}
                    width={1200}
                    height={900}
                    sizes="(min-width: 768px) 45vw, 100vw"
                    className="h-full w-full rounded-xl object-cover transition duration-300 ease-in-out hover:opacity-90"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <small className="text-center">Pictures of the project</small>
          </>
        ) : (
          <small className="text-center">
            More project visuals can be shared during discovery.
          </small>
        )}
        <br />
        <div>
          <h4 className="text-lg md:text-2xl lg:text-4xl font-medium">
            The Impact
          </h4>
          <p>{data?.impact}</p>
        </div>
        <br />
        <p></p>
        <SectionQuoteSlug data={data?.review} reviewer={data?.reviewer} />
      </div>

      <h4 className="text-xl md:text-3xl mt-16">View Other Projects</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {items.map((item: any, i: any) => {
          const imageSrc = item?.mainImage || PORTFOLIO_FALLBACK_IMAGE;

          return (
            <Link key={i} href={`/portfolio/${item?.slug.current}`}>
              <div className="flex flex-col transition-all hover:scale-95 cursor-pointer gap-4 group project">
                  <div className="overflow-hidden rounded-3xl h-[280px]">
                    {item?.url ? (
                      <iframe 
                        src={item.url}
                        className="w-full h-full border-0 pointer-events-none rounded-3xl"
                        title={item?.title || "Project preview"}
                        loading="lazy"
                        sandbox="allow-scripts allow-same-origin"
                      />
                    ) : (
                      <Image
                        src={imageSrc}
                        alt={item?.title || "Project preview"}
                        width={1200}
                        height={900}
                        sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 100vw"
                        className="h-[280px] w-full rounded-3xl object-cover"
                      />
                    )}
                  </div>
                <div className="">
                  <span className="border-x rounded-3xl border-x-black bg-primary text-white py-2 px-4 text-base">
                    {item?.category}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h4 className="text-left text-lg md:text-xl lg:text-2xl font-medium">
                    {item?.title}
                  </h4>
                  <Button className="h-14 w-14 bg-transparent group-hover:bg-primary transition-all rounded-full">
                    <GiFastArrow className="h-6 w-6 group-hover:-rotate-45" />
                  </Button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SlugContainer;
