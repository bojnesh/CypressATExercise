const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://automationexercise.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1000,
    viewportWidth: 1500,
    experimentalStudio: true
  },
});
