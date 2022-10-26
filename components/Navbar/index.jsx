import React from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ArrowDownCircleIcon,
} from "@heroicons/react/24/solid";
import { signIn, signOut, useSession } from "next-auth/react";

export const Navbar = () => {
  return (
    <header>
      <div className="h-16 flex items-center bg-amazon_blue grow p-1 py-2">
        {/* TOP NAV */}
        <div className="mx-3 flex items-center grow sm:grow-0 space-x-6">
          <img
            className="h-40 w-40 object-contain cursor-pointer"
            src="https://www.pentalic.com/wp-content/uploads/2018/12/Amazon-logo-white-small.png"
            alt=""
          />
        </div>
        {/* SEARCH */}
        <div className="hidden sm:flex items-center h-10 rounded-md grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 grow shrink rounded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>
        {/* RIGHT*/}
        <div className="text-white flex items-center text-xs md:text-sm space-x-6 mx-6 whitespace-nowrap">
          <div onClick={signIn} className="hover:underline cursor-pointer">
            <p>Olá, Carlos Henrique</p>
            <p className="font-bold">Contas & Listas</p>
          </div>

          <div className="hover:underline cursor-pointer">
            <p>Devoluções</p>
            <p className="font-bold">& Pedidos</p>
          </div>

          <div className="hover:underline cursor-pointer relative flex items-center">
            <span className="absolute text-center top-0 right-0 md:right-12 h-4 w-4 bg-yellow-400 font-bold rounded-full text-black">
              0
            </span>

            <ShoppingCartIcon className="h-10" />
            <p className="font-bold hidden md:inline mt-2">Carrinho</p>
          </div>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div className="flex items-center space-x-5 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="hover:underline cursor-pointer flex items-center">
          <ArrowDownCircleIcon className="h-6 mr-1" />
          All
        </p>
        <p className="hover:underline cursor-pointer">Venda na Amazon</p>
        <p className="hover:underline cursor-pointer">Mais vendidos</p>
        <p className="hover:underline cursor-pointer">Ofertas do Dia</p>
        <p className="hover:underline cursor-pointer hidden lg:inline-flex">
          Atendimento ao cliente
        </p>
        <p className="hover:underline cursor-pointer hidden lg:inline-flex">
          Prime Video
        </p>
        <p className="hover:underline cursor-pointer hidden lg:inline-flex">
          Música
        </p>
        <p className="hover:underline cursor-pointer hidden lg:inline-flex">
          Livros
        </p>
      </div>
    </header>
  );
};
