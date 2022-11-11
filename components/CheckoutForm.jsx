import React, { useState, useEffect } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from '@stripe/react-stripe-js';
import { useQuery, useMutation } from 'react-query';
import { convertToDecimal } from '../util/utils';
import { useCartContext } from '../contexts/CartContext';

export const CheckoutForm = ({ cost }) => {
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const stripe = useStripe();
  const elements = useElements();
  const { setItems, isPayed, setIsPayed } = useCartContext();

  const { mutate, isLoading } = useMutation(
    async (cost) => {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cost }),
      });
      return res.json();
    },
    {
      onSuccess: (data) => {
        setClientSecret(data.clientSecret);
      },
    }
  );

  useEffect(() => {
    setIsPayed(false);
    mutate(cost);
  }, [mutate, cost, setIsPayed]);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setItems([]);
      setIsPayed(true);
      setError(null);
      setProcessing(false);
    }
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      {/* <CardElement id='card-element' options={{}} onChange={handleChange} /> */}
      <CardElement />
      <button
        className='mt-auto ml-auto px-8 bg-oxley h-12 text-white font-bold'
        id='submit'
      >
        {processing ? (
          <p>Processing...</p>
        ) : (
          <p>Checkout {convertToDecimal(cost)}:-</p>
        )}
      </button>

      {error && (
        <div className='card-error' role='alert'>
          {error}
        </div>
      )}
    </form>
  );
};
