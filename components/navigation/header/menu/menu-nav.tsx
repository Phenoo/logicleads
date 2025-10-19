import "./menu.scss";
import { useContext } from "react";
import { useLenis } from "@studio-freight/react-lenis";
import { NavigationContext } from "../../navigation";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYinYang,
} from "react-icons/fa6";
import { Mail } from "lucide-react";

type NavItemProps = {
  index: number;
  name: string;
  href: string;
  soon: boolean;
};

const ITEMS_OLD = [
  { name: "Home", href: "#", soon: false },
  { name: "Alpha", href: "#", soon: true },
  { name: "Eta", href: "#", soon: true },
  { name: "Theta", href: "#", soon: true },
  { name: "Order now", href: "#", soon: true },
  { name: "Partnership", href: "#", soon: true },
];

const ITEMS = [
  { name: "Home", href: "/", soon: false },
  { name: "About us", href: "/about", soon: false },
  { name: "Projects", href: "/portfolio", soon: false },
  { name: "Services", href: "/services", soon: false },
  { name: "Contact Us", href: "/contact", soon: false },
  // { name: "FAQ", href: "#faq", soon: false },
];

function MenuNavItem({ index, name, href, soon }: NavItemProps) {
  const lenis = useLenis();
  const { setIsMenuOpened } = useContext(NavigationContext);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setIsMenuOpened(false);
    // lenis.isStopped = false;
    // lenis.scrollTo(href, { offset: 100 });
  };

  return (
    <li onClick={handleClick} className="menu__nav-item">
      <small className="menu__nav-item-num">{"0" + index}</small>
      <Link
        href={href}
        tabIndex={soon ? -1 : 0}
        className={soon ? "menu__nav-item-text soon" : "menu__nav-item-text"}
      >
        {name}
      </Link>
    </li>
  );
}

export default function MenuNav() {
  return (
    <nav className="menu__nav">
      <menu className="menu__nav-list">
        {ITEMS.map((el, i) => (
          <MenuNavItem
            key={el.name + i}
            index={i + 1}
            name={el.name}
            href={el.href}
            soon={el.soon}
          />
        ))}
      </menu>
      <div></div>
      <div className="mt-8 flex gap-4 items-center">
        <span className="p-4 border border-white cursor-pointer rounded-md  text-white transition-all">
          <a href="mailto:bylogicleads@gmail.com">
            <Mail color="white" className="text-white w-4 h-4" />
          </a>
        </span>
        <span className="p-4 border border-white cursor-pointer rounded-md  text-white bg- transition-all">
          <a
            href="https://www.facebook.com/profile.php?id=100068749546786&mibextid=LQQJ4d"
            target="_blank"
          >
            <FaFacebook color="white" className="text-white" />
          </a>
        </span>
        <span className="p-4 border border-white cursor-pointer rounded-md  text-white bg- transition-all">
          <a href="https://www.instagram.com/logicleads?igsh=NzhnOGlleWhwNjQ3&utm_source=qr">
            <FaInstagram color="white" className="text-white" />
          </a>
        </span>

        <span className="p-4 border border-white cursor-pointer rounded-md  text-white transition-all">
          <a href="https://www.linkedin.com/company/logicleads/">
            <FaLinkedin color="white" className="text-white" />
          </a>
        </span>
      </div>
    </nav>
  );
}
