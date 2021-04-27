const classBusinesses = require('./class.businesses');

class ClassController {
    findClasses(req) {
        return classBusinesses.findClasses(req);
    }

    createClass(req) {
        return classBusinesses.createClass(req);
    }
}

module.exports = new ClassController();