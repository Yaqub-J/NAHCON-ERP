/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['placeholder.svg'],
    unoptimized: true,
  },
  transpilePackages: ['recharts'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    return config
  },
}

export default nextConfig
