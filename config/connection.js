var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
<<<<<<< HEAD
  password: 'Elijah@2018',
=======
  password: '1213',
>>>>>>> 42270ac6322a462ec70ae1cd5410963becdb0543
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
