import React from "react";
// COMPONENTS
import { Navbar } from "../components/Navbar";
import { Banner } from "../components/Banner";
import { ProductFeed } from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main className="max-w-8xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const data = await fetch("https://fakestoreapi.com/products");
  const products = await data.json();

  return {
    props: {
      products,
    },
  };
}
