var express = require('express');
var router = express.Router();
var Preview = require('filepreviews');
var _ = require('lodash');


module.exports = function(Parse) {
  var Document = require('../model/document.js')(Parse);
  var Department = require('../model/department.js')(Parse);

  var createDocument = function(req, res) {
    var document = req.body;
    console.log('the doc', document);
    var filePreview = new Preview({debug: true, apiKey: 'Kw7pm9uGJMSxCYt9uhWpGsrYlQowIn'});
    filePreview.generate(document.link, {}, function(err, result) {
      if (err) {
        console.log(err);
        res.status(500).json(err);
      } else {

        document.filePreview = result;
        Document.create(document).then(function(document) {
          res.json(document);
        });
      }
    });
  };

  var query = function(req, res) {
    var documentQuery = new Parse.Query(Document).include('department');
    if(req.query.departmentId) {
      documentQuery.equalTo('department', Department.pointer(req.query.departmentId))
    }
    documentQuery.descending('createdAt');

    documentQuery.find().then(function(documents) {
      res.json(_.map(documents, function(document) {
        return document.asJson();
      }));
    }, function(err) {
      res.json(500, err);
    });
  };

  router.post('/', createDocument);
  router.get('/', query);

  return router;
};
