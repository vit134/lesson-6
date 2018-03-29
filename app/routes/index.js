var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('pages/index/index', {title: 'Архитектура приложения'});
});

module.exports = router;
