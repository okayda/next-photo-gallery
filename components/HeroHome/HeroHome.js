import mobile from "../../assets/create-and-share-mobile.jpg";
import classes from "./HeroHome.module.scss";
import arrowR from "../../assets/arrow-white.svg";
import { HomeData } from "./homeData";

const HeroHome = function () {
  return (
    <>
      {HomeData.map((data, i) => (
        <section key={i} className={classes.hero}>
          <picture>
            <source srcSet={data.imgTablet} media="(min-width: 700px)" />

            <img src={data.imgMobile} alt={data.alt} />
          </picture>

          <div className={classes.hero__content}>
            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <div>
              <a href="#">
                {data.link}
                <img src={data.arrow} alt="" />
              </a>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default HeroHome;
