import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  productionBrowserSourceMaps: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.devtool = "source-map";
    }
    return config;
  },
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    return [
      {
        source: "/",
        destination: "/changelog",
        permanent: true,
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: "sentry-sdks",
  project: "changelog-benchmark",

  // Suppresses source map uploading logs during build
  silent: !process.env.CI,

  // Upload a larger set of source maps for prettier stack traces (increases build time)
  widenClientFileUpload: true,

  // Hides source maps from generated client bundles
  hideSourceMaps: true,

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: process.env.NODE_ENV === "production",

  reactComponentAnnotation: {
    enabled: true,
  },

  sourcemaps: {
    disable: true,
  },

  unstable_sentryWebpackPluginOptions: {
    applicationKey: "sentry-changelog-benchmark",
  },

  automaticVercelMonitors: true,

  _experimental: {
    thirdPartyOriginStackFrames: true,
    useRunAfterProductionCompileHook: true, // enables turbopack sourcemap uploads
  },
});
