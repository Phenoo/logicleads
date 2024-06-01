"use client";
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
import TextSLider1 from "@/components/textslide";
import Contact from "@/components/contact/contact";
import SectionSolutionsList from "@/components/services/section-solutions-listpage";
import Testimonial from "@/components/testiomial/testimonial";

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
              <BreadcrumbLink href="/contact" className="text-primary text-xl">
                Services
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <SectionSolutionsList />
      <TextSLider1 />
      <Testimonial />
      <TextSLider1 />
      <Contact />
    </div>
  );
};

export default Page;
