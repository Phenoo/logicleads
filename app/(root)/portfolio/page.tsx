import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../components/ui/breadcrumb";
import { Slash } from "lucide-react";
import TextSLider1 from "../../../components/textslide";
import ProjectContainer from "./components/container";

import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Project } from "../../../components/project/Thumnail";

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
  let posts = await fetchPosts() || [];

  const externalProjects = [
    {
      title: "Pent Fitness",
      category: "Fitness & Wellness",
      mainImage: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=500",
      url: "https://www.pentfitness.com/",
      slug: { current: "pent-fitness" }
    },
    {
      title: "Quebits",
      category: "Website Design",
      mainImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500",
      url: "https://www.quebits.ca/",
      slug: { current: "quebits" }
    },
    {
      title: "Demuzs Cuts",
      category: "Barbershop & Grooming",
      mainImage: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80&w=500",
      url: "https://demuzscuts.online/",
      slug: { current: "demuzscuts" }
    }
  ];

  posts = [...externalProjects, ...posts];

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
