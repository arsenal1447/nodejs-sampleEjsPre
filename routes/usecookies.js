var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('usecookies', { title: '使用cookies示例' });
});

module.exports = router;