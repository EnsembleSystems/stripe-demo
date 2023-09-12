const CART_KEY = "FURNI_CART";
const EMPTY_CART = {
  products: [],
  total: 0,
};

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

export function addToCard(productId, productQuantity = 1) {
  const cart = getCart();
  let updated;
  const exist = cart.products.find(
    (product) => product.productId === productId
  );
  if (exist) {
    updated = {
      products: cart.products.map((product) => ({
        productId: product.productId,
        quantity:
          product.productId === productId
            ? product.quantity + productQuantity
            : product.quantity,
      })),
      total: cart.total + productQuantity,
    };
  } else {
    updated = {
      products: [...cart.products, { productId, quantity: productQuantity }],
      total: cart.total + 1,
    };
  }
  window.localStorage.setItem(CART_KEY, JSON.stringify(updated));
  refreshCartTotal(updated.total);
}

function refreshCartTotal(total = getCart().total) {
  var cartQuantity = document.querySelector(".cart-quantity");
  cartQuantity.innerHTML = total;
}
