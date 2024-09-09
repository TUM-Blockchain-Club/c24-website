/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: async () => {
    return process.env.VERCEL_DEPLOYMENT_ID || Date.now().toString();
  },
  // basePath: '/c24-website',
  // assetPrefix: '/c24-website',
};

export default nextConfig;
