var express = require('express');
var router = express.Router();

router.route('/users')
  .post(function (req,res) {
    res.send('user post');
  })
  .get(function(req,res){
    res.send('user get');
  });


module.exports = router;
