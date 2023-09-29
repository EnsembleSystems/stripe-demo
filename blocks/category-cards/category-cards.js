import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  const div = createTag('div', { className: 'category-cards' });
  [...block.children].forEach((row) => {
    const [slug, categoryName, categoryImage] = [...row.children];
    const categoryWrapper = createTag('a', {
      href: `/products?category=${slug.textContent}`,
      className: 'category',
    });

    const name = createTag('p', {
      className: 'category-name',
      textContent: categoryName.textContent,
    });

    categoryWrapper.append(categoryImage.firstElementChild, name);
    div.appendChild(categoryWrapper);
  });
  block.replaceWith(div);
}
