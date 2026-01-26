import "@portfolio/env/web";
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
  typedRoutes: true,
  reactCompiler: true,
};

export default withNextIntl(nextConfig);
