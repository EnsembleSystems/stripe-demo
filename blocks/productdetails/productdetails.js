import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
import { addInViewAnimationToSingleElement } from "../../utils/helpers.js";
import createTag from "../../utils/tag.js";

const INFO_SECTION = [
  {
    icon: "../../icons/global.svg",
    heading: "Global support",
    content: "Buy with confidence",
  },
  {
    icon: "../../icons/money.svg",
    heading: "Easy returns",
    content: "No hassle refunds",
  },
];
export default async function decorate(block) {
  addInViewAnimationToSingleElement(block, "fade-up");
  const href = block.querySelector("a").href;
  block.replaceWith(await createBlock(href));
}

async function createBlock(href) {
  const { pathname } = new URL(href);
  const resp = await fetch(pathname);
  const json = await resp.json();
  const { searchParams } = new URL(window.location.href);
  const id = searchParams.get("id");
  //can be replaced with Adobe Commerce API
  const currentProduct = json.data.filter((d) => d.id === id)[0];
  if (currentProduct) return createProductDetailsCard(currentProduct);
  else return "Invalid Product";
}

function createProductDetailsCard(currentProduct) {
  const div = createTag("div", { class: "product-details-card" });
  const productImgWrapper = createTag("div", {
    class: "product-image-wrapper",
  });
  const img = createOptimizedPicture(
    currentProduct.image,
    currentProduct.name,
    true
  );
  productImgWrapper.appendChild(img);

  const name = createTag("p", {
    class: "product-details-name",
    textContent: currentProduct.name,
  });
  const price = createTag("p", {
    class: "product-details-price",
    textContent: `$${Number(currentProduct.price).toFixed(2)}`,
  });

  const productNamePriceDiv = createTag("div", {
    class: "product-name-price-wrapper",
  });
  productNamePriceDiv.append(name, price);

  const reviewDiv = createTag("div", {
    class: "product-review-wrapper",
  });

  const review = createTag("p", {
    textContent: currentProduct.reviews,
  });
  reviewDiv.append(review, createStarReviews(Number(currentProduct.reviews)));

  const productHeaderWrapper = createTag("div", {
    class: "product-header-wrapper",
  });
  productHeaderWrapper.append(productNamePriceDiv, reviewDiv);

  const descriptionHeader = createTag("p", {
    textContent: "Description",
    class: "description-header",
  });
  const description = createTag("p", {
    class: "product-details-description",
    textContent: currentProduct.description,
  });
  const addToCartButton = createTag("button", {
    textContent: "Add To Cart",
    class: "primary add-to-cart-button",
  });

  const infoSection = createTag("div", {
    class: "product-info-wrapper",
  });

  INFO_SECTION.forEach((info) => {
    const infoDiv = createTag("div", {
      class: "product-support-info",
    });
    const icon = createOptimizedPicture(info.icon, info.heading, false);
    const heading = createTag("p", {
      class: "info-heading",
      textContent: info.heading,
    });
    const content = createTag("p", {
      class: "info-content",
      textContent: info.content,
    });
    infoDiv.append(icon, heading, content);
    infoSection.appendChild(infoDiv);
  });
  const productBodyWrapper = createTag("div", {
    class: "product-body-wrapper",
  });
  productBodyWrapper.append(
    descriptionHeader,
    description,
    addToCartButton,
    infoSection
  );

  div.append(productHeaderWrapper, productImgWrapper, productBodyWrapper);

  return div;
}

function createStarReviews(review) {
  const starReviewDiv = createTag("div", { class: "star-review-container" });
  for (let i = 0; i < 5; i++) {
    const div = createTag("div", { class: "star-container" });
    const backgroundStar = createTag("i", {
      class: "fa fa-star grey",
    });
    const star = createTag("i", {
      class: "fa fa-star yellow",
    });

    if (review <= 1) {
      star.style.width = `${review * 100}%`;
    }
    if (review < 0) {
      star.style.width = 0;
    }
    review--;

    div.append(backgroundStar, star);
    starReviewDiv.appendChild(div);
  }
  return starReviewDiv;
}
