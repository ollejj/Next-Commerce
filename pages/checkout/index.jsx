import { CheckoutItem } from '../../components/CheckoutItem';
import { CheckoutForm } from '../../components/CheckoutForm';
import { ProductCard } from '../../components/ProductCard';
import { useCartContext } from '../../contexts/CartContext';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useQuery, useMutation } from 'react-query';
import Link from 'next/link';
import { convertToDecimal } from '../../util/utils';

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
  }, [items]);

  const promise = loadStripe(
    'pk_test_51LGnaCGFsZQGuxun5ZdemHVyeRb3G108OgoZjkyyGYfS8IX7mPZYiugreAHhpmt6LGaMn4Ih9HJeeiBpWl9XdDMX00YSIEMkTX'
  );

  return (
    <div className='w-3/4 grid grid-cols-1 xl:grid-cols-1 gap-8 m-auto py-8'>
      {items.length > 0 ? (
        <Elements stripe={promise}>
          <CheckoutForm cost={cost} />
        </Elements>
      ) : (
        <Link href='/'>Your shopping cart is Empty</Link>
      )}

      {grouped.map((e) => {
        return <CheckoutItem key={e[0].id} qty={e.length} {...e[0]} />;
      })}
    </div>
  );
};

export default Checkout;
