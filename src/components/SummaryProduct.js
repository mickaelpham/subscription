import React from "react";
import Price from "./Price";
import "./SummaryProduct.css";

const SummaryProduct = props => {
  const { summary } = props;
  return (
    <div className="columns summary-product">
      <div className="column">
        {summary.name} ({summary.quantity})
      </div>
      <div className="column has-text-right is-one-third">
        <Price value={summary.price} />
      </div>
    </div>
  );
};

export default SummaryProduct;
