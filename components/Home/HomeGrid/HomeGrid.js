import classes from "./HomeGrid.module.scss";
import { HomeGridData } from "./HomeGridData";
import whiteArrow from "../../../assets/shared/arrow-white.svg";

const HomeGrid = function () {
  return (
    <section className={classes.boxs}>
      <div className={classes.boxs__container}>
        {HomeGridData.map((data) => (
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

export default HomeGrid;
