const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      visualRegressionPlugin(on, config)
      return config;
      // implement node event listeners here
    },
  },
  video: true
});
