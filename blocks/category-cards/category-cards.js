import { getCategoryListByUrlKeys } from '../../scripts/category.js';
import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  block.replaceWith(
    createCategoryCards(
      await getCategoryListByUrlKeys(['chairs', 'sofas', 'tables', 'workspace', 'sale']),
    ),
  );
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
