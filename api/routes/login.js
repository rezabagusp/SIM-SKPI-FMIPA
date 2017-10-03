var express = require('express'),
	auth = require('../controller/authentication.controller'),
    router = express.Router();
//routing buat login
router.post('/masuk', function(req, res, next){
    auth.login(req.body, res);
});

router.post('/auth2', function(req, res, next){
    auth.auth2(req.body, res);
});

router.get('/ceka', function(req, res, next){ // request yang balikin file anglar 
    res.sendfile(__dirname + '/../front-end/src/index.html');    
});

router.post('/cobacoba', (req,res,next) => {
    auth.Step2Oauth2(req, res)
})
router.post('/coba', (req,res,next) => {
    auth.isi(req,res)
})

module.exports = router;
