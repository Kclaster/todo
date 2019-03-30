var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
<<<<<<< HEAD
  password: 'Elijah@2018',
=======
  password: 'password',
>>>>>>> d94c4498d09582811710153dc053a4c141529485
  database: 'users'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId + ' on port:' + 3306);
});

module.exports = connection;
