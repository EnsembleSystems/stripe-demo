import { addToCart } from '../../scripts/cart.js';
import { getProductBySku } from '../../scripts/product.js';
import createTag from '../../utils/tag.js';
import { fetchSvg } from '../../utils/helpers.js';

const INFO_SECTION = [
  {
    icon: await fetchSvg('global'),
    heading: 'Global support',
    content: 'Buy with confidence',
  },
  {
    icon: await fetchSvg('money'),
    heading: 'Easy returns',
    content: 'No hassle refunds',
  },
];

function createStarReviews(review) {
  let noReview = review;
  const reviewDiv = createTag('div', {
    className: 'product-review-wrapper',
  });

  const reviewSummary = createTag('p', {
    textContent: review,
  });

  const starReviewDiv = createTag('div', {
    className: 'star-review-container',
  });
  for (let i = 0; i < 5; i += 1) {
    const div = createTag('div', { className: 'star-container' });
    const backgroundStar = createTag('i', {
      className: 'fa fa-star grey',
    });
    const star = createTag('i', {
      className: 'fa fa-star yellow',
    });

    if (noReview <= 1) {
      star.style.width = `${noReview * 100}%`;
    }
    if (noReview < 0) {
      star.style.width = 0;
    }
    noReview -= 1;

    div.append(backgroundStar, star);
    starReviewDiv.appendChild(div);
  }
  reviewDiv.append(reviewSummary, starReviewDiv);
  return reviewDiv;
}

function createProductDetailsCard(currentProduct) {
  const div = createTag('div', { className: 'product-details-card' });
  const productImgWrapper = createTag('div', {
    className: 'product-image-wrapper',
  });

  productImgWrapper.innerHTML = `<img src='${currentProduct.image.url}' alt='${currentProduct.image.label}' />`;

  const name = createTag('p', {
    className: 'product-details-name',
    textContent: currentProduct.name,
  });
  const price = createTag('p', {
    className: 'product-details-price',
    textContent: `${
      currentProduct.price_range.minimum_price.regular_price.currency
    } ${Number(
      currentProduct.price_range.minimum_price.regular_price.value,
    ).toFixed(2)}`,
  });

  const productNamePriceDiv = createTag('div', {
    className: 'product-name-price-wrapper',
  });
  productNamePriceDiv.append(name, price);

  const reviewDiv = createStarReviews(
    Number(currentProduct.rating_summary / 20),
  );

  const productHeaderWrapper = createTag('div', {
    className: 'product-header-wrapper',
  });
  productHeaderWrapper.append(productNamePriceDiv, reviewDiv);

  const descriptionHeader = createTag('p', {
    textContent: 'Description',
    className: 'description-header',
  });
  const description = createTag(
    'p',
    {
      className: 'product-details-description',
    },
    currentProduct.short_description.html,
  );
  const addToCartButton = createTag('button', {
    textContent: 'Add To Cart',
    className: 'primary add-to-cart-button',
  });

  addToCartButton.addEventListener('click', async () => {
    await addToCart(currentProduct.sku);
    window.location.href = '/cart';
  });

  const infoSection = createTag('div', {
    className: 'product-info-wrapper',
  });

  INFO_SECTION.forEach(async (info) => {
    const infoDiv = createTag('div', {
      className: 'product-support-info',
    });

    infoDiv.innerHTML = `${info.icon}
    <p class='info-heading'>${info.heading}</p>
    <p class='info-content'>${info.content}</p>`;
    infoSection.appendChild(infoDiv);
  });
  const productBodyWrapper = createTag('div', {
    className: 'product-body-wrapper',
  });
  productBodyWrapper.append(
    descriptionHeader,
    description,
    addToCartButton,
    infoSection,
  );

  div.append(productHeaderWrapper, productImgWrapper, productBodyWrapper);
  return div;
}

async function createBlock() {
  const { searchParams } = new URL(window.location.href);
  const sku = searchParams.get('sku');
  // can be replaced with Adobe Commerce API
  const currentProduct = await getProductBySku(sku);
  if (currentProduct) {
    const div = createTag('div', { className: 'product-wrapper' });
    const reviewDiv = createTag(
      'div',
      { className: 'product-recent-reviews' },
      `<p class="review-header">Recent Reviews</p>
      ${
  currentProduct.reviews.items.length === 0
    ? '<p>No reviews.</p>'
    : '<div class="reviews" />'
}`,
    );
    const reviews = reviewDiv.querySelector('.reviews');

    currentProduct.reviews.items.forEach((review) => {
      const reviewDetails = createTag('div', { className: 'review-details' });
      const reviewAuthorWrapper = createTag('div', {
        className: 'review-author-wrapper',
      });

      const reviewAuthor = createTag('div', {
        className: 'review-author',
        textContent: review.nickname,
      });

      const reviewDate = createTag('div', {
        className: 'review-date',
        textContent: new Date(review.created_at).toLocaleDateString('en-us', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }),
      });
      reviewAuthorWrapper.append(reviewAuthor, reviewDate);
      const reviewInfoWrapper = createTag('div', {
        className: 'review-info-wrapper',
      });
      const reviewHeader = createTag('p', {
        textContent: review.summary,
        className: 'review-info-header',
      });
      const reviewText = createTag('p', {
        textContent: review.text,
        className: 'review-text',
      });
      reviewInfoWrapper.append(
        createStarReviews(review.average_rating / 20),
        reviewHeader,
        reviewText,
      );
      reviewDetails.append(reviewAuthorWrapper, reviewInfoWrapper);
      reviews.appendChild(reviewDetails);
    });
    div.append(createProductDetailsCard(currentProduct), reviewDiv);
    return div;
  }
  return 'Invalid Product';
}

export default async function decorate(block) {
  block.replaceWith(await createBlock());
}
