const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env
const withTypescript = require('@zeit/next-typescript')

module.exports = withTypescript({
  useFileSystemPublicRoutes: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {

    config.module.rules.push(
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
      test: /\.(svg|png|jpe?g|gif)$/,
        use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000 * 1024 //10kb
          }
        }
      ]
    }
    )

    config.resolve.extensions.push('.css', '.scss', '.svg', '.png', '.jpg', '.jpeg', '.gif')
    // config.module.rules.push({
    //   test: /\.jsx?$/,
    //   use: [
    //     {
    //       loader: 'babel-loader'
    //     }
    //   ]
    // })

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