var express = require('express');
var router = express.Router();
var functions = require('../myFunctions/functions');
var moment = require('moment');
const axios = require('axios').default;


/* GET users listing. */
router.get('/', function(req, res, next){
    // console.log("startDate:", req.query.startDate)
    // console.log("endDate:", req.query.endDate)
    // console.log("amount:", req.query.amount)

    functions.process(req.query.startDate, req.query.endDate, req.query.amount)
    .then(function (resultado) {
      res.send(resultado);
    });
  

 //   .then(function (myList) {
 //     console.log(myList);
 //     res.send(functions.getNumber(myList.results));
 //   });
//    
 //    
 });

    
//    router.get('/', function(req, res, next){
  //      res.send("single test");
 //     })
 //   });
    
module.exports = router;