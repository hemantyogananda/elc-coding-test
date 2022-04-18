const mysql = require('mysql');

const connection = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Prashant*1995*",
    database:"assignment",
    port:3306,
    multipleStatements:true
})

module.exports.connection = connection;