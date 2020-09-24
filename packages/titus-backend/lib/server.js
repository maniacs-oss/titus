'use strict'

const path = require('path')

const autoLoad = require('fastify-autoload')
const cors = require('fastify-cors')
const fp = require('fastify-plugin')

async function plugin(server, config) {
  server
    .register(cors, config.cors)
    .register(require('fastify-swagger'), require('./config/swagger'))
    .register(require('fastify-jwt'), { secret: config.jwt.secret })
    .register(autoLoad, {
      dir: path.join(__dirname, 'plugins'),
      options: config
    })
    .register(autoLoad, {
      dir: path.join(__dirname, 'routes'),
      options: config
    })
}

module.exports = fp(plugin)
