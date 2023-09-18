import * as adyenApi from "@dropins/adyen-checkout-extension/api.js";
import AdyenExtension from "@dropins/adyen-checkout-extension/containers/PaymentMethods.js";
import { render as adyenRenderer } from "@dropins/adyen-checkout-extension/render.js";
import { events } from "@dropins/elsie/event-bus.js";
import { setEndpoint, fetchGraphQl } from "@dropins/elsie/fetch-graphql.js";
import { initializers } from "@dropins/elsie/initializer.js";
import * as checkoutApi from "@dropins/storefront-checkout/api.js";
import Checkout from "@dropins/storefront-checkout/containers/Checkout.js";
import OrderSummary from "@dropins/storefront-checkout/containers/OrderSummary.js";
import { render as checkoutRenderer } from "@dropins/storefront-checkout/render.js";
import createTag from "../../utils/tag.js";
const stripe = Stripe("pk_test_A7jK4iCYHL045qgjjfzAfPxu");

export default async function decorate(block) {
  const element = createTag("div", { id: "payment-element" });
  block.appendChild(element);
  const appearance = {
    /* appearance */
  };
  const options = {
    /* options */
  };

  // const clientSecret =
  //   "pi_1Gt0Aa2eZvKYlo2CyEroX3gm_secret_Axwag1hzl9M43XZVRxPtATRNF";
  // const elements = stripe.elements({ clientSecret, appearance });
  // const paymentElement = elements.create("payment", options);
  // paymentElement.mount("#payment-element");
  setEndpoint(
    // Prod Mesh Endpoint w/ Guest Estimate
    // "https://graph.adobe.io/api/dc55dc16-82b2-47ec-8e5a-3e9f3cf395dd/graphql?api_key=cfc0b282731a43739c83eb661ab17086"
    // Stg Mesh Endpoint w/ Guest Estimate & Adyen Extension
    "https://graph.adobe.io/api/a2975be6-bfb1-4be5-bb9b-b330fd46a6d8/graphql?api_key=a28717f2dc814395a2b536d527ef9ad5"
    // Stg Backend ^ but without Mesh - wont work until CORS resolved for local dev.
    // "https://checkout-stg-phpgo3q-ktefqhpptmkrc.eu-4.magentosite.cloud/graphql"
  );
  initializers.register(checkoutApi.initialize);
  initializers.register(adyenApi.initialize, {
    // from franklin.maidenform.com/checkout (test key)
    // cannot use unless franklin.maidenform's Commerce backend has guestEstimate module installed.
    // clientKey: 'test_R43YHCZCIBGKVO4UOIENTWOQEIDMPVJM',
    // locale: 'en_US',
    // from checkout-stg backend (test key)
    clientKey: "test_TBG272DDJZH4ZAAXSBAKQZ44ZQC6LWOU",
    locale: "en-US",
    environment: "test",
  });

  // TODO: locale (maidenform has only en_US, and locale/store switcher will come from Franklin)
  checkoutRenderer.render(Checkout, {
    // cartId,
    // storeCode,
    // locale,
    slots: {
      PaymentMethods: async (element) => {
        await adyenRenderer.render(AdyenExtension)(element);
      },
      OrderSummary: async (element) => {
        await checkoutRenderer.render(OrderSummary)(element);
        // example of adding a content after some default container
        // const fragment = await loadFragment("/fragments/drafts/demo-include");
      },
    },
  })(block);

  window.events = events;
}
