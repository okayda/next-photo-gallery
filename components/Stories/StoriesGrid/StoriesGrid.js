import Link from "next/link";
import classes from "./StoriesGrid.module.scss";
import { StoriesGridData } from "./StoriesGridData";
import whiteArrow from "../../../assets/shared/arrow-white.svg";

const StoriesGrid = function () {
  return (
    <section className={classes.grid}>
      <div className={classes.grid__container}>
        {StoriesGridData.map((data, i) => (
          <article key={i}>
            <Link href="#">
              <picture>
                <source srcSet={data.imgDesktop} media="(min-width: 1024px)" />

                <img
                  src={data.imgMobile}
                  alt={data.title}
                  loading="lazy"
                  width="400"
                  height="400"
                />
              </picture>

              <div className={classes.grid__wrapper}>
                <div className={classes.grid__contents}>
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
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoriesGrid;
