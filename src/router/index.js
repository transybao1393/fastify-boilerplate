async function routes (fastify) {
    const v1 = '/api';
    fastify.register(require('../application/user/user.router'), { prefix: v1 })
    fastify.register(require('../application/class/class.router'), { prefix: v1 })
}
module.exports = routes;