const CART_KEY = "FURNI_CART";
const EMPTY_CART = {
  products: [],
  total: 0,
};

/**
 * Get the cart saved in local storage
 */
export function getCart() {
  const cartItems = window.localStorage.getItem(CART_KEY);
  if (cartItems) {
    try {
      return JSON.parse(window.localStorage.getItem(CART_KEY));
    } catch (err) {
      console.error("Failed to parse: " + err);
      window.localStorage.removeItem(CART_KEY);
      return EMPTY_CART;
    }
  }
  return EMPTY_CART;
}

/**
 * @param {string} productId The product id
 * @param {number} productQuantity quantity, default: 1
 * To add number of products into cart
 */
export function addToCart(productId, productQuantity = 1) {
  const cart = getCart();
  let updated;
  const exist = cart.products.find((product) => product.id === productId);
  if (exist) {
    updated = {
      products: cart.products.map((product) => ({
        id: product.id,
        quantity:
          product.id === productId
            ? product.quantity + productQuantity
            : product.quantity,
      })),
      total: cart.total + productQuantity,
    };
  } else {
    updated = {
      products: [
        ...cart.products,
        { id: productId, quantity: productQuantity },
      ],
      total: cart.total + 1,
    };
  }
  window.localStorage.setItem(CART_KEY, JSON.stringify(updated));
  refreshCartTotal(updated.total);
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
 * @param {string} productId Product id
 * @param {number} productId Product quantity
 * To update the quantity of product id in cart
 */
export function updateQuantity(productId, quantity) {
  const cart = getCart();
  const exist = cart.products.find((product) => product.id === productId);
  if (exist) {
    const updated = {
      products: cart.products.map((product) => ({
        id: product.id,
        quantity: product.id === productId ? quantity : product.quantity,
      })),
      total: cart.total - exist.quantity + quantity,
    };
    window.localStorage.setItem(CART_KEY, JSON.stringify(updated));
    refreshCartTotal(updated.total);
  }
}

/**
 * @param {string} productId Product id
 * To remove the product id from cart
 */
export function removeFromCart(productId) {
  const cart = getCart();
  const exist = cart.products.find((product) => product.id === productId);
  if (exist) {
    const updated = {
      products: cart.products.filter((product) => product.id !== productId),
      total: cart.total - exist.quantity,
    };
    window.localStorage.setItem(CART_KEY, JSON.stringify(updated));
    refreshCartTotal(updated.total);
  }
}
