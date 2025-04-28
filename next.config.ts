import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: true,
  output: "standalone",
  reactStrictMode: false,
  allowedDevOrigins:['*'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = { fs: false };
    }
    return config;
  },

  /* config options here */
};

export default nextConfig;
