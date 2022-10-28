import Image from "next/image";
import { Cart } from "../icons/cart";
import { useEffect, useState } from "react";
import { IconContainer } from "./IconContainer";
import { useCartContext } from "../contexts/CartContext";
import Link from "next/link";

export const Header = () => {
  const { items } = useCartContext();

  return (
    <header className="bg-feldgrau h-32 w-screen flex flex-row items-center justify-between px-24 text-white">
      <div>
        <h1 className="text-5xl">Next Commerce</h1>
      </div>
      <Link
        href="/checkout"
        className="h-20 px-4 min-w-12 flex flex-row items-center gap-8 hover:shadow-inner-custom"
      >
        <p>Items in cart: {items.length}</p>
        <Cart />
      </Link>
    </header>
  );
};
