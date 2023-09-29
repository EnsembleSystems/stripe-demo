import createTag from '../../utils/tag.js';

export default async function decorate(block) {
  const div = createTag('div', { className: 'collection-cards' });
  [...block.children].forEach((row) => {
    const [slug, collectionName, collectionDescription, image] = [
      ...row.children,
    ];
    const categoryWrapper = createTag('a', {
      href: `/products?category=${slug.textContent}`,
      className: 'collection',
    });

    const name = createTag('p', {
      className: 'collection-name-title',
      textContent: collectionName.textContent,
    });

    const description = createTag('div', {
      className: 'collection-name-description',
      innerHTML: collectionDescription.textContent,
    });

    categoryWrapper.append(image.firstElementChild, name, description);
    div.appendChild(categoryWrapper);
  });
  block.replaceWith(div);
}
