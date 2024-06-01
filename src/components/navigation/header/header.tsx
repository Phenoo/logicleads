"use client";
import "./header.scss";
import React, { useContext, useState } from "react";
import { NavigationContext } from "../navigation";
import Icon_menu from "@/components/icons/icon-menu";

import { useAnimate, stagger } from "framer-motion";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const Header = () => {
  const { isMenuOpened, setIsMenuOpened } = useContext(NavigationContext);
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
  const handleClickMenu = () => setIsMenuOpened((prev) => !prev);

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="header sticky"
    >
      <nav className="header__nav">
        <span className="header__logo ">
          <Link href={"/"}>LOGIC LEADS</Link>
        </span>
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button
              onClick={handleClickMenu}
              className="header__nav-button outline-none"
            >
              <span className="header__nav-text">Menu</span>
              <span className="header__nav-icon">
                <Icon_menu type={isMenuOpened ? "close" : "open"} />
              </span>
            </button>
          </li>
          <li className="divider"></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
