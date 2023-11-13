import React from "react";
import ProductCard from "./ProductCard";
const ProductList = ({ myProducts }) => {
  return (
    <div>
      {myProducts.map((el) => {
        return <ProductCard productInfo={el} />;
      })}
    </div>
  );
};

export default ProductList;
