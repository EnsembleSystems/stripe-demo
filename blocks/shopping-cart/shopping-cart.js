import { getCart, removeFromCart, updateQuantity } from "../../scripts/cart.js";
import { OrderSummary } from "../../scripts/dropins/storefront-checkout/containers/OrderSummary.js";
import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
import { getProductById } from "../../scripts/product.js";
import createTag from "../../utils/tag.js";
import { render as checkoutRenderer } from "@dropins/storefront-checkout/render.js";

const DEFAULT_QTY = 8;

export default async function decorate(block) {
  const orderList = createTag("div", { className: "order-list-wrapper" });
  const cart = getCart();
  if (cart.products.length === 0) {
    orderList.innerHTML =
      "<p>Your cart is empty. Add some products to begin checkout.</p>";
  } else {
    cart.products.forEach(async (product) => {
      orderList.appendChild(
        await createOrderLine(product.id, product.quantity)
      );
    });
  }

  const orderSummary = createTag("div", { className: "order-summary-wrapper" });
  // setEndpoint(
  //   // Prod Mesh Endpoint w/ Guest Estimate
  //   // 'https://graph.adobe.io/api/dc55dc16-82b2-47ec-8e5a-3e9f3cf395dd/graphql?api_key=cfc0b282731a43739c83eb661ab17086'
  //   // Stg Mesh Endpoint w/ Guest Estimate & Adyen Extension
  //   "https://graph.adobe.io/api/a2975be6-bfb1-4be5-bb9b-b330fd46a6d8/graphql?api_key=a28717f2dc814395a2b536d527ef9ad5"
  //   // Stg Backend ^ but without Mesh - wont work until CORS resolved for local dev.
  //   // 'https://checkout-stg-phpgo3q-ktefqhpptmkrc.eu-4.magentosite.cloud/graphql',
  // );
  // initializers.register(checkoutApi.initialize);
  // initializers.register(adyenApi.initialize, {
  //   // from franklin.maidenform.com/checkout (test key)
  //   // cannot use unless franklin.maidenform's Commerce backend has guestEstimate module installed.
  //   // clientKey: 'test_R43YHCZCIBGKVO4UOIENTWOQEIDMPVJM',
  //   // locale: 'en_US',
  //   // from checkout-stg backend (test key)
  //   clientKey: "test_TBG272DDJZH4ZAAXSBAKQZ44ZQC6LWOU",
  //   locale: "en-US",
  //   environment: "test",
  // });

  // TODO: locale (maidenform has only en_US, and locale/store switcher will come from Franklin)
  checkoutRenderer.render(OrderSummary, {
    // cartId,
    // storeCode,
    // locale
    slots: {
      OrderSummary: async (element) => {
        // const button = createTag("button", { textContent: "Checkout" });
        // element.appendChild(button);
        // await checkoutRenderer.render(OrderSummary)(element);
        // example of adding a content after some default container
        // const fragment = await loadFragment("/fragments/drafts/demo-include");
      },
    },
  })(orderSummary);
  const checkoutButton = createTag("a", {
    textContent: "Checkout",
    className: "checkout-button button primary",
    href: "/checkout",
  });

  const continueButton = createTag("a", {
    textContent: "Continue Shopping",
    className: "continue-button button secondary",
    width: "100%",
    href: "/products",
  });
  orderSummary.append(checkoutButton, continueButton);
  block.replaceChildren(orderList, orderSummary);
}

async function createOrderLine(productId, quantity) {
  const product = await getProductById(productId);
  const div = createTag("div", { className: "order-line-wrapper" });
  const productImgWrapper = createTag("div", {
    className: "product-image",
  });
  const img = createOptimizedPicture(product.image, product.name, true);
  productImgWrapper.appendChild(img);

  const productInfoHtml = `<div class='product-info'><div>
    <p class='product-name'>${product.name}</p>
    <p class='product-price'>$${Number(product.price).toFixed(2)}</p></div>
    <label for='quantity-${productId}' hidden>Quantity</label>
    <select value=${quantity} name='quantity-${productId}'>
    ${Array.from({ length: DEFAULT_QTY }, (_x, i) => i + 1).map(
      (q) => `<option value=${q}>${q}</option>`
    )}
    </select>
    <button class='close-button'><img class='close-icon' src='../../icons/close.svg' alt='Remove'/></button></div>
    <div class='stock-info'><img src='../../icons/check.svg' alt='Remove'/>
    <span>In Stock</span></div>`;

  const productInfoWrapper = createTag(
    "div",
    {
      className: "order-line-info-wrapper",
    },
    productInfoHtml
  );

  const removeButton = productInfoWrapper.querySelector(".close-button");
  removeButton.addEventListener("click", () => {
    removeFromCart(productId);
    resetBlock();
  });

  const select = productInfoWrapper.querySelector("select");
  select.value = quantity;
  select.onchange = function () {
    const newValue = select.value;
    updateQuantity(productId, Number(newValue));
  };

  div.append(productImgWrapper, productInfoWrapper);

  return div;
}

function resetBlock() {
  const block = document.querySelector(".shopping-cart");
  return decorate(block);
}
