var express = require('express');
var router = express.Router();
var _ = require('lodash');

module.exports = function(Parse) {
  var Course = require('../model/course.js')(Parse);

  router.post('/', function(req, res) {
    Course.create(req.body).then(function(course) {
        res.json(course);
    });
  });

  return router;
};

