import { fetchGraphQl } from '@dropins/tools/fetch-graphql.js';
import {
  ADD_TO_CART,
  CREATE_EMPTY_CART,
  GET_CART,
  PLACE_ORDER,
  REMOVE_FROM_CART,
  SET_GUEST_EMAIL_ON_CART,
  SET_PAYMENT_METHOD_ON_CART,
  UPDATE_CART_ITEMS,
} from './graphql.js';

const CART_KEY = 'FURNI_CART_ID';

/**
 * Get the cart id saved in local storage
 */
export function getCartId() {
  const cartId = window.localStorage.getItem(CART_KEY);
  return cartId;
}

/**
 * Get the cart saved in local storage
 */
export async function getCart() {
  const cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(GET_CART, {
      variables: {
        cartId,
      },
    });
    if (errors) console.error(errors);
    return data.cart;
  }
  console.log('Missing cart id');
  return null;
}

/**
 * @param {number} total Total products
 * To refresh the number products in the cart
 */
function refreshCartTotal(total = getCart().total) {
  const cartQuantity = document.querySelector('.cart-quantity');
  cartQuantity.innerHTML = total;
}

export const clearCartId = () => {
  window.localStorage.removeItem(CART_KEY);
  refreshCartTotal(0);
};

export async function setGuestEmailOnCart(email, cartId = getCartId()) {
  if (cartId) {
    const { data, errors } = await fetchGraphQl(SET_GUEST_EMAIL_ON_CART, {
      variables: {
        cartId,
        email,
      },
    });
    if (errors) console.error(errors);
    return data.setGuestEmailOnCart.cart.email;
  }
  console.error('Missing cart id');
  return null;
}

const createEmptyCart = async () => {
  const { data, errors } = await fetchGraphQl(CREATE_EMPTY_CART);
  if (errors) console.error(errors);
  window.localStorage.setItem(CART_KEY, data.createEmptyCart);
  return data.createEmptyCart;
};

/**
 * @param {string} sku sku
 * @param {number} productQuantity quantity, default: 1
 * To add number of products into cart
 */
export async function addToCart(sku, productQuantity = 1) {
  let cartId = getCartId();
  if (!cartId) {
    cartId = await createEmptyCart();
  }
  const { data, errors } = await fetchGraphQl(ADD_TO_CART, {
    variables: { cartId, productQuantity, sku },
  });
  if (errors) console.error(errors);
  refreshCartTotal(data.addSimpleProductsToCart.cart.total_quantity);
}

/**
 * @param {string} cartItemId Product id
 * @param {number} quantity Product quantity
 * To update the quantity of product id in cart
 */
export async function updateCartItems(cartItemId, quantity = 1) {
  const cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(UPDATE_CART_ITEMS, {
      variables: { cartId, cartItemId, quantity },
    });
    if (errors) console.error(errors);
    refreshCartTotal(data.updateCartItems.cart.total_quantity);
  } else {
    console.error('Missing cart id');
  }
}

/**
 * @param {string} cartItemId Cart item id
 * To remove the product id from cart
 */
export async function removeFromCart(cartItemId) {
  const cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(REMOVE_FROM_CART, {
      variables: { cartId, cartItemId },
    });

    if (errors) console.error(errors);
    const totalQuantity = data.removeItemFromCart.cart.total_quantity;
    refreshCartTotal(totalQuantity);
    return totalQuantity;
  }
  console.error('Missing cart id');
  return null;
}

/**
 * Set payment method on cart
 */
export async function setPaymentMethodOnCart(
  paymentMethodId,
  cartId = getCartId(),
) {
  if (cartId) {
    const { data, errors } = await fetchGraphQl(SET_PAYMENT_METHOD_ON_CART, {
      variables: {
        cartId,
        paymentMethodId,
      },
    });
    if (errors) console.error(errors);
    return data.setPaymentMethodOnCart.cart.selected_payment_method;
  }
  console.error('Missing cart id');
  return null;
}

/**
 * Place Order
 */
export async function placeOrder(cartId = getCartId()) {
  if (cartId) {
    const { data, errors } = await fetchGraphQl(PLACE_ORDER, {
      variables: {
        cartId: cartId ?? getCartId(),
      },
    });
    if (errors) console.error(errors);
    return data.placeOrder.order;
  }
  console.error('Missing cart id');
  return null;
}
