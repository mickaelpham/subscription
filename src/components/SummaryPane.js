import React from "react";
import SummaryProduct from "./SummaryProduct";
import Price from "./Price";

class SummaryPane extends React.Component {
  render() {
    const summaries = this.props.summaries.map(summary => {
      return <SummaryProduct summary={summary} key={summary.productId} />;
    });

    const totalPrice = this.props.summaries.reduce((acc, summary) => {
      return acc + summary.price;
    }, 0);

    return (
      <div className="section">
        <div className="box">
          <h4 className="title is-4">Summary</h4>
          {summaries}
          <div className="columns has-text-weight-bold">
            <div className="column">Total</div>
            <div className="column has-text-right">
              <Price value={totalPrice} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SummaryPane.defaultProps = {
  summaries: []
};

export default SummaryPane;
