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

  // TODO: locale (maidenform has only en_US, and locale/store switcher will come from Franklin)
  checkoutRenderer.render(Checkout, {
    // cartId,
    // storeCode,
    // locale,
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
        context.addPaymentMethodHandler("braintree", {
          render: (element, context) => {
            const $content = document.createElement("div");

            $content.innerHTML = `<div id="dropin-container">test</div>`;

            if (element) {
              element.innerHTML = $content.innerHTML;

              // braintree.dropin.create({
              //   authorization: "sandbox_g42y39zw_348pk9cgf3bgyw2b",
              //   container: "#dropin-container",
              // });
            }
          },
        });
        // context.addPaymentMethodHandler("adyen_cc", {
        //   render: (element, context) => {
        //     if (element) {
        //       element.innerHTML = "test";
        //       adyenRenderer.render(AdyenExtension, context)(element);
        //     }
        //   },
        // });

        context.addPaymentMethodHandler("stripe", {
          render: async (element, context) => {
            if (element) {
              element.id = "payment-element";
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
              paymentElement.mount("#payment-element");
              // element.innerHTML = "stripetest";
            }
          },
        });
      },
    },
  })(block);

  window.events = events;
}
