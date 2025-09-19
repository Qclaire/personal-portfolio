import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
    assetPrefix:
        process.env.NODE_ENV === "production" ? "/personal-portfolio" : "",
    basePath:
        process.env.NODE_ENV === "production" ? "/personal-portfolio" : "",
    distDir: "out",
};

export default nextConfig;
