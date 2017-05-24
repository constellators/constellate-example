module.exports = {
  web: {},
  plugins: {
    // eslint-disable-next-line no-unused-vars
    webpack: (defaultConfig, { project, webpack, development }) =>
      // Augment or replace the default webpack config with your own.
      defaultConfig,
  },
}
