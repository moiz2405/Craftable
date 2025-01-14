import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.pexels.com", "images.unsplash.com"], // Add the allowed image domains here
  },
  typescript: {
    ignoreBuildErrors: true, // This will ignore TypeScript errors during the build process
  },
  // Add other Next.js config options as needed
};

export default nextConfig;
