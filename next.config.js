module.exports = {
  useFileSystemPublicRoutes: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config
    // console.log(config)
    // Important: return the modified config
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ['babel-loader', 'ts-loader'],
      exclude: /node_modules/
    })
    return config
  },
  webpackDevMiddleware: config => {
    // Perform customizations to webpack dev middleware config

    // Important: return the modified config
    return config
  }
}