const fastify = require('fastify')();

fastify.get('/', { logLevel: 'warn' }, (request, reply) => {
    reply.send({ hello: 'world' })
})

module.exports = fastify