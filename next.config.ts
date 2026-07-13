import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output a static HTML export directory ('out')
  output: "export",
  
  // Disable server-side image optimization (unsupported in static HTML export)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
