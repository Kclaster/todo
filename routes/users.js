var express = require('express');
var router = express.Router();
var connection = require('../config/connection');

/* GET users listing. */
//why isn't the route '/users'-- i think its because the app sends us to this so we are already in users...
router.get('/', function(req, res) {
  connection.query('SELECT * FROM users_list', function(req, results) {
    if (results) {
      console.log(results);
      res.json(results);
    }
  });
});

module.exports = router;
