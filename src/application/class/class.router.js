const classController = require('./class.controller');

const routerMiddleware = require('../../middlewares');

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
}