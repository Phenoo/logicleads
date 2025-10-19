import React from "react";

import { ParallaxText } from "./Parallex";
import { FaStarOfLife } from "react-icons/fa6";
import { LiaStarOfLifeSolid } from "react-icons/lia";

const Overflow = () => {
  return (
    <ParallaxText baseVelocity={5}>
      Digital Marketing <FaStarOfLife className="text-black fill-black mx-4" />
      Brand Design <FaStarOfLife className="text-black fill-black mx-4" />
      Copywriting
      <FaStarOfLife className="text-black fill-black mx-4" />
      Website Development
      <FaStarOfLife className="text-black fill-black mx-4" />
      UI/UX Design
    </ParallaxText>
  );
};

export default Overflow;
