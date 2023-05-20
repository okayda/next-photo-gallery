import classes from "./StoriesGrid.module.scss";
import { StoriesGridData } from "./StoriesGridData";
import whiteArrow from "../../../assets/shared/arrow-white.svg";

const StoriesGrid = function () {
  return (
    <section className={classes.grid}>
      <div className={classes.grid__container}>
        {StoriesGridData.map((data) => (
          <article>
            <picture>
              <source srcSet={data.imgDesktop} media="(min-width: 1024px)" />

              <img src={data.imgMobile} alt={data.title} />
            </picture>

            <div className={classes.grid__wrapper}>
              <div className={classes.grid__contents}>
                <a href="#">
                  <span className={classes["grid__contents--date"]}>
                    {data.date}
                  </span>
                  <h3>{data.title}</h3>
                  <span className={classes["grid__contents--author"]}>
                    {data.author}
                  </span>
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

export default StoriesGrid;
