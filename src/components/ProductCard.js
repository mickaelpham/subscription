import React from "react";
import Price from "./Price";
import plansData from "../data/plans.json";
import "./ProductCard.css";

class ProductCard extends React.Component {
  state = { quantity: 1, plans: [], selectedPlan: null, price: null };

  componentDidMount() {
    const { product } = this.props;
    const plans = plansData.filter(plan => plan.product_id === product.id);
    const selectedPlan = plans[0];
    const price = this.calculatePrice(this.state.quantity, selectedPlan);

    this.setState({ plans, selectedPlan, price }, this.onChange);
  }

  onQuantityChange = event => {
    const quantity = event.target.value;

    if (quantity <= 0) {
      return;
    }

    const { selectedPlan } = this.state;
    const price = this.calculatePrice(quantity, selectedPlan);

    this.setState({ quantity, price }, this.onChange);
  };

  onPlanChange = event => {
    const planId = parseInt(event.target.value);
    const selectedPlan = plansData.find(plan => plan.id === planId);
    const price = this.calculatePrice(this.state.quantity, selectedPlan);

    this.setState({ selectedPlan, price }, this.onChange);
  };

  onChange() {
    const { quantity, selectedPlan, price } = this.state;
    const { product, onChange } = this.props;
    const productId = product.id;
    const name = `${product.name} ${selectedPlan.name}`;

    onChange({ name, quantity, price, productId });
  }

  calculatePrice = (quantity, selectedPlan) => {
    return quantity * selectedPlan.pricing[this.props.billingPeriod];
  };

  render() {
    const { product } = this.props;

    const plans = this.state.plans.map(plan => (
      <option key={plan.id} value={plan.id}>
        {plan.name}
      </option>
    ));

    return (
      <div className="box product-card">
        <div className="columns is-vcentered">
          <div className="column">
            <h4 className="title is-4">{product.name}</h4>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Plan</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select onChange={this.onPlanChange}>{plans}</select>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="field">
              <label className="label">Quantity</label>
              <div className="control">
                <input
                  className="input"
                  type="number"
                  value={this.state.quantity}
                  onChange={this.onQuantityChange}
                />
              </div>
            </div>
          </div>
          <div className="column price">
            <Price value={this.state.price} showFree={true} />
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
