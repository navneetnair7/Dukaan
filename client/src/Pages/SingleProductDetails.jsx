import React from "react";
import ProductDetails from "../Components/ProductDetails";

const SingleProductDetails = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-9">
        <ProductDetails />
      </div>
    </div>
  );
};

export default SingleProductDetails;
