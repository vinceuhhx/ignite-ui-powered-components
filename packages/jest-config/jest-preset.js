const createJestConfig = (options = {}) => ({
  preset: "ts-jest",
  testEnvironment: options.testEnvironment || "node",
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}",
  ],
  moduleNameMapping: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  ...options,
});

module.exports = { createJestConfig };