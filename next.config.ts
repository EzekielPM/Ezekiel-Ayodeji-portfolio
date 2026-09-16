import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/v2",
        destination: "/",
        permanent: true,
      },
      {
        source: "/v2/dm-confirmed-order",
        destination: "/case-studies/dm-confirmed-order",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
