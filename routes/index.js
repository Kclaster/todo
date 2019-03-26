var express = require('express');
var router = express.Router();
import Mysql from 'mysql';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
