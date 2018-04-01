var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
	res.render('pages/mvp/index', {title: 'Архитектура приложения'});
});

module.exports = router;
