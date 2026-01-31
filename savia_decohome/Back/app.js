var createError = require('http-errors'); 
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('dotenv').config();
var session = require('express-session');
var fileUpload = require('express-fileupload');

// ROUTERS
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/admin/login');
var adminRouter = require('./routes/admin/novedades');
var apiRouter = require('./routes/api'); 

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// API
app.use('/api', cors(), apiRouter); 

// SESSION
app.use(session({
  secret: 'clave_secreta',
  cookie: { maxAge: null },
  resave: false,
  saveUninitialized: true
}));

// MIDDLEWARE DE SEGURIDAD
const secured = async (req, res, next) => {
  try {
    if (req.session.id_usuario) {
      next();
    } else {
      res.redirect('/admin/login');
    }
  } catch (error) {
    console.log(error);
  }
};

// FILE UPLOAD
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

// ROUTES
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/admin/login', loginRouter); 
app.use('/admin/novedades', secured, adminRouter);   

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
