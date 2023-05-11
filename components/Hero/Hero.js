import mobile from "../../assets/create-and-share-mobile.jpg";
import classes from "./Hero.module.scss";
import arrowR from "../../assets/arrow-white.svg";

const Hero = function () {
  return (
    <section className={classes.hero}>
      <img src={mobile} alt="Photographer" />

      <div className={classes.hero__content}>
        <h1>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
        <p>
          Photosnap is a platform for photographers and visual storytellers. We
          make it easy to share photos, tell stories and connect with others.
        </p>
        <a href="#">
          get an invite
          <img src={arrowR} alt="" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
