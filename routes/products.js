const express = require('express');
const router = express.Router();

// controllerが使うべき
const rp = require('request-promise');
// ここまで

// 動的生成するべきだけどとりあえず配列
const products = ['sample', 'hoge', 'fuga'];

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.render('products', { title: 'sample_pay', products: products});
});

router.get('/:productName', (req, res, next) => {
  // controllerがすべき処理
  let apiRes, isPayCode, payErr;
  (async () => {
    try{
      apiRes = await rp('http://localhost:5000/api');
      isPayCode = true;
      payErr = null;
      console.log(apiRes);
      res.render('pay', { title: 'pay', productName: req.params.productName, payCode: apiRes.payCode, isPayCode: isPayCode, payErr:payErr});
    } catch(err) {
      apiRes = null;
      isPayCode = false;
      payErr = err.message;
      console.error(err);
      res.render('pay', { title: 'pay', productName: req.params.productName, payCode: apiRes.payCode, isPayCode: isPayCode, payErr:payErr});
    }
  })().catch(next);
  // ここまで

});

module.exports = router;
