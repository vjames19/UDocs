var express = require('express');
var router = express.Router();

module.exports = function(Parse) {
  var Professor = require('../model/professor.js')(Parse);
  router.post('/', function(req, res) {
    var professor = new Professor();
    professor.save({
      name: req.body.name
    }).then(function(professor) {
      res.json(professor);
    });
  });

  return router;
};
