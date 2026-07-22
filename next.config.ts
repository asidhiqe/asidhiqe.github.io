import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Output a static HTML export directory ('out')
  output: "export",
  trailingSlash: true,
  
  // Disable server-side image optimization (unsupported in static HTML export)
  images: {
    unoptimized: true,
  },

  devIndicators: false,

  // Allow HMR WebSocket connections from local network IP for mobile testing
  allowedDevOrigins: ["localhost:3000", "192.168.1.8:3000", "192.168.1.8"]
} as any as NextConfig;

export default nextConfig;
