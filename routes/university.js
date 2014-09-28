var express = require('express');
var router = express.Router();
var _ = require('lodash');

module.exports = function(Parse) {
  var University = require('../model/university.js')(Parse);
  var Department = require('../model/department.js')(Parse);

  router.post('/', function(req, res) {
    var university = new University();
    Parse.Promise.when(Department.createAll(req.body.departments)).then(function(departments) {
      university.save({
        name: req.body.name,
        state: req.body.state,
        departments: departments
      }).then(function(university) {
        res.json(university);
      });
    });

  });

  router.use('/departments', require('./departments')(Parse));

  return router;
};

