"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { GiBottomRight3dArrow, GiFastArrow } from "react-icons/gi";

import {
  Accordion as AccordionCon,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const Accordion = () => {
  const [index, setIndex] = useState<any>();
  const items = [
    {
      title: "Mobile app development",
      content: "Content for section 1",
      skills: [
        "Android Development",
        "iOs Development",
        "Flutter App Development",
        "React Native App Development",
      ],
    },
    {
      title: "Web Development",
      content: "Content for section 2",
      skills: [
        "ReactJs Development",
        "Laravel Development",
        "VueJs Development",
        "NextJs Development",
      ],
    },
    {
      title: "UI / UX Design",
      content: "Content for section 3",
      skills: [
        "User Research",
        "User Personas",
        "Usability Testing",
        "Wireframing",
        "Prototyping",
        "Visual Design",
      ],
    },
    {
      title: "Graphic Design",
      content: "Content for section 4",
      skills: [
        "Packaging Design",
        "Infographic Design",
        "Illustration",
        "Brand Identity Design",
        "Print Design",
        "Digital Design",
      ],
    },
    {
      title: "Digital Marketing",
      content: "Content for section 4",
      skills: [
        "Search Engine Optimization",
        "Search Engine Marketing",
        "Social Media Marketing",
        "Email Marketing",
        "Affiliate Marketing",
      ],
    },
    {
      title: "Copywriting",
      content: "Content for section 4",
      skills: [
        "SEO Copywriting",
        "Content Writing",
        "Sales Copy",
        "Technical Writing",
        "Creative Writing",
      ],
    },
  ];
  return (
    <div>
      <div className="flex flex-col gap-8 my-4 w-full">
        <AccordionCon type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem
              value={"item-1" + i}
              key={i}
              className="bg-[#dddddd]/50 rounded-3xl "
              onClick={() => setIndex(i)}
            >
              <AccordionTrigger>
                <div className=" p-4 rounded-xl w-full">
                  <div className=" max-w-4xl mx-auto w-full">
                    <div className="flex gap-4 ">
                      <span className="w text-lg capitalize text-left md:text-2xl lg:text-3xl font-medium">
                        0{i + 1}.
                      </span>
                      <span className="text-lg capitalize text-left md:text-2xl lg:text-3xl font-medium">
                        {item.title}
                      </span>
                      {/* <span className="ml-auto">
                        <GiFastArrow
                          className={cn(
                            "w-6 h-6 -rotate-45 [&[data-state=open]>svg]:rotate-180"
                          )}
                        />
                      </span> */}
                    </div>
                  </div>
                  <div className="flex gap-4 flex-wrap max-w-3xl mt-4 mx-auto w-full">
                    {item.skills.map((skill, idx) => (
                      <div
                        className="bg-white rounded-3xl text-xs md:text-sm px-4 py-2"
                        key={idx}
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className=" max-w-3xl mx-auto w-full py-2">
                  <p className="font-medium text-lg">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Enim in voluptas culpa ipsam saepe totam sint, beatae fugit?
                    Quos ex quasi reiciendis nulla unde repudiandae dolor nobis
                    possimus accusantium dolorum! Nostrum nobis dolores vero
                    repudiandae pariatur
                  </p>
                  <Image
                    src={
                      "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600"
                    }
                    width={500}
                    height={300}
                    alt="item"
                    className="object-cover h-72 grayscale my-4  w-full rounded-xl"
                  />
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionCon>
        {/* {items.map((item, i) => (
          <div key={i} className="bg-[#ddd] p-4 rounded-xl w-full">
            <div className=" max-w-4xl mx-auto w-full">
              <div className="flex justify-between gap-4 ">
                <span className="text-lg capitalize text-left md:text-2xl lg:text-3xl font-medium">
                  0{i + 1}
                </span>
                <span className="text-lg capitalize text-left md:text-2xl lg:text-3xl font-medium">
                  {item.title}
                </span>
                <span>
                  <Button className="rounded-full p-3" size={"icon"}>
                    <GiBottomRight3dArrow className="w-6 h-6" />
                  </Button>
                </span>
              </div>
            </div>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Accordion;
