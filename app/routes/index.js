var express = require('express');
var router = express.Router();

var messages = [];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });  
});

router.get('/getMessages', function(req, res, next) {
	res.json(messages);
});


function Message(text, time) {
	this.text = text;
	this.time = time;
}

router.post('/post', function(req, res, next) {
	console.log("req", req.body);
	console.log("res", res.body);

	messages.push(new Message(req.body.text, 0));

	res.redirect("/");
});





module.exports = router;


