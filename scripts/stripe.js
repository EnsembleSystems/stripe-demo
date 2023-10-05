export class StripePlugin {
  constructor({ key, clientSecret, appearance = {}, options = {} }) {
    this.key = key;
    this.clientSecret = clientSecret;
    this.appearance = appearance;
    this.options = options;
  }

  init(element, context, callback) {
    const stripe = Stripe(this.key);
    if (element && context) {
      const elements = stripe.elements({
        clientSecret: this.clientSecret,
        appearance: this.appearance,
        paymentMethodCreation: 'manual',
      });
      const paymentElement = elements.create('payment', this.options);
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
  }
}
