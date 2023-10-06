# Your Project's Title...
Your project's description...

## Environments
- Preview: https://main--stripe-demo--ensemblesystems.hlx.page/
- Live: https://main--stripe-demo--ensemblesystems.hlx.live/

## Installation

```sh
npm i
```

## Linting

```sh
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
