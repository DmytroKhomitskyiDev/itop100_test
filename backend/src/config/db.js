const Pool = require("pg").Pool;
const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'my_user_db',
    password:'itop10000',
    port:'5434'
});

module.exports = pool;