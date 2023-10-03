export class StripePlugin {
  constructor(key, clientSecret, appearance = {}, options = {}) {
    this.key = key;
    this.clientSecret = clientSecret;
    this.appearance = appearance;
    this.options = options;
    this.init();
  }

  init() {
    this.stripe = Stripe(this.key);
    this.elements = this.stripe.elements({
      clientSecret: this.clientSecret,
      appearance: this.appearance,
      paymentMethodCreation: 'manual',
    });
  }

  render(element) {
    const paymentElement = this.elements.create('payment', this.options);
    paymentElement.mount(element);
  }

  async proceedPayment() {
    await this.elements.submit();
    const result = await this.stripe.createPaymentMethod({
      elements: this.elements,
    });
    return result;
  }
}
