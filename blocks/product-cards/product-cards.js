import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
import { getProducts } from "../../scripts/product.js";
import createTag from "../../utils/tag.js";

export default async function decorate(block) {
  block.replaceWith(createProductCards(await getProducts()));
}

function createProductCards(data) {
  const div = createTag("div", { className: "productcards" });
  [...data].forEach((product) => {
    const productWrapper = createTag("a", {
      href: `/product-details?id=${product.id}`,
      className: "product-wrapper",
    });

    const img = createOptimizedPicture(product.image, product.name, true);

    const name = createTag("p", {
      className: "product-name",
      textContent: product.name,
    });

    const price = createTag("p", {
      className: "product-price",
      textContent: `$${Number(product.price).toFixed(2)}`,
    });
    productWrapper.append(img, name, price);
    div.appendChild(productWrapper);
  });

  return div;
}
