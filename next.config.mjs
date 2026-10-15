/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // All site images now live in /public/ as local SVGs, so no external
    // hosts are required.  images.unsplash.com is kept as a fallback
    // for any future external additions.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
