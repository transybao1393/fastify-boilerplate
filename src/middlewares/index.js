const CustomException = require('../exception');

const authenticate = () => async (request, reply, done) => {
    if (!request.headers.authorization) {
        throw new CustomException({
            statusCode: 500,
            message: "authorization"
        });
    }

    done();
};

const authenticateRole = () => async (request, reply, done) => {
    
    done();
};


module.exports = [authenticate(),authenticateRole()];
