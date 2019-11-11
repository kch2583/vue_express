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
var session = require('express-session');
var passport = require('passport')
var passportConfig = require('./lib/passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var jwt = require('jsonwebtoken')

// var db = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ProductsRouter = require('./routes/Products');
var adminRouter = require('./routes/admin');

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

app.use(flash());

app.set('trust proxy', 1)
app.use(session({
  key: 'sid', // 세션키
  resave: true,
  secret: 'soiejfsk92vnj28fjnks9173rn', // 비밀키
  saveUninitialized: true,
  store: new session.MemoryStore(),
  cookie: {
    maxAge: 1000 * 60 * 60, // 쿠키 유효기간 1시간
    secure: true
  }
}));



app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);

app.use(function(req, res, next) {
  res.locals.currentUser = req.session.user;
  res.locals.flashMessages = req.flash();
  next();
});




// Mongodb
mongoose.Promise = global.Promise;
const uri = "mongodb+srv://chanhee:kimchan8855@cluster0-1ay2j.mongodb.net/Product?retryWrites=true&w=majority";
mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true,  useUnifiedTopology: true}, function(err, client){
  if(err){
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  }
  console.log('Connected...');
});

// route
var authRouter = require('./routes/auth')

app.use('/api/auth', authRouter);
app.use('/api/Products', ProductsRouter);
app.use('/api/admin', adminRouter);
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
