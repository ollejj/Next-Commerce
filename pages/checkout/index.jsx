import { CheckoutItem } from "../../components/CheckoutItem";
import { ProductCard } from "../../components/ProductCard";
import { useCartContext } from "../../contexts/CartContext";
import { useState, useEffect } from "react";

const Checkout = () => {
  const { items, cost } = useCartContext();
  const [grouped, setGrouped] = useState([]);

  useEffect(() => {
    const group = items.reduce((acc, curr) => {
      if (acc[curr.id]) acc[curr.id].push(curr);
      else acc[curr.id] = [curr];
      return acc;
    }, []);
    setGrouped(group);
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-1 xl:grid-cols-1 gap-8 m-auto py-8">
      {items.length > 0 && (
        <button className="mt-auto ml-auto px-8 bg-oxley h-12 text-white font-bold">
          Checkout {cost}:-
        </button>
      )}

      {grouped.map((e) => {
        return <CheckoutItem key={e[0].id} qty={e.length} {...e[0]} />;
      })}
    </div>
  );
};

export default Checkout;
