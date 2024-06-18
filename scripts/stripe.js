import { fetchRates, formatFormData } from '../utils/helpers.js';
import { getCart } from './cart.js';
import { getConfigValue } from './config.js';
// eslint-disable-next-line no-undef
const stripe = Stripe(getConfigValue('stripe_pk'));

const getTotalAmount = async () => {
  const cart = await getCart();
  const rates = await fetchRates();
  // hardcode currency CAD
  const details = {
    amount: Math.floor(cart.prices.grand_total.value * rates.CAD * 100),
    currency: 'CAD',
  };
  // for USD
  // const detailsUSD = {
  //   amount: Math.floor(cart.prices.grand_total.value * 100),
  //   currency: 'USD',
  // };
  return details;
  // return detailsUSD;
};

const createPaymentIntent = async () => {
  const details = await getTotalAmount();
  const formBody = formatFormData(details);
  const res = await fetch('https://api.stripe.com/v1/payment_intents', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getConfigValue('stripe_sk')}`,
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formBody,
  });
  const data = await res.json();
  return data;
};

const renderStripeComponent = async ({
  appearance,
  options,
  element,
  context,
  callback,
}) => {
  if (element && context) {
    const data = await createPaymentIntent();
    const elements = stripe.elements({
      clientSecret: data.client_secret,
      appearance,
      paymentMethodCreation: 'manual',
    });

    const paymentElement = elements.create('payment', options);
    paymentElement.mount(element);

    context.onPlaceOrder(async () => {
      await elements.submit();
      const result = await stripe.createPaymentMethod({
        elements,
      });
      if (result && result.paymentMethod && callback) {
        await callback(result.paymentMethod);
      }
    });
  }
};

export default renderStripeComponent;
