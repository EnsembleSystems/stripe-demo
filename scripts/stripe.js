export const renderStripeComponent = ({
  key,
  clientSecret,
  appearance,
  options,
  element,
  context,
  callback,
}) => {
  const stripe = Stripe(key);
  if (element && context) {
    const elements = stripe.elements({
      clientSecret: clientSecret,
      appearance: appearance,
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
