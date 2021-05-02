// const userController = require('./user.controller');
// const User = require('../../models/mongo/User');

module.exports = async function (fastify) {
  const {User} = fastify.mongoose.models;
  fastify.route({
      method: 'GET',
      url: '/user',
      schema: {
          // querystring: {
          //   name: { type: 'string' },
          //   excitement: { type: 'integer' }
          // },
          // response: {
          //   200: {
          //     type: 'object',
          //     properties: {
          //       hello: { type: 'string' }
          //     }
          //   }
          // }
      },
      preHandler: [],
      handler: async (req, reply) => { 
          // return userController.findUsers(req);
          try {
  
              let dataReturned = await User.findOne({
                  "username": 'transybao3'
              }).select('username');

              return reply.code(200).send({
                  message: 'ok',
                  data: dataReturned
              });
          } catch (error) {
              return reply.code(500).send({
                  message: 'error',
                  data: error
              });
          }
      }
  })
  fastify.route({
    method: 'GET',
    url: '/user/count',
    schema: {
        // querystring: {
        //   name: { type: 'string' },
        //   excitement: { type: 'integer' }
        // },
        // response: {
        //   200: {
        //     type: 'object',
        //     properties: {
        //       hello: { type: 'string' }
        //     }
        //   }
        // }
    },
    preHandler: [],
    handler: async (req, reply) => { 
        // return userController.findUsers(req);
        try {

            return reply.code(200).send({
                message: 'ok',
                data: await User.count()
            });
        } catch (error) {
            return reply.code(500).send({
                message: 'error',
                data: error
            });
        }
    }
})
}