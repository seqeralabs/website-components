module.exports = {
  "stories": [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../components/**/*.stories.@(js|jsx|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\b.*\.jsx?$/,
      loader: 'babel-loader',
      options: { presets: ['@babel/env','@babel/preset-react'] },
    });

    return config
  },
}