var Pool = require('pg-pool')

function connection() {
    var client = new Pool({
        database: 'bluefin',
        user: 'sbs',
        password: 'CpZrKPUuQZYzVHTchPkQ',
        port: 5432,
        max: 20, // set pool max size to 20
        idleTimeoutMillis: 1000, // close idle clients after 1 second
        connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
        maxUses: 7500, // close (and replace) a connection after it has been used 7500 times (see below for discussion)
    })
    
    return client.connect().then(db=>{
        console.log("connect db success");
    }).catch(err=> {
        console.log("connect db fail", err);
    });
}

module.exports = connection();