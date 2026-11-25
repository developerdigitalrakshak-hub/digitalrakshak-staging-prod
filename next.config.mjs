/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/mnrl-verification',
        destination: '/mnrl-check-api',
        permanent: true,
      },
      {
        source: '/reverse-geocodes',
        destination: '/reverse-geocode-api',
        permanent: true,
      },
      {
        source: '/kyc-ocr',
        destination: '/kyc-ocr-plus-api',
        permanent: true,
      },
      {
        source: '/passport-verification',
        destination: '/passport-verification-api',
        permanent: true,
      },
    ];
  },
}

export default nextConfig
