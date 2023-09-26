/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line import/no-unresolved
import { fetchGraphQl } from '@dropins/elsie/fetch-graphql.js';
import { GET_CATEGORIES_BY_URL_KEYS } from './graphql.js';
/**
 * Return list of categories
 */
export async function getCategoriesByUrlKeys(urlKeys) {
  const { data, errors } = await fetchGraphQl(GET_CATEGORIES_BY_URL_KEYS, {
    variables: {
      urlKeys,
    },
  });
  if (errors) console.error(errors);

  return data.categories.items;
}
