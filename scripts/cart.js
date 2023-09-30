import { fetchGraphQl } from '@dropins/elsie/fetch-graphql.js';
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
 * @param {number} total Total products
 * To refresh the number products in the cart
 */
function refreshCartTotal(total = getCart().total) {
  var cartQuantity = document.querySelector('.cart-quantity');
  cartQuantity.innerHTML = total;
}

export const clearCartId = () => {
  window.localStorage.removeItem(CART_KEY);
  refreshCartTotal(0);
};
/**
 * Get the cart id saved in local storage
 */
export function getCartId() {
  const cartId = window.localStorage.getItem(CART_KEY);
  return cartId;
}

const createEmptyCart = async () => {
  const { data, errors } = await fetchGraphQl(CREATE_EMPTY_CART);
  if (errors) console.error(errors);
  window.localStorage.setItem(CART_KEY, data.createEmptyCart);

  await setGuestEmailOnCart(data.createEmptyCart, 'test@gmail.com');
  return data.createEmptyCart;
};

/**
 * Get the cart saved in local storage
 */
export async function getCart() {
  let cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(GET_CART, {
      variables: {
        cartId,
      },
    });
    if (errors) console.error(errors);
    return data.cart;
  } else {
    console.log('Missing cart id');
  }
}

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
 * @param {string} cart_item_id Product id
 * @param {number} quantity Product quantity
 * To update the quantity of product id in cart
 */
export async function updateCartItems(cart_item_id, quantity = 1) {
  const cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(UPDATE_CART_ITEMS, {
      variables: { cartId, cart_item_id, quantity },
    });
    if (errors) console.error(errors);
    refreshCartTotal(data.updateCartItems.cart.total_quantity);
  } else {
    console.error('Missing cart id');
  }
}

/**
 * @param {string} cart_item_id Cart item id
 * To remove the product id from cart
 */
export async function removeFromCart(cart_item_id) {
  const cartId = getCartId();
  if (cartId) {
    const { data, errors } = await fetchGraphQl(REMOVE_FROM_CART, {
      variables: { cartId, cart_item_id },
    });

    if (errors) console.error(errors);
    const totalQuantity = data.removeItemFromCart.cart.total_quantity;
    refreshCartTotal(totalQuantity);
    return totalQuantity;
  } else {
    console.error('Missing cart id');
  }
}

/**
 * Set payment method on cart
 */
export async function setPaymentMethodOnCart(
  payment_method_id,
  cartId = getCartId()
) {
  if (cartId) {
    const { data, errors } = await fetchGraphQl(SET_PAYMENT_METHOD_ON_CART, {
      variables: {
        cartId: cartId,
        payment_method_id,
      },
    });
    if (errors) console.error(errors);
    return data.setPaymentMethodOnCart.cart.selected_payment_method;
  } else {
    console.error('Missing cart id');
  }
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
  } else {
    console.error('Missing cart id');
  }
}

export async function setGuestEmailOnCart(cartId = getCartId(), email) {
  if (cartId) {
    const { data, errors } = await fetchGraphQl(SET_GUEST_EMAIL_ON_CART, {
      variables: {
        cartId,
        email,
      },
    });
    if (errors) console.error(errors);
    return data.setGuestEmailOnCart.cart.email;
  } else {
    console.error('Missing cart id');
  }
}
