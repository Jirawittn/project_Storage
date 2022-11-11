var express = require('express');
var router = express.Router();
const Manages = require('../models/manages')

/* GET home page. */
router.get('/', function(req, res, next) {
  Manages.getAllProducts(function(err,manages){
    if(err) throw err
    res.render('index', { manages:manages });
  })

});

module.exports = router;
