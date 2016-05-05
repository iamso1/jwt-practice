var express = require('express');
var router = express.Router();

router.route('/login')
  .post(function (req, res) {
    res.send('login post');
  })
  .get(function (req, res) {
    res.send('login get');
  });


module.exports = router;
