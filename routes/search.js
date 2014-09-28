var express = require('express');
var router = express.Router();

module.exports = function(Parse) {
  var Document = require('../model/document.js')(Parse);
  router.get('/documents', function(req, res) {
    Document.search(req.query.q).then(function(documents) {
      res.json(documents)
    }, function(err) {
      res.status(500).json(err);
    });
  });

  return router;
};
