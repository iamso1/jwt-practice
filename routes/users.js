var express = require('express');
var router = express.Router();

router.route('/users')
  .post(function (req, res) {
    var user_name=req.body.user_name===undefined?'stranger':req.body.user_name;    
    res.send('Welcome '+user_name);
  })
  .get(function (req, res) {
    res.send('user get');
  });

router.route('/users/:user_name')
  .post(function (req, res) {
    res.send(
      res.json('hello '+ req.params.user_name)
    );
  });

module.exports = router;
