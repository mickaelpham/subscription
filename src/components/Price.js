// eslint-disable-next-line
import React from "react";

const Price = props => {
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.value);

  const showFree = props.showFree && props.value === 0;

  return showFree ? <>Free</> : <>{formattedPrice}</>;
};

Price.defaultProps = {
  showFree: false,
  value: 0
};

export default Price;
