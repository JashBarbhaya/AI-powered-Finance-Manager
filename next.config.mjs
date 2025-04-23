/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  webpack(config, { dev }) {
    if (dev) {
      // Remove Next.js logo in development mode
      config.plugins = config.plugins.filter(
        (plugin) => plugin.constructor.name !== 'NextJsLogoPlugin'
      );
    }
    return config;
  },
};

export default nextConfig;
