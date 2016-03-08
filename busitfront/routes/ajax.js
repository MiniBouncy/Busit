var express = require('express');
var router = express.Router();






router.get('/', function(req, res, next) {
  //res.render('ajax', { title: 'Express' });
  
  res.send('{"firstName":"index", "lastName":"aaa"}');
}),

router.route('/ajax/free').put(function(req, res, next) {
  res.send('{"firstName":"aa", "lastName":"bb"}');
}),

router.route('/availibletime').put(function(req, res, next) {
  res.send('{"firstName":"aa", "lastName":"bb"}');
}),

router.route('/history').put(function(req, res, next) {
  res.send('{"firstName":"aa", "lastName":"bb"}');
});



module.exports = router;
