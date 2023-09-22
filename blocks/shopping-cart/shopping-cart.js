import {
  getCart,
  removeFromCart,
  updateCartItems,
} from "../../scripts/cart.js";
import { OrderSummary } from "@dropins/storefront-checkout/containers/OrderSummary.js";
import createTag from "../../utils/tag.js";
import { render as checkoutRenderer } from "@dropins/storefront-checkout/render.js";

const DEFAULT_QTY = 8;
const EMPTY_HTML =
  "<p>Your cart is empty. Add some products to begin checkout.</p>";

export default async function decorate(block) {
  const orderList = createTag("div", {
    className: "order-list-wrapper",
  });
  const cart = await getCart();
  if (cart.items.length === 0) {
    orderList.innerHTML = EMPTY_HTML;
  } else {
    cart.items.forEach(async (item) => {
      orderList.appendChild(await createOrderLine(item));
    });
  }

  const orderSummary = createTag("div", { className: "order-summary-wrapper" });

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

async function createOrderLine(item) {
  const { id, product, quantity } = item;
  const div = createTag("div", { className: "order-line-wrapper" });
  div.id = `cart_item_${id}`;
  const productImgWrapper = createTag("div", {
    className: "product-image",
  });
  // const img = createOptimizedPicture(product.image, product.name, true);
  const img = createTag("img", {
    src: product.small_image.url,
    alt: product.small_image.label,
  });

  productImgWrapper.appendChild(img);

  const productInfoHtml = `<div class='product-info'><div>
    <p class='product-name'>${product.name}</p>
    <p class='product-price'>${
      product.price_range.minimum_price.regular_price.currency
    } ${Number(product.price_range.minimum_price.regular_price.value).toFixed(
    2
  )}</p></div>
    <label for='quantity-${id}' hidden>Quantity</label>
    <select value=${quantity} name='quantity-${id}'>
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
  removeButton.addEventListener("click", async () => {
    const totalQuantity = await removeFromCart(id);
    div.remove();
    if (totalQuantity === 0) {
      const orderList = document.querySelector(".order-list-wrapper");
      orderList.innerHTML = EMPTY_HTML;
    }
  });

  const select = productInfoWrapper.querySelector("select");
  select.value = quantity;
  select.onchange = function () {
    const newValue = select.value;
    updateCartItems(id, newValue);
  };

  div.append(productImgWrapper, productInfoWrapper);
  return div;
}