async function routes (fastify) {
    const v1 = '/api';
    fastify.register(require('../application/user/routers'), { prefix: v1 })
    fastify.register(require('../application/class/routers'), { prefix: v1 })
}
module.exports = routes;