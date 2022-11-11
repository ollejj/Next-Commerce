import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [isPayed, setIsPayed] = useState(false);

  const cost = items.reduce((acc, curr) => {
    if (curr.discount) return (acc += curr.price - curr.discount);
    return (acc += curr.price);
  }, 0);

  return (
    <CartContext.Provider
      value={{ items, setItems, cost, isPayed, setIsPayed }}
    >
      {children}
    </CartContext.Provider>
  );
};
