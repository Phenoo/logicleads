// import Abouthome from "../../components/abouthome";

// import Hero from "../../components/sections/hero";

// import SectionFaq from "../../components/faq/section-faq";
// import SectionQuote from "../../components/quote/section-quote";
// import SectionOffer from "../../components/offers/offers";
// import SectionSolutionsList from "../../components/services/section-solutions-list";
// import Review from "../../components/review/review";
// import Contact from "../../components/contact/contact";
// import TextSLider1 from "../../components/textslide";

import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";
import { Project } from "../../components/project/Thumnail";
import Hero from "../../components/sections/hero";
import TextSLider1 from "../../components/textslide";
import Contact from "../../components/contact/contact";
import SectionFaq from "../../components/faq/section-faq";
import Review from "../../components/review/review";
import SectionQuote from "../../components/quote/section-quote";
import SectionOffer from "../../components/offers/offers";
import Abouthome from "../../components/abouthome";
import SectionSolutionsList from "../../components/services/section-solutions-listpage";

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
    },
    {
      title: "Supermarket.ng",
      category: "E-commerce",
      mainImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=500",
      url: "https://supermarket.ng/",
      slug: { current: "supermarket-ng" }
    },
    {
      title: "Faith Journals",
      category: "E-commerce",
      mainImage: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=500",
      url: "https://faith-journals.com",
      slug: { current: "faith-journals" }
    },
    {
      title: "Faith Garden",
      category: "Blog / Resource",
      mainImage: "https://images.unsplash.com/photo-1466692476877-6a319fbf3b3a?auto=format&fit=crop&q=80&w=500",
      url: "https://faithgarden.online",
      slug: { current: "faith-garden" }
    }
  ];

  posts = [...externalProjects, ...posts];
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
      {/* <Review posts={posts} /> */}
      <TextSLider1 />
      <SectionFaq />
      <Contact />
    </div>
  );
}
