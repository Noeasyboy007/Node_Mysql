const mysql = require('mysql2/promise')

const mysqlPool = mysql.createPool(
    {
        host :'localhost',
        user :'root',
        password:'aritra007bera',
        database:'student_db'
    }
)

module.exports =mysqlPool;