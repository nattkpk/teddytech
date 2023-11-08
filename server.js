var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const teddyusers = require('./routes/teddyUsers');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Pud:11112@cluster0.khe7cle.mongodb.net/Teddy-tech?retryWrites=true&w=majority')
  .then(() => console.log('Connection successfully!'))
  .catch((err) => console.error(err)); // Fixed 'err' variable here

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/teddyusers', teddyusers);
app.use(express.static('./font-end/dist/teddytech'))
app.get("*",(req, res)=>{
  res.sendFile(path.resolve(__dirname,'font-end','dist','teddytech','index.html'));
})
// catch 404 and forward to error handlers
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

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
