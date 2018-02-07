const nextRoutes = require('next-routes')()

nextRoutes
  .add('about-detail', '/about/:slug')

module.exports = nextRoutes
