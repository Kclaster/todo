var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var connection = require('./config/connection');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//get the user with given id
app.get('/user/:id', function(req, res) {
  console.log(req.params);
  connection.query(
    'SELECT * FROM users_list WHERE user = ' + req.params.id,
    function(req, results) {
      if (results) {
        res.json(results);
      }
    }
  );
});

//get the todos joined with userid
app.get('/todos/:id', function(req, res) {
  console.log(req.params.id);
  connection.query(
    ` SELECT * FROM todos WHERE userId = "${req.params.id}"`,
    function(req, results) {
      if (results) {
        console.log(results);
        return res.send(results);
      }
    }
  );
});

//post a new user
app.post('/user', function(req, res) {
  connection.query(
    `INSERT INTO users_list(user, email, first_name, last_name)VALUE("${
      req.body.id
    }","${req.body.email}", "${req.body.first_name}", "${req.body.last_name}")`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('post made');
      }
    }
  );
});

//post new toDo
app.post('/todos', function(req, res) {
  let startingBid = parseInt(req.body.startingBid);
  connection.query(
    `INSERT INTO todos(userId, description, title, startingBid, minStar)VALUE("${
      req.body.userid
    }","${req.body.description}", "${req.body.title}", "${startingBid}", "${
      req.body.minStar
    }")`,
    function(error, results, fields) {
      if (error) throw error;
      else {
        console.log('post made');
      }
    }
  );
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
