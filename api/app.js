var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    cors = require('cors')
    login = require('./routes/login'),
    index = require('./routes/index'),
    jwt = require('jsonwebtoken'),
    mahasiswa = require('./routes/mahasiswa'),
    departemen = require('./routes/departemen'), 
    admin = require('./routes/admin');   
    users = require('./routes/users');
    

var app = express();

/*global secret token key*/
SECRET_KEY='secret_admire';

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//check connection
// app.use(function(req, res, next){
//   require('dns').resolve('www.google.com', function(err) {
//     if (err ) {
//       console.log('ERR')
//       res.json(err)
//     } else {
//       console.log("Connected");
//       next();
//     }
//   });
// })

app.use('/', index);
app.use('/users', users);
app.use('/login', login);
app.use('/mahasiswa', mahasiswa);
app.use('/departemen', departemen);
app.use('/admin', admin);
app.use('*', function(req, res, next){
  res.json({status:false, message:'non API implemented'})
})



/*jwt middleware*/
app.use(function(req, res, next){
  var token = req.body.token || req.headers['token'];
  if (token){
    jwt.verify(token, SECRET_KEY, function(err, decode){
      if(err) 
        res.status(500).send('Invalid Token');
      else next();
    });
  }else res.json("please send me a token");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
