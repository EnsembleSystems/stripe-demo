import { events } from "@dropins/elsie/event-bus.js";
import { initializers } from "@dropins/elsie/initializer.js";
import * as checkoutApi from "@dropins/storefront-checkout/api.js";
import Checkout from "@dropins/storefront-checkout/containers/Checkout.js";
import { render as checkoutRenderer } from "@dropins/storefront-checkout/render.js";
import createTag from "../../utils/tag.js";
const stripe = Stripe(
  "pk_test_51Nrs0ML1DV9f5cSo8SGP5fqOt9ypRLqBSKBv4rfbRPOGezL5t5sUMV7mHGlRdd9455BXOwoBngtEWo35EEgc7UHD00Ajy9FWgK"
);

export default async function decorate(block) {
  const element = createTag("div", { id: "payment-element" });
  block.appendChild(element);

  initializers.register(checkoutApi.initialize);

  checkoutRenderer.render(Checkout, {
    slots: {
      PaymentMethods: (_, context) => {
        context.addPaymentMethodHandler("checkmo", {
          render: (element, context) => {
            console.log("handler context", context);
            if (element) {
              element.innerHTML = `<div>Custom Check / Money order handler</div>`;
            }
          },
        });

        context.addPaymentMethodHandler("stripe_payments", {
          render: async (element, context) => {
            if (element) {
              const appearance = {
                /* appearance */
              };
              const options = {
                /* options */
              };
              const clientSecret =
                "pi_3NsZkUL1DV9f5cSo0t4biUBY_secret_hbaemymPGMHsuf8oxqMYthy2p";
              const elements = stripe.elements({ clientSecret, appearance });
              const paymentElement = elements.create("payment", options);
              paymentElement.mount(element);
            }
          },
        });
      },
    },
  })(block);

  window.events = events;
}
