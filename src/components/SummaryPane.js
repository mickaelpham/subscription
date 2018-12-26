import React from "react";
import SummaryProduct from "./SummaryProduct";
import Price from "./Price";

class SummaryPane extends React.Component {
  state = { billingPeriod: this.props.billingPeriod };

  onBillingPeriodChange = e => {
    const billingPeriod = e.target.value;
    this.setState({ billingPeriod });

    this.props.onChange(billingPeriod);
  };

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

          <div className="field">
            <div className="columns is-vcentered">
              <div className="column">
                <label className="label">Billing Period</label>
              </div>
              <div className="column">
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      onChange={this.onBillingPeriodChange}
                      value={this.state.billingPeriod}
                    >
                      <option value="month">Month</option>
                      <option value="year">Year</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {summaries}
          <div className="columns has-text-weight-bold">
            <div className="column">Total</div>
            <div className="column has-text-right">
              <Price
                value={totalPrice}
                billingPeriod={this.state.billingPeriod}
              />
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
