"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

type props = {
  children: ReactNode;
};

function SmoothScrolling({ children }: props) {
  return (
    <ReactLenis className={"menu"} root options={{ lerp: 0.1, duration: 2 }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
