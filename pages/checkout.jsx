import React from "react";
import { Navbar } from "../components/Navbar";

// import { Container } from './styles';

function Checkout() {
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
            <h1 className="text-3xl border-b pb-4">Seu Carrinho</h1>
          </div>
        </div>

        {/* left */}
        <div></div>
      </main>
    </div>
  );
}

export default Checkout;
