"use client";

import { ExternalLink } from "lucide-react";
import { trackPortfolioClick } from "../../../../lib/meta-browser";

type PortfolioItem = {
  name: string;
  category: string;
  url: string;
  tag: string;
};

const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    name: "Quebits",
    category: "Software & Technology Agency",
    url: "https://www.quebits.ca",
    tag: "Web Platform",
  },
  {
    name: "Usoro App",
    category: "Digital Financial Product",
    url: "https://www.usoro.app",
    tag: "Web App",
  },
  {
    name: "Pent Fitness",
    category: "Luxury Equipment & E-commerce",
    url: "https://www.pentfitness.com/",
    tag: "E-commerce",
  },
  {
    name: "WeComplete",
    category: "Real Estate & Conveyancing Platform",
    url: "https://apps.apple.com/ng/app/wecomplete/id6744988357",
    tag: "Mobile App",
  },
  {
    name: "Faith Garden App",
    category: "Community & Digital Mobile App",
    url: "https://www.faithgarden.online/get-app",
    tag: "Mobile App",
  },
  {
    name: "Supermarket NG",
    category: "Online Grocery & Retail Platform",
    url: "https://supermarket.ng",
    tag: "E-commerce",
  },
  {
    name: "Outlash Brand",
    category: "Beauty & E-commerce Storefront",
    url: "https://www.outlashbrandng.com",
    tag: "E-commerce",
  },
  {
    name: "SparkleKlin UK",
    category: "Commercial & Residential Cleaning Services",
    url: "https://sparkleklin.co.uk/",
    tag: "Business Website",
  },
];

export default function PortfolioSection() {
  const handleClick = (item: PortfolioItem) => {
    trackPortfolioClick({
      portfolio_name: item.name,
      portfolio_url: item.url,
      category: item.category,
    });
  };

  return (
    <div>
      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d1ff57]">
          Proven Quality
        </span>
        <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
          Selected Work
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">
          Explore a selection of live websites, web applications, e-commerce storefronts, and mobile products built for clients.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PORTFOLIO_ITEMS.map((item, idx) => (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClick(item)}
            className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#d1ff57] hover:bg-white/[0.06] hover:scale-[1.02]"
          >
            <div>
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-[#d1ff57]">
                  {item.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-white/40 transition-colors group-hover:text-[#d1ff57]" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-white group-hover:text-[#d1ff57] transition-colors">
                {item.name}
              </h3>
              <p className="mt-2 text-xs text-white/60 leading-relaxed">
                {item.category}
              </p>
            </div>

            <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-white/70 group-hover:text-white">
              <span>View live project</span>
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
