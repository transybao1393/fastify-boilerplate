const classController = require('./class.controller');

const routerMiddleware = require('../../middlewares');
const User = require('../../models/mongo/User');

module.exports = async function (fastify) {
    fastify.route({
        method: 'GET',
        url: '/class',
        schema: {},
        preHandler: routerMiddleware,
        handler: async (req, reply) => { 
            return classController.findClasses(req);
        }
    })
    fastify.route({
        method: 'GET',
        url: '/class/create',
        schema: {},
        preHandler: [],
        handler: async (req, reply) => { 
            return classController.createClass(req);
        }
    })

    fastify.route({
        method: 'GET',
        url: '/class/test',
        schema: {},
        preHandler: [],
        handler: async (req, reply) => { 
            try {

                // const coll1 = fastify.mongo.MONGO1.db.collection('User')
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
}