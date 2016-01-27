var express = require('express');
var router = express.Router();
var path = require('path');
process.env.PWD = process.cwd()

/* GET home page. */
var html_dir = '../views/';
router.get('/', function(req, res, next) {
	res.sendFile(path.join(process.env.PWD+'/index.html'));
  //res.sendFile('/Users/michaelmontero/Desktop/StoreFrontTemplate/views/index.html');
});

module.exports = router;
