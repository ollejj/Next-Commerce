import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useCartContext } from "../contexts/CartContext";
import { useQuery, useMutation } from "react-query";
import { convertToDecimal } from "../util/utils";

export default function CheckoutForm() {
  const [succeeded, setSucceeded] = useState(false);
  const [payError, setPayError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  const { cost, items } = useCartContext();

  const stripe = useStripe();
  const elements = useElements();

  const { mutate, isLoading } = useMutation(
    async (cost) => {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    mutate(cost);
  }, []);

  const handleChange = async (e) => {
    setDisabled(e.empty);
    setPayError(e.error ? e.error.message : "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setPayError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setPayError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center">
      <CardElement onChange={handleChange} className="w-full border-2 h-12" />
      {items.length > 0 && (
        <>
          <button className="mt-auto w-60 ml-auto px-8 bg-oxley h-12 text-white font-bold">
            Checkout {convertToDecimal(cost)}:-
          </button>
        </>
      )}

      {payError && (
        <div className="card-error" role="alert">
          {payError}
        </div>
      )}

      <p className={succeeded ? "result-message" : "result-message hidden"}>
        Payment succeeded!
      </p>
    </form>
  );
}
