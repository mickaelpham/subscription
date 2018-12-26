import React from "react";
import ProductList from "./ProductList";
import products from "../data/products.json";
import SummaryPane from "./SummaryPane";

class App extends React.Component {
  state = { products: [], summaries: [] };

  componentDidMount() {
    setTimeout(this.setProducts, 1000);
  }

  setProducts = () => {
    this.setState({ products });
  };

  onProductChange = summary => {
    const { summaries } = this.state;

    const index = summaries.findIndex(
      current => current.productId === summary.productId
    );

    if (index === -1) {
      summaries.push(summary);
    } else {
      summaries[index] = summary;
    }

    this.setState({ summaries });
  };

  renderProducts() {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <div className="section">
          <div className="box">Loading...</div>
        </div>
      );
    }

    return (
      <ProductList
        billingPeriod="month"
        products={this.state.products}
        onProductChange={this.onProductChange}
      />
    );
  }

  render() {
    return (
      <div className="container">
        <div className="columns">
          <div className="column">{this.renderProducts()}</div>
          <div className="column is-one-third">
            <SummaryPane summaries={this.state.summaries} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
