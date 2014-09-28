var express = require('express');
var router = express.Router();
var Preview = require('filepreviews');


module.exports = function(Parse) {
  var Document = require('../model/document.js')(Parse);

  var createDocument = function(req, res) {
    var document = req.body;
    console.log('' + document.link);
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

  router.post('/', createDocument);

  return router;
};
