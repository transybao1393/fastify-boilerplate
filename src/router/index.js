const fastify = require('fastify')();


fastify.use('/api/', PaymentRouter);
  
module.exports = fastify