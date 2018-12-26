import React from "react";
import ProductList from "./ProductList";
import products from "../data/products.json";

class App extends React.Component {
  state = { products: [] };

  componentDidMount() {
    setTimeout(this.setProducts, 1000);
  }

  setProducts = () => {
    this.setState({ products });
  };

  renderContent() {
    const { products } = this.state;

    if (products.length === 0) {
      return <p className="section">Loading...</p>;
    }

    return <ProductList products={this.state.products} />;
  }

  render() {
    return <div className="container">{this.renderContent()}</div>;
  }
}

export default App;
