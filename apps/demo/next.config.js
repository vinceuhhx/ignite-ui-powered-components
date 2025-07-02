/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@sdworx-ignite/ui"],
  experimental: {
    transpilePackages: ["@sdworx-ignite/ui"],
  },
  env: {
    NEXT_PUBLIC_CDN_BASE: process.env.NEXT_PUBLIC_CDN_BASE || "https://cdn.sdworx.com/ignite/styling",
    NEXT_PUBLIC_CDN_VERSION: process.env.NEXT_PUBLIC_CDN_VERSION || "v0/0.0.1",
  },
};

module.exports = nextConfig;