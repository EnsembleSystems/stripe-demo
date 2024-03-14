import { GRAPHQL_ENDPOINT, STRIPE_PK, STRIPE_SK } from '../env.js';

const defaultConfigValue = {
  stripe_pk: STRIPE_PK,
  graphql_endpoint: GRAPHQL_ENDPOINT,
  stripe_sk: STRIPE_SK,
};

const getEnvironment = () => {
  const { href } = window.location;
  if (href.includes('localhost')) {
    return 'dev';
  } if (href.includes('.hlx.page')) {
    return 'preview';
  }
  return 'prod';
};

// eslint-disable-next-line import/prefer-default-export
export const getConfigValue = (key) => {
  const env = getEnvironment();
  if (env === 'dev') {
    return defaultConfigValue[key];
  }
  // for production
  return '';
};
