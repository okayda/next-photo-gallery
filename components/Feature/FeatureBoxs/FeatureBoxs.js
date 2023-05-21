import classes from "./FeatureBoxs.module.scss";
import { FeatureBoxsData } from "./FeatureBoxsData";

const FeatureBoxs = function () {
  return (
    <section className={classes.feature}>
      {FeatureBoxsData.map((data) => (
        <div>
          <img src={data.img} alt="" />
          <h3>{data.title}</h3>
          <p>{data.description}</p>
        </div>
      ))}
    </section>
  );
};

export default FeatureBoxs;
