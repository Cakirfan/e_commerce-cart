import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../assets/knospe-logo.png";

const Navbar = ({cart}) => {
  return (
      <div className="h-24 w-3/4 bg-red-500 rounded-md mb-10 flex items-center justify-between p-9 shadow-2xl">
        <img
          src={logo}
          alt=""
          width={100}
          className="rounded-full p-3 cursor-pointer"
        />
        <div className="flex gap-2 items-center bg-red-50 text-red-400 px-3 py-1 rounded">
          <AiOutlineShoppingCart className="text-4xl font-semibold" />
          <div className="h-6 w-6 flex justify-center leading-6 ml-2 bg-red-300 text-zinc-50 rounded-full">
            {cart.length}
          </div>
        </div>
      </div>
  );
}

export default Navbar
