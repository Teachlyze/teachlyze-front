import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "fast.image.delivery",
        pathname: "/**",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
