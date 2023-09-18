const PRODUCTS_URL =
  "https://main--stripe-demo--ensemblesystems.hlx.page/products.json";

/**
 * Return list of products
 */
export async function getProducts() {
  const { pathname } = new URL(PRODUCTS_URL);
  const resp = await fetch(pathname);
  const json = await resp.json();
  return json.data;
}

/**
 * @param {string} id The product id
 * Return the product based on productId
 */
export async function getProductById(id) {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}
