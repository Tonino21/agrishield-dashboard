import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  // disabilita controllo errori lint in fase di build
  eslint: {
    ignoreDuringBuilds: true
  },
  // ...altre config
};

export default nextConfig;
