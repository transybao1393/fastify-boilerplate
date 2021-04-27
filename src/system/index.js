const fastify = require('fastify')();

module.exports = async function () {
    await fastify.register(require('middie'))
    fastify.use(require('cors')())
    fastify.use(require('dns-prefetch-control')())
    fastify.use(require('frameguard')())
    fastify.use(require('hsts')())
    fastify.use(require('ienoopen')())
    fastify.use(require('x-xss-protection')())

    return fastify
}