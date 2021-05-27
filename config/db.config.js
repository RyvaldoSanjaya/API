const mysql = require('mysql');

//mysql conn
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'node_mysql_crud_db'
});

conn.connect(function(error){
    if(error) throw error;
    console.log('Database connected Successfully');
})

module.exports=conn;