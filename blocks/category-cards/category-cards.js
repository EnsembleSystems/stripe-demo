/* eslint-disable operator-linebreak */
// eslint-disable-next-line import/named
import { getCategoriesByUrlKeys } from '../../scripts/category.js';
import { getBlockColumnValues, mapKeysProperties } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

function createCategoryCards(data, titles, images) {
  const div = createTag('div', { className: 'category-cards' });
  [...data].forEach((category) => {
    const productWrapper = createTag('a', {
      href: `/products?category_id=${category.id}`,
      className: 'category',
    });

    const img =
      images.get(category.url_key) ??
      createTag('img', {
        src: category.image,
        alt: category.name,
      });

    const name = createTag('p', {
      className: 'category-name',
      textContent: titles.get(category.url_key) ?? category.name,
    });

    productWrapper.append(img, name);
    div.appendChild(productWrapper);
  });
  return div;
}

export default async function decorate(block) {
  const uriKeys = getBlockColumnValues(block, 0);

  const titles = getBlockColumnValues(block, 1);
  const titlesMap = mapKeysProperties(uriKeys, titles);

  const images = getBlockColumnValues(block, 2, 'firstElementChild');
  const imagesMap = mapKeysProperties(uriKeys, images);

  block.replaceWith(
    createCategoryCards(await getCategoriesByUrlKeys(uriKeys), titlesMap, imagesMap),
  );
}
