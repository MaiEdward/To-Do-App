const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
    host: process.env.HOST,
    user: process.env.DB_USER,
    port: process.env.DBPORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

//Test database connection
pool.connect();
pool.query(`Select * from todos`, (err,res) => {
    if(!err){
        console.log(res.rows);
    }else{
        console.log(err.message);
    }
    pool.end;
})

module.exports = pool;