import React from "react";
import ProductCard from "./ProductCard";

const ProductList = props => {
  const products = props.products.map(product => {
    return <ProductCard product={product} key={product.id} />;
  });

  return <div className="section">{products}</div>;
};

export default ProductList;
