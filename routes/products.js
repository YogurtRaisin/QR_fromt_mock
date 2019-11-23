var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('select pay page');
});

router.get('/sample', function(req, res, next) {
  res.render('pay', { title: 'sample_pay', product_name: 'sample' });
});

module.exports = router;
