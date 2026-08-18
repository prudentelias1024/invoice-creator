import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'uutgahcujgkdyqnhmkww.supabase.co', // Replace with your image host domain
        port: '',
        pathname: '/**',
      },
    ],
    // domains: ["uutgahcujgkdyqnhmkww.supabase.co"]
  },
 
};

export default nextConfig;
