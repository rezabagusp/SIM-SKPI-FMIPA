var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.json('ampas')
  // res.render('index', { title: 'Express' });
  var string = encodeURIComponent('something that would break')
  var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtYV9tYWhhc2lzd2EiOiJSZXphIEJhZ3VzIFBlcm1hbmEiLCJuaW1fbWFoYXNpc3dhIjoiRzY0MTQwMDIzIiwibmFtYV91c2VyIjoicmV6YV9iYWd1c3AiLCJwYXNzd29yZF91c2VyIjoiMjY0YzhjMzgxYmYxNmM5ODJhNGU1OWIwZGQ0YzZmNzgwOGM1MWEwNWY2NGMzNWRiNDJjYzc4YTJhNzI4NzViYiIsImVtYWlsX3VzZXIiOiJyZXphYmFndXNwZXJtYW5hLnJicEBnbWFpbC5jb20iLCJyb2xlIjoibWFoYXNpc3dhIiwiZmtfZGVwYXJ0ZW1lbl9pZCI6NiwiY3JlYXRlZEF0IjoiMjAxNy0wOC0wMlQxMjoyOTo0OC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxNy0xMC0wM1QwNzoyMzo0OC4wMDBaIiwiaWF0IjoxNTA3MDQyOTY1fQ.6ENw6uyPOYngIQ43OrsP8ZTVV7quX0zICjIpHVG9LNI'
    res.redirect('http://localhost:4200/#/auth/sso/'+token) 
});

module.exports = router;