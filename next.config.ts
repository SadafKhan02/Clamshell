import type { NextConfig } from "next";

const legacyPoleRedirects = [
  ...Array.from({ length: 12 }, (_, index) => ({
    source: `/product/rail-poles-${String(index + 1).padStart(2, "0")}`,
    destination: "/product/category/rail-poles",
    permanent: true,
  })),
  ...[
    "pscc-pole-8m-configurations",
    "pscc-pole-9m-configurations",
    "pscc-pole-9-5m-configurations",
    "pscc-pole-11m-configurations",
    "pscc-pole-13m-configurations",
    "pscc-pole-9m-200kg",
    "pscc-pole-9-5m-300kg",
    "pscc-pole-9-5m-400kg",
    "pscc-pole-11m-350kg",
    "pscc-pole-11m-400kg",
    "pscc-pole-13m-400kg",
    "pscc-pole-13m-500kg",
    "pscc-pole-custom-requirement-a",
    "pscc-pole-custom-requirement-b",
  ].map((slug) => ({
    source: `/product/${slug}`,
    destination: "/product/category/pscc-poles",
    permanent: true,
  })),
];

const nextConfig: NextConfig = {
  async redirects() {
    return legacyPoleRedirects;
  },
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
