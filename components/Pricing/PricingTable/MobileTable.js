import React from "react";
import classes from "./MobileTable.module.scss";
import { PricingTableData } from "./PricingTableData";

const MobileTable = function () {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th scope="col" colSpan="3">
            the features
          </th>
        </tr>
      </thead>
      <tbody>
        {PricingTableData.map((data, i) => (
          <React.Fragment key={i}>
            <tr className={classes.heading}>
              <th scope="col" colSpan="3">
                {data.heading}
              </th>
            </tr>
            <tr className={classes.title}>
              <th scope="col">{data.title.basic}</th>
              <th scope="col">{data.title.pro}</th>
              <th scope="col">{data.title.business}</th>
            </tr>
            <tr className={classes.check}>
              <td>{data.coverage.basic || "\u00A0"}</td>
              <td>{data.coverage.pro || "\u00A0"}</td>
              <td>{data.coverage.business || "\u00A0"}</td>
            </tr>
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default MobileTable;
