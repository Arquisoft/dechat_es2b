exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    "./features/*.feature"
  ],
  capabilities: {
    "browserName": "chrome"
  },
  directConnect: true,

  framework: "custom",  // set to "custom" instead of cucumber.

  frameworkPath: require.resolve("protractor-cucumber-framework"),  // path relative to the current config file
  cucumberOpts: {
    require: ["./features/steps/*.steps.ts"], // loads step definitions
    format: "json: e2e/e2e-output.txt",               // enable console output
  },
  onPrepare() {
    require("ts-node").register({
      project: "e2e/tsconfig.e2e.json" //enable typescript
    });
  }
};
