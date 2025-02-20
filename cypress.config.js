const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { defineConfig } = require("Cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "ntiax6",
  e2e: {
    specPattern: "cypress/e2e/features/*/*.feature",
   // stepDefinitions: "cypress/e2e/step-definitions/*/*.js",
    baseUrl: "http://www.barrybrownconstructions.co.uk/",
    setupNodeEvents,
    experimentalRunAllSpecs: true, //This allows the user to viaually see all the tests running when cypress is open, they will be given an option to Run X specs with a play icon. This will run all tests in cypress.
  },

});
