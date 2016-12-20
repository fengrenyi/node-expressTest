var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'node express web框架是node唯一的一个做网站的一个框架' });
});

module.exports = router;
