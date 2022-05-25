# Seqera Labs websites components

Installation:
1. Add dependency to the `package.json` file:
`"website-components": "git+https://GITHUB_PERSONAL_TOKEN:x-oauth-basic@github.com/seqeralabs/website-components.git"`
2. Install the dependency package: `npm i website-components`
3. Extend webpack configuration in `gatsby-node.js` with the following:
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
4. Extend tailwind.config.js content array configuration with the module path: `node_modules/website-components/**/*.jsx`
