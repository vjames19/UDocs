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
    }, function(err) {
      res.json(500, err);
    });
  });

  router.get('/', function(req, res) {
    Department.getAll().then(function(departments) {
      res.json(departments.json());
    }, function(err) {
      res.json(500, err);
    });
  });

  return router;
};
