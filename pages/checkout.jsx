import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

// COMPONENTS
import { Navbar } from "../components/Navbar";
import { CheckoutProduct } from "../components/CheckoutProduct";

// import { Container } from './styles';

function Checkout() {
  const items = useSelector(selectItems);
  return (
    <div className="bg-gray-100">
      <Navbar />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        {/* left */}
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://www.torredevigilancia.com/wp-content/uploads/2017/08/19143746_1488238234601936_3535914536963754739_o1-1-810x219.jpg"
            className="object-contain"
          />

          <div className="flex flex-column p-5 mt-3 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length == 0 ? "Seu carrinho está vazio!" : "Seu carrinho:"}
            </h1>
          </div>
          {items.map((item, i) => (
            <CheckoutProduct key={i} product={item} />
          ))}
        </div>

        {/* left */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
