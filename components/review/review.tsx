import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { GiFastArrow } from "react-icons/gi";
import Link from "next/link";

const Review = ({ posts }: any) => {
  const items = posts.filter((_: any, i: number) => i < 3);

  return (
    <div className="bg-white py-20 flex flex-col justify-center text-black space-y-8">
      <div className="max-w-7xl mx-auto w-full p-4">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Projects</h4>
        </div>
        <br />
        <div className="flex justify-between items-center w-full">
          <div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
              Our Recent
            </h4>
            <h4 className="text-primary text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
              Work Portfolio
            </h4>
          </div>
          <div>
            <Link href={"/portfolio"}>
              <button className="buttonwhite  bg-primary flex">
                View Projects
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {items.map((item: any, i: any) => {
            return (
              <Link key={i} href={`/portfolio/${item?.slug.current}`}>
                <div className="flex flex-col transition-all hover:scale-95 cursor-pointer gap-4 group project">
                  <div>
                    <Image
                      src={item?.mainImage}
                      alt="project"
                      width={500}
                      height={400}
                      className="rounded-3xl"
                    />
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
    </div>
  );
};

export default Review;
