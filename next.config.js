// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
// };

// // images: {
// // basePath: '/my-website',
// //    unoptimized: true
// //  },
// //    reactStrictMode: true,

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // <<< disable Image Optimization for static export
  },
};

export default nextConfig;
