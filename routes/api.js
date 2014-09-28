var express = require('express');
var router = express.Router();

module.exports = function(Parse) {
  var documents = require('./documents')(Parse);
  var search = require('./search')(Parse);
  var departments = require('./departments')(Parse);

  router.use('/documents', documents);
  router.use('/search', search);
  router.use('/departments', departments);

  return router;
};

