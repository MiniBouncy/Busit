var express = require('express');
var router = express.Router();

/*
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'free4wash'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});

connection.end();
*/


/* GET home page. */
router.get('/', function(req, res, next) {
	

	req.app.connection.query('SELECT id, boxname from boxes', function(err, rows, fields) {
		
		res.render('index', { boxes: rows });

	});	
	

  
});

module.exports = router;
