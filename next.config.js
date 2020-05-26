const withCSS = require('@zeit/next-css');
const fs = require('fs');
const { conf } = require('./conf')

const debug =
  process.env.NODE_ENV !== 'production' || process.env.ANALYZE === 'true';

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({});

module.exports = withCSS({
  cssLoaderOptions: {
    url: false,
  },
});

try {
  fs.unlinkSync('./src/pages')
  fs.unlinkSync('./public')
} catch (e) { }
// it's ./theme and not ./src/theme because it's relative to
// ./src/pages
fs.symlinkSync(`./themes/${conf.theme}/pages`, './src/pages');
fs.symlinkSync(`./src/themes/${conf.theme}/public`, './public');

module.exports = {
  webpack: (config, options) => {
    config.resolve.symlinks = false;
    return config;
  },
  assetPrefix: !debug ? '' : '',
  env: {
    'BACKEND_URL': ''
  }
};