/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // For Cloudflare Pages
  images: {
    unoptimized: true,
    domains: ['r2.cloudflarestorage.com'],
  },
  reactStrictMode: true,
  experimental: {
    outputFileTracingExcludes: {
      '*': [
        'workers/**/*',
      ],
    },
  },
};

module.exports = nextConfig;
