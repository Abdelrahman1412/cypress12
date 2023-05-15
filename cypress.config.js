const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '5umacu',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
