import classes from "./Banner.module.scss";
import imgMobile from "../../assets/shared/bg-beta-mobile.jpg";
import imgTablet from "../../assets/shared/bg-beta-tablet.jpg";
import imgDesktop from "../../assets/shared/bg-beta.jpg";
import whiteArrow from "../../assets/shared/arrow-white.svg";

const Banner = function () {
  return (
    <section className={classes.Banner}>
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={imgTablet} media="(min-width: 500px)" />

        <img src={imgMobile} alt="Stone Cave" />
      </picture>

      <div className={classes.Banner__wrapper}>
        <h2>we're in beta. get your invite today!</h2>

        <div>
          <a href="#">
            get an invite
            <img src={whiteArrow} alt="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
