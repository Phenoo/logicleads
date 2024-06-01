"use client";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { useAnimate, stagger } from "framer-motion";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { FaCircleDot } from "react-icons/fa6";

const Path = (props: any) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="#fff"
    strokeLinecap="round"
    {...props}
  />
);

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      //@ts-ignore
      ...menuAnimations,
    ]);
  }, [isOpen]);

  return scope;
}

function NavMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const scope = useMenuAnimation(isOpen);

  return (
    <div ref={scope} className="flex md:hidden ">
      <nav className="menu" aria-label="menu">
        <ul className="md:hidden flex flex-col gap-4 ">
          <li>
            <Link
              className={cn(
                "text-lg ",
                pathname === "/" ? "font-bold text-primary underline" : ""
              )}
              href={"/"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className={cn(
                "text-lg ",
                pathname === "/about" ? "font-bold text-primary underline" : ""
              )}
              href={"/about"}
              onClick={() => setIsOpen(!isOpen)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "text-lg ",
                pathname === "/services"
                  ? "font-bold text-primary underline"
                  : ""
              )}
              href={"/services"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "text-lg ",
                pathname === "/portfolio"
                  ? "font-bold text-primary underline"
                  : ""
              )}
              href={"/portfolio"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Portofolio
            </Link>
          </li>
          <li>
            <Link
              className={cn(
                "text-lg ",
                pathname === "/contact"
                  ? "font-bold text-primary underline"
                  : ""
              )}
              href={"/contact"}
              onClick={() => setIsOpen(!isOpen)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>{" "}
      <button
        className="nav-button "
        aria-label="Menu toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg width="23" height="18" viewBox="0 0 23 18">
          <Path
            d="M 2 2.5 L 20 2.5"
            className="top"
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
          />
          <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
          <Path
            d="M 2 16.346 L 20 16.346"
            className="bottom"
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
          />
        </svg>
      </button>
    </div>
  );
}

const Navbar = () => {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous! && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={cn(
        `flex items-center h-20 fixed top-0 w-full z-50 bg-black text-white`
      )}
    >
      <header className="max-w-7xl w-full mx-auto p-2 flex justify-between items-center py-4">
        <div>
          <Link href={"/"} className="text-xl ">
            LogicLeads<span className="text-primary text-5xl">.</span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex gap-4 ">
            <li>
              <Link
                className={cn(
                  " ",
                  pathname === "/about"
                    ? "font-bold text-primary underline"
                    : "text-white"
                )}
                href={"/about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  " ",
                  pathname === "/services"
                    ? "font-bold text-primary underline"
                    : "text-white"
                )}
                href={"/services"}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  " ",
                  pathname === "/portfolio"
                    ? "font-bold text-primary underline"
                    : "text-white"
                )}
                href={"/portfolio"}
              >
                Portofolio
              </Link>
            </li>
            <li>
              <Link
                className={cn(
                  " ",
                  pathname === "/contact"
                    ? "font-bold text-primary underline"
                    : "text-white"
                )}
                href={"/contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <button className="cta">
            <span>Let&apos;s talk</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </div>

        <NavMenu />
      </header>
    </motion.nav>
  );
};

export default Navbar;
