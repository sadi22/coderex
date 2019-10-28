const withCSS = require('@zeit/next-css');
const withOffline = require('next-offline');
const path = require('path');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.BUNDLE_ANALYZE === 'true',
});

const nextConfig = {
    target: 'serverless',
    // next-offline options
    workboxOpts: {
        swDest: 'static/service-worker.js',
        runtimeCaching: [
            {
                urlPattern: /^https?.*/,
                handler: 'NetworkFirst',
                options: {
                    cacheName: 'https-calls',
                    networkTimeoutSeconds: 15,
                    expiration: {
                        maxEntries: 150,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
                    },
                    cacheableResponse: {
                        statuses: [0, 200],
                    },
                },
            },
        ],
    },
    webpack(cfg, options) {
      const originalEntry = cfg.entry
      cfg.entry = async () => {
        const entries = await originalEntry()
  
        if (entries['main.js']) {
          entries['main.js'].unshift('./client/polyfills.js')
        }
  
        return entries
      }

      cfg.module.rules.push(
        {
          test: /\.(ttf|eot|woff|woff2)$/,
          loader: "url-loader?limit=10000"
        }
      )
      
      return cfg;
    }
};

module.exports = withOffline(
    withBundleAnalyzer(
      withCSS(nextConfig),
    ),
);