"use client";
import "./menu.scss";
import React, { useContext, useEffect } from "react";

import { useLenis } from "@studio-freight/react-lenis";
import { NavigationContext } from "../../navigation";
import MenuNav from "./menu-nav";

const Menu = () => {
  const lenis = useLenis();
  const { isMenuOpened } = useContext(NavigationContext);

  useEffect(() => {
    if (isMenuOpened) {
      //@ts-ignore
      lenis && (lenis.isStopped = true);
    } else {
      //@ts-ignore
      lenis && (lenis.isStopped = false);
    }
  }, [isMenuOpened, lenis]);
  return (
    <div className={isMenuOpened ? "menu visible" : "menu"}>
      <div className="container menu__container">
        <MenuNav />
        {/* <MenuSocials /> */}
      </div>
    </div>
  );
};

export default Menu;
