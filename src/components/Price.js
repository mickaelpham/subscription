// eslint-disable-next-line
import React from "react";

const Price = props => {
  const { showFree, value, billingPeriod } = props;

  if (showFree && value === 0) {
    return <>Free</>;
  }

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(props.value);

  if (billingPeriod) {
    return (
      <>
        {formattedPrice} / {billingPeriod}
      </>
    );
  }

  return <>{formattedPrice}</>;
};

Price.defaultProps = {
  showFree: false,
  value: 0,
  billingPeriod: null
};

export default Price;
