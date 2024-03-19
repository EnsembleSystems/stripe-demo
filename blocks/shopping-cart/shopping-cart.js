import createTag from '../../utils/tag.js';
import {
  getCart,
  getCartId,
  removeFromCart,
  updateCartItems,
} from '../../scripts/cart.js';

const DEFAULT_QTY = 8;
const EMPTY_HTML = '<p>Your cart is empty. Add some products to begin checkout.</p>';

function updateOrderSummary(orderSummaryDetails, cart) {
  const subtotal = cart.prices.grand_total.value;
  const shipping = cart.shipping_addresses.length
    ? cart.shipping_addresses[0].selected_shipping_method.amount.value : 0;

  orderSummaryDetails.innerHTML = `<h6 class='order-summary-title'>Order summary</h6>
      <div class='price-line'><p class='price-title'>Subtotal</p><p>$${subtotal}</p></div>
      ${cart.shipping_addresses.length ? `<div class='price-line'><p class='price-title'>Shipping</p><p>$${shipping}</p></div>` : ''}
      <hr class='divider'/>
      <div class='price-line'><p class='total-price'>Total</p><p class='total-price'>$${subtotal + shipping}</p></div>`;
}

async function createOrderLine(block, item) {
  const { id, product, quantity } = item;
  const div = createTag('div', { className: 'order-line-wrapper' });
  div.id = `cart_item_${id}`;
  const productImgWrapper = createTag('div', {
    className: 'product-image',
  });

  productImgWrapper.innerHTML = `<img src='${product.small_image.url}' alt='product.name' />`;
  const productInfoHtml = `<div class='product-info'><div>
    <p class='product-name'>${product.name}</p>
    <p class='product-price'>${
  product.price_range.minimum_price.regular_price.currency
} ${Number(product.price_range.minimum_price.regular_price.value).toFixed(
  2,
)}</p></div>
    <label for='quantity-${id}' hidden>Quantity</label>
    <select value=${quantity} name='quantity-${id}'>
    ${Array.from({ length: DEFAULT_QTY }, (_x, i) => i + 1).map(
    (q) => `<option value=${q}>${q}</option>`,
  )}
    </select>
    <button class='close-button'><img class='close-icon' src='../../icons/close.svg' alt='Remove' width='20' height='20'/></button></div>
    ${
  product.stock_status === 'IN_STOCK'
    ? `<div class='stock-info'><img src='../../icons/check.svg' alt='In Stock' width='20' height='20'/>
    <span>In Stock</span></div>`
    : `<div class='stock-info'>
    <span>Out of Stock</span></div>`
}
    `;

  const productInfoWrapper = createTag(
    'div',
    {
      className: 'order-line-info-wrapper',
    },
    productInfoHtml,
  );

  const removeButton = productInfoWrapper.querySelector('.close-button');
  const orderSummaryDetails = block.querySelector('.order-summary-details-wrapper');
  removeButton.addEventListener('click', async () => {
    const totalQuantity = await removeFromCart(id);
    div.remove();
    if (totalQuantity === 0) {
      const orderList = document.querySelector('.order-list-wrapper');
      const checkoutButton = document.querySelector('.checkout-button');
      const continueButton = document.querySelector('.continue-button');
      orderList.innerHTML = EMPTY_HTML;
      checkoutButton.classList.add('disabled');
      continueButton.textContent = 'Start Shopping';
    }
    // reinitialize for order summary
    updateOrderSummary(orderSummaryDetails, await getCart());
  });

  const select = productInfoWrapper.querySelector('select');
  select.value = quantity;
  select.onchange = async function () {
    const newValue = select.value;
    await updateCartItems(id, newValue);
    // reinitialize for order summary
    updateOrderSummary(orderSummaryDetails, await getCart());
  };

  div.append(productImgWrapper, productInfoWrapper);
  return div;
}

export default async function decorate(block) {
  block.innerHTML = '';
  const orderList = createTag('div', {
    className: 'order-list-wrapper',
  });
  const cartId = getCartId();

  const cart = cartId ? await getCart() : undefined;

  const isCartEmpty = !cartId || cart.items.length === 0;

  const orderSummary = createTag('div', { className: 'order-summary-wrapper' });
  const orderSummaryDetails = createTag('div', { className: 'order-summary-details-wrapper' });
  orderSummary.appendChild(orderSummaryDetails);
  if (cartId) {
    updateOrderSummary(orderSummaryDetails, cart);
  }
  const checkoutButton = createTag('a', {
    textContent: 'Checkout',
    className: `checkout-button button primary ${
      isCartEmpty ? 'disabled' : ''
    }`,
    href: '/checkout',
  });

  const continueButton = createTag('a', {
    textContent: isCartEmpty ? 'Start Shopping' : 'Continue Shopping',
    className: 'continue-button button secondary',
    width: '100%',
    href: '/products',
  });
  orderSummary.append(checkoutButton, continueButton);
  block.append(orderSummary);

  if (isCartEmpty) {
    orderList.innerHTML = EMPTY_HTML;
  } else {
    cart.items.forEach(async (item) => {
      orderList.appendChild(await createOrderLine(block, item));
    });
  }

  block.prepend(orderList);
}
