import type { Preview } from "@storybook/react";

// Load CDN styles globally for all stories
const cdnBase = process.env.NEXT_PUBLIC_CDN_BASE || "https://cdn.sdworx.com/ignite/styling";
const cdnVersion = process.env.NEXT_PUBLIC_CDN_VERSION || "v0/0.0.1";
const systemCssUrl = `${cdnBase}/${cdnVersion}/webapp/system.css`;

// Create and inject system CSS
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = systemCssUrl;
link.onload = () => console.log("SD Worx Ignite system styles loaded in Storybook");
link.onerror = () => console.warn("Failed to load SD Worx Ignite system styles in Storybook");
document.head.appendChild(link);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      toc: true,
    },
  },
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "paintbrush",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;