import { ParallaxReveal } from "@/app/providers/reveal";
import Image from "next/image";
import React from "react";
import { TbRosetteDiscountCheckFilled } from "react-icons/tb";

const Abouthome = () => {
  const phrase =
    "We are a full-service digital agency dedicated to transforming your ideas into impactful digital experiences. Our passion for technology and commitment to excellence drives us to deliver solutions that not only meet but exceed your expectations. To empower businesses with cutting-edge digital solutions that drive growth, engagement, and success in an ever-evolving digital landscape.";
  return (
    <section className="bg-white text-black">
      <div className=" max-w-7xl mx-auto p-4 flex justify-center items-center flex-col min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="w-full">
            <Image
              src={
                "https://images.pexels.com/photos/3810792/pexels-photo-3810792.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="about"
              width={500}
              height={300}
              className="w-full max-w-4xl h-80 md:h-[500px]  object-cover rounded-3xl"
            />
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-center">
              <div className="w-10 h-0.5 bg-primary" />
              <h4>About Us</h4>
            </div>
            <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium capitalize">
              We&apos;re{" "}
              <span className="text-primary text-3xl md:text-4xl lg:text-5xl">
                award winning
              </span>
              <br />
              Digital Agency
            </h4>

            <div>
              <ParallaxReveal paragraph={phrase} />
            </div>
            <div className="space-y-2">
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>Award winning Agency</p>
              </div>
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>Experienced Team Members</p>
              </div>
              <div className="flex gap-4 items-center capitalize">
                <TbRosetteDiscountCheckFilled
                  size={30}
                  className="text-primary"
                />
                <p>High Quality Services</p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="delafield text-black text-3xl">
                <h5>Desco4PF</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;
