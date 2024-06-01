import React from "react";
import { client } from "../../../../../sanity/lib/client";
import { groq } from "next-sanity";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Metadata } from "next";
import { Slash } from "lucide-react";
import SlugContainer from "./components/SlugContainer";

const fetchArticleData = async (slug: string) => {
  const result = await client.fetch(
    groq`
      *[_type == "project" && slug.current == $slug][0]{
        ...,
        "mainImage": mainImage.asset->url,
        "planImage": planImage.asset->url,
        "designImage": designImage.asset->url,
        "constructImage": constructImage.asset->url,
      }`,
    { slug }
  );
  return result;
};

export const revalidate = 0;

export async function generateMetadata({
  params: { slug },
}: any): Promise<Metadata> {
  const post = await fetchArticleData(slug);
  // const post = await response.json();

  return {
    title: post?.title,
    description: post?.description,
  };
}

async function getDataProjects() {
  const query = `
  *[_type == 'project'] | order(_createdAt desc) {
    ...,
    "mainImage": mainImage.asset->url,

  }`;

  const data = await client.fetch(query);
  return data;
}

type Props = {
  params: { slug: string };
};

const Page = async ({ params }: Props) => {
  const data = await fetchArticleData(params.slug);
  const dataprojects = await getDataProjects();

  function shuffle(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // Original dataprojects array

  // Shuffle the dataprojects array
  const shuffledProjects = shuffle(dataprojects.slice());

  // Select the first 4 elements from the shuffled array
  const projects = shuffledProjects.slice(0, 4);

  return (
    <div className="h-full w-full">
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
              <BreadcrumbLink href="/projects" className=" text-xl">
                Projects
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/contact" className="text-primary text-xl">
                {data?.title}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="bg-white text-black h-full">
        <SlugContainer data={data} items={projects} />
      </div>
    </div>
  );
};

export default Page;
