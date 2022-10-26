import React from "react";
import { Product } from "../Product";

export const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-96 mx-auto">
      {products.slice(0, 8).map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <img
        className="md:col-span-full w-full"
        src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg"
        alt=""
      />

      <div className="md:col-span-2">
        {products.slice(9, 10).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

      {products.slice(10, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
