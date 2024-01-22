// eslint-disable-next-line import/prefer-default-export
export const renderStripeComponent = ({
  key,
  clientSecret,
  appearance,
  options,
  element,
  context,
  callback,
}) => {
  // eslint-disable-next-line no-undef
  const stripe = Stripe(key);
  if (element && context) {
    console.log(context);
    const elements = stripe.elements({
      clientSecret,
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
