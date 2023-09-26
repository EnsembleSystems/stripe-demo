/* eslint-disable operator-linebreak */
import { getCategoriesByUrlKeys } from '../../scripts/category.js';
import { getBlockColumnValues } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

function createCollectionCards(data, titles, descriptions, images) {
  const div = createTag('div', { className: 'collection-cards' });
  [...data].forEach((collection, i) => {
    const productWrapper = createTag('a', {
      href: `/products?category_id=${collection.id}`,
      className: 'collection',
    });

    const img =
      images?.[i] ??
      createTag('img', {
        src: collection.image,
        alt: collection.name,
      });

    const name = createTag('p', {
      className: 'collection-name-title',
      textContent: titles?.[i] ?? collection.name,
    });

    const description = createTag('div', {
      className: 'collection-name-description',
      innerHTML: descriptions?.[i] ?? collection.description,
    });

    productWrapper.append(img, name, description);
    div.appendChild(productWrapper);
  });
  return div;
}

export default async function decorate(block) {
  const uriKeys = getBlockColumnValues(block, 0);
  const titles = getBlockColumnValues(block, 1);
  const descriptions = getBlockColumnValues(block, 2);
  const images = getBlockColumnValues(block, 3, 'firstElementChild');
  block.replaceWith(
    createCollectionCards(await getCategoriesByUrlKeys(uriKeys), titles, descriptions, images),
  );
}
