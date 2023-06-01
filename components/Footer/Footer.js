import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./Footer.module.scss";
import logo from "../../assets/shared/logo-white.svg";
import whiteArrow from "../../assets/shared/arrow-white.svg";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = function () {
  const pathname = usePathname();

  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <div className={classes.footer__logo}>
          <Link href="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <ul className={classes.footer__socials}>
          <li>
            <Link href="#">
              <FaFacebookSquare />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaYoutubeSquare />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaTwitterSquare />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaPinterestSquare />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaInstagramSquare />
            </Link>
          </li>
        </ul>

        <ul className={classes.footer__sites}>
          <li>
            <Link
              href="/"
              className={
                pathname === "/" ? classes["footer__sites--active"] : ""
              }
            >
              home
            </Link>
          </li>
          <li>
            <Link
              href="/stories"
              className={
                pathname === "/stories" ? classes["footer__sites--active"] : ""
              }
            >
              stories
            </Link>
          </li>
          <li>
            <a
              href="/features"
              className={
                pathname === "/features" ? classes["footer__sites--active"] : ""
              }
            >
              features
            </a>
          </li>
          <li>
            <a
              href="/pricing"
              className={
                pathname === "/pricing" ? classes["footer__sites--active"] : ""
              }
            >
              pricing
            </a>
          </li>
        </ul>

        <div className={classes.footer__invite}>
          <div>
            <a href="#">
              get an invite
              <img src={whiteArrow} alt="" />
            </a>
          </div>
        </div>

        <p>2023 Created by Jhon Queñano</p>
      </div>
    </footer>
  );
};
export default Footer;
