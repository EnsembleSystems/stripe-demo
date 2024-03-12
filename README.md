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
- Install Magento using Docker https://github.com/markshust/docker-magento?tab=readme-ov-file
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
- Get Stripe Client_Secret
```sh
curl https://api.stripe.com/v1/payment_intents \
-u "sk_test_51OsCTCDbocggOSnayfia5LIW6kRUbV5w2RWPOPxnLxgEnKimZlaTeDTRC9w0I6rJQCGlblixNvBo7Sjh60nnnXv000JTv9ahnw:" \
-d amount=2000 \
-d currency=usd \
-d "automatic_payment_methods[enabled]"=true
```
- Download [ExtraGraphql.zip](https://github.com/EnsembleSystems/stripe-demo/files/14576502/ExtraGraphql.zip)
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
## Deploy FURNI Site 
- Clone the project from https://github.com/EnsembleSystems/stripe-demo
- Edit /Users/h/Documents/GitHub/stripe-demo/scripts/config.js (STRIPE_PK, GRAPHQL_ENDPOINT, CLIENT_SECRET)
- Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
- Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)


## Linting
```sh
npm i
npm run lint
```

## Local development

1. Create a new repository based on the `helix-project-boilerplate` template and add a mountpoint in the `fstab.yaml`
2. Add the [helix-bot](https://github.com/apps/helix-bot) to the repository
3. Install the [Helix CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/helix-cli`
4. Start Franklin Proxy: `hlx up` (opens your browser at `http://localhost:3000`)
5. Open the `{repo}` directory in your favorite IDE and start coding :)
6. Follow https://stripe.com/docs/connectors/adobe-commerce to set up stripe connector for Adobe Commerce
7. Replace Adobe Commerce Graphql Endpoint, Stripe Public Key, Stripe Client Secret in scripts/config.js to run the project locally.
8. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
