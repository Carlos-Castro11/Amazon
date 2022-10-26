import { useState, React } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import CurrencyFormat from "react-currency-format";

const MAX_RATING = 5;
const MIN_RATING = 1;

export const Product = ({ product }) => {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10 rounded-md shadow-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-800">
        {product.category}
      </p>

      <img
        className="h-52 w-52 object-contain mx-auto"
        src={product.image}
        alt=""
      />

      <h4 className="my-3 line-clamp-1">{product.title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{product.description}</p>

      <div className="mb-3">
        <CurrencyFormat
          value={product.price}
          displayType={"text"}
          prefix={"R$"}
        />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 absolute top-0 left-0">
          <img
            className="w-12"
            src="https://download.logo.wine/logo/Amazon_Prime/Amazon_Prime-Logo.wine.png"
            alt=""
          />
          <p className="text-xs text-gray-500 mb-2">Frete Grátis</p>
        </div>
      )}

      <button className="font-bold p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border-yellow-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 active:to-yellow-400">
        Adicionar ao carrinho
      </button>
    </div>
  );
};
