const userBusinesses = require('./user.businesses');

class UserController {
    findUsers(req) {
        return userBusinesses.findUsers(req);
    }
}

module.exports = new UserController();