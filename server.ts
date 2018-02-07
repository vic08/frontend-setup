const next = require('next')
const routes = require('./routes')
const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app)

// With express
const express = require('express')
app.prepare()
  .then(() => {
    const server = express()
    server.use(handler)

    const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000
    server.listen(port, (err: Error) => {
      if (err) throw err
      console.log(`> Ready on port ${port}...`)
    })
  })