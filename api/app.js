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
    admin = require('./routes/admin'),
    summary = require(__dirname + '/routes/summary.route');

    

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

// ------------ SSO ---------//
// Set the configuration settings
const credentials = {
client: {
    id: 'fmipa.skpi',
    secret: '445634566'
},
auth: {
    tokenHost: 'https://accounts.ipb.ac.id',
    tokenPath: '/OAuth/token.php',
    authorizePath: '/OAuth/authorize.php',
}
};

// Initialize the OAuth2 Library
const oauth2 = require('simple-oauth2').create(credentials);   

//---*  authorization codee flow*----//    
// Authorization oauth2 URI
const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_url: 'https://fmipa.skpi/IPBLoginCallback',
  scope: 'core_applications',
  state: '3(#0/!~'
});


app.get('/auth', (req, res) => {
  console.log('authorisasi: ', authorizationUri);
  res.redirect(authorizationUri);
});      
//abis login di SSO IPB bikin redirect urlnya ke sini
app.get('/IPBLoginCallback', (req, res) => {
  const code = req.query.code;
  console.log('kodenya', code)
  const options = {
    code,
  };

  oauth2.authorizationCode.getToken(options, (error, result) => {
    if (error) {
      console.error('Access Token Error', error.message);
      return res.json('Authentication failed');
    }

    console.log('The resulting token: ', result);
    const token = oauth2.accessToken.create(result);

    console.log('token codenya: ', token)
    return res
      .status(200)
      .json(token);
  });
});


//route apps
app.use('/', index);
app.use('/login', login);
app.use('/mahasiswa', mahasiswa);
app.use('/departemen', departemen);
app.use('/admin', admin);
app.use('/summary', summary)
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
