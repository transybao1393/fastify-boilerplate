const fastify = require('fastify')({ logger: true });
const db = require('./db/connect');

// await fastify.register(require('fastify-express'))
// fastify.use(require('cors')())
// fastify.use(require('dns-prefetch-control')())
// fastify.use(require('frameguard')())
// fastify.use(require('hsts')())
// fastify.use(require('ienoopen')())
// fastify.use(require('x-xss-protection')())
fastify.use(require('./router'))

fastify.listen(3000, (err, address) => {
    if (err) throw err
    // Server is now listening on ${address}
  })