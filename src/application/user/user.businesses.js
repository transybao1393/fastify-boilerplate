const CustomException = require('../../exception');

class UserBusinesses {
    findUsers(query) {
        
        throw new CustomException({
            statusCode: 500,
            message: "error test"
        });
    }
}



module.exports = new UserBusinesses();