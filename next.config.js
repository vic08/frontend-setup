const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  useFileSystemPublicRoutes: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  }
})