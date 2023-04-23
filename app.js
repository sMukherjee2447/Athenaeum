var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let multer = require('multer');
let upload = multer();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/usersignin');
var registerRouter = require('./routes/userssignup');
var aboutRouter = require('./routes/about');
// var libraryRouter= require('./routes/library');
var comingsoonRouter = require('./routes/commingSoon');
var exploreRouter = require('./routes/explore');
var bookRouter = require('./routes/book');
var contactRouter = require('./routes/contact');
var adminpanelRouter1 = require('./routes/adminpanel');
var faqRouter = require('./routes/FAQ');
var pdfviewerRouter = require('./routes/pdfviewer');
var categoryRouter = require('./routes/category')
var searchRouter = require('./routes/search');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(upload.array(50))

console.log("app app app")

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public/img/uploads')));
app.use(express.static(path.join(__dirname, 'public/docs/upload')));
app.use('/', indexRouter);
app.use('/user-signin', usersRouter);
app.use('/user-signup', registerRouter);
app.use('/about', aboutRouter);
// app.use('/library',libraryRouter);
app.use('/library', comingsoonRouter);
app.use('/explore', exploreRouter);
app.use('/book', bookRouter);
app.use('/explore/book', bookRouter);
app.use('/contact', contactRouter);
app.use('/admin', adminpanelRouter1);
app.use('/FAQ', faqRouter);
app.use('/pdfviewer', pdfviewerRouter);
app.use('/category', categoryRouter);
app.use('/book_search', searchRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
