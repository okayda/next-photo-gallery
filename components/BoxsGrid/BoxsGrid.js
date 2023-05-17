import classes from "./BoxsGrid.module.scss";
import { HomeBoxData } from "./HomeBoxData";
import whiteArrow from "../../assets/arrow-white.svg";

const BoxsGrid = function () {
  return (
    <section className={classes.boxs}>
      <div className={classes.boxs__container}>
        {HomeBoxData.map((data) => (
          <article>
            <picture>
              <source srcSet={data.imgDesktop} media="(min-width: 1024px)" />

              <img src={data.imgMobile} alt={data.title} />
            </picture>

            <div className={classes.boxs__wrapper}>
              <div className={classes.boxs__contents}>
                <a href="#">
                  <h3>{data.title}</h3>
                  <span>{data.author}</span>
                  <div>
                    <span>read story</span>
                    <img src={whiteArrow} alt="" />
                  </div>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BoxsGrid;
