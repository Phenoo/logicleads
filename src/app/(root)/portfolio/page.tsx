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
import ProjectContainer from "./components/container";

import { groq } from "next-sanity";
import { client } from "../../../../sanity/lib/client";
import { Project } from "@/components/project/Thumnail";

const query = groq`
  *[_type=="project"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`;

export const revalidate = 0;

const fetchPosts = async () => {
  try {
    const posts = await client.fetch(query);
    // Handle the fetched posts data
    return posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return null;
  }
};

const Page = async () => {
  const posts = await fetchPosts();

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
              <BreadcrumbLink
                href="/portfolio"
                className="text-primary text-xl"
              >
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <TextSLider1 />
      <Project />
      <ProjectContainer items={posts} />
    </div>
  );
};

export default Page;
