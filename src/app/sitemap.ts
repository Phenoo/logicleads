import { MetadataRoute } from "next";
import { groq } from "next-sanity";
import { client } from "../../sanity/lib/client";

const query = groq`
  *[_type == "project"] {
    slug
  } 
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const response = await client.fetch(query);
    const projectSlugs: string[] = response.map((project: any) => project.slug.current);

    const postEntries: MetadataRoute.Sitemap = projectSlugs.map((slug: string) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/portfolio/${slug}`,
      lastModified: new Date(),
    }));

    return [
      {
        url: 'https://www.logicleads.tech',
        lastModified: new Date(),
        priority: 1,
      },
      {
        url: `https://www.logicleads.tech/about`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `https://www.logicleads.tech/projects`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
      {
        url: `https://www.logicleads.tech/services`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `https://www.logicleads.tech/contact`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
      },
      ...postEntries,
    ];
  } catch (error) {
    console.error("Error fetching project data:", error);
    return [];
  }
}

// import { MetadataRoute } from "next";
// import { groq } from "next-sanity";
// import { client } from "../../sanity/lib/client";


// const query = groq`
//   *[_type=="project"] {
//     ...,
//   } 
// `

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const response = await client.fetch(query);
//   const { posts }: any = await response.json();

//   const postEntries: MetadataRoute.Sitemap = posts.map(({ slug }: any) => ({
//     url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects/${slug.current}`,
//     // lastModified: new Date(post.updatedAt),
//     // changeFrequency:,
//     // priority:
//   }));

//   return [
//     {
//       url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
//       lastModified: new Date(),
//     },
//     {
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
//         lastModified: new Date(),
//       },
//       {
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
//         lastModified: new Date(),
//       },
//       {
//         url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
//         lastModified: new Date(),
//       },
//     ...postEntries,
    
//   ];
// }