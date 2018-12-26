import React from "react";

const Price = props => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.value);

  return <>{formattedPrice}</>;
};

export default Price;
