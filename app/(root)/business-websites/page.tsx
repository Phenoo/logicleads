import type { Metadata } from "next";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import { client } from "../../../sanity/lib/client";
import WebsiteQuoteForm from "../../../components/ads/website-quote-form";
import WhatsAppCta from "../../../components/marketing/whatsapp-cta";
import ViewContentTracker from "../../../components/marketing/view-content-tracker";

const query = groq`
  *[_type=="project"] {
    ...,
    "mainImage": mainImage.asset->url,
  }[0...3]
`;

const faqItems = [
  {
    question: "Who is this offer for?",
    answer:
      "It is for SMEs, founders, and service businesses that need a professional website built to generate trust, enquiries, and sales.",
  },
  {
    question: "What is included in the website package?",
    answer:
      "We scope strategy, design direction, responsive pages, lead capture, copy support, and a launch-ready build. Exact deliverables depend on your business and goal.",
  },
  {
    question: "Can you redesign an existing website?",
    answer:
      "Yes. We handle both new websites and redesigns, and we will advise on the fastest route after reviewing your current setup.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Most qualified projects in this offer are positioned for a 14-21 day turnaround once scope, content, and approvals are aligned.",
  },
  {
    question: "What happens after I enquire?",
    answer:
      "You move into WhatsApp for fast qualification, proof review, and a quote or project brief. Serious leads can move to proposal stage quickly.",
  },
];

export const metadata: Metadata = {
  title: "High-Converting Business Websites",
  description:
    "Get a conversion-focused website for your business in 14-21 days. Built for trust, enquiries, and sales.",
};

async function fetchProjects() {
  try {
    return await client.fetch(query);
  } catch (error) {
    console.error("Error fetching landing page projects:", error);
    return [];
  }
}

export default async function BusinessWebsitesPage() {
  const projects = await fetchProjects();

  return (
    <div className="bg-[#f4f2fb] text-black">
      <ViewContentTracker
        contentName="High-Converting Business Websites"
        contentCategory="website_quote_landing_page"
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[540px] bg-[radial-gradient(circle_at_top_left,_rgba(149,65,198,0.28),_transparent_46%),radial-gradient(circle_at_top_right,_rgba(209,255,87,0.28),_transparent_32%),linear-gradient(180deg,_#0d1020_0%,_#131829_100%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div className="text-white">
            <p className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.28em] text-[#d1ff57]">
              Nigeria-first website offer
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-6xl lg:text-7xl">
              Get a high-converting business website in 14-21 days.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-white/78 md:text-xl">
              Built for SMEs that need a stronger online presence, clearer
              credibility, and more qualified leads without wasting budget on a
              generic website.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Starting from ₦500k",
                "WhatsApp-first qualification",
                "Built for trust and enquiries",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <WhatsAppCta
                entryPoint="Business websites hero CTA"
                budgetBand="₦500k - ₦1.5m"
                timeline="14-21 days"
                needs="New website or redesign"
                goal="A conversion-focused business website for more leads and sales"
                className="inline-flex items-center justify-center rounded-full bg-[#d1ff57] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
              >
                Chat on WhatsApp for a quote
              </WhatsAppCta>
              <Link
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/5"
              >
                View portfolio examples
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  Primary CTA
                </p>
                <p className="mt-3 text-xl font-semibold">WhatsApp quote flow</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  Fit
                </p>
                <p className="mt-3 text-xl font-semibold">SMEs and service brands</p>
              </div>
              <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                  Outcome
                </p>
                <p className="mt-3 text-xl font-semibold">More trust and enquiries</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/95 p-6 shadow-2xl shadow-black/20 backdrop-blur">
            <div className="rounded-[1.5rem] bg-[#10121d] p-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d1ff57]">
                Launch Offer
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                A focused website package for businesses that need to convert.
              </h2>
              <div className="mt-8 grid gap-4">
                {[
                  "Strategy-led page structure that sells your offer clearly",
                  "Responsive design and fast lead capture experience",
                  "Conversion-first CTA placement and contact flow",
                  "Delivery positioned for 14-21 days when scope is aligned",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/5 px-5 py-4 text-base text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] border border-[#d1ff57]/30 bg-[#d1ff57]/10 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-[#d1ff57]">
                  Starting price
                </p>
                <p className="mt-3 text-4xl font-semibold">₦500k</p>
                <p className="mt-2 text-white/70">
                  Best fit for businesses ready to invest properly in their web
                  presence and lead generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "What you get",
              body:
                "A website scoped around credibility, conversion, and a cleaner sales journey instead of a generic online brochure.",
            },
            {
              title: "How we work",
              body:
                "We qualify first, align scope quickly, then move into design and development with clear milestones and delivery expectations.",
            },
            {
              title: "Why WhatsApp first",
              body:
                "It reduces delay, helps us qualify faster, and improves close rate for service sales where conversation matters.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-lg shadow-black/5"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-primary">
                {item.title}
              </p>
              <p className="mt-5 text-lg leading-relaxed text-black/75">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-[2rem] bg-[#10121d] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d1ff57]">
            Deliverables
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            Designed to move a prospect from doubt to enquiry.
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Offer-focused messaging",
              "Responsive page design",
              "Lead form and contact setup",
              "WhatsApp and CTA integration",
              "Basic launch support",
              "Portfolio and trust sections",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.4rem] border border-white/10 bg-white/5 px-4 py-5 text-base text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-black/8 bg-white p-8 shadow-lg shadow-black/5">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Founder
          </p>
          <div className="mt-5 grid gap-8 md:grid-cols-[220px_1fr] md:items-center">
            <div className="overflow-hidden rounded-[1.75rem] bg-[#ece8f6]">
              <Image
                src="/mark.jpeg"
                alt="Founder portrait"
                width={220}
                height={283}
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold text-[#10121d]">
                A direct, hands-on process for serious business owners.
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-black/72">
                If your business needs a website that looks credible and moves
                people to contact you, this offer is built to get you from
                enquiry to launch quickly. You will not be pushed into a vague,
                bloated process.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <WhatsAppCta
                  entryPoint="Founder block CTA"
                  budgetBand="₦500k - ₦1.5m"
                  timeline="14-21 days"
                  needs="Business website quote"
                  goal="A website that improves trust and lead generation"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-4 text-base font-semibold text-white transition hover:bg-[#7b2ea9]"
                >
                  Start on WhatsApp
                </WhatsAppCta>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-black/10 px-7 py-4 text-base font-semibold text-black transition hover:border-primary hover:text-primary"
                >
                  Browse portfolio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Proof
            </p>
            <h2 className="mt-3 text-4xl font-semibold text-[#10121d] md:text-5xl">
              Selected work that shows range and execution.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center rounded-full border border-black/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black transition hover:border-primary hover:text-primary"
          >
            See full portfolio
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.length > 0
            ? projects.map((project: any) => (
                <Link
                  key={project.slug.current}
                  href={`/portfolio/${project.slug.current}`}
                  className="group overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-lg shadow-black/5 transition hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.mainImage}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-flex rounded-full bg-[#ece8f6] px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {project.category}
                    </span>
                    <h3 className="mt-4 text-2xl font-semibold text-[#10121d]">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              ))
            : [1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-[2rem] border border-dashed border-black/15 bg-white p-8 text-black/60"
                >
                  Portfolio items from Sanity will appear here once available.
                </div>
              ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              FAQs
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-[#10121d] md:text-5xl">
              Clear answers before you enquire.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black/70">
              The offer is intentionally focused. These answers remove the most
              common hesitation points before you start the conversation.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="rounded-[1.75rem] border border-black/8 bg-white p-6 shadow-lg shadow-black/5"
              >
                <summary className="cursor-pointer list-none text-xl font-semibold text-[#10121d]">
                  {item.question}
                </summary>
                <p className="mt-4 text-lg leading-relaxed text-black/72">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="rounded-[2rem] bg-[#10121d] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d1ff57]">
              Next step
            </p>
            <h2 className="mt-4 text-4xl font-semibold">
              Use WhatsApp if you want the fastest route.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/75">
              Paid traffic converts best when the next action is obvious. If
              you are ready, start on WhatsApp. If you want to leave the basics
              first, use the short form.
            </p>
            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.2em] text-white/45">
                WhatsApp qualification flow
              </p>
              <ol className="mt-4 space-y-3 text-base text-white/75">
                <li>1. Business type</li>
                <li>2. New website or redesign</li>
                <li>3. Target outcome</li>
                <li>4. Budget band</li>
                <li>5. Preferred timeline</li>
              </ol>
            </div>
            <WhatsAppCta
              entryPoint="Bottom CTA"
              budgetBand="₦500k - ₦1.5m"
              timeline="14-21 days"
              needs="Business website quote"
              goal="A focused website that helps my business convert better"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#d1ff57] px-8 py-4 text-base font-semibold text-black transition hover:bg-white"
            >
              Chat on WhatsApp now
            </WhatsAppCta>
          </div>

          <WebsiteQuoteForm />
        </div>
      </section>
    </div>
  );
}
