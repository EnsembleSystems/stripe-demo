import { getProducts } from '../../scripts/product.js';
import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  const { searchParams } = new URL(window.location.href);
  const categoryId = searchParams.get('category_id');
  block.replaceWith(createProductCards(await getProducts(categoryId)));
}

function createProductCards(data) {
  const div = createTag('div', { className: 'productcards' });
  [...data].forEach((product) => {
    const productWrapper = createTag('a', {
      href: `/product-details?sku=${product.sku}`,
      className: 'product-wrapper',
    });

    const img = createTag('img', {
      src: product.small_image.url,
      alt: product.small_image.label,
    });

    const name = createTag('p', {
      className: 'product-name',
      textContent: product.name,
    });

    const price = createTag('p', {
      className: 'product-price',
      textContent: `${product.price_range.minimum_price.regular_price.currency} ${Number(
        product.price_range.minimum_price.regular_price.value,
      ).toFixed(2)}`,
    });
    productWrapper.append(img, name, price);
    div.appendChild(productWrapper);
  });

  return div;
}
