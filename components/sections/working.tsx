import React from "react";
import { RiLightbulbFlashLine } from "react-icons/ri";

import { FaPencilRuler } from "react-icons/fa";

import { LiaClipboardListSolid } from "react-icons/lia";

const Working = () => {
  return (
    <div className="bg-white py-20 text-black">
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex gap-4 items-center justify-center text-black">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Working Process</h4>
        </div>
        <h4 className="text-xl md:text-3xl lg:text-5xl font-medium capitalize text-center mt-2">
          Our Working Process
        </h4>
        <div className="flex justify-between items-center flex-col md:flex-row my-8 gap-8 flex-wrap">
          <div className="flex justify-center items-center max-w-sm w-full text-center flex-col gap-4">
            <div className="">
              <span className="bg-primary flex justify-center text-black items-center w-14 h-14 rounded-full">
                <RiLightbulbFlashLine className="w-6 h-6" />
              </span>
              <span className="py-1 px-2 -mt-1 bg-black text-white rounded-xl text-xs">
                Step 1
              </span>
            </div>
            <h4 className="font-medium">Research and Discovery</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              soluta.
            </p>
          </div>
          <div className="flex justify-center items-center max-w-sm w-full text-center flex-col gap-4">
            <div>
              <span className="bg-primary flex justify-center text-black items-center w-14 h-14 rounded-full">
                <FaPencilRuler className="w-6 h-6" />
              </span>
              <span className="py-1 px-2 -mt-1 bg-black text-white rounded-xl text-xs">
                Step 2
              </span>
            </div>
            <h4>Design and Prototyping</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              soluta.
            </p>
          </div>
          <div className="flex justify-center items-center max-w-sm w-full text-center flex-col gap-4">
            <div className="">
              <span className="bg-primary flex justify-center text-black items-center w-14 h-14 rounded-full">
                <RiLightbulbFlashLine className="w-6 h-6" />
              </span>
              <span className="py-1 px-2 -mt-1 bg-black text-white rounded-xl text-xs">
                Step 3
              </span>
            </div>
            <h4 className="font-medium">Development and Testing</h4>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              soluta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
