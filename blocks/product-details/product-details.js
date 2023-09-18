import { addToCart } from "../../scripts/cart.js";
import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
import { getProductById } from "../../scripts/product.js";
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
  block.replaceWith(await createBlock());
}

async function createBlock() {
  const { searchParams } = new URL(window.location.href);
  const id = searchParams.get("id");
  // can be replaced with Adobe Commerce API
  const currentProduct = await getProductById(id);
  if (currentProduct) return createProductDetailsCard(currentProduct);
  return "Invalid Product";
}

function createProductDetailsCard(currentProduct) {
  const div = createTag("div", { className: "product-details-card" });
  const productImgWrapper = createTag("div", {
    className: "product-image-wrapper",
  });
  const img = createOptimizedPicture(
    currentProduct.image,
    currentProduct.name,
    true
  );
  productImgWrapper.appendChild(img);

  const name = createTag("p", {
    className: "product-details-name",
    textContent: currentProduct.name,
  });
  const price = createTag("p", {
    className: "product-details-price",
    textContent: `$${Number(currentProduct.price).toFixed(2)}`,
  });

  const productNamePriceDiv = createTag("div", {
    className: "product-name-price-wrapper",
  });
  productNamePriceDiv.append(name, price);

  const reviewDiv = createTag("div", {
    className: "product-review-wrapper",
  });

  const review = createTag("p", {
    textContent: currentProduct.reviews,
  });
  reviewDiv.append(review, createStarReviews(Number(currentProduct.reviews)));

  const productHeaderWrapper = createTag("div", {
    className: "product-header-wrapper",
  });
  productHeaderWrapper.append(productNamePriceDiv, reviewDiv);

  const descriptionHeader = createTag("p", {
    textContent: "Description",
    className: "description-header",
  });
  const description = createTag("p", {
    className: "product-details-description",
    textContent: currentProduct.description,
  });
  const addToCartButton = createTag("button", {
    textContent: "Add To Cart",
    className: "primary add-to-cart-button",
  });

  addToCartButton.addEventListener("click", () => {
    addToCart(currentProduct.id);
    window.location.href = "/cart";
  });

  const infoSection = createTag("div", {
    className: "product-info-wrapper",
  });

  INFO_SECTION.forEach((info) => {
    const infoDiv = createTag("div", {
      className: "product-support-info",
    });
    const icon = createOptimizedPicture(info.icon, info.heading, false);
    const heading = createTag("p", {
      className: "info-heading",
      textContent: info.heading,
    });
    const content = createTag("p", {
      className: "info-content",
      textContent: info.content,
    });
    infoDiv.append(icon, heading, content);
    infoSection.appendChild(infoDiv);
  });
  const productBodyWrapper = createTag("div", {
    className: "product-body-wrapper",
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
  const starReviewDiv = createTag("div", {
    className: "star-review-container",
  });
  for (let i = 0; i < 5; i++) {
    const div = createTag("div", { className: "star-container" });
    const backgroundStar = createTag("i", {
      className: "fa fa-star grey",
    });
    const star = createTag("i", {
      className: "fa fa-star yellow",
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
