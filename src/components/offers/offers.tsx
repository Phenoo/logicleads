"use client";
import "./section-innovation.scss";
import Icon_quality from "../icons/icon-quality";

import {
  Icon_rocket,
  Icon_dev,
  Iconstragegy,
  Icondraw,
  Icontest,
} from "../icons/icon-marketplace";

import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.2,
    },
  },
};

export default function SectionOffer() {
  return (
    <div className="bg-white text-white">
      <section id="innovations" className="section-innovation">
        <div className="max-w-7xl w-full mx-auto section-innovation__container">
          <div className="section-innovation__header">
            <div className="section-innovation__heading-wrapper">
              <div className="flex gap-4 items-center text-black">
                <div className="w-10 h-0.5 bg-primary" />
                <h4 className="uppercase">the way we do things</h4>
              </div>
              <h2 className="section-innovation__heading text-3xl md:text-4xl lg:text-5xl">
                Our Working Process
              </h2>
            </div>
            {/* <p className="section-innovation__description-text">
              Our house has been designed with attention to every detail, both
              technically and visually.
            </p> */}
          </div>
          {/* <motion.div className="card" variants={item}> */}

          <motion.ul
            className="section-innovation__grid-list"
            variants={container}
            initial="hidden"
            exit="exit"
            whileInView="show"
            viewport={{ once: false }}
          >
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_quality />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Discovery & Research
                </h3>
                <p className="section-innovation__description-text">
                  We start by immersing ourselves in your brand, goals, and
                  target audience. Our team conducts thorough research to
                  identify key challenges and opportunities, ensuring a solid
                  foundation for your project.
                </p>
              </motion.div>
            </li>
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Iconstragegy />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Strategy & Planning
                </h3>
                <p className="section-innovation__description-text">
                  Our experts develop a tailored strategy aligned with your
                  objectives, defining project scope, timelines, and milestones.
                  We prioritize collaboration, ensuring everyone is on the same
                  page.
                </p>
              </motion.div>
            </li>
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icondraw />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Design & Prototyping
                </h3>
                <p className="section-innovation__description-text">
                  Our creative team crafts visually stunning, user-centered
                  designs that bring your vision to life. We iterate and refine
                  prototypes, ensuring an intuitive and seamless user
                  experience.
                </p>
              </motion.div>
            </li>
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_dev />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Development & Engineering
                </h3>
                <p className="section-innovation__description-text">
                  Our skilled developers and engineers build robust, scalable
                  solutions using cutting-edge technologies. We prioritize
                  quality, performance, and security.
                </p>
              </motion.div>
            </li>
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icontest />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Testing & Quality Assurance
                </h3>
                <p className="section-innovation__description-text">
                  We rigorously test and refine your project, ensuring it meets
                  our high standards. Our QA team identifies and addresses any
                  issues, guaranteeing a polished final product.
                </p>
              </motion.div>
            </li>
            <li className="section-innovation__grid-item">
              <div className="section-innovation__grid-icon">
                <Icon_rocket />
              </div>
              <motion.div
                className="section-innovation__grid-description"
                variants={item}
              >
                <h3 className="section-innovation__description-heading text-xl md:text-3xl">
                  Launch & Deployment
                </h3>
                <p className="section-innovation__description-text">
                  We take care of the launch process, ensuring a smooth
                  transition to production. Our team provides ongoing support
                  and maintenance, ensuring your project continues to thrive.
                </p>
              </motion.div>
            </li>
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
