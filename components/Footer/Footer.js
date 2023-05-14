import classes from "./Footer.module.scss";
import logo from "../../assets/logo-white.svg";
import whiteArrow from "../../assets/arrow-white.svg";
import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
  FaPinterestSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = function () {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__wrapper}>
        <div className={classes.footer__logo}>
          <a href="#">
            <img src={logo} alt="Logo" />
          </a>
        </div>

        <ul className={classes.footer__socials}>
          <li>
            <a href="#">
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaYoutubeSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPinterestSquare />
            </a>
          </li>
          <li>
            <a href="#">
              <FaInstagramSquare />
            </a>
          </li>
        </ul>

        <ul className={classes.footer__sites}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">stories</a>
          </li>
          <li>
            <a href="#">features</a>
          </li>
          <li>
            <a href="#">pricing</a>
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

        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
