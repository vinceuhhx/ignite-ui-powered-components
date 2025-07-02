const { createJestConfig } = require("@sdworx-ignite/jest-config");

module.exports = createJestConfig({
  displayName: "@sdworx-ignite/ui",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
});