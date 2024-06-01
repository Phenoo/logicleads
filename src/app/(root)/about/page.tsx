import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slash } from "lucide-react";
import Abouthome from "./components/heroabout";
import TextSLider1 from "@/components/textslide";
import SectionOffer from "@/components/offers/offers";
import { Project } from "@/components/project/Thumnail";

const Page = () => {
  return (
    <div>
      <div className="h-60 flex justify-center items-center">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-lg">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/about" className="text-primary text-xl">
                About Us
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Abouthome />
      <TextSLider1 />
      <Project />
      <TextSLider1 />

      <SectionOffer />
    </div>
  );
};

export default Page;
