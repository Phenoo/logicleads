import "@/app/styles/text.scss";
import { FaStarOfLife } from "react-icons/fa6";
export default function TextSLider1() {
  return (
    <>
      <div className="bg-primary py-8 digital-solution testi-italic">
        <div className="mycustom-marque">
          <div className="scrolling-wrap">
            <div className="comm">
              <div className="cmn-textslide textitalick">
                Website Development
              </div>
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide text-custom-storke">
                App Development
              </div>
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide textitalick">Graphic Design</div>
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide text-custom-storke">
                Digital Marketing
              </div>
            </div>
            <div className="comm">
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide textitalick">Branding </div>
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide text-custom-storke">
                Website Development
              </div>
              <div className="cmn-textslide textitalick">UI/UX Design</div>
              <div>
                <FaStarOfLife
                  size={30}
                  className="text-black fill-black mx-4"
                />
              </div>
              <div className="cmn-textslide text-custom-storke">
                App Development
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
