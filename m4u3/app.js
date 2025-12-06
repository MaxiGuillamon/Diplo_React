var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var  presiosRouter = require('./routes/precios'); // ruta precios
var DestacadosRouter = require('./routes/Destacados'); // ruta Destacados
var usersRouter = require('./routes/users'); // ruta users


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/precios", presiosRouter); // uso de la ruta precios   
app.use("/Destacados", DestacadosRouter); // uso de la ruta Destacados
app.use("/users", usersRouter); // uso de la ruta users



// Ruta de prueba
app.get("/prueba", function(req, res, next) {
  res.send("Hola, soy la pagina de prueba");
});

/* Ruta de Destacados */
app.get("/Destacados", function(req, res, next) {
  res.send("Hola, soy la pagina de Destacados");
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
