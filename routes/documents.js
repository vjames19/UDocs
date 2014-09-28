var express = require('express');
var router = express.Router();
var Preview = require('filepreviews');


module.exports = function(Parse) {
  var Document = require('../model/document.js')(Parse);

  var createDocument = function(req, res) {
    var document = req.body;
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
    var documentQuery = new Parse.Query(Document);
    if(req.query.departmentId) {
      documentQuery.equalTo('department', Department.pointer(req.query.departmentId))
    }
    documentQuery.descending('createdAt');

    documentQuery.find().then(function(documents) {
      res.json(documents);
    }, function(err) {
      res.json(500, err);
    });
  };

  router.post('/', createDocument);
  router.get('/', query);

  return router;
};
