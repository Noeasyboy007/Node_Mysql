const mysql = require('mysql2/promise');

const dotenv = require('dotenv');
dotenv.config();
const password=process.env.password;


 

const mysqlPool = mysql.createPool(
    {
        host :'localhost',
        user :'root',
        password:password,
        database:'student_db'
    }
)

module.exports =mysqlPool;