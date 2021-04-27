module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/class',
        schema: {},
        handler:  async (req, reply) => {
            return "class";
        }
    })
}