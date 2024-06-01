import React from "react";
import Accordion from "./accordion";

const Services = () => {
  return (
    <div className="bg-white min-h-screen text-black py-20">
      <div className="max-w-7xl mx-auto w-full p-4">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-0.5 bg-primary" />
          <h4>Our Services</h4>
        </div>

        <div className="grid grid-cols-1 g md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xl font-medium md:text-3xl lg:text-5xl">
              Discover Our <br />
              Digital Solutions
            </h4>
          </div>
          <div className="border-l-2 px-4 border-l-primary h-fit">
            <p className="font-medium text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              consequuntur perspiciatis ipsa reiciendis unde cum
            </p>
          </div>
        </div>

        <Accordion />
      </div>
    </div>
  );
};

export default Services;
