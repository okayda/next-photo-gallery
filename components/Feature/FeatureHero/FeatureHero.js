import classes from "./FeatureHero.module.scss";

import imgMobile from "../../../assets/features/features-bg-mobile.jpg";
import imgTablet from "../../../assets/features/features-bg-tablet.jpg";
import imgDesktop from "../../../assets/features/features-bg.jpg";

const FeatureHero = function () {
  return (
    <section className={classes.hero}>
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={imgTablet} media="(min-width: 700px)" />

        <img src={imgMobile} alt="DLSR handed" />
      </picture>

      <div className={classes.hero__content}>
        <h2>features</h2>
        <p>
          We make sure all of our features are designed to be loved by every
          aspiring and even professional photograpers who wanted to share their
          stories.
        </p>
      </div>
    </section>
  );
};

export default FeatureHero;
