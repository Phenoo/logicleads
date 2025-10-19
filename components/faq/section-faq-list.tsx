"use client";

import Icon_accordion from "../icons/icon-accordion";
import "./section-faq.scss";
import { useState } from "react";

type ItemProps = {
  heading: string;
  text: string;
};

function SectionFaqItem({ heading, text }: ItemProps) {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <li
      onClick={() => setIsOpened((curr) => !curr)}
      className={isOpened ? "section-faq__item active" : "section-faq__item"}
    >
      <h3 className="section-faq__item-heading">{heading}</h3>
      <span className="section-faq__item-button">
        <Icon_accordion type={isOpened ? "close" : "open"} />
      </span>
      <div className="section-faq__spoiler-wrapper">
        <p className="section-faq__item-text">{text}</p>
      </div>
    </li>
  );
}

const LIST: ItemProps[] = [
  {
    heading: "What services does your agency offer?",
    text: "Our agency provides a range of digital services, including website design and development, mobile app creation, digital marketing, and more.",
  },
  {
    heading: "What sets your agency apart from others?",
    text: "Our team of experts is dedicated to delivering exceptional results, and we prioritize collaboration, innovation, and customer satisfaction.",
  },
  {
    heading: "What types of websites do you develop?",
    text: "We develop custom, responsive websites for various industries, including e-commerce, corporate, and non-profit organizations.",
  },
  {
    heading: "How long does website development take?",
    text: "Project timelines vary depending on scope and complexity, but we typically deliver websites within 6-12 weeks",
  },
  {
    heading: "How quickly do you respond to support requests?    ",
    text: "Our team responds to support requests within 24 hours, ensuring minimal downtime and efficient issue resolution.",
  },
  {
    heading: " What digital marketing services do you offer?    ",
    text: "Our services include SEO, PPC advertising, social media management, email marketing, and content creation.   ",
  },
];

export default function SectionFaqList() {
  return (
    <ul className="section-faq__list bg-primary">
      {LIST.map((el, i) => (
        <SectionFaqItem key={i} heading={el.heading} text={el.text} />
      ))}
    </ul>
  );
}
