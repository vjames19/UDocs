var express = require('express');
var router = express.Router();

module.exports = function(Parse) {
  var Department = require('../model/department.js')(Parse);
  router.post('/', function(req, res) {
    var department = new Department();
    department.save({
      name: req.body.name
    }).then(function(department) {
      res.json(department);
    });
  });

  router.use('/professors', require('./professors')(Parse));

  router.use('/courses', require('./courses')(Parse));

  return router;
};
