import {
  getCart,
  getCartId,
  removeFromCart,
  updateCartItems,
} from "../../scripts/cart.js";
import { OrderSummary } from "@dropins/storefront-checkout/containers/OrderSummary.js";
import createTag from "../../utils/tag.js";
import { render as checkoutRenderer } from "@dropins/storefront-checkout/render.js";
import { initializers } from "@dropins/elsie/initializer.js";
import * as checkoutApi from "@dropins/storefront-checkout/api.js";
import { events } from "@dropins/elsie/event-bus.js";
import { createOptimizedPicture } from "../../scripts/lib-franklin.js";

const DEFAULT_QTY = 8;
const EMPTY_HTML =
  "<p>Your cart is empty. Add some products to begin checkout.</p>";

export default async function decorate(block) {
  const orderList = createTag("div", {
    className: "order-list-wrapper",
  });
  const cartId = getCartId();

  const cart = cartId ? await getCart() : undefined;
  const isCartEmpty = !cartId || cart.items.length === 0;
  if (isCartEmpty) {
    orderList.innerHTML = EMPTY_HTML;
  } else {
    cart.items.forEach(async (item) => {
      orderList.appendChild(await createOrderLine(item));
    });
  }

  const orderSummary = createTag("div", { className: "order-summary-wrapper" });
  if (cartId) {
    initializers.register(checkoutApi.initialize);
    checkoutRenderer.render(OrderSummary)(orderSummary);
    events.emit("cart/data", { id: cartId });
  }
  const checkoutButton = createTag("a", {
    textContent: "Checkout",
    className: `checkout-button button primary ${
      isCartEmpty ? "disabled" : ""
    }`,
    href: "/checkout",
  });

  const continueButton = createTag("a", {
    textContent: isCartEmpty ? "Start Shopping" : "Continue Shopping",
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
  const img = createOptimizedPicture({
    src: product.image,
    alt: product.name,
    eager: true,
    useSrc: true,
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
    ${
      product.stock_status === "IN_STOCK"
        ? `<div class='stock-info'><img src='../../icons/check.svg' alt='In Stock'/>
    <span>In Stock</span></div>`
        : `<div class='stock-info'>
    <span>Out of Stock</span></div>`
    }
    `;

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
      const checkoutButton = document.querySelector(".checkout-button");
      const continueButton = document.querySelector(".continue-button");
      orderList.innerHTML = EMPTY_HTML;
      checkoutButton.classList.add("disabled");
      continueButton.textContent = "Start Shopping";
    }
    initializers.register(checkoutApi.initialize);
  });

  const select = productInfoWrapper.querySelector("select");
  select.value = quantity;
  select.onchange = async function () {
    const newValue = select.value;
    await updateCartItems(id, newValue);
    // reinitialize for order summary
    initializers.register(checkoutApi.initialize);
  };

  div.append(productImgWrapper, productInfoWrapper);
  return div;
}
