async function routes (fastify) {
    fastify.register(require('../application/users/UserRouter'), { prefix: '/api' })
    fastify.register(require('../application/classes/ClassRouter'), { prefix: '/api' })
}
module.exports = routes;