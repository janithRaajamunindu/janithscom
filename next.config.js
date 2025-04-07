/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "user-images.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.hashnode.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
    ],
  },
};

module.exports = nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   optimizeFonts: false,
//   images: {
//     domains: [
//       "user-images.githubusercontent.com",
//       "cdn.hashnode.com",
//       "github.com",
//     ],
//   },
//   fontLoaders: [
//     {
//       loader: "@next/font/google",
//       options: {
//         subsets: ["latin"],
//         weight: ["400", "500", "600", "700", "800"],
//       },
//     },
//   ],
// };

// module.exports = nextConfig;
