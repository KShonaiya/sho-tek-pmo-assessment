/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CLAUDE_API_KEY: process.env.CLAUDE_API_KEY
  }
}

module.exports = nextConfig
