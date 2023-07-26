var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bdyparser = require('body-parser');
var cors = require('cors');



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');
var salasRouter = require('./routes/salas');
var funcsRouter = require('./routes/funcionarios');
var clitsRouter = require('./routes/clientes');
var rsvsRouter = require('./routes/reservas');
var shipsRouter = require('./routes/gunships');

var app = express();

require('dotenv').config({path: __dirname + '/.env' })

app.use(cors());
app.options('*', cors());
app.use(bdyparser.json());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set("models", "./models");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/index', indexRouter);
app.use('/api', apiRouter);
app.use('/att', indexRouter);
app.use('/attc', indexRouter);
app.use('/atts', indexRouter);
app.use('/clientes', indexRouter);
app.use('/funcionarios', indexRouter);
app.use('/salas', indexRouter);
app.use('/gunships', indexRouter);
app.use('/delclientes/delete/:id', indexRouter);
app.use('/delfuncionarios/delete/:id', indexRouter);
app.use('/delsalas/delete/:id', indexRouter);
app.use('/edtfuncionarios/:id', indexRouter);
app.use('/insedtfuncionarios/:id', indexRouter);
app.use('/edtclientes/:id', indexRouter);
app.use('/insedtclientes/:id', indexRouter);
app.use('/edtsalas/:id', indexRouter);
app.use('/insedtsalas/:id', indexRouter);
app.use('/apisalas', salasRouter);
app.use('/apifuncs', funcsRouter);
app.use('/apiclits', clitsRouter);
app.use('/apirsvs', rsvsRouter);
app.use('/apiships', shipsRouter);


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
