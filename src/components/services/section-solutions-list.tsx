"use client";

import { ParallaxReveal } from "@/app/providers/reveal";
import Icon_accordion from "../icons/icon-accordion";
import "./section-solutions.scss";
import { useState } from "react";

type ItemProps = {
  caption: string;
  heading: string;
  text: string;
  item: any;
};

const items = [
  {
    title: "Mobile app development",
    content:
      "at a digital agency involves creating custom applications tailored to clients' needs for both Android and iOS platforms. Our team of skilled developers uses the latest technologies and best practices to deliver high-quality, user-friendly mobile apps.",
    skills: [
      "Android Development",
      "iOs Development",
      "Flutter App Development",
      "React Native App Development",
    ],
  },
  {
    title: "Web Development",
    content:
      "Our digital agency focuses on creating dynamic, responsive, and engaging websites and web applications. Our developers are proficient in a variety of modern web technologies to ensure your online presence is impactful. ",
    skills: [
      "ReactJs Development",
      "Laravel Development",
      "VueJs Development",
      "NextJs Development",
    ],
  },
  {
    title: "UI / UX Design",
    content:
      "UI/UX design at our digital agency is all about creating intuitive and visually appealing designs that enhance user satisfaction. Our designers employ a user-centered approach to ensure the final product is both functional and aesthetically pleasing",
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
    content:
      "Graphic design at our digital agency encompasses creating visually stunning and effective designs for various media. Our designers excel in transforming ideas into impactful visual content that resonates with your target audience",
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
    content:
      "Digital marketing at our digital agency focuses on using data-driven strategies to increase your online presence and drive business growth. Our team employs a mix of creativity and analytical thinking to develop and execute effective marketing campaigns.",
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
    content:
      "Copywriting at our digital agency involves creating compelling and persuasive text that effectively communicates your brand’s message and drives engagement. Our skilled copywriters craft content that resonates with your audience and meets your business objectives",
    skills: [
      "SEO Copywriting",
      "Content Writing",
      "Sales Copy",
      "Technical Writing",
      "Creative Writing",
    ],
  },
];

function SectionSolutionsItem({ caption, heading, text, item }: ItemProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      onClick={() => setIsOpened((curr) => !curr)}
      className={
        isOpened
          ? "section-solutions__item active"
          : "section-solutions__item group"
      }
    >
      <small className="section-solutions__item-caption">{caption}</small>
      <div>
        <h3 className="section-solutions__item-heading">{heading}</h3>
        <br />
        <div className="hidden md:flex gap-4 flex-wrap  mt-4 mx-auto w-full">
          {item.skills.map((skill: any, idx: number) => (
            <div
              className="bg-white accord border border-black text-black rounded-3xl text-xs md:text-sm px-4 py-2"
              key={idx}
            >
              {skill}
            </div>
          ))}
        </div>{" "}
      </div>
      <span className="section-solutions__item-button">
        <Icon_accordion type={isOpened ? "close" : "open"} />
      </span>
      <div className="section-solutions__item-spoiler">
        <div className="md:hidden flex gap-4 flex-wrap  mt-4 mx-auto w-full">
          {item.skills.map((skill: any, idx: number) => (
            <div
              className="bg-white accord border border-black text-black rounded-3xl text-xs md:text-sm px-4 py-2"
              key={idx}
            >
              {skill}
            </div>
          ))}
        </div>{" "}
        <br />
        <p className="section-solutions__item-text">{text}</p>
      </div>
    </li>
  );
}

export default function SectionSolutionsList() {
  return (
    <div className="bg-white text-black py-16">
      <div className="max-w-7xl mx-auto p-4 w-full ">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Services</h4>
        </div>

        <div className="grid grid-cols-1 g md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-3xl font-medium md:text-4xl lg:text-5xl">
              Discover Our <br />
              Digital Solutions
            </h4>
          </div>
          <div className="border-l-2 px-4 border-l-primary h-fit">
            <ParallaxReveal
              paragraph={
                "We offer a comprehensive suite of services designed to elevate your online presence and drive your business growth."
              }
            />
          </div>
        </div>
        <ul className="section-solutions__list mt-8">
          {items.map((el, i) => (
            <SectionSolutionsItem
              key={i}
              caption={`0${i + 1}`}
              heading={el.title}
              text={el.content}
              item={el}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
