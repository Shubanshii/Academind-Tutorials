var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh?!', condition: false, anyArray: [1,2,3] });
});

//could also get rid of users file
//and add /users and /users/detail to this 
//file

module.exports = router;
