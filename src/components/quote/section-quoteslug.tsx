import "./section-quote.scss";
import Image from "next/image";
import Icon_quote from "../icons/icon-quote";
import { Star } from "lucide-react";
import { FaStar } from "react-icons/fa6";

export default function SectionQuoteSlug({ data, reviewer }: any) {
  return (
    <section className="section-quote py-20 bg-[#ddd] rounded-3xl flex justify-center items-center">
      <div className="container section-quote__container">
        <div className="section-quote__top-line">
          <div className="section-quote__quote-icon">
            <svg
              width="3rem"
              height="3rem"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 24C20 29 18 32 12 35M20 24H10C9.46957 24 8.96086 23.7893 8.58579 23.4142C8.21071 23.0391 8 22.5304 8 22V15C8 14.4696 8.21071 13.9609 8.58579 13.5858C8.96086 13.2107 9.46957 13 10 13H18C18.5304 13 19.0391 13.2107 19.4142 13.5858C19.7893 13.9609 20 14.4696 20 15V24ZM40 24C40 29 38 32 32 35M40 24H30C29.4696 24 28.9609 23.7893 28.5858 23.4142C28.2107 23.0391 28 22.5304 28 22V15C28 14.4696 28.2107 13.9609 28.5858 13.5858C28.9609 13.2107 29.4696 13 30 13H38C38.5304 13 39.0391 13.2107 39.4142 13.5858C39.7893 13.9609 40 14.4696 40 15V24Z"
                stroke="#111"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>{" "}
          </div>
          <div className="flex gap-1 items-center justify-center">
            <FaStar className="text-orange-600 h-6 w-6" />
            <FaStar className="text-orange-600 h-6 w-6" />
            <FaStar className="text-orange-600 h-6 w-6" />
            <FaStar className="text-orange-600 h-6 w-6" />
            <FaStar className="text-orange-600 h-6 w-6" />
          </div>
        </div>
        <ul className="section-quote__list">
          <li className="section-quote-item">
            <q className="section-quote-quote-text">{data}</q>
            <div className="section-quote__person">
              <div className="section-quote__person-text">
                <strong className="section-quote__person-name">
                  {reviewer}
                </strong>
                <small className="section-quote__person-position">Client</small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
