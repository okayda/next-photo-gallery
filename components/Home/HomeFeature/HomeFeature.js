import classes from "./HomeFeature.module.scss";
import { HomeFeatureData } from "./HomeFeatureData";

const HomeFeature = function () {
  return (
    <section className={classes.feature}>
      {HomeFeatureData.map((data, i) => (
        <div key={i}>
          <img src={data.img} alt="" />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
};

export default HomeFeature;
