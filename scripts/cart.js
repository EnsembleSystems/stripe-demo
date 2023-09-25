import { fetchGraphQl } from "@dropins/elsie/fetch-graphql.js";
import {
  ADD_TO_CART,
  CREATE_EMPTY_CART,
  GET_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEMS,
} from "./graphql.js";

const CART_KEY = "FURNI_CART_ID";
/**
 * Get the cart id saved in local storage
 */
export async function getCartId() {
  const cartId = window.localStorage.getItem(CART_KEY);
  if (cartId) return cartId;
  else {
    const { data, errors } = await fetchGraphQl(CREATE_EMPTY_CART);
    if (errors) console.error(errors);
    window.localStorage.setItem(CART_KEY, data.createEmptyCart);

    return data.createEmptyCart;
  }
}

/**
 * Get the cart saved in local storage
 */
export async function getCart() {
  const cartId = await getCartId();
  const { data, errors } = await fetchGraphQl(GET_CART, {
    variables: {
      cartId,
    },
  });
  if (errors) console.error(errors);
  return data.cart;
}

/**
 * @param {string} sku sku
 * @param {number} productQuantity quantity, default: 1
 * To add number of products into cart
 */
export async function addToCart(sku, productQuantity = 1) {
  const cartId = await getCartId();
  const { data, errors } = await fetchGraphQl(ADD_TO_CART, {
    variables: { cartId, productQuantity, sku },
  });
  if (errors) console.error(errors);
  refreshCartTotal(data.addSimpleProductsToCart.cart.total_quantity);
}

/**
 * @param {number} total Total products
 * To refresh the number products in the cart
 */
function refreshCartTotal(total = getCart().total) {
  var cartQuantity = document.querySelector(".cart-quantity");
  cartQuantity.innerHTML = total;
}

/**
 * @param {string} cart_item_id Product id
 * @param {number} quantity Product quantity
 * To update the quantity of product id in cart
 */
export async function updateCartItems(cart_item_id, quantity = 1) {
  const cartId = await getCartId();
  const { data, errors } = await fetchGraphQl(UPDATE_CART_ITEMS, {
    variables: { cartId, cart_item_id, quantity },
  });
  if (errors) console.error(errors);
  refreshCartTotal(data.updateCartItems.cart.total_quantity);
}

/**
 * @param {string} cart_item_id Cart item id
 * To remove the product id from cart
 */
export async function removeFromCart(cart_item_id) {
  const cartId = await getCartId();
  const { data, errors } = await fetchGraphQl(REMOVE_FROM_CART, {
    variables: { cartId, cart_item_id },
  });

  if (errors) console.error(errors);
  const totalQuantity = data.removeItemFromCart.cart.total_quantity;
  refreshCartTotal(totalQuantity);
  return totalQuantity;
}
