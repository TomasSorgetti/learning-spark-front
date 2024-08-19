import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // output: "export",
  // i18n: {
  //   locales: ['default', 'en', 'de', 'fr'],
  //   defaultLocale: 'default',
  //   localeDetection: false,
  // },
  // trailingSlash: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    unoptimized: true,
    domains: ["http://localhost", "https://www.learning-spark.com"],
  },
};

export default withNextIntl(nextConfig);
