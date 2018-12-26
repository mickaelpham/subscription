import React from "react";
import ProductCard from "./ProductCard";

const ProductList = props => {
  const { billingCycle, onProductChange } = props;
  const products = props.products.map(product => {
    return (
      <ProductCard
        product={product}
        billingCycle={billingCycle}
        key={product.id}
        onChange={onProductChange}
      />
    );
  });

  return <div className="section">{products}</div>;
};

export default ProductList;
