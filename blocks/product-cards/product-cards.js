import { getCategoriesByUrlKeys } from '../../scripts/category.js';
import { getProducts } from '../../scripts/product.js';
import { getBlockColumnValues } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

function createProductCards(data) {
  if (data.length === 0) return 'No Products';
  const div = createTag('div', { className: 'productcards' });
  [...data].forEach((product) => {
    const productWrapper = createTag('a', {
      href: `/product-details?sku=${product.sku}`,
      className: 'product-wrapper',
    });

    const pictureWrapper = createTag('div', {
      className: 'product-image-wrapper',
    });

    pictureWrapper.innerHTML = `<img src='${product.small_image.url}' alt='${product.small_image.label}' />`;

    const name = createTag('p', {
      className: 'product-name',
      textContent: product.name,
    });

    const price = createTag('p', {
      className: 'product-price',
      textContent: `${
        product.price_range.minimum_price.regular_price.currency
      } ${Number(product.price_range.minimum_price.regular_price.value).toFixed(
        2,
      )}`,
    });
    productWrapper.append(pictureWrapper, name, price);
    div.appendChild(productWrapper);
  });

  return div;
}

export default async function decorate(block) {
  const { searchParams } = new URL(window.location.href);
  let uriKeys = searchParams.get('category');
  if (!uriKeys) {
    uriKeys = getBlockColumnValues(block, 0);
  }
  const categories = await getCategoriesByUrlKeys(uriKeys);

  const categoryId = categories.map((category) => category.id);
  block.replaceWith(createProductCards(await getProducts(categoryId)));
}
