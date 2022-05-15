var express = require('express');
var router = express.Router();
var functions = require('../myFunctions/functions2');
var moment = require('moment');
const axios = require('axios').default;


router.get('/', function (req, res, next) {


  functions.handler({
    startDate: req.query.startDate,
    endDate: req.query.endDate,
    amount: req.query.amount
  })
    .then((response) => res.send(response))
    .catch((error) => res.send(error.message));
});

module.exports = router;