import { addInViewAnimationToSingleElement } from "../../utils/helpers.js";

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
  const div = document.createElement("div");
  div.className = "productcards";
  [...data].forEach((product) => {
    const productWrapper = document.createElement("a");
    productWrapper.href = "/product-details";
    productWrapper.className = "product-wrapper";
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;

    const name = document.createElement("p");
    name.className = "product-name";
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = "$" + Number(product.price).toFixed(2);

    productWrapper.appendChild(img);
    productWrapper.appendChild(name);
    productWrapper.appendChild(price);
    div.appendChild(productWrapper);
  });

  return div;
}
