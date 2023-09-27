/* eslint-disable operator-linebreak */
import { getCategoriesByUrlKeys } from '../../scripts/category.js';
import { getBlockColumnValues, mapKeysProperties } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

function createCollectionCards(data, titles, descriptions, images) {
  const div = createTag('div', { className: 'collection-cards' });
  [...data].forEach((collection) => {
    const productWrapper = createTag('a', {
      href: `/products?category_id=${collection.id}`,
      className: 'collection',
    });

    const img =
      images.get(collection.url_key) ??
      createTag('img', {
        src: collection.image,
        alt: collection.name,
      });

    const name = createTag('p', {
      className: 'collection-name-title',
      textContent: titles.get(collection.url_key) ?? collection.name,
    });

    const description = createTag('div', {
      className: 'collection-name-description',
      innerHTML: descriptions.get(collection.url_key) ?? collection.description,
    });

    productWrapper.append(img, name, description);
    div.appendChild(productWrapper);
  });
  return div;
}

export default async function decorate(block) {
  const uriKeys = getBlockColumnValues(block, 0);

  const titles = getBlockColumnValues(block, 1);
  const titlesMap = mapKeysProperties(uriKeys, titles);

  const descriptions = getBlockColumnValues(block, 2);
  const descriptionsMap = mapKeysProperties(uriKeys, descriptions);

  const images = getBlockColumnValues(block, 3, 'firstElementChild');
  const imagesMap = mapKeysProperties(uriKeys, images);

  block.replaceWith(
    createCollectionCards(
      await getCategoriesByUrlKeys(uriKeys),
      titlesMap,
      descriptionsMap,
      imagesMap,
    ),
  );
}
