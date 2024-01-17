const STRIPE_PK = 'pk_test_51Nrs0ML1DV9f5cSo8SGP5fqOt9ypRLqBSKBv4rfbRPOGezL5t5sUMV7mHGlRdd9455BXOwoBngtEWo35EEgc7UHD00Ajy9FWgK';
const GRAPHQL_ENDPOINT = 'http://localhost/graphql';
const CLIENT_SECRET = 'pi_3NsZkUL1DV9f5cSo0t4biUBY_secret_hbaemymPGMHsuf8oxqMYthy2p';

const defaultConfigValue = {
  stripe_pk: STRIPE_PK,
  graphql_endpoint: GRAPHQL_ENDPOINT,
  client_secret: CLIENT_SECRET,
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
