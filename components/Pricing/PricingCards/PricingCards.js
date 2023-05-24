import { useState } from "react";
import ReactSwitch from "react-switch";
import classes from "./PricingCards.module.scss";

const PricingCards = function () {
  const [checked, setChecked] = useState(false);

  const handleChange = (val) => {
    setChecked(val);
  };

  return (
    <section className={classes.card}>
      <div className={classes.card__toggle}>
        <span className={classes[checked ? "card__toggle--black" : ""]}>
          Monthly
        </span>
        <ReactSwitch
          checked={checked}
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#bbb"
          onColor="#000"
          offHandleColor="#333"
          onChange={handleChange}
        />
        <span className={classes[!checked ? "card__toggle--black" : ""]}>
          Yearly
        </span>
      </div>

      <div className={classes.card__white}>
        <h3>Basic</h3>
        <p>
          Includes basic usage of our platform. Recommended for new and aspiring
          photographers.
        </p>

        <div className={classes["card__white--pricing"]}>
          <span className={classes["card__white--price"]}>
            {checked ? "$190.00" : "$19.00"}
          </span>
          <span className={classes["card__white--annum"]}>per month</span>
        </div>

        <button>pick plan</button>
      </div>

      <div className={classes.card__black}>
        <h3>Pro</h3>
        <p>
          More advanced features available. Recommended for photography veterans
          and professionals.
        </p>
        <div className={classes["card__white--pricing"]}>
          <span className={classes["card__white--price"]}>
            {checked ? "$390.00" : "$39.00"}
          </span>
          <span className={classes["card__white--annum"]}>per month</span>
        </div>
        <button>pick plan</button>
      </div>

      <div className={classes.card__white}>
        <h3>Business</h3>
        <p>
          Additional features available such as more detailed metrics.
          Recommended for business owners
        </p>
        <div className={classes["card__white--pricing"]}>
          <span className={classes["card__white--price"]}>
            {checked ? "$990.00" : "$99.00"}
          </span>
          <span className={classes["card__white--annum"]}>per month</span>
        </div>
        <button>pick plan</button>
      </div>
    </section>
  );
};

export default PricingCards;
