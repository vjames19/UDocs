var express = require('express');
var router = express.Router();
var _ = require('lodash');

module.exports = function(Parse) {
  var University = require('../model/university.js')(Parse);

  router.post('/', function(req, res) {
    University.create(req.body).then(function(university) {
        res.json(university);
    });
  });

  router.get('/:universityId', function(req, res) {
    University.get(req.params.universityId).then(function(university) {
      res.json(university.asJson());
    }, function(err) {
      res.status(500).json(err);
    });
  });

  router.use('/departments', require('./departments')(Parse));

  return router;
};

