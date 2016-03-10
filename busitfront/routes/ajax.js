var express = require('express');
var router = express.Router();




router.route('/free')

.get(function(req, res, next) {  
	
	
	var box = req.query.box;
	
	
	req.app.connection.query('SELECT count(id) as count, (SELECT boxname FROM boxes where id = '+box+') as boxname, (SELECT amount FROM boxes where id = '+box+') as amount, (SELECT round(sum(TIMESTAMPDIFF(SECOND, datefrom, dateto ))/count(*)) as average FROM cars where boxid = '+box+') as seconds, datefrom FROM `cars` where datefrom <= NOW() and (dateto >= NOW() or dateto = \'0000-00-00 00:00:00\') and boxid = '+box, function(err, rows, fields) {

	  if (err != null) throw err;
	  
	  if (rows[0].datefrom != null) {
		  var esttime = new Date(rows[0].datefrom.getTime()+rows[0].seconds*1000);
	  }
	  
	  if (rows[0].count > 0) res.render('box-full', { name: rows[0].boxname, amount: rows[0].amount, estfinish: esttime });
	  else res.render('box-empty', { name: rows[0].boxname });
	});
	
	
	
	
})

router.route('/availible')

.get(function(req, res, next) {
		
		
		var date = req.query.date;
		var time = req.query.time;
		var box = req.query.box; 
		
		req.app.connection.query('select 1-(select count(id) from cars where boxid = '+box+' and datefrom like \'%-%-'+date+' '+time+'%\')/((select PERIOD_DIFF(DATE_FORMAT(max(datefrom),"%Y%m"),DATE_FORMAT(min(datefrom),"%Y%m"))+1 as period from cars) * (SELECT ROUND(1/(sum(TIMESTAMPDIFF(SECOND, datefrom, dateto ))/count(*)/60/60)) as average FROM cars where boxid = '+box+')) as probability', function(err, rows, fields) {

	  if (err != null) throw err;	  
	  res.send(""+rows[0].probability);
	  
	});

	
		
		
		
})

router.route('/history')

.get(function(req, res, next) {
		
		

	res.send("test");
		
		
		
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
