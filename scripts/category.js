import { fetchGraphQl } from '@dropins/elsie/fetch-graphql.js';
import { GET_CATEGORY_LIST_BY_URL_KEYS } from './graphql.js';
/**
 * Return list of categories
 */
export async function getCategoryListByUrlKeys(urlKeys) {
  const { data, errors } = await fetchGraphQl(GET_CATEGORY_LIST_BY_URL_KEYS, {
    variables: {
      urlKeys,
    },
  });
  if (errors) console.error(errors);

  return data.categoryList;
}
