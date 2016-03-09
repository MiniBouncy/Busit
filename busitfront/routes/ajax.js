var express = require('express');
var router = express.Router();




router.route('/free')

.get(function(req, res, next) {  
	
	
	var box = req.query.box;
	
	
	req.app.connection.query('SELECT count(id) as count FROM `cars` where datefrom <= NOW() and dateto >= NOW() and boxid = '+box, function(err, rows, fields) {

	  if (err != null) throw err;
	  if (rows[0].count > 0) res.render('box-full', { title: 'Express' });
	  else res.render('box-empty', { title: 'Express' });
	});
	
	
	
	
})

router.route('/availibletime')

.get(function(req, res, next) {  
	res.send('{"firstName":"aa", "lastName":"bb"}');
})

/*




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

*/

module.exports = router;
