var express = require('express'),
	auth = require('../controller/authentication.controller'),
    router = express.Router();
//routing buat login
router.post('/masuk', function(req, res, next){
    auth.login(req.body, res);
});

router.get('/auth2', function(req, res, next){
    auth.auth2(req.body, res);
});


module.exports = router;
