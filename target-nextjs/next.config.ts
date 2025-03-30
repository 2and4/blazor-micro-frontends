import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/blazor-components/:path*',
        destination: 'http://localhost:5157/:path*'
      }
    ]
  },
};

export default nextConfig;