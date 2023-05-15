import classes from "./BoxsGrid.module.scss";
import { HomeBoxData } from "./HomeBoxData";
import whiteArrow from "../../assets/arrow-white.svg";

const BoxsGrid = function () {
  return (
    <section className={classes.boxs}>
      <div className={classes.boxs__container}>
        {HomeBoxData.map((data) => (
          <article>
            <img src={data.img} alt={data.title} />
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
