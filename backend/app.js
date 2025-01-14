var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

require('dotenv').config();


var indexRouter = require('./routes/index');

var rendezvousRouter = require('./routes/rendezvous');
var dbRouter = require('./routes/db');
var anamnesesRouter = require('./routes/anamneses');
var mediasRouter = require('./routes/medias');
var temoignagesRouter = require('./routes/temoignages');
var adminPanelRouter = require('./routes/adminPanel');
var loginRouter = require('./routes/login');


const app = express();

// enable CORS for specific domains
app.use(cors());


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/rendezvous', rendezvousRouter);
app.use('/db', dbRouter);
app.use('/anamneses', anamnesesRouter);
app.use('/medias', mediasRouter);
app.use('/temoignages', temoignagesRouter);
app.use('/adminPanel', adminPanelRouter);
app.use('/login', loginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res) {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);
module.exports = app;
