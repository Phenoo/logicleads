import React from "react";
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../../../../components/ui/breadcrumb";

import { Metadata } from "next";
import { Slash } from "lucide-react";
import SlugContainer from "./components/SlugContainer";
import { SITE_DESCRIPTION } from "../../../../lib/site";

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
    title: post?.title || "Portfolio Project",
    description: post?.description || SITE_DESCRIPTION,
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
  const projects = dataprojects
    .filter((project: any) => project?.slug?.current !== params.slug)
    .slice(0, 4);

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
              <BreadcrumbLink href="/portfolio" className=" text-xl">
                Portfolio
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-primary text-xl">
                {data?.title}
              </BreadcrumbPage>
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
