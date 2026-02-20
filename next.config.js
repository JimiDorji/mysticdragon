/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",   // ← REQUIRED for static export
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig