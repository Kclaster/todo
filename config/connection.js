var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
<<<<<<< HEAD
<<<<<<< HEAD
  password: 'Diddy666',
=======
  password: 'password',
>>>>>>> 61e43a84969c6ed42ba342762b18feaf0c0b2f76
=======
  password: '1213',
>>>>>>> ad7b992f731cab5218d4ef86fa17525d896fa484
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
