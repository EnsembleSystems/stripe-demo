// eslint-disable-next-line import/no-unresolved
import { fetchGraphQl } from '@dropins/tools/fetch-graphql.js';
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from './graphql.js';
/**
 * Return list of products
 */
export async function getProducts(categoryId) {
  const id = Array.isArray(categoryId) ? categoryId : [categoryId];
  const { data, errors } = await fetchGraphQl(GET_PRODUCTS, {
    variables: {
      categoryId: id,
    },
  });
  if (errors) console.error(errors);

  return data.products.items;
}

/**
 * @param {string} sku The product sku
 * Return the product based on sku
 */
export async function getProductBySku(sku) {
  const { data, errors } = await fetchGraphQl(GET_PRODUCT_DETAILS, {
    variables: {
      sku,
    },
  });
  if (errors) console.error(errors);
  return data.products.items[0];
}
