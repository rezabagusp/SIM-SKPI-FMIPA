var express = require('express'),
	auth = require('../controller/authentication.controller'),
    router = express.Router();
//routing buat login
router.post('/masuk', function(req, res, next){
    console.log('masuk  route');
    auth.login(req.body, res);
});

module.exports = router;
