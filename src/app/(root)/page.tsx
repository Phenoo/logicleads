import Abouthome from "@/components/abouthome";

import Hero from "@/components/sections/hero";

import SectionFaq from "@/components/faq/section-faq";
import SectionQuote from "@/components/quote/section-quote";
import SectionOffer from "@/components/offers/offers";
import SectionSolutionsList from "@/components/services/section-solutions-list";
import Review from "@/components/review/review";
import Contact from "@/components/contact/contact";
import TextSLider1 from "@/components/textslide";

import { groq } from "next-sanity";
import { client } from "../../../sanity/lib/client";
import { Project } from "@/components/project/Thumnail";

const query = groq`
  *[_type=="project"] {
    ...,
    "mainImage": mainImage.asset->url,
  } 
`;

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

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <div className="">
      <Hero />
      <TextSLider1 />
      <SectionSolutionsList />
      <Abouthome />
      <SectionOffer />
      <TextSLider1 />
      <SectionQuote />
      <Project />
      <Review posts={posts} />
      <TextSLider1 />
      <SectionFaq />
      <Contact />
    </div>
  );
}
