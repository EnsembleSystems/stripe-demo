import { fetchGraphQl } from "@dropins/elsie/fetch-graphql.js";
import { GET_PRODUCTS, GET_PRODUCT_DETAILS } from "./graphql.js";
/**
 * Return list of products
 */
export async function getProducts() {
  const { data, errors } = await fetchGraphQl(GET_PRODUCTS);
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
