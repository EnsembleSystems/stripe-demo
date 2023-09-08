import { addInViewAnimationToSingleElement } from "../../utils/helpers.js";
import createTag from "../../utils/tag.js";

export default async function decorate(block) {
  addInViewAnimationToSingleElement(block, "fade-up");
  const href = block.querySelector("a").href;
  block.replaceWith(await createBlock(href));
}

async function createBlock(href) {
  const { pathname } = new URL(href);
  const resp = await fetch(pathname);
  const json = await resp.json();
  return createProductCards(json.data);
}

function createProductCards(data) {
  const div = createTag("div", { class: "productcards" });
  [...data].forEach((product) => {
    const productWrapper = createTag("a", {
      href: `/product-details?id=${product.id}`,
      class: "product-wrapper",
    });

    const img = createTag("img", { src: product.image, alt: product.name });

    const name = createTag("p", {
      class: "product-name",
      textContent: product.name,
    });

    const price = createTag("p", {
      class: "product-price",
      textContent: `$${Number(product.price).toFixed(2)}`,
    });
    productWrapper.append(img, name, price);
    div.appendChild(productWrapper);
  });

  return div;
}
