import "./section-faq.scss";
import Image from "next/image";
import SectionFaqList from "./section-faq-list";

export default function SectionFaq() {
  return (
    <section id="faq" className="section-faq py-16">
      <div className="container section-faq__container">
        <div className="section-faq__heading-wrapper">
          <div className=" flex gap-4 items-center justify-center ">
            <div className="w-10 h-0.5 bg-primary" />
            <small className="section-faq__top-caption">Faq</small>
          </div>
          {/* <small className="section-faq__top-caption">Faq</small> */}
          <h2 className="section-faq__heading">Frequently Asked Questions</h2>
        </div>
        <SectionFaqList />
        <div className="section-faq__image-wrapper">
          <Image
            src={
              "https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="faq"
            fill={true}
            sizes="30vw"
          />
        </div>
      </div>
    </section>
  );
}
