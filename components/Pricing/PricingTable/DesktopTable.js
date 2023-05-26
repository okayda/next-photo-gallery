import React from "react";
import classes from "./DesktopTable.module.scss";
import { PricingTableData } from "./PricingTableData";

const DesktopTable = function () {
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>the features</th>
          <th>basic</th>
          <th>pro</th>
          <th>business</th>
        </tr>
      </thead>
      <tbody>
        {PricingTableData.map((data, i) => (
          <React.Fragment key={i}>
            <tr>
              <th>{data.heading}</th>
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

export default DesktopTable;
