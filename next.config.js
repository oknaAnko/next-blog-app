/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // https://github.com/vercel/next.js/discussions/42994
  experimental: {
    newNextLinkBehavior: false
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp'
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin'
          }
        ]
      }
    ];
  }
};

// module.exports = nextConfig;

module.exports = (phase, { nextConfig }) => {
  return {
    ...nextConfig,

    webpack: (config) => {
      config.resolve = {
        ...config.resolve,
        fallback: {
          fs: false,
          net: false,
          path: false,
          os: false,
          child_process: false,
          tls: false
        }
      };
      return config;
    }
  };
};
