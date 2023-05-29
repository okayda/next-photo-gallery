import classes from "./PricingTable.module.scss";
import MobileTable from "./MobileTable";
import DesktopTable from "./DesktopTable";

const PricingTable = function () {
  return (
    <section className={classes.table}>
      <h2>compare</h2>

      <MobileTable />
      <DesktopTable />
    </section>
  );
};

export default PricingTable;
