import { getCategoriesByUrlKeys } from '../../scripts/category.js';
import { getUriKeysFromBlock } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

function createCollectionCards(data) {
  const div = createTag('div', { className: 'collection-cards' });
  [...data].forEach((collection) => {
    const productWrapper = createTag('a', {
      href: `/products?category_id=${collection.id}`,
      className: 'collection',
    });

    const img = createTag('img', {
      src: collection.image,
      alt: collection.name,
    });

    const name = createTag('p', {
      className: 'collection-name-title',
      textContent: collection.name,
    });

    const description = createTag('div', {
      className: 'collection-name-description',
      innerHTML: collection.description,
    });

    productWrapper.append(img, name, description);
    div.appendChild(productWrapper);
  });
  return div;
}

export default async function decorate(block) {
  const uriKeys = getUriKeysFromBlock(block);
  block.replaceWith(createCollectionCards(await getCategoriesByUrlKeys(uriKeys)));
}
