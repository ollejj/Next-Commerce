import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <CartContext.Provider value={{ items, setItems }}>
      {children}
    </CartContext.Provider>
  );
};
