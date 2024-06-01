import "./section-quote.scss";
import Image from "next/image";
import Icon_quote from "../icons/icon-quote";

export default function SectionQuote() {
  return (
    <section className="section-quote pb-20 min-h-screen flex justify-center items-center">
      <div className="container section-quote__container">
        <div className="section-quote__top-line">
          <div className="section-quote__quote-icon">
            <Icon_quote />
          </div>
          <small className="section-quote__top-caption">
            fulfil your dreams
          </small>
        </div>
        <ul className="section-quote__list">
          <li className="section-quote-item">
            <q className="section-quote-quote-text">
              People can be really smart or have skills that are directly
              applicable, but if they don&apos;t really believe in it, then they
              are not going to really work hard
            </q>
            <div className="section-quote__person">
              <div className="section-quote__person-image">
                <Image
                  src={"/mark.jpeg"}
                  alt={"Witold Borek"}
                  fill={true}
                  sizes="(max-width: 768px) 200px, (max-width: 1200px) 400px"
                />
              </div>
              <div className="section-quote__person-text">
                <strong className="section-quote__person-name">
                  Mark Zuckerberg
                </strong>
                <small className="section-quote__person-position">
                  Chief Executive Officer, <br /> founder of Meta
                </small>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
