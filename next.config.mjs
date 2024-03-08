/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // add the images domain to the list of allowed domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
