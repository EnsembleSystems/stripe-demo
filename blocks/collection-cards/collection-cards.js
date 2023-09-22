import { getCategoryListByUrlKeys } from '../../scripts/category.js';
import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  block.replaceWith(
    createCollectionCards(
      await getCategoryListByUrlKeys([
        'light-filled-living-rooms-collection',
        'organized-desk-collection',
        'cozy-bedrooms-collection',
      ]),
    ),
  );
}

function createCollectionCards(data) {
  const div = createTag('div', { className: 'collection-cards' });
  [...data].forEach((collection) => {
    const productWrapper = createTag('a', {
      href: `/products`,
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
