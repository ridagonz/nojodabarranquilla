import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel compiles the standard Next.js app. The Sites-only Worker and D1
  // sources are checked by the Vinext build instead.
  ...(process.env.VERCEL === "1"
    ? { typescript: { tsconfigPath: "tsconfig.vercel.json" } }
    : {}),
};

export default nextConfig;
