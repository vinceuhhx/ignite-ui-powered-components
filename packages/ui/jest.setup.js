import "@testing-library/jest-dom";

// Mock CSS loading for tests
jest.mock("./src/utils/load-css", () => ({
  loadCss: jest.fn(() => Promise.resolve()),
  preloadComponentCss: jest.fn(() => Promise.resolve([])),
  setCdnConfig: jest.fn(),
  getCdnConfig: jest.fn(() => ({
    baseUrl: "https://test-cdn.sdworx.com",
    version: "v0/test",
  })),
}));