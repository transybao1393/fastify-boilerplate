const fastify = require('fastify')({ logger: true });
const db = require('./db/connect');
const system = require('./system');
const router = require('./router');

fastify.register(system)
fastify.register(router)

fastify.listen(3000, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
})