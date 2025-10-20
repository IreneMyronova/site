const { withContentlayer } = require('next-contentlayer2');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,

  images: {
    loader: "custom",
    imageSizes: [16, 32, 48, 128, 256],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 600000,
  },

  transpilePackages: ["next-image-export-optimizer"],

  env: {
    nextImageExportOptimizer_imageFolderPath: "public/media",
    nextImageExportOptimizer_exportFolderPath: "out",
    nextImageExportOptimizer_quality: "75",
    nextImageExportOptimizer_storePicturesInWEBP: "true",
    nextImageExportOptimizer_exportFolderName: "nextImageExportOptimizer",
    nextImageExportOptimizer_generateAndUseBlurImages: "true",
    nextImageExportOptimizer_remoteImageCacheTTL: "0",
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "contentlayer/generated": "./.contentlayer/generated",
    };
    return config;
  },

};

module.exports = withContentlayer(nextConfig);
