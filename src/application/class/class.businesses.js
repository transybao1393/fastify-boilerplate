const db = require('../../db/connect');

class ClassBusinesses {
    async findClasses() {
        return await db.Class.findAll({});
    }

    async createClass() {
        const data = {
            description: "adsdsd",
            name: "aaa"
        };
        
        return await db.Class.create(data)
    }
}



module.exports = new ClassBusinesses();