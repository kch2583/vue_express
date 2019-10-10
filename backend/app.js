var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var history = require('connect-history-api-fallback');
var morgan = require('morgan');
var cors = require('cors');

// var db = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ProductsRouter = require('./routes/Products');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// use middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

// app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));

// Mongodb

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://chanhee:kimchan8855@cluster0-1ay2j.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});



// route

app.use('/api/Products', ProductsRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(history());

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
