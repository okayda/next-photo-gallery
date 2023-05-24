import classes from "./Pricing.module.scss";

import imgMobile from "../../../assets/pricing/pricing-bg-mobile.jpg";
import imgTablet from "../../../assets/pricing/pricing-bg-tablet.jpg";
import imgDesktop from "../../../assets/pricing/pricing-bg.jpg";

const PricingHero = function () {
  return (
    <section className={classes.pricing}>
      <picture>
        <source srcSet={imgDesktop} media="(min-width: 1024px)" />
        <source srcSet={imgTablet} media="(min-width: 700px)" />

        <img src={imgMobile} alt="DLSR women" />
      </picture>

      <div className={classes.pricing__content}>
        <h2>pricing</h2>
        <p>
          Create a your stories, Photosnap is a platform for photographers and
          visual storytellers. It’s the simple way to create and share your
          photos.
        </p>
      </div>
    </section>
  );
};

export default PricingHero;
