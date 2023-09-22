import { getCategoryListByUrlKeys } from '../../scripts/category.js';
import { getUriKeysFromBlock } from '../../utils/helpers.js';
import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  const uriKeys = getUriKeysFromBlock(block);
  block.replaceWith(createCategoryCards(await getCategoryListByUrlKeys(uriKeys)));
}

function createCategoryCards(data) {
  const div = createTag('div', { className: 'category-cards' });
  [...data].forEach((category) => {
    const productWrapper = createTag('a', {
      href: `/products`,
      className: 'category',
    });

    const img = createTag('img', {
      src: category.image,
      alt: category.name,
    });

    const name = createTag('p', {
      className: 'category-name',
      textContent: category.name,
    });

    productWrapper.append(img, name);
    div.appendChild(productWrapper);
  });
  return div;
}
