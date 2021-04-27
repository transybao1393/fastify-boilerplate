const fastify = require('fastify')();

async function routes (fastify, options) {
    fastify.register(require('../application/users/UserRouter'), { prefix: '/api' })
    fastify.register(require('../application/classes/ClassRouter'), { prefix: '/api' })
}
module.exports = routes;