import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubPages ? '/artapartners' : undefined,
  assetPrefix: isGitHubPages ? '/artapartners/' : undefined,
  images: { unoptimized: true },
};

export default nextConfig;
