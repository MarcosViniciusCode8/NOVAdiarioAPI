import mysql from 'mysql2/promise';

const con = await mysql.createConnection({
    host: process.env.SQLHOST ,
    user: process.env.SQLUSER ,
    password: process.env.SQLPASSWORD ,
    database: process.env.SQLDB 
})

console.log("Conectado com o DB")

export default con;