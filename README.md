# Seqera Labs websites components

Installation:
- Add dependency to the `package.json` file:
`"website-components": "git+https://GITHUB_PERSONAL_TOKEN:x-oauth-basic@github.com/seqeralabs/website-components.git"`
- Install the dependency package: `npm i website-components`
- Extend webpack configuration in `gatsby-node.js` with the following:
```
exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.jsx$/,
          use: [loaders.js()],
        },
      ],
    },
  });
};
```

This library includes such icon components:
- BulletIcon
- CheckIcon

This library includes such common components:
- Reveal
- RevealOnScroll
- ScrollSnap
