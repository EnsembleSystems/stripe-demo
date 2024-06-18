# Adobe Commerce Stripe Demo: FURNI 
Adobe Commerce Stripe Demo: FURNI 

## Environments
- Preview: https://main--stripe-demo--ensemblesystems.hlx.page/
- Live: https://main--stripe-demo--ensemblesystems.hlx.live/

## Installation 

These are the steps to install magento locally using Docker https://github.com/markshust/docker-magento?tab=readme-ov-file
- Install Magento using Docker https://github.com/markshust/docker-magento?tab=readme-ov-file
```sh
curl -s https://raw.githubusercontent.com/markshust/docker-magento/master/lib/onelinesetup | bash -s -- magento.test 2.4.7-beta2 community
```
- Register for a Stripe Account https://stripe.com/en-ca
- Install Stripe Connector for Adobe Commerce https://docs.stripe.com/connectors/adobe-commerce/install
```sh
bin/composer require stripe/stripe-payments
bin/magento setup:upgrade
bin/magento cache:flush
bin/magento cache:clean
```
- Disable 2FA https://github.com/markshust/magento2-module-disabletwofactorauth
```sh
bin/composer require markshust/magento2-module-disabletwofactorauth
bin/magento module:enable MarkShust_DisableTwoFactorAuth
bin/magento setup:upgrade
bin/magento config:set twofactorauth/general/enable 0
```
- Add Stripe API keys to Magento>Stores>Configuration>Sales>Payment Methods https://dashboard.stripe.com/test/apikeys
- Download [ExtraGraphQL.zip](https://github.com/EnsembleSystems/stripe-demo/files/14609423/ExtraGraphQL.zip)

- Unzip ExtraGraphql.zip and add it to [Magento folder]/magento/src/app/code/magento/
```sh
bin/magento setup:install
bin/magento setup:upgrade
```
- Fix CORS issue https://medium.com/charlottes-digital-web/enabling-cors-on-a-magento-2-site-using-an-nginx-server-481c8931f8b2
```sh
bin/restart
```
- Add some categories and products using examples from https://stripe-demo-furni.onrender.com/

## Run FURNI app locally 
- Clone the project from https://github.com/EnsembleSystems/stripe-demo
- Create a file named env.js in root level and add these values in:
  ```
  export const STRIPE_PK = '';
  export const GRAPHQL_ENDPOINT = '';
  export const STRIPE_SK = '';
  ```
- Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
- Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)

## Commerce DropIn References
https://github.com/magento/commerce-dropin-references
