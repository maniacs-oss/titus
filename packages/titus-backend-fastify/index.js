'use strict'

const startServer = require('./lib/server')
const config = require('./lib/config')

const main = async () => {
  process.on('unhandledRejection', err => {
    console.error(err)
    process.exit(1)
  })

  const server = require('fastify')(config.fastifyInit)
  server.register(startServer, config)

  const address = await server.listen(config.fastify)
  server.log.info(`Server running at: ${address}`)

  process.on('SIGINT', () => {
    server.stop({ timeout: 10e3 }).then(err => {
      process.exit(err ? 1 : 0)
    })
  })
}

main()