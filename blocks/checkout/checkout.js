/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */

// Drop-in Tools
import { initializers } from '@dropins/tools/initializer.js';

// Drop-in APIs
import * as checkout from '@dropins/storefront-checkout/api.js';

// Drop-in Providers
import { render as provider } from '@dropins/storefront-checkout/render.js';

// Drop-in Containers
import Checkout from '@dropins/storefront-checkout/containers/Checkout.js';
import {
  clearCartId, getCartId, placeOrder, setPaymentMethodOnCart,
} from '../../scripts/cart.js';
import createTag from '../../utils/tag.js';
import { loadLoading } from '../../utils/helpers.js';
import renderStripeComponent from '../../scripts/stripe.js';

async function proceedPlaceOrder(block, cartId, paymentMethod) {
  const loading = await loadLoading();
  await setPaymentMethodOnCart(paymentMethod.id, cartId);
  const order = await placeOrder(cartId);
  loading.remove();
  clearCartId();
  block.replaceWith(
    createTag(
      'div',
      { className: 'checkout-complete' },
      `<p class='thank-you'>Thank you for shopping!</p><p class='order-number'>Your order <b>#${order.order_number}</b> has been placed.</p><a href='/' class='primary button'>Continue Shopping</a>`,
    ),
  );
}
export default async function decorate(block) {
  // If cartId is cached in session storage, use
  // otherwise, checkout drop-in will look for one in the event-bus
  const cartId = getCartId();

  // Initialize Drop-ins
  initializers.register(checkout.initialize, {});

  return provider.render(Checkout, {
    cartId,
    routeHome: () => '/',
    routeCart: () => '/cart',
    slots: {
      PaymentMethods: async (context) => {
        context.addPaymentMethodHandler('checkmo', {
          render: (ctx, element) => {
            if (element) {
              // clear the element first
              element.innerHTML = '';
            }
          },
        });

        context.addPaymentMethodHandler('stripe_payments', {
          render: async (ctx, element) => {
            await renderStripeComponent({
              element,
              context: ctx,
              callback: (paymentMethod) => proceedPlaceOrder(block, cartId, paymentMethod),
            });
          },
        });
      },
    },
  })(block);
}
