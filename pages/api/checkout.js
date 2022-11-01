import Stripe from 'stripe';

const stripe = Stripe(
  'sk_test_51LGnaCGFsZQGuxunvZVa8COEI5rBkuDN82Rys3UnYWyJGD23ZgE7gl3sXYf65FAgS4L6vorL4VExn6fiREgrkpJ300Gp3jbU6i'
);

export default async function handler(req, res) {
  const { cost } = req.body;

  const paymentIntent = await stripe.paymentIntents.create({
    amount: cost,
    currency: 'sek',
  });

  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  });
}
