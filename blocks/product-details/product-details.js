import { addToCart } from "../../scripts/cart.js";
import { createOptimizedPicture } from "../../scripts/lib-franklin.js";
import { getProductBySku } from "../../scripts/product.js";
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
  const sku = searchParams.get("sku");
  // can be replaced with Adobe Commerce API
  const currentProduct = await getProductBySku(sku);
  if (currentProduct) {
    const div = createTag("div", { className: "product-wrapper" });
    const reviewDiv = createTag(
      "div",
      { className: "product-recent-reviews" },
      `<p class="review-header">Recent Reviews</p>
      ${
        currentProduct.reviews.items.length === 0
          ? "<p>No reviews.</p>"
          : '<div class="reviews" />'
      }`
    );
    const reviews = reviewDiv.querySelector(".reviews");

    currentProduct.reviews.items.forEach((review) => {
      const reviewDetails = createTag("div", { className: "review-details" });
      const reviewAuthorWrapper = createTag("div", {
        className: "reviewAuthorWrapper",
      });

      const reviewAuthor = createTag("div", {
        className: "review-author",
        textContent: review.nickname,
      });

      const reviewDate = createTag("div", {
        className: "review-date",
        textContent: new Date(review.created_at).toLocaleDateString("en-us", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }),
      });
      reviewAuthorWrapper.append(reviewAuthor, reviewDate);
      const reviewInfoWrapper = createTag("div", {
        className: "review-info-wrapper",
      });
      const reviewHeader = createTag("p", {
        textContent: review.summary,
        className: "review-info-header",
      });
      const reviewText = createTag("p", {
        textContent: review.text,
        className: "review-text",
      });
      reviewInfoWrapper.append(
        createStarReviews(review.average_rating / 20),
        reviewHeader,
        reviewText
      );
      reviewDetails.append(reviewAuthorWrapper, reviewInfoWrapper);
      reviews.appendChild(reviewDetails);
    });
    div.append(createProductDetailsCard(currentProduct), reviewDiv);
    return div;
  }
  return "Invalid Product";
}

function createProductDetailsCard(currentProduct) {
  const div = createTag("div", { className: "product-details-card" });
  const productImgWrapper = createTag("div", {
    className: "product-image-wrapper",
  });
  const img = createTag("img", {
    src: currentProduct.image.url,
    alt: currentProduct.image.label,
  });

  productImgWrapper.appendChild(img);

  const name = createTag("p", {
    className: "product-details-name",
    textContent: currentProduct.name,
  });
  const price = createTag("p", {
    className: "product-details-price",
    textContent: `${
      currentProduct.price_range.minimum_price.regular_price.currency
    } ${Number(
      currentProduct.price_range.minimum_price.regular_price.value
    ).toFixed(2)}`,
  });

  const productNamePriceDiv = createTag("div", {
    className: "product-name-price-wrapper",
  });
  productNamePriceDiv.append(name, price);

  const reviewDiv = createStarReviews(
    Number(currentProduct.rating_summary / 20)
  );

  const productHeaderWrapper = createTag("div", {
    className: "product-header-wrapper",
  });
  productHeaderWrapper.append(productNamePriceDiv, reviewDiv);

  const descriptionHeader = createTag("p", {
    textContent: "Description",
    className: "description-header",
  });
  const description = createTag(
    "p",
    {
      className: "product-details-description",
    },
    currentProduct.short_description.html
  );
  const addToCartButton = createTag("button", {
    textContent: "Add To Cart",
    className: "primary add-to-cart-button",
  });

  addToCartButton.addEventListener("click", async () => {
    await addToCart(currentProduct.sku);
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
  const reviewDiv = createTag("div", {
    className: "product-review-wrapper",
  });

  const reviewSummary = createTag("p", {
    textContent: review,
  });

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
  reviewDiv.append(reviewSummary, starReviewDiv);
  return reviewDiv;
}
