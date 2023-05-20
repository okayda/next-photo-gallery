import classes from "./StoriesHero.module.scss";

import imgMobile from "../../../assets/stories/moon-of-appalacia-mobile.jpg";
import imgTablet from "../../../assets/stories/moon-of-appalacia-tablet.jpg";
import imgDesktop from "../../../assets/stories/moon-of-appalacia.jpg";

import whiteArrow from "../../../assets/shared/arrow-white.svg";

const StoriesHero = function () {
  return (
    <section className={classes.stories}>
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={imgTablet} media="(min-width: 700px)" />

        <img src={imgMobile} alt="Mountain View" />
      </picture>

      <div className={classes.stories__wrapper}>
        <div className={classes.stories__content}>
          <div className={classes["stories__content--sub"]}>
            <span>last month's featured story</span>
          </div>
          <h2>hazy full moon of appalachia</h2>
          <div className={classes["stories__content--date"]}>
            <p>
              March 2nd 2020 <span>by John Appleseed</span>
            </p>
          </div>
          <p>
            The dissected plateau area, while not actually made up of geological
            mountains, is popularly called "mountains," especially in eastern
            Kentucky and West Virginia, and while the ridges are not high, the
            terrain is extremely rugged.
          </p>

          <div className={classes["stories__content--link"]}>
            <div>
              <a href="#">
                read the story <img src={whiteArrow} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesHero;
